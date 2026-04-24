'use client'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import FAQ from '../components/FAQ'
import DemoForm from '../components/DemoForm'

const CALENDLY = 'https://calendly.com/dragonosadmin/30min'

const features = [
  { icon: '🤖', title: 'Personal AI for Every Role', desc: 'Each team member gets an assistant tuned to their job. Directors see everything. Employees work within their defined scope.' },
  { icon: '🔗', title: 'Webhook Triggers', desc: 'New lead, form submission, or API event — agents wake up automatically, process it, and notify your team. Zero manual work.' },
  { icon: '⏰', title: 'Scheduled Automations', desc: 'Daily reports. Weekly summaries. Monthly analysis. Configure once and results arrive on schedule, without intervention.' },
  { icon: '🌐', title: 'Real-Time Web Intelligence', desc: 'Agents search the live web for current data, news, competitor pricing, and market trends — not cached training data.' },
  { icon: '🔧', title: 'Connect Any Tool', desc: 'Salesforce, Zerodha, WhatsApp, Google Sheets, your own database — connect anything via our MCP server framework.' },
  { icon: '✅', title: 'Approval Workflows', desc: 'Sensitive actions require director approval. Full audit trail. Nothing proceeds without the right authorisation.' },
  { icon: '💻', title: 'Autonomous Code Execution', desc: 'Agents write Python and JavaScript, execute it, auto-fix errors, and return results — data processing without a developer.' },
  { icon: '🔐', title: 'Bring Your Own Keys', desc: 'Use your existing OpenAI, Anthropic, or Gemini API keys. Your data stays yours. Your costs stay predictable.' },
  { icon: '🧠', title: 'Cross-Session Memory', desc: 'Agents remember context, preferences, and decisions across every conversation. Institutional knowledge, automated.' },
]

const steps = [
  { n: '01', title: 'Create your agents', desc: 'Build AI agents for each role in your team. Define their purpose, their tools, and their access level.' },
  { n: '02', title: 'Connect your tools', desc: 'Link your existing software — CRMs, databases, messaging platforms, financial APIs — using our connector framework.' },
  { n: '03', title: 'Configure automations', desc: 'Set webhooks for event-driven triggers and schedules for recurring tasks. Define it once, it runs indefinitely.' },
  { n: '04', title: 'Your business runs itself', desc: 'Leads qualify, reports generate, tasks complete — while your team focuses on decisions that require human judgment.' },
]

const cases = [
  { tag: 'Real Estate', title: 'Never miss a lead again', desc: 'New enquiry arrives at 2am — agent qualifies it, scores intent, and delivers a prioritised briefing before you start your day.' },
  { tag: 'Finance & Accounting', title: 'Automate compliance reporting', desc: 'Agent pulls data, runs calculations, generates GST and MIS reports, flags anomalies — daily, without manual intervention.' },
  { tag: 'Stock Trading', title: 'AI-powered portfolio intelligence', desc: 'Connect Zerodha via Kite API. Agent monitors positions, alerts on targets, and generates daily P&L reports automatically.' },
  { tag: 'E-commerce', title: 'Automate customer operations', desc: 'New order triggers confirmations, inventory updates, delay alerts, and refund handling — end to end, without human input.' },
  { tag: 'Logistics', title: 'Intelligent dispatch & tracking', desc: 'Agents monitor shipments, update clients proactively, reroute on delays, and generate delivery performance reports.' },
  { tag: 'Legal & Compliance', title: 'Document intelligence at scale', desc: 'Agents review contracts, extract key clauses, flag risks, and summarise obligations — reducing review time dramatically.' },
]

const plans = [
  {
    name: 'Starter', price: '₹2,999', period: 'per month',
    desc: 'For small teams getting started with AI automation. Perfect for solo brokers and small businesses.',
    features: [
      [true,'Up to 3 AI agents'], [true,'Webhook triggers'], [true,'Scheduled automations'],
      [true,'Web search skill'], [true,'5 team members'], [true,'Email support'],
      [false,'MCP integrations'], [false,'Approval workflows'],
    ],
    cta: 'Get started →', ctaClass: 'price-cta-ghost', popular: false,
  },
  {
    name: 'Growth', price: '₹7,999', period: 'per month',
    desc: 'For growing teams that need full automation, approvals, and integrations across their operations.',
    features: [
      [true,'Up to 10 AI agents'], [true,'Webhook triggers'], [true,'Scheduled automations'],
      [true,'All built-in skills'], [true,'20 team members'], [true,'MCP integrations'],
      [true,'Approval workflows'], [true,'Priority support'],
    ],
    cta: 'Get started →', ctaClass: 'price-cta-primary', popular: true,
  },
  {
    name: 'Scale', price: '₹14,999', period: 'per month',
    desc: 'For established businesses that need unlimited agents, custom integrations, and dedicated support.',
    features: [
      [true,'Unlimited AI agents'], [true,'Everything in Growth'], [true,'Custom MCP integrations'],
      [true,'Unlimited team members'], [true,'Dedicated onboarding'], [true,'SLA support'],
      [true,'Multi-agent orchestration'], [true,'Audit logs & compliance'],
    ],
    cta: 'Contact us →', ctaClass: 'price-cta-ghost', popular: false,
  },
]

const testimonials = [
  {
    stars: '★★★★★',
    text: '"We used to miss 4-5 leads every week because they came in after hours. Since the pilot, our response rate has completely changed. The agent qualifies and briefs us before we even open our phones."',
    name: 'Rakesh M.', role: 'Real Estate Broker, New Town Kolkata', initial: 'R',
  },
  {
    stars: '★★★★★',
    text: '"The approval workflow alone saved us from a compliance issue. My junior staff can\'t access sensitive client data without my sign-off. It\'s exactly the kind of control I needed."',
    name: 'Suresh K.', role: 'CA Firm Director, Kolkata', initial: 'S',
  },
  {
    stars: '★★★★★',
    text: '"I was sceptical about AI tools — too complex, too expensive. DragonOS was running in my office in 45 minutes. My team actually uses it every day now."',
    name: 'Anita B.', role: 'E-commerce Founder, Kolkata', initial: 'A',
  },
]

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="mesh" />
      <div className="grid-bg" />

      <Nav />

      {/* ANNOUNCE BAR */}
      <div className="announce-bar" style={{marginTop:'64px'}}>
        🎉 Now accepting pilot customers — <a href="#demo">Free 30-day trial for the first 3 businesses →</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">
          <div className="eyebrow-dot">🐉</div>
          Now in Beta &nbsp;·&nbsp; Built in Kolkata
        </div>
        <h1 className="hero-headline">
          Every employee.<br />Every tool.<br /><em>One platform.</em>
        </h1>
        <p className="hero-sub">
          DragonOS is the AI operating system for your business. Give every team member their own intelligent assistant. Automate leads, workflows, and decisions — 24/7.
        </p>
        <div className="hero-actions">
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="hero-cta">Book a Free Demo →</a>
          <a href="#features" className="hero-ghost">Explore features</a>
        </div>
        <p className="hero-note">No commitment required · Free 30-day pilot · Set up in under an hour</p>
      </section>

      {/* PROOF STRIP */}
      <div className="proof-strip reveal">
        <div className="proof-inner">
          {[
            ['Kolkata-built', 'for Indian SMBs'],
            ['Works with', 'OpenAI · Anthropic · Gemini'],
            ['Integrates with', '99acres · Housing.com · Zerodha'],
            ['No developers', 'required'],
            ['Live in', 'under 1 hour'],
          ].map(([label, val], i) => (
            <div className="proof-item" key={i}>
              <div className="proof-dot" />
              {label === 'Kolkata-built' || label === 'No developers' || label === 'Live in' ? (
                <><span className="proof-val">{label}</span>&nbsp;{val}</>
              ) : (
                <>{label}&nbsp;<span className="proof-val">{val}</span></>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics reveal">
        {[['10+','Built-in Skills'],['∞','Tool Integrations'],['24/7','Agents Running'],['₹0','API Cost to You*']].map(([v,l]) => (
          <div className="metric" key={l}>
            <span className="metric-value">{v}</span>
            <span className="metric-label">{l}</span>
          </div>
        ))}
      </div>

      <div className="rule" />

      {/* FEATURES */}
      <section className="section" id="features">
        <div className="section-inner">
          <div className="eyebrow-tag reveal">Platform</div>
          <h2 className="section-h reveal">Not a chatbot.<br /><em>A business operating system.</em></h2>
          <p className="section-p reveal">Give every person in your organisation their own AI assistant — one that searches the web, connects your tools, runs code, and automates work autonomously.</p>
          <div className="features-layout">
            {features.map((f, i) => (
              <div key={i} className={`feat reveal${i%3===1?' reveal-d1':i%3===2?' reveal-d2':''}`}>
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* HOW IT WORKS */}
      <section className="section steps-section" id="how-it-works">
        <div className="section-inner">
          <div className="eyebrow-tag reveal">Process</div>
          <h2 className="section-h reveal">Operational in<br /><em>under an hour.</em></h2>
          <p className="section-p reveal">No developers required. No complex configuration. Connect your tools and start automating the same day.</p>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className={`step reveal${i===1?' reveal-d1':i===2?' reveal-d2':i===3?' reveal-d3':''}`}>
                <span className="step-num">{s.n}</span>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* USE CASES */}
      <section className="section" id="use-cases">
        <div className="section-inner">
          <div className="eyebrow-tag reveal">Industries</div>
          <h2 className="section-h reveal">Built for businesses<br />across every sector.</h2>
          <p className="section-p reveal">From brokerage firms to trading desks, from logistics operations to healthcare practices — DragonOS adapts to your domain.</p>
          <div className="cases-grid">
            {cases.map((c, i) => (
              <div key={i} className={`case-card reveal${i%3===1?' reveal-d1':i%3===2?' reveal-d2':''}`}>
                <span className="case-tag">{c.tag}</span>
                <div className="case-title">{c.title}</div>
                <div className="case-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* TERMINAL DEMO */}
      <section className="section" style={{background:'var(--ink2)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
        <div className="section-inner">
          <div className="demo-split">
            <div>
              <div className="eyebrow-tag reveal">Live Demo</div>
              <h2 className="section-h reveal">See it working<br /><em>in real time.</em></h2>
              <ul className="demo-points reveal">
                {['A lead arrives at 11pm — agent qualifies it while you sleep','Your morning briefing is ready before your first meeting','Complex research delivered in seconds, not hours','Your entire operation visible in a single dashboard'].map((p,i) => (
                  <li key={i}><div className="dp-icon">→</div>{p}</li>
                ))}
              </ul>
              <a href={CALENDLY} target="_blank" rel="noreferrer" className="hero-cta reveal">Book your personalised demo →</a>
            </div>
            <div className="terminal-wrap reveal">
              <div className="t-bar">
                <div className="t-dot t-dot-r" /><div className="t-dot t-dot-y" /><div className="t-dot t-dot-g" />
                <span className="t-title">DragonOS — Assistant</span>
              </div>
              <div className="t-body">
                <span className="t-line"><span className="t-prompt">director@dragonos</span> <span className="t-cmd">~ $</span></span>
                <span className="t-blank" />
                <span className="t-line"><span className="t-comment">// 23:47 — Webhook received from 99acres</span></span>
                <span className="t-blank" />
                <span className="t-line"><span className="t-green">✓ Lead qualified</span></span>
                <span className="t-line"><span className="t-cmd">  Name    </span><span className="t-white">Rahul Sharma</span></span>
                <span className="t-line"><span className="t-cmd">  Query   </span><span className="t-white">3BHK · Rajarhat, New Town</span></span>
                <span className="t-line"><span className="t-cmd">  Budget  </span><span className="t-white">₹85 lakhs</span></span>
                <span className="t-line"><span className="t-cmd">  Intent  </span><span className="t-amber">HIGH ★★★★☆</span></span>
                <span className="t-line"><span className="t-cmd">  Action  </span><span className="t-green">Briefing queued for 9am</span></span>
                <span className="t-blank" />
                <span className="t-line"><span className="t-comment">// 09:00 — Scheduled morning briefing</span></span>
                <span className="t-blank" />
                <span className="t-line"><span className="t-green">✓ Morning report ready</span></span>
                <span className="t-line"><span className="t-white">  3 new leads overnight</span></span>
                <span className="t-line"><span className="t-white">  Top priority: Rahul Sharma</span></span>
                <span className="t-line"><span className="t-white">  2 new launches in New Town</span></span>
                <span className="t-blank" />
                <span className="t-line"><span className="t-prompt">director@dragonos</span> <span className="t-cmd">~ $</span><span className="cursor" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* PRICING */}
      <section className="section pricing-section" id="pricing">
        <div className="section-inner">
          <div className="eyebrow-tag reveal">Pricing</div>
          <h2 className="section-h reveal">Simple pricing.<br /><em>No surprises.</em></h2>
          <p className="section-p reveal">Bring your own AI API keys — you pay your AI provider directly. DragonOS is just the platform. Start free, upgrade when you're ready.</p>
          <div className="pricing-grid">
            {plans.map((p, i) => (
              <div key={i} className={`price-card reveal${i===1?' reveal-d1 popular':i===2?' reveal-d2':''}`}>
                {p.popular && <div className="popular-badge">MOST POPULAR</div>}
                <div className="price-plan">{p.name}</div>
                <div className="price-amount">{p.price}</div>
                <div className="price-period">{p.period}</div>
                <div className="price-desc">{p.desc}</div>
                <ul className="price-features">
                  {p.features.map(([has, text], j) => (
                    <li key={j}><span className={has ? 'pf-check' : 'pf-x'}>{has ? '✓' : '✗'}</span>{text}</li>
                  ))}
                </ul>
                <a href="#demo" className={`price-cta ${p.ctaClass}`}>{p.cta}</a>
              </div>
            ))}
          </div>
          <p className="price-note reveal">* You bring your own OpenAI, Anthropic, or Gemini API key. AI usage costs go directly to your provider — not to us.</p>
        </div>
      </section>

      <div className="rule" />

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="section-inner">
          <div className="eyebrow-tag reveal">Early feedback</div>
          <h2 className="section-h reveal">What early users<br /><em>are saying.</em></h2>
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`testi-card reveal${i===1?' reveal-d1':i===2?' reveal-d2':''}`}>
                <div className="testi-stars">{t.stars}</div>
                <div className="testi-text">{t.text}</div>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initial}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* FAQ */}
      <section className="section faq-section">
        <div className="section-inner">
          <div className="eyebrow-tag reveal">FAQ</div>
          <h2 className="section-h reveal">Common questions,<br /><em>straight answers.</em></h2>
          <FAQ />
        </div>
      </section>

      <div className="rule" />

      {/* CALENDLY CTA */}
      <div className="calendly-section reveal">
        <div className="calendly-inner">
          <h2 className="calendly-h">Ready to see it<br /><em>live in your business?</em></h2>
          <p className="calendly-sub">Book a free 20-minute demo. We'll configure it around your actual workflow — not a generic walkthrough.</p>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="calendly-btn">📅 Book a Demo — Pick a time →</a>
          <div className="calendly-or">or</div>
          <a href="#demo" className="calendly-scroll">Fill out the form below and we'll reach out within 24 hours</a>
        </div>
      </div>

      {/* FORM */}
      <section className="section form-section" id="demo">
        <div className="section-inner">
          <div className="form-split">
            <div>
              <div className="eyebrow-tag reveal">Get Started</div>
              <h2 className="section-h reveal">Book a free,<br /><em>personalised demo.</em></h2>
              <p className="section-p reveal">We'll set up a live demonstration using your actual business context — not a scripted walkthrough. See exactly how DragonOS would work for you.</p>
              <ul className="form-left-perks reveal">
                {['30-minute live demonstration','Configured for your industry','Free 30-day onboarding pilot','No commitment required','Response within 24 hours'].map((item,i) => (
                  <li key={i}><div className="perk-check">✓</div>{item}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand-logo">
              <img src="/DragonOS.png" alt="DragonOS" style={{height:'28px',width:'auto'}} onError={e => e.target.style.display='none'} />
            </div>
            <div className="footer-brand-desc">The AI operating system for Indian businesses. Built in Kolkata. Every employee gets their own AI assistant.</div>
            <div className="footer-social">
              <a href="https://linkedin.com/in/upayan-roy-chowdhury-0105b1180/" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" title="Instagram">ig</a>
              <a href="mailto:dragonosadmin@gmail.com" title="Email">✉</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-col-links">
              {[['#features','Features'],['#how-it-works','How it works'],['#pricing','Pricing'],['#use-cases','Use cases']].map(([h,l]) => <li key={l}><a href={h}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Industries</div>
            <ul className="footer-col-links">
              {['Real Estate','Finance & CA','Stock Trading','E-commerce','Logistics'].map(l => <li key={l}><a href="#use-cases">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-col-links">
              <li><a href="#demo">Book a Demo</a></li>
              <li><a href="mailto:dragonosadmin@gmail.com">Contact</a></li>
              <li><a href="https://github.com/Upayan360/DragonOs" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/upayan-roy-chowdhury-0105b1180/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 DragonOS OPC PVT LTD · 47 Garcha Road, Kolkata 700019 · dragonos.co.in</div>
          <div className="footer-legal">
            <a href="mailto:dragonosadmin@gmail.com">Privacy</a>
            <a href="mailto:dragonosadmin@gmail.com">Terms</a>
            <a href="mailto:dragonosadmin@gmail.com">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
