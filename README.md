# 🩺 AI Medical Voice Agent — Real-Time Doctor Powered by AI

Welcome to the **AI Medical Voice Agent** — a real-time voice-enabled virtual doctor that listens to your symptoms, understands your health concerns using AI, and provides instant feedback.

This full-stack SaaS application is built with **Next.js, React, TypeScript, AssemblyAI, Clerk Authentication, and NeonDB (PostgreSQL)** — and is designed for modern AI-based healthcare platforms.

🌐 **Live App:** [ai-medical-agent-two.vercel.app](https://ai-medical-agent-two.vercel.app)

---

## 🧠 What This Project Does

This project simulates a **virtual medical assistant** that works like a voice-based AI doctor. Users can:

- Speak directly to the app.
- Get real-time transcription of their speech.
- Receive intelligent, context-aware AI responses.
- Save conversation history securely.
- See Medical Reports
---

## 🔧 Tech Stack & Tools

🧑‍💻 Frontend   | React, Next.js , TailwindCSS 

🧠 AI Engine  | AssemblyAI (Speech-to-Text + AI),  OpenAI 

🔐 Auth       | Clerk.dev         

🗃️ Database   | NeonDB (Serverless PostgreSQL) (Drizzle orm)

🔌 Hosting    | Vercel (Serverless deployment)   

🧰 Language   | TypeScript                    

---

## 🚀 Features at a Glance

- 🎙️ **Real-time Voice Input** with AssemblyAI
- 🧾 **Live Transcription** of user speech
- 🧠 **Symptom Understanding** using AI logic
- 📥 **Secure Login** via Clerk
- 📚 **View Conversation History and Medical Reports**
- 🧪 **Medical Prompt Engineering** to simulate doctor-like responses
- 📱 **Mobile-Responsive UI** with TailwindCSS
- ⚡ **Fully Serverless** on Vercel

---
<img width="1881" height="805" alt="image" src="https://github.com/user-attachments/assets/9882c162-8fe5-42ac-bcc4-87f07f063fe4" />


## 📂 Project Structure

```bash
ai-medical-agent/
│
├── app/                # Next.js App Router (frontend + API)
│   ├── api/voice       # API route for transcription + AI logic
│   ├── dashboard/      # User dashboard (view saved chats)
│   └── components/     # Reusable UI components
│
├── lib/                # AssemblyAI & Clerk utility functions
├── db/                 # Prisma schema & NeonDB config
├── public/             # Static assets
├── .env.local          # Environment variables
└── README.md           # Project overview


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
