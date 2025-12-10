export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
          Privacy Policy
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Dealora Privacy Policy
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          This page outlines how Dealora may collect, use, and protect information.
          The content below is a general template and should be reviewed and adapted
          by legal counsel for production use.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 space-y-6 text-sm text-slate-600 sm:px-6 sm:pb-20">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Information we may collect</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Depending on how you use Dealora, the app may collect basic account
            information such as your name, email address, and authentication
            identifiers. When you link supported apps, Dealora may access limited
            data required to display coupons, rewards, and cashback information.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">How information is used</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Information is used to provide the core Dealora experience, which
            includes aggregating rewards, showing relevant offers, and tracking
            redemptions and cashback status. Data may also be used in aggregated
            and anonymised form to improve product performance and reliability.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Data sharing</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Dealora does not sell personal data. Limited information may be shared
            with service providers and partners strictly to deliver functionality
            such as hosting, analytics, and communications, subject to appropriate
            safeguards.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Security</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Reasonable technical and organisational measures are used to protect
            data. No system can be guaranteed to be completely secure, but
            Dealora is built with a security-first mindset and industry-aligned
            practices.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Your choices</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Depending on your region and applicable laws, you may have rights such
            as accessing, updating, or deleting certain information, as well as
            disconnecting linked apps. These controls should be surfaced clearly in
            the product as it evolves.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Updates</h2>
          <p className="mt-2 text-sm leading-relaxed">
            This policy may be updated as Dealora grows. Material changes should be
            communicated within the app or on this website with an updated
            effective date.
          </p>
        </div>
      </section>
    </div>
  )
}
