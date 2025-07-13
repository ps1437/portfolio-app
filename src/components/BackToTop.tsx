"use client";
import { useEffect, useState } from "react";
import { ArrowUpCircleIcon } from "lucide-react";
import Link from "next/link";

export default function BackToTop() {



    return (
        <Link href="#hero" aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 dark:bg-yellow-500 dark:text-gray-950 dark:hover:bg-yellow-400 transition duration-300"
        >
            <ArrowUpCircleIcon className="w-6 h-6" />
        </Link>
    )

}
