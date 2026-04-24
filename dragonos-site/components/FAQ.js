'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need a developer to set up DragonOS?',
    a: 'No. DragonOS is designed for business owners and managers — not developers. You configure agents through a dashboard interface. Most businesses are up and running within an hour. We also offer free onboarding support for all pilot customers.'
  },
  {
    q: 'What AI models does DragonOS support?',
    a: 'DragonOS supports OpenAI (GPT-4o), Anthropic (Claude), Google Gemini, Grok, and DeepSeek. You bring your own API keys — which means your AI costs go directly to the provider at their standard rates, with no markup from us.'
  },
  {
    q: 'Is my business data secure?',
    a: 'Yes. Each business is completely isolated — multi-tenant architecture means your data never touches another company\'s data. API keys are encrypted with AES-256. Role-based access means employees only see what you allow them to see. The director has full audit visibility at all times.'
  },
  {
    q: 'How is DragonOS different from ChatGPT or other AI tools?',
    a: 'ChatGPT is a general-purpose AI chat tool. DragonOS is an operating system for your specific business — it knows your agents, your team\'s roles, your approval rules, and your integrations. It fires automatically when events happen (like a lead arriving at 2am), runs on schedules, and enforces access controls. ChatGPT cannot do any of this.'
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No lock-in contracts. You can cancel your subscription at any time and your data will be available for export. We also offer a free 30-day pilot — no payment required — so you can see the value before committing.'
  },
  {
    q: 'What does "bring your own API key" mean?',
    a: 'You create your own account with OpenAI, Anthropic, or Gemini and get an API key from them. You add this key to DragonOS. When your agents run, the AI costs go directly from your API key to the provider — DragonOS only charges the platform subscription fee, not the AI usage.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-a">
            <div className="faq-a-inner">{f.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
