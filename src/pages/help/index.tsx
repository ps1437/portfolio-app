"use client";

import { useState } from "react";

export default function ReferralPrepPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

 const [form, setForm] = useState({
    name: "",
    contact: "",
    resume: "",
    refereeCompany: "",
    currentCompany: "",
    jobId: "",
  });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setMessage("✅ Referral submitted successfully!");
        setForm({
          name: "",
          contact: "",
          resume: "",
          refereeCompany: "",
          currentCompany: "",
          jobId: "",
        });
      } else {
        setMessage("❌ Something went wrong.");
      }
    } catch (err) {
      setMessage("⚠️ Failed to submit. Try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">
            🚀 Referral & Interview Preparation Hub
          </h1>
          <p className="text-gray-600">
            Looking for referrals or preparing for interviews? Explore curated
            resources for Java, UI, and System Design.
          </p>
        </div>

        {/* Referral Section */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            🔗 Ask for a Referral
          </h2>
          <p className="text-gray-600 mb-4">
            If you need a referral, please share your resume & details with the
            community or connect directly.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Request Referral
          </button>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Java */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                ☕ Java Interview
              </h3>
              <p className="text-gray-600 mt-2">
                Core Java, Spring Boot, Microservices, and DSA prep.
              </p>
            </div>
            <a
              href="https://github.com/ps1437/interview-preparations"
              target="_blank"
              className="mt-4 flex items-center justify-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              GitHub ↗
            </a>
          </div>

          {/* UI */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                🎨 UI Interview
              </h3>
              <p className="text-gray-600 mt-2">
                React, JavaScript, CSS, and frontend interview prep.
              </p>
            </div>
            <a
              href="https://github.com/ps1437/react-interview"
              target="_blank"
              className="mt-4 flex items-center justify-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              GitHub ↗
            </a>
          </div>

          {/* HLD/LLD */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">🛠️ HLD / LLD</h3>
              <p className="text-gray-600 mt-2">
                System design master series for HLD & LLD prep.
              </p>
            </div>
            <a
              href="https://github.com/ps1437/HLD-LLD---master-series"
              target="_blank"
              className="mt-4 flex items-center justify-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              📝 Request Referral
            </h2>

             <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border p-2 rounded"
              />
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full border p-2 rounded"
              />
              <input
                name="resume"
                value={form.resume}
                onChange={handleChange}
                placeholder="Resume Link (Google Drive / LinkedIn)"
                className="w-full border p-2 rounded"
              />
              <input
                name="refereeCompany"
                value={form.refereeCompany}
                onChange={handleChange}
                placeholder="Referee Company Name"
                className="w-full border p-2 rounded"
              />
              <input
                name="currentCompany"
                value={form.currentCompany}
                onChange={handleChange}
                placeholder="Current Company Name"
                className="w-full border p-2 rounded"
              />
              <input
                name="jobId"
                value={form.jobId}
                onChange={handleChange}
                placeholder="Job ID / Link"
                className="w-full border p-2 rounded"
              />

              {message && <p className="text-sm text-center">{message}</p>}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {/* Close Button (X) */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
