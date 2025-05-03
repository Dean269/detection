import { useState } from "react";

function LandingPage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please upload a PDF file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("No file selected!");
      return;
    }

    // In the future: POST this to your backend
    console.log("File ready for upload:", file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Check Your Document for Plagiarism</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4 w-full border p-2 rounded"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Upload and Check
        </button>
      </form>
    </div>
  );
}

export default LandingPage;
