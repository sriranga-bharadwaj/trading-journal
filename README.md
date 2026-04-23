 Trading Education Platform

A modern interactive trading education platform built with React, Vite, Node.js, and Tailwind CSS, designed to teach market concepts through structured content and real-time simulations.

Overview

Bharadwaj Learning Lab is a hybrid web application that combines:

 Curriculum-based learning modules
 Interactive trading simulator
 Concept-driven UI/UX (TCP Protocol, Orderblocks, etc.)

The platform bridges the gap between theory and execution by allowing users to learn → observe → apply in a single environment.

  Tech Stack
Frontend
 React (UI framework)
 Vite (fast development/build tool)
 Tailwind CSS (styling)
 Vanilla JavaScript (for simulator logic & canvas rendering)
   Backend
 Node.js
 Express.js
 MongoDB (for future user/data features)
 Project Structure
client/
├── public/              # Static curriculum pages & assets
│   ├── basics.html
│   ├── orderblocks.html
│   ├── psychology.html
│   ├── simulator.html
│   └── *.png
│
├── src/                 # React Application
│   ├── assets/          # Images used in React components
│   ├── App.jsx          # Main UI logic
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind/global styles
│
├── index.html           # Vite entry HTML
├── server.js            # Backend server
├── package.json         # Dependencies
└── vite.config.js       # Build config
 Features
 Learning Modules
Structured curriculum pages (Orderblocks, Psychology, Basics)
Visual diagrams and real-market concepts
Clean glassmorphism UI
 Trading Simulator
Real-time candle generation (Canvas-based)
TCP Protocol implementation:
T → Trigger
C → Confirmation
P → Participation
Smooth animated candles
Decision-based interaction (BUY/SELL)
Risk/Reward feedback system
 UI/UX
Dark-themed trading interface
Responsive layout
Smooth animations and transitions
Interactive hints and logs
 Getting Started
1. Install Dependencies
cd client
npm install
2. Run Development Server
npm run dev

App will run on:

http://localhost:5173
3. Run Backend Server
node server.js
 Navigation
/ → React Landing Page
/orderblocks.html → Orderblocks Module
/basics.html → Basics Module
/psychology.html → Psychology Module
/simulator.html → Trading Simulator
 Future Improvements
Convert all HTML modules into React pages
Add authentication & user progress tracking
Store trade results in MongoDB
Multi-scenario simulator engine
Real market data integration (APIs)
 Purpose

This project is built to demonstrate:

Real-world full-stack development
Interactive financial system simulations
Clean UI engineering with modular design
Practical application of problem-solving and system thinking

 Author
Sriranga Bharadwaj
