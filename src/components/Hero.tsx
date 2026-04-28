import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import Container from "./ui/Container";

const FadeUp: React.FC<{
  delay?: number;
  children: React.ReactNode;
  className?: string;
}> = ({ delay = 0, children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#05051e] overflow-hidden pt-16 pb-32">
      {/* Efek Spotlight Utama */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[700px] pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(50% 50% at 50% 0%, #ffffff 0%, transparent 100%)",
        }}
      />

      <Container className="relative z-20 flex flex-col items-center text-center">
        {/* Headline */}
        <FadeUp delay={0.1}>
          <h1 className="text-white text-[52px] md:text-[76px] font-bold tracking-tight leading-[1.1] mb-6">
            Meet the night shift.
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-[#a1a1aa] text-lg md:text-[20px] max-w-[750px] mx-auto mb-10 leading-snug">
            Notion agents keep work moving 24/7. They capture knowledge, answer questions, and push projects forward—all while you sleep.
          </p>
        </FadeUp>

        {/* Buttons */}
        <FadeUp delay={0.3} className="flex flex-col sm:flex-row gap-4 mb-24">
          <Button className="bg-[#4669f2] hover:bg-[#3b59d1] text-white px-8 py-3.5 rounded-lg text-[16px] font-semibold transition-colors">
            Get Notion free
          </Button>
          <Button className="bg-[#1d1d31] hover:bg-[#272744] text-white border border-[#30304b] px-8 py-3.5 rounded-lg text-[16px] font-semibold transition-colors">
            Request a demo
          </Button>
        </FadeUp>

        {/* Workspace Video Mockup */}
        <div className="relative w-full max-w-[1100px] mx-auto">
          {/* Ilustrasi Dekoratif Samping (Optional, sesuaikan path jika ada) */}
          <div className="absolute -left-20 top-1/4 hidden lg:block w-56 opacity-80 pointer-events-none">
            {/* <img src="/left-illustration.png" alt="" /> */}
          </div>
          <div className="absolute -right-20 top-1/3 hidden lg:block w-56 opacity-80 pointer-events-none">
            {/* <img src="/right-illustration.png" alt="" /> */}
          </div>

          {/* Mockup Browser/App Frame */}
          <FadeUp delay={0.4} className="bg-white rounded-xl shadow-[0_0_60px_rgba(255,255,255,0.15)] overflow-hidden border border-white/5">
            {/* Browser Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#f7f7f5] border-b border-[#ededeb]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-[12px] text-gray-500 font-medium tracking-tight">Ramp HQ</div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-white">
              <video
                src="/hero-notion.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </Container>

      {/* Footer Brand Partners */}
      <div className="mt-24 flex flex-col items-center">
        <p className="text-white/40 text-[13px] font-medium mb-10 tracking-wide uppercase">
          Trusted by 98% of the Forbes Cloud 100
        </p>
        
        <div className="flex flex-col gap-10 items-center opacity-60 grayscale invert px-6">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {["OpenAI", "Figma", "ramp", "CURSOR", "Vercel", "NVIDIA", "VOLVO", "L'ORÉAL", "Discord"].map((brand) => (
              <span key={brand} className="text-white text-xl font-bold italic tracking-tighter">{brand}</span>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60">
            {["Lovable", "1Password", "affirm", "RIOT GAMES", "clay", "Remote", "FAIRE", "TOYOTA"].map((brand) => (
              <span key={brand} className="text-white text-sm font-bold tracking-widest uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;