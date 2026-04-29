import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BringAllYour() {
  const cards = [
    { 
      id: 1, 
      tag: "Docs", 
      title: "Simple and powerful.", 
      color: "#379485", // Hijau Toska
      wide: false,
      delay: 0.1,
      image: "/Notion1.jpeg" 
    },
    { 
      id: 2, 
      tag: "Knowledge Base", 
      title: "One source of truth for teams and agents.", 
      color: "#529cca", // Biru
      wide: false,
      delay: 0.2,
      image: "/Notion2.jpeg"
    },
    { 
      id: 3, 
      tag: "Projects", 
      title: "Less tracking. More progress.", 
      color: "#93634b", // Cokelat
      wide: true,
      delay: 0.3,
      image: "/Notion3.jpeg"
    },
  ];

  return (
    <section style={styles.section}>
      <style>{`
        .feature-card:hover .mockup-ui {
          transform: translateY(-8px) !important;
        }
        .feature-card:hover .arrow-circle {
          background: #f0f0f0 !important;
        }
        @media (max-width: 768px) {
          .features-grid {
            display: flex !important;
            overflow-x: auto !important;
            gap: 16px !important;
            padding-bottom: 20px;
          }
          .feature-card {
            min-width: 85vw !important;
          }
          .card-wide {
            grid-column: span 1 !important;
          }
        }
      `}</style>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.1] mb-6 text-[#1a1a2e]'
      >
        Bring all your work together.
      </motion.h2>

      <div className="features-grid" style={styles.grid}>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay, duration: 0.5 }}
            viewport={{ once: true }}
            className={`feature-card ${card.wide ? 'card-wide' : ''}`}
            style={{
              ...styles.card,
              gridColumn: card.wide ? 'span 2' : 'span 1',
            }}
          >
            {/* Bagian Atas: Background Putih & Teks Hitam */}
            <div style={styles.topSection}>
              <div>
                <span style={styles.cardTag}>{card.tag}</span>
                <h3 style={styles.cardSubtitle}>{card.title}</h3>
              </div>
              <div className="arrow-circle" style={styles.arrowCircle}>
                <ArrowRight size={18} color="black" />
              </div>
            </div>

            {/* Bagian Bawah: Background Berwarna & Gambar */}
            <div style={{ ...styles.bottomSection, backgroundColor: card.color }}>
              <div className="mockup-ui" style={styles.mockupUi}>
                <div style={styles.mockupHeader}>
                  <div style={{...styles.dot, backgroundColor: '#FF605C'}} />
                  <div style={{...styles.dot, backgroundColor: '#FFBD44'}} />
                  <div style={{...styles.dot, backgroundColor: '#00CA4E'}} />
                </div>
                <div style={styles.imageContainer}>
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    style={styles.image}
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

      <div style={styles.forbesContainer}>
        <p style={styles.quoteText}>"Your AI everything app."</p>
        <p style={styles.forbesTag}>Forbes</p>
      </div>
    </section>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    maxWidth: '1100px',
    margin: '80px auto',
    padding: '0 24px',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
  },
  card: {
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #efefef',
    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
  },
  topSection: {
    padding: '24px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bottomSection: {
    flex: 1,
    padding: '0 24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    minHeight: '320px',
  },
  cardTag: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#666',
    display: 'block',
    marginBottom: '4px',
  },
  cardSubtitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#000',
    margin: 0,
  },
  arrowCircle: {
    background: '#f5f5f5',
    borderRadius: '50%',
    padding: '8px',
    display: 'flex',
    transition: '0.2s ease',
  },
  mockupUi: {
    backgroundColor: 'white',
    borderRadius: '10px 10px 0 0',
    padding: '12px',
    height: '260px',
    transition: 'transform 0.4s ease',
    boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
  },
  mockupHeader: {
    display: 'flex',
    gap: '5px',
    marginBottom: '10px'
  },
  dot: { width: '6px', height: '6px', borderRadius: '50%' },
  imageContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '4px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
  },
  forbesContainer: { marginTop: '60px', textAlign: 'center' },
  quoteText: { fontSize: '20px', fontStyle: 'italic', fontFamily: 'serif' },
  forbesTag: { fontSize: '14px', fontWeight: 'bold', color: '#888', marginTop: '8px' }
};