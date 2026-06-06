import type { Context } from '@neabyte/deserve'

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ritelcommunity.id IDX API</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0a0f1e;
      --surface: #111827;
      --border: #1f2937;
      --accent: #3b82f6;
      --accent2: #10b981;
      --text: #f9fafb;
      --muted: #9ca3af;
      --tag-bg: #1e3a5f;
      --tag-text: #93c5fd;
    }
    body { background: var(--bg); color: var(--text); font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; min-height: 100vh; }
    header { border-bottom: 1px solid var(--border); padding: 20px 40px; display: flex; align-items: center; justify-content: space-between; background: var(--surface); }
    .logo { display: flex; align-items: center; gap: 12px; }
    .logo-icon { width: 38px; height: 38px; background: linear-gradient(135deg, #3b82f6, #10b981); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 900; color: white; }
    .logo-text { font-size: 18px; font-weight: 700; }
    .logo-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }
    .badge { background: var(--tag-bg); color: var(--tag-text); padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; }
    .hero { padding: 60px 40px 40px; max-width: 900px; margin: 0 auto; }
    .hero h1 { font-size: 36px; font-weight: 800; line-height: 1.2; margin-bottom: 16px; background: linear-gradient(135deg, #f9fafb, #9ca3af); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero p { font-size: 16px; color: var(--muted); max-width: 600px; line-height: 1.7; margin-bottom: 24px; }
    .chips { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 40px; }
    .chip { background: var(--surface); border: 1px solid var(--border); color: var(--muted); padding: 6px 14px; border-radius: 999px; font-size: 13px; }
    .chip span { color: var(--accent2); margin-right: 4px; }
    .section { max-width: 900px; margin: 0 auto 40px; padding: 0 40px; }
    .section-title { font-size: 13px; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
    .endpoints { display: flex; flex-direction: column; gap: 8px; }
    .group-label { font-size: 12px; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 1px; margin-top: 16px; margin-bottom: 6px; padding: 0 4px; }
    .ep { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 12px 16px; display: flex; align-items: center; gap: 12px; }
    .ep:hover { border-color: var(--accent); }
    .method { background: #1e3a5f; color: #60a5fa; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px; min-width: 40px; text-align: center; }
    .path { font-family: 'Courier New', monospace; font-size: 14px; color: var(--text); flex: 1; }
    .params { font-size: 12px; color: var(--muted); }
    .info-box { background: var(--surface); border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: 10px; padding: 16px 20px; font-size: 13px; color: var(--muted); line-height: 1.8; margin-bottom: 32px; }
    .info-box code { background: #1f2937; color: var(--accent2); padding: 1px 6px; border-radius: 4px; font-size: 12px; }
    .developer { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 16px; }
    .dev-avatar { width: 44px; height: 44px; background: linear-gradient(135deg, #3b82f6, #10b981); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px; color: white; flex-shrink: 0; }
    .dev-name { font-weight: 700; font-size: 15px; }
    .dev-contact { font-size: 13px; color: var(--muted); margin-top: 3px; }
    footer { text-align: center; padding: 30px; color: var(--muted); font-size: 12px; border-top: 1px solid var(--border); }
    @media (max-width: 600px) { header { padding: 16px 20px; } .hero { padding: 30px 20px 20px; } .hero h1 { font-size: 26px; } .section { padding: 0 20px; } }
  </style>
</head>
<body>
<header>
  <div class="logo">
    <div class="logo-icon">RC</div>
    <div>
      <div class="logo-text">ritelcommunity.id</div>
      <div class="logo-sub">IDX Market Data API</div>
    </div>
  </div>
  <div class="badge">v0.1.0</div>
</header>
<div class="hero">
  <h1>Indonesian Stock Exchange<br/>REST API</h1>
  <p>Real-time and historical market data from Bursa Efek Indonesia (IDX). Companies, trading, indices, financials, and more — all in one clean API.</p>
  <div class="chips">
    <div class="chip"><span>⚡</span>Deno Runtime</div>
    <div class="chip"><span>🗄️</span>SQLite + Drizzle ORM</div>
    <div class="chip"><span>📊</span>IDX Official Data</div>
    <div class="chip"><span>🔄</span>Auto Sync</div>
    <div class="chip"><span>🌐</span>REST JSON</div>
  </div>
</div>
<div class="section">
  <div class="info-box">
    <strong style="color: var(--text)">Pagination:</strong> All list endpoints support <code>limit</code> (default 50, max 500) and <code>offset</code>. Add <code>?total=1</code> to include total count in response.
  </div>
</div>
<div class="section">
  <div class="section-title">Endpoints</div>
  <div class="endpoints">
    <div class="ep"><span class="method">GET</span><span class="path">/health</span><span class="params">Server health check</span></div>
    <div class="group-label">Companies</div>
    <div class="ep"><span class="method">GET</span><span class="path">/companies</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/companies/:code</span><span class="params">Company detail</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/companies/:code/announcements</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/companies/:code/financial-reports</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/companies/:code/issued-history</span><span class="params">limit, offset, total?</span></div>
    <div class="group-label">Securities &amp; Screener</div>
    <div class="ep"><span class="method">GET</span><span class="path">/securities</span><span class="params">limit, offset, total?, code?, board?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/announcements</span><span class="params">limit, offset, dateFrom?, dateTo?, companyCode?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/stock-screener</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/suspend</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/relisting</span><span class="params">limit, offset, total?</span></div>
    <div class="group-label">Market</div>
    <div class="ep"><span class="method">GET</span><span class="path">/market/indices</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/market/indices/:code/chart</span><span class="params">period? (1D|1W|1M|1Q|1Y)</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/market/calendar</span><span class="params">date= (YYYYMMDD)</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/market/daily-index</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/market/sectoral-movement</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/market/index-summary</span><span class="params">date= (YYYYMMDD)</span></div>
    <div class="group-label">Trading</div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/summary</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/stock-summary</span><span class="params">date= (YYYYMMDD)</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/broker-summary</span><span class="params">date= (YYYYMMDD)</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/top-gainer</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/top-loser</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/domestic</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/foreign</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/active-volume</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/active-value</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/active-frequency</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/industry</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/company/:code/daily</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/trading/company/:code/summary</span><span class="params">limit, offset, total?</span></div>
    <div class="group-label">Data &amp; Corporate Actions</div>
    <div class="ep"><span class="method">GET</span><span class="path">/data/additional-listing</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/data/delisting</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/data/dividend</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/data/financial-ratio</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/data/new-listing</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/data/right-offering</span><span class="params">year, month</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/data/stock-split</span><span class="params">year, month</span></div>
    <div class="group-label">Participants</div>
    <div class="ep"><span class="method">GET</span><span class="path">/participants/brokers</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/participants/dealers</span><span class="params">limit, offset, total?</span></div>
    <div class="ep"><span class="method">GET</span><span class="path">/participants/profiles</span><span class="params">limit, offset, total?</span></div>
  </div>
</div>
<div class="section">
  <div class="section-title">Developer</div>
  <div class="developer">
    <div class="dev-avatar">TT</div>
    <div>
      <div class="dev-name">Thirafi Thariq Al Idris</div>
      <div class="dev-contact">WhatsApp: 082218723401 &nbsp;&middot;&nbsp; ritelcommunity.id</div>
    </div>
  </div>
</div>
<footer>&copy; 2026 ritelcommunity.id &nbsp;&middot;&nbsp; IDX API v0.1.0 &nbsp;&middot;&nbsp; Data sourced from Bursa Efek Indonesia</footer>
</body>
</html>`

export function GET(ctx: Context): Response {
  const url = new URL(ctx.request.url)
  if (url.searchParams.has('json')) {
    return Response.json({
      name: 'ritelcommunity.id IDX API',
      version: '0.1.0',
      developer: { name: 'Thirafi Thariq Al Idris', wa: '082218723401' }
    })
  }
  return new Response(HTML, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}
