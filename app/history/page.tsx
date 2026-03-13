"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HistoryPage() {

  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {

    const stored = localStorage.getItem("studyDates");
    const history = stored ? JSON.parse(stored) : [];

    setDates(history.reverse());

  }, []);

  return (

    <div className="min-h-screen bg-[#0F172A] text-white p-10 flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-10">
        📅 Study History
      </h1>

      <div className="bg-slate-800/60 backdrop-blur-lg p-8 rounded-xl shadow-xl w-96">

        {dates.length === 0 ? (
          <p>No study history yet.</p>
        ) : (

          <ul className="space-y-3">

            {dates.map((date, index) => (
              <li
                key={index}
                className="border-b border-gray-600 pb-2"
              >
                {date}
              </li>
            ))}

          </ul>

        )}

      </div>

      <Link href="/">
        <button className="mt-8 bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition">
          Back to Dashboard
        </button>
      </Link>

    </div>

  );
}