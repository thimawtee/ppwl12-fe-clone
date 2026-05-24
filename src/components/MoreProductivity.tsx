import { useState } from "react";

const tools = [
  { name: "AI Search", price: 35 },
  { name: "AI Chatbot", price: 20 },
  { name: "AI Meeting Notes", price: 18 },
  { name: "AI Writing Assistant", price: 20 },
  { name: "AI Email App", price: 30 },
  { name: "AI Research", price: 40 },
  { name: "Calendar Scheduling", price: 15 },
  { name: "Team Wiki", price: 10 },
  { name: "Project Management Tool", price: 24 },
  { name: "Basic CRM", price: 20 },
  { name: "Site Builder", price: 20 },
  { name: "Forms", price: 15 },
];

const NOTION_PRICE_PER_USER = 16;

export default function MoreProductivity() {
  const [teamSize, setTeamSize] = useState(10);

  const totalToolsCost = tools.reduce((sum, t) => sum + t.price, 0);
  const notionCost = NOTION_PRICE_PER_USER;
  const monthlySavings = Math.max(0, (totalToolsCost - notionCost) * teamSize);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
            More productivity. Fewer tools.
          </h2>
          <p className="text-gray-500 text-lg">
            Bring all your tools and teams under one roof. Calculate savings below.
          </p>
          <a
            href="https://www.notion.com/pricing"
            className="inline-flex items-center text-gray-900 font-medium mt-2 hover:underline"
          >
            See pricing plans →
          </a>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tools List */}
          <div className="flex-1">
            <div className="space-y-2">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between py-2 border-b border-gray-100"
                >
                  <span className="text-gray-700 text-sm">{tool.name}</span>
                  <span className="text-gray-400 text-sm">${tool.price}/user</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator */}
          <div className="lg:w-80 flex flex-col gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Team size</p>
              <div className="flex items-center gap-4 mb-4">
                <input
                  type="range"
                  min={1}
                  max={500}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="flex-1 accent-black"
                />
                <span className="text-gray-900 font-semibold w-10 text-right">
                  {teamSize}
                </span>
              </div>

              <div className="space-y-4 mt-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    Monthly savings
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    ${monthlySavings.toLocaleString('en-US')}

                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    Annual savings
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    ${annualSavings.toLocaleString('en-US')}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Savings calculated by comparing average market prices of individual tools vs Notion Plus plan at ${NOTION_PRICE_PER_USER}/user/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}