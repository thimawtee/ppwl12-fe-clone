import React from 'react';
import Container from './ui/Container';

const footerData = [
  {
    heading: 'Company',
    links: ['About us', 'Careers', 'Security', 'Status', 'Terms & privacy', 'Your privacy rights'],
  },
  {
    heading: 'Download',
    links: ['iOS & Android', 'Mac & Windows', 'Mail', 'Calendar', 'Web Clipper'],
  },
  {
    heading: 'Resources',
    links: ['Help center', 'Pricing', 'Blog', 'Community', 'Integrations', 'Templates', 'Partner programs'],
  },
  {
    heading: 'Notion for',
    links: ['Enterprise', 'Small business', 'Personal', 'Explore more →'],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#f1f1f1] text-[#37352f] pt-16 pb-24">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-4 justify-between items-start">
          
          {/* Sisi Kiri: Branding, Language, & Socials */}
          <div className="flex flex-col min-w-[220px]">
            {/* Logo Notion Panjang (REVISI: Perbesar sedikit) */}
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="/notion-logo-panjang.png" 
                alt="Notion Logo" 
                className="h-[35px] w-auto" // Ukuran diperbesar sedikit dari h-7 ke ~34px
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#73726e] mb-11">
              <svg className="hover:text-black cursor-pointer transition-colors" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <svg className="hover:text-black cursor-pointer transition-colors" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <svg className="hover:text-black cursor-pointer transition-colors" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <svg className="hover:text-black cursor-pointer transition-colors" width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <svg className="hover:text-black cursor-pointer transition-colors" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>

            {/* Language Selector */}
            <div className="mb-4">
              <button className="flex items-center gap-2 px-2.5 py-1.5 border border-[#e5e5e5] rounded-[5px] text-[14px] hover:bg-[#f6f6f5] transition-colors font-medium">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path d="M12 3c2.144 2.5 3.5 5.5 3.5 9s-1.356 6.5-3.5 9"/><path d="M12 3c-2.144 2.5-3.5 5.5-3.5 9s1.356 6.5 3.5 9"/><path d="M3 12h18"/></svg>
                <span>English (US)</span>
                <span className="text-[9px] ml-0.5 text-[#91918e]">▼</span>
              </button>
            </div>

            {/* Cookie & Copyright */}
            <div className="space-y-1 mt-auto">
               <button className="text-[14px] text-[#73726e] hover:underline block text-left mb-3">Cookie settings</button>
               <p className="text-[14px] text-[#73726e]">© 2026 Notion Labs, Inc.</p>
            </div>
          </div>

          {/* Sisi Kanan: Grid Link */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-16">
            {footerData.map((col) => (
              <div key={col.heading} className="flex flex-col">
                <h4 className="text-[14px] font-semibold text-[#37352f] mb-1">{col.heading}</h4>
                <ul className="flex flex-col gap-[3px]">
                  {col.links.map((link) => {
                    const isExplore = link.includes('Explore more');
                    return (
                      <li key={link}>
                        <a 
                          href="#" 
                          className={`text-[14px] transition-all block leading-normal ${
                            isExplore 
                            ? "font-semibold text-[#37352f] hover:text-[#0665d0] mt-4" 
                            : "text-[#73726e] hover:text-[#0665d0] hover:underline"
                          }`}
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;