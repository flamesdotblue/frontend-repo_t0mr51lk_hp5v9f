import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-3 text-white/70">
              I lead research and engineering across robotics, computer vision, and human-AI systems. My
              work focuses on robust perception, real‑time control, and intuitive tooling that pushes
              ideas from lab to production.
            </p>
            <ul className="mt-6 space-y-2 text-white/75 list-disc list-inside">
              <li>PhD in Robotics & Computer Vision</li>
              <li>Publications across top venues</li>
              <li>Open‑source maintainer & educator</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
            <h3 className="text-xl font-semibold tracking-tight">Highlights</h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Stat label="Years in R&D" value="10+" />
              <Stat label="Publications" value="25+" />
              <Stat label="Students mentored" value="50+" />
              <Stat label="Projects shipped" value="30+" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
}
