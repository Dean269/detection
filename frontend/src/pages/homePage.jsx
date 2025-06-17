import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center border-b px-8 py-4 bg-white">
        <div className="text-xl font-bold border px-4 py-1">LOGO</div>
        <div className="flex gap-8 items-center">
          <Link to="/" className="text-base">Home</Link>
          <a href="#how-it-works" className="text-base">How It Works</a>
          <a href="#pricing" className="text-base">Pricing</a>
          <a href="#api-access" className="text-base">API Access</a>
        </div>
        <Link to="/dashboard">
          <button className="border px-4 py-2 rounded font-medium">Check Text</button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-4 border-b">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Detect AI-generated<br className="hidden md:block" /> Content in Seconds</h1>
        <p className="text-lg text-gray-600 mb-8">Upload documents, paste text, or integrate via API.</p>
        <Link to="/dashboard">
          <button className="border-2 border-black px-8 py-3 rounded text-lg font-semibold hover:bg-gray-50 transition">Start Detection</button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="flex justify-center gap-8 py-12 border-b">
        {[1, 2, 3, 4].map((feature) => (
          <div key={feature} className="flex flex-col items-center">
            <div className="w-16 h-16 border flex items-center justify-center mb-2 bg-gray-100">
              {/* Placeholder icon */}
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 16l4-4a3 3 0 014 0l4 4"/><circle cx="12" cy="10" r="2"/></svg>
            </div>
            <span className="mt-1 text-base">Feature</span>
          </div>
        ))}
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 border-b">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 px-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className="w-40 h-32 border flex items-center justify-center mb-4 bg-gray-100">
                {/* Placeholder image */}
                <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 16l4-4a3 3 0 014 0l4 4"/><circle cx="12" cy="10" r="2"/></svg>
              </div>
              <span className="text-lg font-medium">Step {step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="max-w-2xl mx-auto border rounded-lg p-8 bg-gray-50">
          <div className="text-4xl mb-2 text-gray-400">“</div>
          <p className="italic mb-4 text-lg">This tool saved me hours of checking for AI content!</p>
          <p className="font-semibold">- Happy User</p>
        </div>
      </section>
    </div>
  );
}
