import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <div className="text-xl font-bold">LOGO</div>
        <div className="space-x-6">
          <Link to="/">Home</Link>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#api-access">API Access</a>
          <Link to="/dashboard">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Check Text</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gray-50 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Detect AI-generated Content in Seconds
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Upload documents, paste text, or integrate via API.
        </p>
        <Link to="/dashboard">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">Start Detection</button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {[1, 2, 3, 4].map((feature) => (
          <div key={feature} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-300 mb-4"></div> {/* Placeholder for Icon */}
            <h3 className="font-semibold">Feature {feature}</h3>
          </div>
        ))}
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className="w-40 h-40 bg-gray-300 mb-4"></div> {/* Placeholder for Image */}
              <h4 className="text-xl font-semibold">Step {step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
        <div className="max-w-xl mx-auto bg-gray-100 p-8 rounded-lg">
          <p className="italic mb-4">"This tool saved me hours of checking for AI content!"</p>
          <p className="font-semibold">- Happy User</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        © 2025 Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}
