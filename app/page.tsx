"use client";

import { useState } from "react";

const tournaments = [
  {
    id: 1,
    title: "Free Fire Battle",
    prize: "₹500",
    mode: "Squad",
    players: "28/48",
    time: "7:00 PM",
  },
  {
    id: 2,
    title: "Pro Championship",
    prize: "₹1,500",
    mode: "Squad",
    players: "16/24",
    time: "8:00 PM",
  },
  {
    id: 3,
    title: "Sahu Grand Cup",
    prize: "₹3,000",
    mode: "Squad",
    players: "72/100",
    time: "9:00 PM",
  },
];

export default function HomePage() {
  const [pressed, setPressed] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">

          <a href="/" className="text-xl font-black">
            SAHU<span className="text-cyan-400">ESPORTS</span>
          </a>

          <a
            href="/tournaments"
            className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition-all active:scale-90"
          >
            Tournaments
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">

        <div className="text-center">

          <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
            🔥 INDIA'S GAMING TOURNAMENT HUB
          </div>

          <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
            PLAY.
            <span className="text-cyan-400"> COMPETE.</span>
            <br />
            WIN. 🏆
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Join exciting Free Fire tournaments, compete with players
            and prove your skills.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/tournaments"
              className="rounded-2xl bg-cyan-400 px-7 py-4 font-black text-slate-950 shadow-lg shadow-cyan-400/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              VIEW TOURNAMENTS →
            </a>

            <a
              href="#tournaments"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-black transition-all hover:bg-white/10 active:scale-95"
            >
              EXPLORE
            </a>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-3">

        {[
          ["🏆", "Competitive", "Play exciting tournaments."],
          ["⚡", "Fast Registration", "Join tournaments quickly."],
          ["💎", "Big Rewards", "Compete for prize pools."],
        ].map(([icon, title, text]) => (

          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <div className="text-4xl">{icon}</div>

            <h3 className="mt-4 text-xl font-black">
              {title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {text}
            </p>
          </div>

        ))}

      </section>

      {/* TOURNAMENTS */}
      <section
        id="tournaments"
        className="mx-auto max-w-6xl px-5 py-16"
      >

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-sm font-bold text-cyan-400">
              LIVE EVENTS
            </p>

            <h2 className="mt-1 text-3xl font-black">
              Upcoming Tournaments
            </h2>
          </div>

          <a
            href="/tournaments"
            className="text-sm font-bold text-slate-400 transition hover:text-white"
          >
            View all →
          </a>

        </div>

        <div className="grid gap-5 md:grid-cols-3">

          {tournaments.map((tournament) => (

            <div
              key={tournament.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >

              <div className="flex h-36 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-6xl">
                🎮
              </div>

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-black text-green-400">
                    ● OPEN
                  </span>

                  <span className="font-black text-yellow-400">
                    {tournament.prize}
                  </span>

                </div>

                <h3 className="mt-4 text-xl font-black">
                  {tournament.title}
                </h3>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">

                  <div className="rounded-xl bg-black/20 p-3">
                    <p className="text-slate-500">MODE</p>
                    <p className="mt-1 font-bold">
                      {tournament.mode}
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/20 p-3">
                    <p className="text-slate-500">PLAYERS</p>
                    <p className="mt-1 font-bold">
                      {tournament.players}
                    </p>
                  </div>

                  <div className="rounded-xl bg-black/20 p-3">
                    <p className="text-slate-500">START</p>
                    <p className="mt-1 font-bold">
                      {tournament.time}
                    </p>
                  </div>

                </div>

                <a
                  href={`/tournaments/${tournament.id}`}
                  onTouchStart={() => setPressed(tournament.id)}
                  onTouchEnd={() => setPressed(null)}
                  className={`mt-5 block w-full rounded-2xl bg-cyan-400 py-4 text-center font-black text-slate-950 transition-all hover:bg-cyan-300 ${
                    pressed === tournament.id
                      ? "scale-95"
                      : "scale-100"
                  }`}
                >
                  VIEW TOURNAMENT →
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-600">
        © 2026 Sahu Esports • All rights reserved.
      </footer>

    </main>
  );
}
