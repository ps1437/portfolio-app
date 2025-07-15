"use client";

import Link from "next/link";
import React from "react";

type IconProps = {
  className?: string;
};

const ArrowUpCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="32" fill="#FFD400" />
    <path
      d="M32 44C31.4477 44 31 43.5523 31 43V25.4142L25.7071 30.7071C25.3166 31.0976 24.6834 31.0976 24.2929 30.7071C23.9024 30.3166 23.9024 29.6834 24.2929 29.2929L31.2929 22.2929C31.6834 21.9024 32.3166 21.9024 32.7071 22.2929L39.7071 29.2929C40.0976 29.6834 40.0976 30.3166 39.7071 30.7071C39.3166 31.0976 38.6834 31.0976 38.2929 30.7071L33 25.4142V43C33 43.5523 32.5523 44 32 44Z"
      fill="#1C1C1C"
    />
  </svg>
);

export default function BackToTop() {
  return (
    <Link
      href="#hero"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 dark:bg-yellow-500 dark:text-gray-950 dark:hover:bg-yellow-400 transition duration-300"
    >
      <ArrowUpCircleIcon className="w-6 h-6" />
    </Link>
  );
}
