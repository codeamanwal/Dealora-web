const steps = [
  {
    title: "Sign up via email or Google",
    description:
      "Create your Dealora account using email or a supported sign-in provider. Basic profile details help personalise your dashboard.",
  },
  {
    title: "Connect your favourite apps",
    description:
      "Link supported apps where you already earn coupons and cashback. This enables Dealora to start fetching your offers.",
  },
  {
    title: "See all coupons inside Dealora",
    description:
      "New and existing coupons are surfaced in a single, organised dashboard so you can browse without context switching.",
  },
  {
    title: "Tap on a coupon to redeem",
    description:
      "If a coupon is code-based, Dealora helps you copy or apply it on the right website. If it is app-linked, you get redirected.",
  },
  {
    title: "Redeem and track usage",
    description:
      "Once you use a coupon, Dealora keeps track of the redemption outcome and updates your dashboard.",
  },
  {
    title: "Manage and save for later",
    description:
      "Pin important coupons, archive used ones, and keep an eye on cashback timelines from a single place.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
          How it works
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          A simple journey from sign-up to savings.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Dealora is designed as a smooth, guided flow. From the moment you sign up
          to the moment you redeem a coupon and see cashback reflected, every step is
          optimised for clarity and speed.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-brand-accent/70 via-slate-300 to-slate-200 md:left-4" />
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-4 pl-8 md:gap-5 md:pl-10">
                <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-[11px] font-semibold text-white md:left-1">
                  {index + 1}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h2 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
