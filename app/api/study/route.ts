import { NextResponse } from "next/server";

let studyDates: string[] = [];

export async function POST() {

  const today = new Date().toISOString().split("T")[0];

  if (studyDates.includes(today)) {
    return NextResponse.json({
      message: "You have already marked today."
    });
  }

  studyDates.push(today);

  return NextResponse.json({
    message: "Study recorded successfully!"
  });

}
