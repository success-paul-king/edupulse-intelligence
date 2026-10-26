# EduPulse Intelligence — Frontend

A responsive React + Vite frontend for the EduPulse education intelligence platform.

## Included
- Separate screens for Home, Product, Technology, Pricing, Blog, About, Careers, Contact, Login, Get Started, and Attendance.
- White/blue visual system with subtle 3D-style dashboard visuals.
- Fade-in-on-scroll sections, floating visual elements, and responsive navigation.
- Attendance register demo with daily and weekly views, editable statuses, search, weekly percentages, and CSV export.
- Login and Get Started success states for the frontend flow.

## Run locally
1. Install Node.js (LTS) if it is not already installed.
2. Extract the ZIP and open the `edupulse-frontend` folder in VS Code.
3. Open the VS Code terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints, usually `http://localhost:5173`.

## Important implementation notes
- This is a frontend codebase. Login and form success states are interface flows, not real authentication or server-side submissions.
- Attendance records are currently held in React state and reset on refresh. No database or shared multi-user persistence is connected yet.
- Dashboard metrics and example student names are illustrative sample data.
- The weekly percentage currently counts Present and Late as attended and excludes Excused sessions from the denominator. Confirm each institution's attendance policy before production.
- The public contact form does not send email until a backend or form service is connected.
- Add backend authorization, input validation, tenant isolation, data retention, and privacy/security controls before using real student records.
