export default function TermsPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-accent">
          Terms of Use
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Dealora Terms of Use
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          These terms describe the basic conditions under which you may use Dealora
          and related services. The content is a template and should be reviewed and
          customised with legal support before production use.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 space-y-6 text-sm text-slate-600 sm:px-6 sm:pb-20">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Use of the service</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Dealora is provided for personal, non-commercial use unless otherwise
            agreed in writing. You agree to use the app in compliance with
            applicable laws and to respect the terms of any third-party services it
            connects to.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Accounts and eligibility</h2>
          <p className="mt-2 text-sm leading-relaxed">
            You may need to create an account to use certain features. You are
            responsible for maintaining the confidentiality of your credentials and
            for activity that occurs under your account.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Coupons and rewards</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Coupons and rewards shown in Dealora are typically issued and governed
            by partner apps or services. Availability, accuracy, and redemption are
            subject to the terms of those partners, which may change without notice.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Limitation of liability</h2>
          <p className="mt-2 text-sm leading-relaxed">
            To the extent permitted by law, Dealora and its team are not liable for
            indirect or consequential losses arising from the use of the app,
            including missed rewards, technical issues, or changes in partner
            programmes.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Termination</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Access to Dealora may be suspended or terminated if the service is
            misused or if there are compliance or security concerns. You may also
            stop using the app and request account closure subject to applicable
            laws.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Changes to these terms</h2>
          <p className="mt-2 text-sm leading-relaxed">
            These terms may be updated over time. The latest version will be made
            available on this page with an updated effective date. Continued use of
            Dealora after changes take effect constitutes acceptance of the
            updated terms.
          </p>
        </div>
      </section>
    </div>
  )
}
