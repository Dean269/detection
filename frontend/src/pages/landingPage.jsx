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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!file) {
      setError("No file selected!");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await fetch("http://localhost:8000/api/upload/", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to upload. Server responded with an error.");
      }
  
      const data = await response.json();
      console.log("Upload success:", data);
  
      // Redirect or show success message
      // For example: navigate("/dashboard") after a successful upload
      // or display the plagiarism report link
  
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Something went wrong while uploading.");
    }
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
