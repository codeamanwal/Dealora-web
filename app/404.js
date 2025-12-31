import Link from 'next/link'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/60 to-cyan-50/70 flex items-center justify-center px-4">
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl" />
        <div className="absolute top-20 -right-20 h-[420px] w-[420px] rounded-full bg-cyan-300/25 blur-3xl" />
      </div>

      <div className="relative text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Sorry, the page you are looking for could not be found. 
            It's just an accident that was not intentional.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-white shadow-soft-glow hover:brightness-110 transition-all"
          >
            <FiHome className="h-4 w-4" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/95 backdrop-blur px-6 py-3 text-sm font-medium text-slate-700 hover:bg-white transition-all"
          >
            <FiArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        <div className="mt-12 text-sm text-slate-500">
          <p>If you think this is an error, please contact our support team.</p>
        </div>
      </div>
    </div>
  )
}
