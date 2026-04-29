import { useState } from "react";

const mainTestimonial = {
  logo: "OpenAI",
  quote:
    "There's power in a single platform where you can do all your work. Notion is that single place.",
  link: "https://www.notion.com/customers/openai",
};

const testimonials = [
  {
    logo: "Toyota",
    quote: "Streamlined workflows to reduce timelines by 3x.",
    link: "https://www.notion.com/customers/toyota",
  },
  {
    logo: "Ramp",
    quote:
      "Agents get created in three minutes between meetings, then hours of manual operational work disappear.",
    link: "https://www.notion.com/customers/ramp",
  },
  {
    logo: "Vercel",
    quote: "Notion understands that you can solve a lot of problems with one tool.",
    link: "https://www.notion.com/customers/vercel",
  },
  {
    logo: "Match",
    quote: "Notion has been the most powerful and impactful way to streamline our workflow.",
    link: "https://www.notion.com/customers/match",
  },
  {
    logo: "Cursor",
    quote:
      "Using the most AI‑native tools like Notion is an important competitive advantage for us.",
    link: "https://www.notion.com/customers/cursor",
  },
  {
    logo: "Figma",
    quote: "One hub for work and AI keeps everyone informed and work flowing.",
    link: "https://www.notion.com/customers/figma",
  },
];

const stats = [
  "Over 100M users worldwide",
  "#1 knowledge base 3 years running (G2)",
  "#1 AI enterprise search (G2)",
  "#1 rated AI writing (G2)",
  "62% of Fortune 100",
  "Over 50% of YC companies",
  "1.4M+ community members",
];

export default function TrustedByTeams() {
  const [activeVideo, setActiveVideo] = useState(false);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Trusted by teams that ship.
        </h2>

        {/* Main Testimonial - OpenAI */}
        <div className="bg-gray-50 rounded-3xl p-10 mb-8 border border-gray-100">
          <p className="text-2xl font-semibold text-gray-800 mb-2 font-mono">OpenAI</p>
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl">
            "{mainTestimonial.quote}"
          </blockquote>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveVideo(!activeVideo)}
              className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors"
            >
              {activeVideo ? "Hide video" : "View the video"}
            </button>
            <a
              href={mainTestimonial.link}
              className="text-sm text-gray-900 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full story →
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {testimonials.map((t) => (
            <a
              key={t.logo}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-gray-300 hover:bg-gray-100 transition-all group"
            >
              <p className="text-lg font-bold text-gray-900 mb-3 font-mono">{t.logo}</p>
              <p className="text-gray-600 text-sm leading-relaxed">"{t.quote}"</p>
              <span className="text-gray-400 text-xs mt-3 inline-block group-hover:text-gray-700 transition-colors">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Scrolling Stats */}
        <div className="overflow-hidden border-t border-b border-gray-100 py-4">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...stats, ...stats].map((stat, i) => (
              <span key={i} className="text-gray-500 text-sm shrink-0">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}