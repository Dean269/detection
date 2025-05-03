import { Link, useParams } from "react-router-dom";

export default function ReportPage() {
  const { id } = useParams(); // get the report id from URL (future use)

  // Mock report data for now
  const report = {
    title: "Essay on AI Ethics",
    detectedAt: "2025-05-01",
    aiGeneratedPercentage: 72,
    humanWrittenPercentage: 28,
    sources: [
      { name: "OpenAI Blog", link: "https://openai.com" },
      { name: "Wikipedia - Artificial Intelligence", link: "https://wikipedia.org/ai" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Detection Report</h1>
        <Link to="/dashboard" className="text-gray-600 hover:underline">
          ← Back to Dashboard
        </Link>
      </div>

      {/* Report Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">{report.title}</h2>
        <p className="text-gray-500 mb-4">Detected on {report.detectedAt}</p>

        {/* Detection Summary */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-red-100 p-6 rounded-lg text-center">
            <p className="text-5xl font-bold text-red-600">{report.aiGeneratedPercentage}%</p>
            <p className="mt-2 text-red-800 font-medium">AI-Generated</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg text-center">
            <p className="text-5xl font-bold text-green-600">{report.humanWrittenPercentage}%</p>
            <p className="mt-2 text-green-800 font-medium">Human-Written</p>
          </div>
        </div>

        {/* Sources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Sources Detected</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-600">
            {report.sources.map((source, idx) => (
              <li key={idx}>
                <a href={source.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
