"use client";

import { useEffect, useState } from "react";

export default function Heatmap() {

  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {

    const stored = localStorage.getItem("studyDates");
    const history = stored ? JSON.parse(stored) : [];

    setDates(history);

  }, []);

  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split("T")[0];
  }).reverse();

  return (

    <div className="mt-16 max-w-xl mx-auto">

      <h2 className="text-xl font-semibold mb-4 text-center">
        Study Activity (Last 30 Days)
      </h2>

      <div className="grid grid-cols-10 gap-2 justify-center">

        {days.map((day) => {

          const studied = dates.includes(day);

          return (

            <div
              key={day}
              title={day}
              className={`w-6 h-6 rounded-sm ${
                studied
                  ? "bg-green-500"
                  : "bg-slate-700"
              }`}
            ></div>

          );

        })}

      </div>

    </div>

  );
}