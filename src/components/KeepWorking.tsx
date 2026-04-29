import { useState, useEffect } from "react";
import {
  MessageSquare,
  Zap,
  Shield,
  BarChart3,
  MessagesSquare,
  Clock,
  ArrowRight,
  CheckSquare,
  FolderClosed,
  Sparkles,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────

const agents = [
  {
    title: "Q&A agents",
    description: "Answers questions instantly using knowledge you already have.",
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    iconBg: "bg-orange-500 rounded-full",
    video: "web-qa-agent-4x3_final.mp4",
    videoBg: "bg-orange-100",
  },
  {
    title: "Task routing agents",
    description: "Assigns, prioritizes, and routes tasks on its own.",
    icon: <CheckSquare className="w-5 h-5 text-white" />,
    iconBg: "bg-purple-500 rounded-lg",
    video: "web-task-router-1488x1116-coloredBG_final.mp4",
    videoBg: "bg-purple-100",
  },
  {
    title: "Reporting agents",
    description: "Auto-generate weekly and monthly reports from your data.",
    icon: <FolderClosed className="w-5 h-5 text-white" />,
    iconBg: "bg-teal-600 rounded-lg",
    video: "reportingagent.mp4",
    videoBg: "bg-teal-100",
  },
  {
    title: "Create your own",
    description: "Build a custom agent tailored to your team's exact workflow.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
    iconBg: "bg-pink-500 rounded-lg",
    video: "createown.mp4",
    videoBg: "bg-pink-100",
  },
];

const useCases = [
  {
    icon: <MessagesSquare className="w-5 h-5 text-orange-500" />,
    title: "Triage product feedback",
    iconBg: "bg-orange-100",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-amber-600" />,
    title: "Resolve support tickets in Slack",
    iconBg: "bg-amber-100",
  },
  {
    icon: <Shield className="w-5 h-5 text-rose-500" />,
    title: "Respond to security alerts faster",
    iconBg: "bg-rose-100",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-cyan-600" />,
    title: "Automate weekly reporting",
    iconBg: "bg-cyan-100",
  },
];

// ── Main Component ────────────────────────────────────────────────

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % agents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <main className="min-h-screen bg-[#f9f9f8]">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
 
        {/* Heading */}
        <div>
          <h2 className="font-inter text-4xl md:text-5xl lg:text-[52px] font-bold text-[#1a1a2e] mb-10 md:mb-12 tracking-tight leading-[1.1]">
            Keep work moving 24/7.
          </h2>
        </div>
 
        {/* MAIN GRID */}
        {/* Parent grid ini sudah bagus pakai minHeight */}
        <div className="grid gap-3 mb-3 items-stretch" style={{ gridTemplateColumns: '2fr 3fr', minHeight: 420 }}>

          {/* LEFT CARD */}
          {/* Hapus style={{ height: 'auto' }} karena ini sifat bawaan (default) */}
          <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 relative overflow-hidden flex flex-col" style={{ height: '420px' }}>
            
            {/* HAPUS style={{ height: '420px' }} di sini. Biarkan h-full yang bekerja */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-medium text-gray-600">Custom Agents</span>
                <span className="bg-[#e0f2fe] text-[#0ea5e9] text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
                  New
                </span>
              </div>

              <h3 className="text-[24px] md:text-[28px] font-bold text-black leading-tight mb-3">
                Automate repetitive<br />work for your team.
              </h3>

              <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center mb-4">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* Agent List */}
              {/* HAPUS style={{ height: '420px' }} di sini agar list bisa memanjang sesuai isi */}
              <div className="flex flex-col">
                {agents.map((agent, agentIdx) => (
                  <div
                    key={agent.title}
                    onClick={() => setActiveSlide(agentIdx)}
                    className="py-4 border-b border-gray-100 last:border-b-0 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${agent.iconBg}`}>
                        {agent.icon}
                      </div>
                      <span className="font-bold text-base text-black">
                        {agent.title}
                      </span>
                    </div>

                    {/* Description — slide down when active */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        activeSlide === agentIdx
                          ? "max-h-40 opacity-100 mt-2" // TIP: Ubah max-h-20 jadi max-h-40 kalau teks deskripsinya lumayan panjang
                          : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="text-gray-500 text-sm ml-14 leading-relaxed">
                        {agent.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 h-full w-4 bg-[#fdf4eb]" />
          </div>

          {/* RIGHT CARD — Video */}
          {/* Ubah style height jadi h-full agar tingginya otomatis sama dengan Left Card karena efek items-stretch */}
          
          <div className="rounded-3xl relative overflow-hidden" style={{ height: '420px' }}>
            {agents.map((agent, agentIdx) => (
              <div
                key={agent.title}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeSlide === agentIdx
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                {/* Placeholder background */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${agent.videoBg}`}>
                  <div className="text-5xl opacity-20">▶</div>
                  <p className="text-xs font-mono text-gray-400">{agent.video}</p>
                </div>

                {/* Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={agent.video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

        </div>
 
        {/* Indicators + Label */}
        <div className="mb-12">
          <div className="flex items-center gap-1.5 mb-2">
            {agents.map((agent, agentIdx) => (
              <button
                key={agent.title}
                type="button"
                onClick={() => setActiveSlide(agentIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  agentIdx === activeSlide ? "bg-[#1a1a2e] w-5" : "bg-gray-300 w-1.5"
                }`}
              />
            ))}
          </div>
          <h4 className="font-semibold text-[#1a1a2e] text-[15px]">
            {agents[activeSlide].title}
          </h4>
          <p className="text-gray-500 text-[14px]">
            {agents[activeSlide].description}
          </p>
        </div>
 
        {/* BOTTOM SECTION */}
        <div className="mb-3">
          <p className="text-gray-400 text-sm mb-3">See what Custom Agents can do</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 items-stretch">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="bg-white rounded-xl border border-gray-100 p-4 hover:border-gray-200 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl ${useCase.iconBg} flex items-center justify-center mb-6`}>
                    {useCase.icon}
                  </div>
                  <span className="font-medium text-[#1a1a2e] text-[14px] leading-tight block mb-2">
                    {useCase.title}
                  </span>
                </div>
                <div className="flex justify-end">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#1a1a2e] transition-all" />
                </div>
              </div>
            ))}
 
            {/* CTA */}
            <div className="bg-[#1a1a2e] rounded-xl p-4 cursor-pointer hover:bg-[#252544] transition-colors group flex flex-col">
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-7 h-7 rounded-lg bg-[#0ea5e9]/20 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-[#0ea5e9]" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 text-rose-400" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-white font-medium text-[14px]">Create your own Custom Agent</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </main>
  );
}