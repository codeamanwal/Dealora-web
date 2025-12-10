import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
          About Dealora
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Built for users who never want to miss a reward again.
        </h1>
        <p className="mt-4 text-sm leading-relaxed sm:text-base">
          Dealora exists to remove friction from how everyday users discover, redeem,
          and track rewards. Today, coupons live in multiple apps, SMS inboxes,
          screenshots, emails, and browser tabs. Important offers get buried or
          expire before they are used.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Mission</h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Our mission is to become the single source of truth for your savings
              and rewards. Dealora aims to centralise every live coupon, cashback,
              and offer you are eligible for, and make it instantly redeemable.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Why we built Dealora</h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              The rewards ecosystem is fragmented. Individual apps run excellent
              offers, but users rarely see all of them in one view. The result is
              lost value for both users and partners. Dealora bridges this gap with
              a clean, unified interface.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">What makes Dealora different</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
              <li>Focused on real, live coupons and rewards instead of static lists.</li>
              <li>Designed to work alongside the apps you already use, not replace them.</li>
              <li>Built with a mobile-first, dashboard-driven experience.</li>
              <li>Clear emphasis on transparency, privacy, and control for users.</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Technology-first approach</h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Dealora is designed as a modern, API-driven platform. From auto-fetch
              logic to smart categorisation and redirection flows, the product is
              built to scale with new partners, new categories, and new user journeys.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Vision</h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Over the next one to two years, the vision for Dealora is to become the
            most trusted rewards layer for consumers and brands in our core markets.
          </p>
          <ul className="mt-1 space-y-1.5 text-sm text-slate-600">
            <li>Onboard more categories and partner apps for deeper coverage.</li>
            <li>Expand cashback intelligence and savings insights for users.</li>
            <li>Provide brands with privacy-safe, aggregated insights on redemption.</li>
            <li>Maintain a sharp focus on user trust, control, and data security.</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            If you are a potential partner or investor, we would be happy to share
            more details about the roadmap.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="text-sm font-medium text-brand-accent hover:text-brand-accent/80"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
