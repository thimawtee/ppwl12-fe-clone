import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// --- DATA (Tetap Sama) ---
const productMenu = {
  ai: [
    { label: "Notion AI", desc: "AI tools for work", icon: "🪄" },
    { label: "Agents", desc: "Automate busywork", icon: "🤖", badge: "New" },
    { label: "AI Meeting Notes", desc: "Perfectly written by AI", icon: "🎙️" },
    { label: "Enterprise Search", desc: "Find answers instantly", icon: "🔍" },
  ],
  wiki: [
    { label: "Knowledge Base", desc: "Centralize your knowledge", icon: "📖" },
    { label: "Docs", desc: "Simple and powerful", icon: "📄" },
    { label: "Projects", desc: "Manage any project", icon: "⚙️" },
  ],
  connect: [
    { label: "Integrations", desc: "Connect your apps", icon: "🔗" },
    { label: "Security", desc: "Safe and scalable", icon: "🔒" },
  ],
};

const solutionsMenu = {
  teams: ["Eng & Product", "Design", "Marketing", "IT"],
  companySize: ["Startups", "Small businesses", "Enterprise"],
  useCases: ["Education", "Personal", "Professional", "AI use cases"],
};

const aiMenu = {
  features: [
    { label: "Notion AI", desc: "AI tools for work", icon: "🪄" },
    { label: "Agents", desc: "Automate busywork", icon: "🤖", badge: "New" },
    { label: "AI Meeting Notes", desc: "Perfectly written by AI", icon: "🎙️" },
    { label: "Enterprise Search", desc: "Find answers instantly", icon: "🔍" },
  ],
  useCases: ["For work", "For life"],
};

const resourcesMenu = {
  browse: ["Templates", "Consultants", "Integrations"],
  discover: ["What's New", "Customer stories", "Blog", "Webinars"],
  learn: ["Academy", "Product tours", "Help"],
};

// --- STYLE DASAR ---
const dropdownBaseClass = "fixed top-[54px] left-1/2 -translate-x-1/2 mt-1 bg-white border border-[#e5e5e5] rounded-xl shadow-xl z-[1000] text-[#37352f] w-[850px] overflow-hidden flex flex-col h-auto";

// --- KOMPONEN KONTEN PRODUCT ---
const ProductContent = () => (
  <div className="flex flex-col w-full">
    <div className="p-3">
      <div className="bg-[#f6f6f5] rounded-xl border border-[#eeeeee] p-4 grid grid-cols-3 gap-4">
        <div className="col-span-2 flex items-center gap-3 p-1.5 rounded-lg hover:bg-[#efefef] cursor-pointer transition-colors w-fit">
          <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
            <img src="/Notion-logo.png" alt="Notion" className="w-10 h-10" />
          </div>
          <div>
            <div className="font-bold text-[15px] leading-tight text-[#37352f]">Notion</div>
            <div className="text-[11px] text-gray-500">Your AI workspace</div>
          </div>
        </div>
        <div className="flex flex-col gap-0.5 justify-center">
          <div className="flex items-center gap-2.5 p-1.5 hover:bg-[#efefef] rounded-lg cursor-pointer group">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-[14px] group-hover:border-blue-200">📅</div>
              <div className="text-[13px] font-medium group-hover:text-blue-600 transition-colors text-[#37352f]">Notion Calendar</div>
          </div>
          <div className="flex items-center gap-2.5 p-1.5 hover:bg-[#efefef] rounded-lg cursor-pointer group">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-[14px] group-hover:border-blue-200">✉️</div>
              <div className="text-[13px] font-medium group-hover:text-blue-600 transition-colors text-[#37352f]">Notion Mail</div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4 pt-2 grid grid-cols-3 gap-4">
      <div className="flex flex-col">
        {productMenu.ai.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5 p-1.5 hover:bg-[#f6f6f5] rounded-lg cursor-pointer group">
            <span className="text-base mt-0.5">{item.icon}</span>
            <div>
              <div className="text-[13px] font-semibold group-hover:text-blue-600 leading-tight mb-0.5 text-[#37352f]">
                {item.label} {item.badge && <span className="ml-1 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] rounded-full font-bold">{item.badge}</span>}
              </div>
              <div className="text-[11px] text-gray-500 leading-snug">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {productMenu.wiki.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5 p-1.5 hover:bg-[#f6f6f5] rounded-lg cursor-pointer group">
            <span className="text-base mt-0.5">{item.icon}</span>
            <div>
              <div className="text-[13px] font-semibold group-hover:text-blue-600 leading-tight mb-0.5 text-[#37352f]">{item.label}</div>
              <div className="text-[11px] text-gray-500 leading-snug">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {productMenu.connect.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5 p-1.5 hover:bg-[#f6f6f5] rounded-lg cursor-pointer group">
            <span className="text-base mt-0.5">{item.icon}</span>
            <div>
              <div className="text-[13px] font-semibold group-hover:text-blue-600 leading-tight mb-0.5 text-[#37352f]">{item.label}</div>
              <div className="text-[11px] text-gray-500 leading-snug">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="px-5 py-3 border-t border-[#f1f1f1] bg-[#fcfcfc] flex justify-between items-center text-[11px] text-gray-500">
      <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer group">
        <span className="text-sm">📦</span>
        <span>Rollups now as currency, percent, and more. <span className="underline decoration-gray-300 group-hover:decoration-blue-600">See what's new →</span></span>
      </div>
      <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer group font-medium">
        <span className="text-sm">💻</span>
        <span>Download the <span className="text-blue-600">Notion App →</span></span>
      </div>
    </div>
  </div>
);

// --- KOMPONEN KONTEN LAINNYA ---
const AIContent = () => (
  <div className="p-8 grid grid-cols-3 gap-8 w-full">
    <div className="flex items-start justify-center">
      <div className="rounded-lg p-4 w-full aspect-square flex items-center justify-center">
        <img src="/ai_group.png" alt="AI" className="w-full h-auto object-contain" />
      </div>
    </div>
    <div>
      <div className="text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-tight">AI features</div>
      <div className="flex flex-col">
        {aiMenu.features.map((item) => (
          <div key={item.label} className="flex items-start gap-2.5 p-1.5 hover:bg-[#f6f6f5] rounded-lg cursor-pointer group">
            <span className="text-base">{item.icon}</span>
            <div>
              <div className="text-[13px] font-semibold group-hover:text-blue-600 leading-tight mb-0.5 text-[#37352f]">{item.label}</div>
              <div className="text-[11px] text-gray-500 leading-snug">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="pl-4">
      <div className="text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-tight">Explore use cases</div>
      <div className="flex flex-col space-y-1">
        {aiMenu.useCases.map((text) => (
          <div key={text} className="text-[13px] font-medium p-1.5 hover:bg-[#f6f6f5] hover:text-blue-600 rounded-md cursor-pointer transition-colors text-[#37352f]">
            {text}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SolutionsContent = () => (
  <div className="p-8 grid grid-cols-3 gap-8 w-full">
    <div>
      <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider">Teams</div>
      <div className="space-y-1">
        {solutionsMenu.teams.map((t) => (
          <div key={t} className="text-[22px] font-bold hover:text-blue-600 cursor-pointer leading-tight transition-colors">{t}</div>
        ))}
      </div>
    </div>
    <div>
      <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider">Company size</div>
      <div className="space-y-1">
        {solutionsMenu.companySize.map((t) => (
          <div key={t} className="text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors leading-relaxed">{t}</div>
        ))}
      </div>
    </div>
    <div>
      <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider">Use Cases</div>
      <div className="space-y-1">
        {solutionsMenu.useCases.map((t) => (
          <div key={t} className="text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors leading-relaxed">{t}</div>
        ))}
      </div>
    </div>
  </div>
);

const ResourcesContent = () => (
  <div className="p-8 grid grid-cols-3 gap-8 w-full">
    <div>
      <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider">Browse</div>
      <div className="space-y-0.5">
        {resourcesMenu.browse.map((item) => (
          <div key={item} className="text-[22px] font-bold hover:text-blue-600 cursor-pointer leading-tight transition-colors">{item}</div>
        ))}
      </div>
    </div>
    <div>
      <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider">Discover</div>
      <div className="space-y-1">
        {resourcesMenu.discover.map((item) => (
          <div key={item} className="text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors leading-relaxed">{item}</div>
        ))}
      </div>
    </div>
    <div>
      <div className="text-[11px] font-semibold text-gray-400 mb-4 uppercase tracking-wider">Learn</div>
      <div className="space-y-1">
        {resourcesMenu.learn.map((item) => (
          <div key={item} className="text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors leading-relaxed">{item}</div>
        ))}
      </div>
    </div>
  </div>
);

// --- NAVBAR UTAMA ---
const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isAlreadyOpen, setIsAlreadyOpen] = useState(false);
  
  // --- TAMBAHKAN LOGIKA SCROLL DI SINI ---
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (activeMenu) setIsAlreadyOpen(true);
    else setIsAlreadyOpen(false);
    setActiveMenu(menu);
  };

  const handleMouseLeaveNavbar = () => {
    setActiveMenu(null);
    setIsAlreadyOpen(false);
  };

  const ArrowIcon = () => (
    <svg width="8" height="5" viewBox="0 0 8 5" className="opacity-60 transition-transform group-hover:translate-y-0.5">
      <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <nav 
      className={`fixed top-0 w-full h-[54px] flex items-center px-6 z-[999] transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-white border-[#e5e5e5] shadow-sm" 
          : "bg-[#0b1221] border-white/10"
      }`}
      onMouseLeave={handleMouseLeaveNavbar}
    >
      <div className="max-w-[1500px] mx-auto w-full flex items-center">
        {/* Logo Section */}
        <div className="flex-1 flex justify-start">
          <img 
            src="/Notion-logo.png" 
            alt="Notion Logo" 
            className={`h-7 w-auto cursor-pointer transition-all ${isScrolled ? "" : "invert brightness-200"}`} 
          />
        </div>

        {/* Links Section */}
        <div className={`flex items-center text-[14px] font-medium gap-1 justify-center transition-colors duration-300 ${
          isScrolled ? "text-[#37352f]" : "text-white/90"
        }`}>
          <button onMouseEnter={() => handleMouseEnter("product")} className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors group ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>
            Product <ArrowIcon />
          </button>
          <button onMouseEnter={() => handleMouseEnter("ai")} className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors group ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>
            AI <ArrowIcon />
          </button>
          <button onMouseEnter={() => handleMouseEnter("solutions")} className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors group ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>
            Solutions <ArrowIcon />
          </button>
          <button onMouseEnter={() => handleMouseEnter("resources")} className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors group ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>
            Resources <ArrowIcon />
          </button>
          <button onMouseEnter={handleMouseLeaveNavbar} className={`px-3 py-1.5 rounded ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>Enterprise</button>
          <button onMouseEnter={handleMouseLeaveNavbar} className={`px-3 py-1.5 rounded ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>Pricing</button>
          <button onMouseEnter={handleMouseLeaveNavbar} className={`px-3 py-1.5 rounded whitespace-nowrap ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>Request a demo</button>
        </div>

        {/* Right Section */}
        <div className={`flex-1 flex items-center justify-end gap-3 text-[14px] font-medium transition-colors duration-300 ${
          isScrolled ? "text-[#37352f]" : "text-white/90"
        }`}>
          <button className="bg-[#4483FD] hover:bg-[#3371ED] text-white px-4 py-1.5 rounded-[4px] font-semibold transition-all active:scale-95 shadow-lg shadow-blue-500/20">
            Get Notion free
          </button>
          <button onMouseEnter={handleMouseLeaveNavbar} className={`px-3 py-1.5 rounded transition-colors ${isScrolled ? "hover:bg-[#f6f6f5]" : "hover:bg-white/10"}`}>Log in</button>
        </div>
      </div>

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key="shared-dropdown"
            initial={{ opacity: 0, y: -15 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: isAlreadyOpen ? 0 : 0.2, ease: "easeOut" } 
            }}
            exit={{ 
              opacity: 0, 
              y: -15, 
              transition: { duration: 0.15, ease: "easeIn" } 
            }}
            className={dropdownBaseClass}
          >
            {activeMenu === "product" && <ProductContent />}
            {activeMenu === "ai" && <AIContent />}
            {activeMenu === "solutions" && <SolutionsContent />}
            {activeMenu === "resources" && <ResourcesContent />}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;