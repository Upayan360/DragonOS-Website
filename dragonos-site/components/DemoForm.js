'use client'
import { useState } from 'react'

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const data = {
      name: e.target.fname.value,
      email: e.target.femail.value,
      phone: e.target.fphone.value,
      company: e.target.fcompany.value,
      business: e.target.fbusiness.value,
      message: e.target.fmessage.value,
      submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    }
    try {
      const res = await fetch('https://dragonos-sheet-api.vercel.app/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else throw new Error()
    } catch {
      setLoading(false)
      alert('Something went wrong. Please email us at dragonosadmin@gmail.com')
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-ring">✓</div>
        <h3>Request received.</h3>
        <p>We'll reach out within 24 hours to schedule your personalised demonstration.</p>
      </div>
    )
  }

  return (
    <div className="form-card">
      <div className="form-card-title">Request a Demo</div>
      <div className="form-card-sub">Fill in your details and we'll be in touch shortly.</div>
      <form onSubmit={handleSubmit}>
        <div className="f-row">
          <div className="f-group">
            <label>Full Name *</label>
            <input name="fname" type="text" placeholder="Your name" required />
          </div>
          <div className="f-group">
            <label>Phone *</label>
            <input name="fphone" type="tel" placeholder="+91 98300 00000" required />
          </div>
        </div>
        <div className="f-group">
          <label>Work Email *</label>
          <input name="femail" type="email" placeholder="you@company.com" required />
        </div>
        <div className="f-group">
          <label>Company Name *</label>
          <input name="fcompany" type="text" placeholder="Your company" required />
        </div>
        <div className="f-group">
          <label>Industry *</label>
          <select name="fbusiness" required>
            <option value="">Select your industry…</option>
            <option>Real Estate</option>
            <option>Finance / Accounting</option>
            <option>Stock Trading</option>
            <option>E-commerce</option>
            <option>Logistics</option>
            <option>Healthcare</option>
            <option>Legal</option>
            <option>Manufacturing</option>
            <option>Other</option>
          </select>
        </div>
        <div className="f-group">
          <label>What would you like to automate?</label>
          <textarea name="fmessage" placeholder="Describe your current workflow or pain point…" />
        </div>
        <button type="submit" className="f-submit" disabled={loading}>
          {loading ? 'Sending…' : 'Request Demo →'}
        </button>
      </form>
    </div>
  )
}
