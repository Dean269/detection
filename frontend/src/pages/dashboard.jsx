import { Link } from "react-router-dom";

const mockSubmissions = [
  { id: 1, title: "Essay on AI Ethics", date: "2025-05-01", status: "Completed" },
  { id: 2, title: "Blog Post: Future of Work", date: "2025-05-02", status: "Pending" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-2">
      {/* Top Bar */}
      <div className="w-full max-w-3xl flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link to="/" className="text-gray-500 hover:underline">
          ← Home
        </Link>
      </div>

      {/* Start Detection */}
      <div className="w-full max-w-3xl flex justify-end mb-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Start New Detection
        </button>
      </div>

      {/* Past Submissions */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Past Submissions</h2>
        <div className="space-y-4">
          {mockSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="flex flex-col md:flex-row md:justify-between md:items-center border-b pb-2 gap-2"
            >
              <div>
                <h3 className="font-medium">{submission.title}</h3>
                <p className="text-sm text-gray-500">{submission.date}</p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    submission.status === "Completed"
                      ? "bg-green-200 text-green-800"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {submission.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
