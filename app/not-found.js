import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <section
        role="alert"
        aria-label="Page not found"
        className="w-full max-w-lg bg-white/80 backdrop-blur rounded-2xl shadow-2xl p-8 animate-fade-in-up border border-white/60"
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg animate-pulse-glow">
            404
          </div>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">Page not found</h1>
          <p className="mt-2 text-gray-600">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 transition-colors"
            >
              Go Home
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Learn more
            </Link>
          </div>

          <div className="mt-6">
            <div className="text-sm text-gray-500">Tip: use the navigation links or go back to the homepage.</div>
          </div>
        </div>
      </section>
    </main>
  );
}

