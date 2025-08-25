"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoteMePage() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const qaId = "QA-UPI-LOL-0001";

  const copyQa = async () => {
    try {
      await navigator.clipboard.writeText(qaId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-fuchsia-600 via-rose-500 to-amber-400 p-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="relative rounded-3xl p-8 md:p-12 bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 text-white overflow-hidden">
          {/* floating shapes */}
          <motion.div
            className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-black/10 blur-2xl"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          />

          <header className="mb-8 text-center">
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm"
            >
              🚀 Promote Me, Pretty Please!
            </motion.h1>
            <p className="mt-3 text-white/90 max-w-prose mx-auto">
              One small click for you, one giant leap for my career. Totally legit. Absolutely not a scam. Pinky promise. 🫶
            </p>
          </header>

          <div className="flex items-center justify-center">
            <motion.button
              onClick={() => setOpen(true)}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-lg font-semibold bg-white text-fuchsia-700 shadow-lg hover:shadow-2xl transition-all border-2 border-fuchsia-200 hover:border-fuchsia-400"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <span className="i-tada">Promote Me</span>
              <motion.span
                initial={{ rotate: -10 }}
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
                aria-hidden
              >
                🥳
              </motion.span>
            </motion.button>
          </div>

          <footer className="mt-10 text-center text-xs text-white/70">
            *By clicking, you consent to being mildly amused.
          </footer>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="promo-title"
              className="relative z-10 w-full max-w-lg"
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
            >
              <div className="rounded-3xl border border-white/30 bg-white shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-amber-300 via-pink-300 to-fuchsia-300 p-6 text-center">
                  <h2 id="promo-title" className="text-2xl md:text-3xl font-extrabold text-fuchsia-900 drop-shadow-sm">
                    🎉 Instant Promotion™ Checkout
                  </h2>
                  <p className="mt-2 text-fuchsia-900/80">
                    For a teeny-tiny fee of <span className="font-black text-fuchsia-900">$99,999</span>, your promotion is 100% guaranteed.*
                  </p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl" aria-hidden>🧪</span>
                    <div>
                      <p className="font-semibold">Kindly pay to QA (Quality Assurance).</p>
                      <p className="text-sm text-gray-600">Because who else ensures quality promotions? Exactly.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border p-4">
                      <p className="text-xs text-gray-500">Beneficiary</p>
                      <p className="font-semibold">Engineer team</p>
                      <p className="text-xs text-gray-500 mt-1">Reference (copy):</p>
                      <div className="mt-1 flex items-center gap-2">
                        <code className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-xs">{qaId}</code>
                        <button
                          onClick={copyQa}
                          className="text-xs underline decoration-dotted"
                          aria-label="Copy QA reference"
                        >
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>
                    </div>

                    <div className="rounded-2xl border p-4">
                      <p className="text-xs text-gray-500">Amount</p>
                      <p className="text-2xl font-black tracking-tight">
                        $99,999.00
                        <span className="align-super text-xs font-bold ml-1">USD</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">(plus a complimentary high-five 🙌)</p>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    *Terms & conditions: Not legally binding, scientifically dubious, spiritually uplifting.
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-2 border border-gray-300 hover:bg-gray-50"
                  >
                    Maybe later
                  </button>
                  <button
                    onClick={() => alert("LOL. Nice try. Use company-approved paths for real promotions! 🎖️")}
                    className="rounded-xl px-5 py-2.5 font-semibold bg-fuchsia-600 text-white shadow hover:bg-fuchsia-700"
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* confetti-ish emojis */}
            <motion.div
              className="pointer-events-none fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl select-none"
                  style={{ left: `${(i * 89) % 100}%`, top: `${(i * 37) % 100}%` }}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: [0, 10, -4, 0], opacity: [0, 1, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 3 + (i % 5), delay: i * 0.05 }}
                  aria-hidden
                >
                  {i % 3 === 0 ? "💸" : i % 3 === 1 ? "✨" : "🎊"}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
