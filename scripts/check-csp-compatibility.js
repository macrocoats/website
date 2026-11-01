import fs from 'node:fs'
import path from 'node:path'

const assetDir = 'public/home'
const runtimeFiles = fs.readdirSync(assetDir).filter((file) => file.endsWith('.js'))
const evalUsers = runtimeFiles.filter((file) =>
  /\bnew Function\s*\(/.test(fs.readFileSync(path.join(assetDir, file), 'utf8'))
)
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
const globalHeaders = vercel.headers.find(({ source }) => source === '/(.*)')?.headers ?? []
const csp = globalHeaders.find(({ key }) => key.toLowerCase() === 'content-security-policy')?.value ?? ''

const runtimeNeedsEval = evalUsers.length > 0
const policyAllowsEval = /(?:^|\s)'unsafe-eval'(?:\s|;|$)/.test(csp)

if (runtimeNeedsEval !== policyAllowsEval) {
  console.error(
    runtimeNeedsEval
      ? `${evalUsers.join(', ')} compile embedded component logic with new Function, but the CSP blocks 'unsafe-eval'.`
      : "The CSP allows 'unsafe-eval', but the homepage runtime no longer needs it. Remove the exception."
  )
  process.exit(1)
}

console.log(`CSP is compatible with the homepage runtime (${runtimeNeedsEval ? 'eval required' : 'eval not required'}).`)
