import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Placeholder({ title, description }) {
  return (
    <section className="site-container flex min-h-[55vh] items-center py-16">
      <div className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-6 py-14 text-center sm:px-12">
        <p className="eyebrow justify-center">SMJ Teknik</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">{description}</p>
        <p className="mt-6 font-semibold text-orange-600">Coming Soon</p>
        <Link to="/" className="button-secondary mt-8">
          <ArrowLeft size={17} aria-hidden="true" /> Back to Home
        </Link>
      </div>
    </section>
  )
}
