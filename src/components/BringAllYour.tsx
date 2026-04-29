import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BringAllYour() {
  const cards = [
    { 
      id: 1, 
      tag: "Docs", 
      title: "Simple and powerful.", 
      color: "bg-[#379485]", 
      wide: false,
      delay: 0.1,
      image: "/Notion1.jpeg" 
    },
    { 
      id: 2, 
      tag: "Knowledge Base", 
      title: "One source of truth for teams and agents.", 
      color: "bg-[#529cca]", 
      wide: false,
      delay: 0.2,
      image: "/Notion2.jpeg"
    },
    { 
      id: 3, 
      tag: "Projects", 
      title: "Less tracking. More progress.", 
      color: "bg-[#93634b]", 
      wide: true,
      delay: 0.3,
      image: "/Notion3.jpeg"
    },
  ];

  return (
    <section className="max-w-[1100px] my-20 mx-auto px-6 font-sans">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[50px] font-extrabold mb-[50px] tracking-tight text-black"
      >
        Bring all your work together.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-5 md:pb-0 scrollbar-hide">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay, duration: 0.5 }}
            viewport={{ once: true }}
            className={`
              group relative flex flex-col rounded-2xl overflow-hidden border border-[#efefef] shadow-sm 
              snap-center min-w-[85vw] md:min-w-full
              ${card.wide ? 'md:col-span-2' : 'md:col-span-1'}
            `}
          >
            {/* Bagian Atas: Putih & Teks Hitam */}
            <div className="p-6 bg-white flex justify-between items-start z-10">
              <div>
                <span className="text-xs font-semibold text-gray-500 block mb-1 uppercase tracking-wider">
                  {card.tag}
                </span>
                <h3 className="text-xl font-bold text-black leading-tight max-w-[280px]">
                  {card.title}
                </h3>
              </div>
              <div className="bg-[#f5f5f5] group-hover:bg-[#f0f0f0] p-2 rounded-full transition-colors duration-200">
                <ArrowRight size={18} className="text-black" />
              </div>
            </div>

            {/* Bagian Bawah: Warna & Gambar */}
            <div className={`${card.color} flex-1 px-6 flex flex-col justify-end min-h-[320px]`}>
              <div className="bg-white rounded-t-xl p-3 h-[260px] translate-y-5 transition-transform duration-500 ease-out group-hover:translate-y-[-8px] shadow-[-4px_-20px_20px_rgba(0,0,0,0.08)]">
                {/* Header Mockup (Dot) */}
                <div className="flex gap-1.5 mb-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF605C]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD44]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00CA4E]" />
                </div>
                
                {/* Image Wrapper */}
                <div className="w-full h-full overflow-hidden rounded-sm border border-gray-100">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl italic font-serif text-gray-900">
          "Your AI everything app."
        </p>
        <p className="text-sm font-bold text-gray-400 mt-2 tracking-[0.1em] uppercase">
          Forbes
        </p>
      </div>
    </section>
  );
}