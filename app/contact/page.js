'use client'

import { useState } from "react"
import { useEffect } from "react"



export default function ContactPage() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
  company: "", // honeypot
})
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState("")
  const [cooldownLeft, setCooldownLeft] = useState(0)
  useEffect(() => {
  if (cooldownLeft <= 0) return

  const timer = setInterval(() => {
    setCooldownLeft((prev) => {
      if (prev <= 1) {
        clearInterval(timer)
        return 0
      }
      return prev - 1
    })
  }, 1000)

  return () => clearInterval(timer)
}, [cooldownLeft])
const SUBMIT_COOLDOWN_MS = 10_000 // 10 seconds

async function handleSubmit(e) {
  e.preventDefault()
  setError("")
  const lastSubmit = localStorage.getItem("contact_last_submit")
  const now = Date.now()

  if (lastSubmit && now - Number(lastSubmit) < SUBMIT_COOLDOWN_MS) {
    const remaining = Math.ceil(
      (SUBMIT_COOLDOWN_MS - (now - Number(lastSubmit))) / 1000
    )
    setError(`Please wait ${remaining} seconds before sending another message.`)
    setStatus("idle")
    return
  }
  setStatus("submitting")

  try {
    await fetch("https://script.google.com/macros/s/AKfycbzf3XZGea6BbiKzY5RVfQ7CTRHUs9UHODPt3twsZI_EdgmwuYbaXOQxAgEHYnwsClWQ/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    // If fetch didn't throw, assume success
    localStorage.setItem("contact_last_submit", String(now))
setCooldownLeft(SUBMIT_COOLDOWN_MS / 1000)
setStatus("submitted")
setForm({
  name: "",
  email: "",
  message: "",
  company: "",
})

  } catch (err) {
    setStatus("error")
    setError("Something went wrong. Please try again.")
  }
}

  function onChange(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const lastSubmit =
  typeof window !== "undefined"
    ? localStorage.getItem("contact_last_submit")
    : null

const isCooldown = cooldownLeft > 0

  return (
    
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 text-slate-900 overflow-hidden">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[520px] w-[520px] rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      {/* top fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 h-0
                   bg-gradient-to-b from-slate-50/100 via-slate-50/70 to-transparent z-10"
      />

      {/* header */}
      <section className="relative w-full px-4 py-12 sm:px-6 lg:px-12 sm:py-12 z-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Get in touch with the Dealora team.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          Use the form below for support, feedback, or partnership enquiries. We
          try to respond to relevant messages in a reasonable timeframe.
        </p>
      </section>

      {/* content */}
      <section className="relative w-full px-4 pb-16 sm:px-6 lg:px-12 sm:pb-20 z-20">
        <div className="grid gap-8 md:grid-cols-[minmax(0,_1.2fr)_minmax(0,_0.9fr)]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white/95 backdrop-blur-sm p-6 shadow-sm"
          >
            {/* Honeypot field – should stay empty */}
<div style={{ display: "none" }}>
  <label>
    Company
    <input
      type="text"
      name="company"
      value={form.company || ""}
      onChange={onChange}
      autoComplete="off"
    />
  </label>
</div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-brand-accent/40 placeholder:text-slate-400 focus:border-brand-accent focus:ring-1"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-800">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-brand-accent/40 placeholder:text-slate-500 focus:border-brand-accent focus:ring-1"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={onChange}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-brand-accent/40 placeholder:text-slate-400 focus:border-brand-accent focus:ring-1"
                placeholder="How can we help?"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}
            {status === "submitted" && !error && (
              <p className="text-xs text-emerald-400">
                Thank you. Your message has been received.
              </p>
            )}

            <button
  type="submit"
  disabled={status === "submitting" || isCooldown}
  className="mt-1 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-2 text-sm font-medium text-white shadow-soft-glow hover:brightness-110 disabled:opacity-60"
>
  {status === "submitting"
    ? "Sending..."
    : isCooldown
    ? `Please wait ${cooldownLeft}s`
    : "Send message"}
</button>
          </form>

          <div className="space-y-6 text-sm text-slate-600">
            <div>
              <h2 className="text-md font-semibold text-slate-900">Support</h2>
              <p className="mt-2 text-sm text-slate-600">
                For general questions, feedback, or issues while redeeming coupons,
                use the form or reach out via the support email below.
              </p>
              <p className="mt-2 text-sm text-brand-accent">
                contact@dealora.co.in
              </p>
            </div>

            <div>
              <h2 className="text-md font-semibold text-slate-900">Partnerships</h2>
              <p className="mt-2 text-sm text-slate-600">
                If you represent a brand, aggregator, or platform that runs rewards
                and would like to explore integrations, mention it in your message
                and include relevant details.
              </p>
            </div>

            <div>
              <h2 className="text-md font-semibold text-slate-900">Social</h2>
              <p className="mt-2 text-sm text-slate-600">
                Social handles can be added here once they are live. This is where
                users can see updates, product tips, and new partner announcements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28
                   bg-gradient-to-t from-slate-50/100 via-slate-50/70 to-transparent z-10"
      />
    </div>
  )
}