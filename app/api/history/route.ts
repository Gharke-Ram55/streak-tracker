import { NextResponse } from "next/server";

let studyDates: string[] = [];

export async function GET() {

  const sorted = [...studyDates].sort().reverse();

  return NextResponse.json(sorted);

}