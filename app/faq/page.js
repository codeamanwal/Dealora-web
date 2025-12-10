const faqs = [
  {
    question: "Why is my coupon not working?",
    answer:
      "Some coupons are limited by time, usage count, or specific terms from partner apps. Check the expiry, category, and conditions in the coupon details before redeeming.",
  },
  {
    question: "How does Dealora get my coupons?",
    answer:
      "When you connect supported apps, Dealora reads available rewards and coupons via secure integrations or approved channels, then surfaces them inside your dashboard.",
  },
  {
    question: "Which apps does Dealora support?",
    answer:
      "Support will expand over time and may vary by region. The app will clearly list currently supported partners inside the integrations area.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Dealora is built with a security-first mindset. Only the data required to show and track your rewards is processed, and it is handled according to strict privacy standards.",
  },
  {
    question: "What happens when a coupon expires?",
    answer:
      "Expired coupons are automatically removed or archived from your active view so that your dashboard stays focused on live offers.",
  },
  {
    question: "How does cashback tracking work?",
    answer:
      "Cashback amounts move through stages such as pending and confirmed. Dealora reflects these statuses based on information from partner apps or services.",
  },
  {
    question: "Do I need to pay to use Dealora?",
    answer:
      "The core Dealora experience is designed to be free for end users. If pricing or premium features are introduced, they will be communicated clearly in the app.",
  },
  {
    question: "Who do I contact for support or partnerships?",
    answer:
      "Use the contact form on the Contact page or the support email provided there. Partnership enquiries can also be initiated from the same page.",
  },
]

export default function FAQPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
          FAQ
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Frequently asked questions.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Short, clear answers to the most common questions about Dealora. The
          exact experience may evolve as we add new partners and capabilities.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((item) => (
            <div key={item.question} className="px-5 py-4 sm:px-6 sm:py-5">
              <h2 className="text-sm font-semibold text-slate-900">
                {item.question}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
