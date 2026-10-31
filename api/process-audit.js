const PHONE_PATTERN = /^[0-9+\s\-()]{7,15}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const attempts = new Map();

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function clientIp(req) {
  return clean(req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress, 64) || 'unknown';
}

function isRateLimited(ip) {
  if (attempts.size > 500) attempts.clear();
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a few minutes.' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const payload = {
    name: clean(body.name, 100),
    email: clean(body.email, 254),
    phone: clean(body.phone, 20),
    title: clean(body.title, 160),
    message: clean(body.message, 2000),
    reply_to: clean(body.reply_to, 254),
  };

  if (!payload.name || !PHONE_PATTERN.test(payload.phone) || !payload.message) {
    return res.status(400).json({ error: 'Please check the required fields.' });
  }
  if (payload.email && !EMAIL_PATTERN.test(payload.email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  if (!serviceId || !templateId || !publicKey) {
    return res.status(503).json({ error: 'The enquiry service is temporarily unavailable.' });
  }

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        ...(privateKey && { accessToken: privateKey }),
        template_params: payload,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'The request could not be delivered. Please try again.' });
  }
}
