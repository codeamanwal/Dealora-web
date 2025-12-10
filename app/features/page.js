const featureBlocks = [
  {
    title: "Coupon aggregation",
    description:
      "Pull live coupons and offers from supported apps into one central dashboard instead of juggling multiple sources.",
  },
  {
    title: "Multi-app integration",
    description:
      "Connect your favourite food, travel, shopping, and payments apps so Dealora can surface relevant rewards.",
  },
  {
    title: "Auto redirection logic",
    description:
      "Tap on a deal and Dealora routes you to the right app or web destination for a seamless redemption flow.",
  },
  {
    title: "Coupon categorisation",
    description:
      "See coupons organised by brand, category, and expiry so you can prioritise the ones that matter now.",
  },
  {
    title: "In-app dashboard",
    description:
      "Glanceable cards that summarise active coupons, used offers, and total savings without digging through menus.",
  },
  {
    title: "Saved coupons",
    description:
      "Bookmark high-value coupons, pin them to the top, and come back when you are ready to redeem.",
  },
  {
    title: "Cashback tracking",
    description:
      "Track pending, confirmed, and historical cashback across partners from inside Dealora.",
  },
  {
    title: "Secure sign-in",
    description:
      "Sign in with modern, secure authentication and clear controls over what data is used.",
  },
  {
    title: "Real-time sync",
    description:
      "See status and available rewards update as you redeem, earn cashback, or link new apps.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
          Features
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Everything you need to keep rewards under control.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Dealora is built as a focused companion app that sits above your daily
          spending stack. Each feature is designed to work quietly in the background
          while staying one tap away when you need it.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {featureBlocks.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm"
            >
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-gradient text-xs font-semibold text-white">
                UI
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed">{feature.description}</p>
              </div>
              <div className="mt-2 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-[11px] text-slate-500">
                UI preview placeholder
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
