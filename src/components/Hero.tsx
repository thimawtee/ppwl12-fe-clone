import React, { useRef, useState } from "react";
import Container from "./ui/Container";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPaused(false);
    } else {
      videoRef.current.pause();
      setPaused(true);
    }
  };

  <style>{`
    @keyframes pulseglow {
      0%   { opacity: 0.3; }
      10%  { opacity: 0.65; }
      20%  { opacity: 0.3; }
      100% { opacity: 0.3; }
    }
    `}</style>;

  const rowOneBrands = [
    {
      alt: "OpenAI",
      src: "https://images.ctfassets.net/spoqsaf9291f/4MHGeZRO6fDOLPVyJsLoyQ/73cf5bcef2edb384dc8989ebddd7975e/Company_openai__Colorway_White.svg",
    },
    {
      alt: "Figma",
      src: "https://images.ctfassets.net/spoqsaf9291f/5JgmuggsW4KO8pYqbKUUeW/9d4781445ff35516224384dc1c4f417c/figma-white.svg",
    },
    {
      alt: "Ramp",
      src: "https://images.ctfassets.net/spoqsaf9291f/1DEacqNIZ316cGgB4hhZRL/d77ff0228469f25ee2c76af41ef2e6ac/Company_Ramp__Colorway_White.svg",
    },
    {
      alt: "Cursor",
      src: "https://images.ctfassets.net/spoqsaf9291f/OJRQbA3XzRNfCfMh3UWf4/76408a06d9d9a1ed52fcd109b264de80/Company_Cursor__Colorway_White.svg",
    },
    {
      alt: "Vercel",
      src: "https://images.ctfassets.net/spoqsaf9291f/4Q8UO6GLVXAipkW53CHm33/8ccdeeb5bf1834ead706299d665eac72/Company_Vercel__Colorway_White.svg",
    },
    {
      alt: "Nvidia",
      src: "https://images.ctfassets.net/spoqsaf9291f/1Y4mbag3O14GsqnVtxgyZn/93c685d16fde556fff58eeeade5b49a7/Company_Nvidia__Colorway_White.svg",
    },
    {
      alt: "Volvo",
      src: "https://images.ctfassets.net/spoqsaf9291f/7ciuOUOhooC7cNnVsY107S/094eda50eab266d434b98ae4d02058bc/Company_Volvo__Colorway_White.svg",
    },
    {
      alt: "L'Oreal",
      src: "https://images.ctfassets.net/spoqsaf9291f/59zguR94wceWZDPFJKVIW6/a8c6beae3ee7122dccfcb4c01d9fcb81/Loreal-w.svg",
    },
    {
      alt: "Discord",
      src: "https://images.ctfassets.net/spoqsaf9291f/7g5fhJqqpJd9yV9NnCgFkY/30ee55c57abecc9a6a71e50cf82fe66a/Company_discord__Colorway_White.svg",
    },
  ];

  const rowTwoBrands = [
    {
      alt: "Lovable",
      src: "https://images.ctfassets.net/spoqsaf9291f/37SK9lIa1OaS0dMoDX6rCO/e2d6419a56b97b7d9a654d883e5c9da7/Lovable.png",
    },
    {
      alt: "1Password",
      src: "https://images.ctfassets.net/spoqsaf9291f/3KhAgvDae5snPMqs2lBxGn/e710daadbc24f003d47c74c1de8cf4c5/Company_1pass__Colorway_White.svg",
    },
    {
      alt: "Affirm",
      src: "https://images.ctfassets.net/spoqsaf9291f/3YKWf2H75kul3Qa0iVrzub/8def6306ad9c776ede00cd9b3480196b/Company_Affirm__Colorway_White.svg",
    },
    {
      alt: "Riot Games",
      src: "https://images.ctfassets.net/spoqsaf9291f/5NkNtsLPEfS7aqLZMFQyXg/be877e93ccf9d5397ec3f6f72aa0e359/Company_Riot_Games__Colorway_White.svg",
    },
    {
      alt: "Clay",
      src: "https://images.ctfassets.net/spoqsaf9291f/Nw4dcqUrln5PXqHhHr7JW/1485bf145058b040cb59bafb27738e06/clay-mono.svg",
    },
    {
      alt: "Remote",
      src: "https://images.ctfassets.net/spoqsaf9291f/QL9eDBH8yor68WZLs2cdZ/7637787e18a52cd3bfcffaaa469dd623/Company_Remote__Colorway_White.svg",
    },
    {
      alt: "Faire",
      src: "https://images.ctfassets.net/spoqsaf9291f/6HI6Z7JAuvLnNK8mDWdnF8/fd2d3b36fc27b8bbad2042136c7991f2/Company_faire__Colorway_White.svg",
    },
    {
      alt: "Toyota",
      src: "https://images.ctfassets.net/spoqsaf9291f/6tqMLcpPUToUSnubKnHkuZ/22f1df2d90af8a807f6fb8b39525215e/toyota.svg",
    },
  ];

  const floatingIcons = [
    {
      src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fagents%2Fbook.png&w=96&q=75",
      className: "left-[12%] top-[18%] w-12",
    },
    {
      src: "https://www.notion.com/front-static/agents/tasks/check.svg",
      className: "left-[3%] top-[28%] w-10",
    },
    {
      src: "https://www.notion.com/front-static/agents/tasks/gmail.svg",
      className: "left-[2%] top-[48%] w-10",
    },
    {
      src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fagents%2Fmailbox.png&w=96&q=75",
      className: "left-[10%] top-[60%] w-12",
    },

    {
      src: "https://www.notion.com/front-static/agents/tasks/github.svg",
      className: "right-[10%] top-[18%] w-10",
    },
    {
      src: "https://www.notion.com/front-static/agents/tasks/slack.svg",
      className: "right-[7%] top-[18%] w-10",
    },
    {
      src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fagents%2Flight_bulb.png&w=96&q=75",
      className: "right-[1%] top-[42%] w-12",
    },
    {
      src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fagents%2Fapple.png&w=96&q=75",
      className: "right-[5%] top-[58%] w-12",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#040b3c] overflow-hidden pt-28 pb-8">
      <style>{`
        @keyframes pulseglow {
          0% { opacity: 0.3; }
          10% { opacity: 0.65; }
          20% { opacity: 0.3; }
          100% { opacity: 0.3; }
        }
        
        @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
      `}</style>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[550px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(180,190,255,0.6) 0%, rgba(100,120,220,0.2) 50%, transparent 70%)",
          clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)",
          animation: "pulseglow 5s ease-in-out infinite",
        }}
      />

      {/* Decorative Lines Kanan */}
      <svg
        className="absolute right-0 top-[-5%] pointer-events-none z-10"
        style={{ width: "30%", height: "90%" }}
        viewBox="0 0 960 900"
        fill="none"
      >
        <path
          d="M959.69 156H74.82a70.4 70.4 0 0 0-17.04 138.72l357.76 89.21a86.04 86.04 0 0 1-8.19 168.59l-225.23 33.42a50.95 50.95 0 1 0 15.24 100.74l252.22-38.87C581.18 627.53 678.3 514.3 678.3 381.13V73.82a69.37 69.37 0 0 0-138.74 0v55.58c0 69.01 55.94 124.96 124.96 124.96h266.8"
          stroke="url(#gradRight)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B8FFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4A5FD4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Decorative Lines Kiri */}
      <svg
        className="absolute left-0 top-[-5%] pointer-events-none z-10"
        style={{ width: "30%", height: "90%" }}
        viewBox="-20 100 960 900"
        fill="none"
      >
        <path
          d="m-2.75 440.36 210.2-57.14a20 20 0 0 1 25.25 19.3v148.26a20 20 0 0 0 20 20h240.7a20 20 0 0 0 20-20V479.7c0-50.1 49.93-84.84 96.9-67.42l233.78 86.67a72.5 72.5 0 0 1-15.11 139.78l-174.75 24.57a41.1 41.1 0 0 1-46.83-40.7l.02-359.45a36.9 36.9 0 0 1 36.92-36.9h191.94a54.13 54.13 0 0 0 14.01-106.43l-428-114.68a31.58 31.58 0 0 0-39.76 30.5v170.6a20 20 0 0 1-20 20H-18.15"
          stroke="url(#gradLeft)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradLeft" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7B8FFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4A5FD4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt=""
          className={`absolute z-20 object-contain drop-shadow-xl ${icon.className}`}
          style={{
            animation: `float ${4 + index * 0.3}s ease-in-out infinite`,
          }}
        />
      ))}

      <Container className="relative z-20 flex flex-col items-center text-center -mt-6">
        <h1 className="text-white text-[40px] md:text-[65px] font-bold tracking-tight leading-[1.1] mb-3">
          Meet the night shift.
        </h1>

        <p className="text-white/70 text-base md:text-[18px] max-w-[600px] mx-auto mb-5 leading-snug">
          Notion agents keep work moving 24/7. They capture knowledge, answer
          questions, and push projects forward—all while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button className="bg-[#455dd3] hover:bg-[#607df6] text-white px-5 py-1.5 rounded-xl text-[16px] font-semibold transition-colors">
            Get Notion free
          </button>
          <button className="bg-[#213183] hover:bg-[#394ea3] text-white px-5 py-1.5 rounded-xl text-[16px] font-semibold transition-colors">
            Request a demo
          </button>
        </div>
      </Container>

      {/* Workspace Video Mockup */}
      <div className="relative z-20 w-full px-6 md:px-20 lg:px-32 max-w-[1380px] mx-auto mt-6">
        <div className="bg-white rounded-xl shadow-[0_0_60px_rgba(255,255,255,0.15)] overflow-hidden border border-white/5">
          <div
            className="relative w-full cursor-pointer group"
            style={{ aspectRatio: "1920 / 1200" }}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/hero-notion.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top"
            />

            <div
              className={`absolute bottom-3 left-3 transition-opacity duration-200 ${
                paused ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <div className="bg-black/50 rounded-md p-1.5">
                {paused ? (
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                    <polygon points="10,6 26,16 10,26" fill="white" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                    <rect
                      x="8"
                      y="6"
                      width="5"
                      height="20"
                      rx="1.5"
                      fill="white"
                    />
                    <rect
                      x="19"
                      y="6"
                      width="5"
                      height="20"
                      rx="1.5"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Brand Partners */}
      <div className="relative z-20 mt-8 flex flex-col items-center pb-6">
        <p className="text-[#c0c1ce] text-[16px] mb-8 tracking-wide">
          Trusted by 98% of the Forbes Cloud 100
        </p>

        <div className="w-full max-w-[1320px] mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-7 mb-7">
            {rowOneBrands.map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="max-h-6 w-auto object-contain opacity-90"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-7 opacity-70">
            {rowTwoBrands.map((brand) => (
              <img
                key={brand.alt}
                src={brand.src}
                alt={brand.alt}
                className="max-h-6 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Footer Brand Partners */}
        {/* Footer Brand Partners */}
  <div className="mt-6 flex flex-col items-center">
    <p className="text-[#c0c1ce] text-[16px]  mb-10 tracking-wide">
    Trusted by 98% of the Forbes Cloud 100
  </p>

    <div className="flex flex-col gap-8 items-center px-6">
      {/* Row 1 */}
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
        {[
          { alt: "OpenAI", src: "https://images.ctfassets.net/spoqsaf9291f/4MHGeZRO6fDOLPVyJsLoyQ/73cf5bcef2edb384dc8989ebddd7975e/Company_openai__Colorway_White.svg" },
          { alt: "Figma", src: "https://images.ctfassets.net/spoqsaf9291f/5JgmuggsW4KO8pYqbKUUeW/9d4781445ff35516224384dc1c4f417c/figma-white.svg" },
          { alt: "Ramp", src: "https://images.ctfassets.net/spoqsaf9291f/1DEacqNIZ316cGgB4hhZRL/d77ff0228469f25ee2c76af41ef2e6ac/Company_Ramp__Colorway_White.svg" },
          { alt: "Cursor", src: "https://images.ctfassets.net/spoqsaf9291f/OJRQbA3XzRNfCfMh3UWf4/76408a06d9d9a1ed52fcd109b264de80/Company_Cursor__Colorway_White.svg" },
          { alt: "Vercel", src: "https://images.ctfassets.net/spoqsaf9291f/4Q8UO6GLVXAipkW53CHm33/8ccdeeb5bf1834ead706299d665eac72/Company_Vercel__Colorway_White.svg" },
          { alt: "Nvidia", src: "https://images.ctfassets.net/spoqsaf9291f/1Y4mbag3O14GsqnVtxgyZn/93c685d16fde556fff58eeeade5b49a7/Company_Nvidia__Colorway_White.svg" },
          { alt: "Volvo", src: "https://images.ctfassets.net/spoqsaf9291f/7ciuOUOhooC7cNnVsY107S/094eda50eab266d434b98ae4d02058bc/Company_Volvo__Colorway_White.svg" },
          { alt: "L'Oreal", src: "https://images.ctfassets.net/spoqsaf9291f/59zguR94wceWZDPFJKVIW6/a8c6beae3ee7122dccfcb4c01d9fcb81/Loreal-w.svg" },
          { alt: "Discord", src: "https://images.ctfassets.net/spoqsaf9291f/7g5fhJqqpJd9yV9NnCgFkY/30ee55c57abecc9a6a71e50cf82fe66a/Company_discord__Colorway_White.svg" }
        ].map((brand) => (
          <img key={brand.alt} src={brand.src} alt={brand.alt} className="h-6 opacity-70" />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
        {[
          { alt: "Lovable", src: "https://images.ctfassets.net/spoqsaf9291f/37SK9lIa1OaS0dMoDX6rCO/e2d6419a56b97b7d9a654d883e5c9da7/Lovable.png" },
          { alt: "1Password", src: "https://images.ctfassets.net/spoqsaf9291f/3KhAgvDae5snPMqs2lBxGn/e710daadbc24f003d47c74c1de8cf4c5/Company_1pass__Colorway_White.svg" },
          { alt: "Affirm", src: "https://images.ctfassets.net/spoqsaf9291f/3YKWf2H75kul3Qa0iVrzub/8def6306ad9c776ede00cd9b3480196b/Company_Affirm__Colorway_White.svg" },
          { alt: "Riot Games", src: "https://images.ctfassets.net/spoqsaf9291f/5NkNtsLPEfS7aqLZMFQyXg/be877e93ccf9d5397ec3f6f72aa0e359/Company_Riot_Games__Colorway_White.svg" },
          { alt: "Clay", src: "https://images.ctfassets.net/spoqsaf9291f/Nw4dcqUrln5PXqHhHr7JW/1485bf145058b040cb59bafb27738e06/clay-mono.svg" },
          { alt: "Remote", src: "https://images.ctfassets.net/spoqsaf9291f/QL9eDBH8yor68WZLs2cdZ/7637787e18a52cd3bfcffaaa469dd623/Company_Remote__Colorway_White.svg" },
          { alt: "Faire", src: "https://images.ctfassets.net/spoqsaf9291f/6HI6Z7JAuvLnNK8mDWdnF8/fd2d3b36fc27b8bbad2042136c7991f2/Company_faire__Colorway_White.svg" },
          { alt: "Toyota", src: "https://images.ctfassets.net/spoqsaf9291f/6tqMLcpPUToUSnubKnHkuZ/22f1df2d90af8a807f6fb8b39525215e/toyota.svg" }
        ].map((brand) => (
          <img key={brand.alt} src={brand.src} alt={brand.alt} className="h-5 opacity-50" />
        ))}
      </div>
    </div>
  </div>
      </section>
    );
  };

export default Hero;
