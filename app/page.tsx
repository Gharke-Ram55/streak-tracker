"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Flame, CalendarDays, BarChart3 } from "lucide-react";

export default function Home() {

  const [streak, setStreak] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [lastDate, setLastDate] = useState<string | null>(null);

  const loadData = () => {

    const stored = localStorage.getItem("studyDates");
    const dates = stored ? JSON.parse(stored) : [];

    setTotalDays(dates.length);

    if (dates.length > 0) {
      setLastDate(dates[dates.length - 1]);
    }

    let streakCount = 0;

    for (let i = dates.length - 1; i >= 0; i--) {

      const today = new Date(dates[i]);
      const prev = new Date(dates[i - 1]);

      if (!prev) {
        streakCount++;
        break;
      }

      const diff =
        (today.getTime() - prev.getTime()) /
        (1000 * 60 * 60 * 24);

      if (diff === 1) {
        streakCount++;
      } else {
        streakCount++;
        break;
      }

    }

    setStreak(streakCount);

  };

  const markStudy = () => {

    const today = new Date().toISOString().split("T")[0];

    const stored = localStorage.getItem("studyDates");
    const dates = stored ? JSON.parse(stored) : [];

    if (dates.includes(today)) {
      alert("You already marked today!");
      return;
    }

    dates.push(today);

    localStorage.setItem("studyDates", JSON.stringify(dates));

    loadData();

  };

  useEffect(() => {
    loadData();
  }, []);

  return (

    <div className="min-h-screen bg-[#0F172A] text-white p-10">

      <h1 className="text-4xl font-bold text-center mb-12">
        📚 Daily Learning Streak Tracker
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        <div className="bg-slate-800/60 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center">
          <Flame className="mx-auto text-orange-400 mb-3" size={40} />
          <h2 className="text-lg text-gray-300">Current Streak</h2>
          <p className="text-4xl font-bold text-orange-400">{streak}</p>
        </div>

        <div className="bg-slate-800/60 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center">
          <BarChart3 className="mx-auto text-blue-400 mb-3" size={40} />
          <h2 className="text-lg text-gray-300">Total Study Days</h2>
          <p className="text-4xl font-bold text-blue-400">{totalDays}</p>
        </div>

        <div className="bg-slate-800/60 backdrop-blur-lg p-6 rounded-xl shadow-xl text-center">
          <CalendarDays className="mx-auto text-green-400 mb-3" size={40} />
          <h2 className="text-lg text-gray-300">Last Studied</h2>
          <p className="text-lg text-green-400">{lastDate ?? "Never"}</p>
        </div>

      </div>

      <div className="flex justify-center gap-6 mt-12">

        <button
          onClick={markStudy}
          className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          I Studied Today
        </button>

        <Link href="/history">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            View History
          </button>
        </Link>

      </div>

    </div>

  );
}