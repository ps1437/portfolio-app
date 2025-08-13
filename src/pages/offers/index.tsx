"use client";
import { motion } from "framer-motion";

export default function IndependenceDaySale() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Resume Review Request";
    const body = `Hi Praveen,%0A%0AI have attached my resume. Please review.%0A%0AThank you.`;
    window.location.href = `mailto:praveen369soni@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-400 via-white to-green-400 flex items-center justify-center p-4 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 animate-pulse">
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center border-4 border-orange-400"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-800"
        >
          🇮🇳 Independence Day Special 🎉
        </motion.h1>

        <p className="mt-3 text-xl text-gray-700 font-medium">
          IT Professionals! Boost Your Career With a{" "}
          <span className="text-orange-500 font-bold">Resume Makeover</span>  
          — Only <span className="text-green-600 font-bold">₹99/-</span>
        </p>

        <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg text-sm text-gray-600">
          Perfect for <span className="font-semibold">Developers, Testers, Designers, Cloud Engineers</span>  
          & anyone looking to land their dream IT job 🚀
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            type="submit"
            className="bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition duration-300 font-bold text-lg shadow-md hover:shadow-lg"
          >
            📩 Claim My Independence Day Offer
          </button>
        </motion.form>

        <p className="mt-5 text-sm text-gray-500">
          Offer valid till <span className="font-semibold">15th August</span> only.  
          Hurry! Limited slots available.
        </p>
      </motion.div>
    </div>
  );
}
