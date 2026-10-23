import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="site-container flex min-h-[58vh] items-center justify-center py-16 text-center">
      <div className="max-w-xl">
        <p className="text-7xl font-extrabold tracking-tight text-orange-600 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy-950 sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 leading-7 text-slate-600">
          The page you are looking for could not be found.
        </p>
        <Link to="/" className="button-primary mt-8">
          <ArrowLeft size={17} aria-hidden="true" /> Back to Home
        </Link>
      </div>
    </section>
  )
}
