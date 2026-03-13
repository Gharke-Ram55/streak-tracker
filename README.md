# Daily Learning Streak Tracker

## Project Overview
This is a full stack web application that helps students track their daily study streak.

Users can:
- Mark "I Studied Today"
- View their current study streak
- View total study days
- See last studied date
- View study history
- Visualize activity with a heatmap

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- LocalStorage for data persistence
- Vercel for deployment

## Features
- Dashboard showing streak statistics
- Prevent duplicate study entries
- Automatic streak calculation
- Study history page
- GitHub-style activity heatmap

## Setup Instructions

1. Clone repository

git clone https://github.com/yourusername/daily-learning-streak-tracker

2. Install dependencies

npm install

3. Run project

npm run dev

4. Open browser

http://localhost:3000

## Streak Logic

- If user studies on consecutive days → streak increases
- If a day is missed → streak resets
- Duplicate entries are prevented
