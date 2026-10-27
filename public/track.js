// GA4 conversion events shared by every page (homepage, blog, portfolio, brochure).
// Uses one delegated click listener so links rendered later by React or the
// homepage runtime are tracked too. Requires the gtag snippet to load first.
(function () {
  function send(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params);
  }

  function linkText(a) {
    return (a.textContent || a.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 100);
  }

  document.addEventListener('click', function (e) {
    var a = e.target instanceof Element ? e.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var base = { link_url: href, link_text: linkText(a) };

    if (/^tel:/i.test(href)) {
      send('phone_click', base);
    } else if (/^mailto:/i.test(href)) {
      var subject = (href.match(/[?&]subject=([^&]*)/i) || [])[1];
      base.email_subject = subject ? decodeURIComponent(subject).slice(0, 100) : '(none)';
      send('email_click', base);
    } else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) {
      send('whatsapp_click', base);
    } else if (/macrocoats-product-portfolio\.html/i.test(href)) {
      send('view_portfolio', base);
    } else if (/(macrocoats-corporate-brochure|\/brochure)\.html/i.test(href)) {
      send('view_brochure', base);
    }
  }, true);

  // Printing / saving the portfolio or brochure as PDF signals strong intent.
  window.addEventListener('beforeprint', function () {
    send('print_document', { document_title: document.title });
  });
})();
