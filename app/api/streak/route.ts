import { NextResponse } from "next/server";
import { calculateStreak } from "@/lib/streakLogic";

let studyDates: string[] = [];

export async function GET() {

  const { streak, lastDate } = calculateStreak(studyDates);

  return NextResponse.json({
    currentStreak: streak,
    totalDays: studyDates.length,
    lastStudied: lastDate
  });

}