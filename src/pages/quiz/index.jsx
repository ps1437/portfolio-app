"use client";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

import { questions as KafkaQuestion } from "../../quiz/data/kafka";
import { questions as ExceptionQuestion } from "../../quiz/data/exception";
import { questions as ThreadQuestion } from "../../quiz/data/multithread";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const topics = [
    {
      id: "kafka",
      title: "Kafka",
      description: "Streaming & messaging fundamentals.",
      color: "from-orange-400 to-pink-500",
      questions: KafkaQuestion,
    },
    {
      id: "exceptions",
      title: "Exception",
      description: "Java exception handling basics.",
      color: "from-red-500 to-yellow-500",
      questions: ExceptionQuestion,
    },
    {
      id: "threads",
      title: "Thread",
      description: "Concurrency and multithreading.",
      color: "from-blue-500 to-purple-500",
      questions: ThreadQuestion,
    },
  ].sort((a, b) => a.title.localeCompare(b.title));

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) =>
      `${topic.title} ${topic.description}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, topics]);

  // Floating dots configuration
  const floatingDots = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100 + "%",
    y: Math.random() * 100 + "%",
    size: Math.random() * 8 + 4,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 -z-20 animate-gradient-x bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 bg-[length:200%_200%]" />

      {/* Animated floating dots */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ y: dot.y }}
            animate={{ y: `-${dot.size * 10}px` }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
              delay: dot.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/10"
            style={{
              width: dot.size,
              height: dot.size,
              left: dot.x,
              top: dot.y,
            }}
          />
        ))}
      </div>

      <h1 className="text-5xl font-extrabold text-center mb-2">Quiz Master</h1>
      <p className="text-center text-lg text-white/70 mb-6">Sharpen your skills one question at a time.</p>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search quizzes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => router.push(`/quiz/${topic.id}`)}
              className="cursor-pointer bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 p-6 rounded-2xl border border-white/20 shadow-lg"
            >
              <span
                className={`inline-block bg-gradient-to-r ${topic.color} text-white px-3 py-1 rounded-full text-xs font-medium mb-4 float-right`}
              >
                {topic.title}
              </span>

              <h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
              <p className="text-sm text-white/80">{topic.description}</p>

              <div className="mt-4 text-sm text-white/60">
                <span className="bg-white/10 px-2 py-1 rounded">
                  🔢 {topic.questions.length} Questions
                </span>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-white/70">No topics found.</p>
        )}
      </div>
    </div>
  );
}
