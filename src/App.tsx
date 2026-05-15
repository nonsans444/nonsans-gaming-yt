import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Youtube, 
  Gamepad2, 
  Disc as Discord, 
  ChevronRight, 
  ExternalLink,
  Target,
  Sword,
  Box,
  Music,
  Twitter
} from "lucide-react";

// --- Components ---

const FlameBorder = ({ intensity = 1 }: { intensity?: number }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Top Flame */}
      <div 
        className="absolute top-0 left-0 w-full h-1 burning"
        style={{ 
          background: `linear-gradient(to bottom, var(--color-hellfire), transparent)`,
          boxShadow: `0 0 ${10 * intensity}px var(--color-hellfire)`,
          opacity: 0.6 * intensity
        }}
      />
      {/* Bottom Flame */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1 burning"
        style={{ 
          background: `linear-gradient(to top, var(--color-emerald), transparent)`,
          boxShadow: `0 0 ${10 * intensity}px var(--color-emerald)`,
          opacity: 0.6 * intensity
        }}
      />
      {/* Left Flame */}
      <div 
        className="absolute top-0 left-0 h-full w-1 burning"
        style={{ 
          background: `linear-gradient(to right, var(--color-hellfire), transparent)`,
          boxShadow: `0 ${10 * intensity}px 0 var(--color-hellfire)`,
          opacity: 0.4 * intensity
        }}
      />
      {/* Right Flame */}
      <div 
        className="absolute top-0 right-0 h-full w-1 burning"
        style={{ 
          background: `linear-gradient(to left, var(--color-emerald), transparent)`,
          boxShadow: `0 ${10 * intensity}px 0 var(--color-emerald)`,
          opacity: 0.4 * intensity
        }}
      />
    </div>
  );
};

const GlitchTitle = ({ text }: { text: string }) => {
  return (
    <div className="relative inline-block">
      <h1 
        className="text-5xl md:text-8xl font-black italic tracking-tighter glitch-text text-white font-sans uppercase leading-none"
        data-text={text}
      >
        {text}
      </h1>
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[105] p-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto group">
        <h2 className="text-3xl font-black italic tracking-tighter bg-gradient-to-r from-emerald to-hellfire bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_rgba(0,255,149,0.8)] transition-all cursor-default">
          NONSANS GAMING
        </h2>
      </div>

      <nav className="pointer-events-auto hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-400">
        <a href="#" className="text-white border-b border-hellfire pb-1">HOME</a>
        <a href="#games" className="hover:text-white transition-colors">ARCHIVE</a>
        <a href="https://youtube.com/@nonsansgaming?si=GccwqK-r2ZDv7ylC" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] transition-colors flex items-center gap-1">
          <img src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="YouTube" className="w-4 h-4 object-contain" /> YOUTUBE
        </a>
        <a href="https://www.tiktok.com/@nonsans_gaming?_r=1&_t=ZS-96NbYCaTxx6" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f2ea] transition-colors flex items-center gap-1">
          <img src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="TikTok" className="w-4 h-4 object-contain invert" /> TIKTOK
        </a>
        <a href="#" className="text-[#5865F2] hover:text-[#5865F2]/80 transition-colors flex items-center gap-1 inline-flex">
          <Discord size={14} /> DISCORD
        </a>
      </nav>
    </header>
  );
};

const GameCard = ({ 
  title, 
  icon: Icon, 
  desc, 
  image, 
  cta, 
  accentColor 
}: { 
  title: string, 
  icon: any, 
  desc: string, 
  image: string, 
  cta: string,
  accentColor: string
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden glass rounded-2xl p-1 transition-all hover:z-10 cursor-pointer`}
      style={{ boxShadow: `0 0 0px transparent` }}
    >
      <div className="absolute inset-0 bg-void/50 group-hover:bg-void/20 transition-colors z-10" />
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
      
      <div className="relative z-20 p-6 h-full flex flex-col justify-end min-h-[350px]">
        <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center`} style={{ backgroundColor: accentColor }}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-3xl font-black italic uppercase text-white mb-2 group-hover:text-hellfire transition-colors tracking-tighter">
          {title}
        </h3>
        <p className="text-[11px] text-gray-400 uppercase leading-tight mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {desc}
        </p>
        <button 
          className="w-full py-2 rounded-sm font-black text-[10px] uppercase tracking-widest transition-all border border-white/20 group-hover:border-emerald group-hover:bg-emerald/10"
        >
          {cta}
        </button>
      </div>

      {/* Fiery Border on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald/50 rounded-2xl transition-all" />
      <div 
        className="absolute -inset-1 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl z-0" 
        style={{ background: `radial-gradient(circle at center, ${accentColor}44, transparent)` }}
      />
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [flameIntensity, setFlameIntensity] = useState(1);

  return (
    <div className="relative min-h-screen bg-void bold-theme-border">
      <FlameBorder intensity={flameIntensity} />
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://wallpapercave.com/uwp/uwp4990869.jpeg" // Hero background
            className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Battlefield"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
        </div>

        {/* Character Visual */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:flex items-end justify-center pointer-events-none"
        >
          <img 
            src="https://i.pinimg.com/736x/8e/3c/6e/8e3c6e9f168866993a4b78575083a31c.jpg" // High-quality tactical striker placeholder
            className="h-[85%] object-contain drop-shadow-[0_0_50px_rgba(255,0,64,0.3)]"
            alt="Ran"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-void to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <GlitchTitle text="NONSANS GAMING" />
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-hellfire drop-shadow-[0_0_15px_rgba(255,0,64,0.5)]">
              NEXT-LEVEL
            </h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] mb-4 text-white/90 uppercase">
              GAMING ARCHIVE
            </h3>
            <p className="max-w-md text-gray-400 text-lg leading-relaxed border-l-2 border-emerald pl-4 font-medium italic">
              "Welcome to the official archive. Master high-tier movement in Blood Strike, witness legendary Counter-Strike clutches, and explore expert Minecraft engineering. We don't just play the game—we redefine it."
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
              <motion.a 
                href="https://youtube.com/@nonsansgaming?si=GccwqK-r2ZDv7ylC"
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setFlameIntensity(2)}
                onHoverEnd={() => setFlameIntensity(1)}
                className="skew-btn px-10 py-4 bg-[#FF0000] font-black uppercase italic tracking-tighter shadow-[0_0_20px_rgba(255,0,0,0.4)] flex items-center gap-3"
              >
                <img src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="YouTube" className="w-5 h-5 object-contain" /> WATCH YOUTUBE
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@nonsans_gaming?_r=1&_t=ZS-96NbYCaTxx6"
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setFlameIntensity(2)}
                onHoverEnd={() => setFlameIntensity(1)}
                className="skew-btn px-10 py-4 bg-black border border-cyan-400 text-white font-black uppercase italic tracking-tighter flex items-center gap-3"
              >
                <img src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="TikTok" className="w-5 h-5 object-contain invert" /> BROWSE TIKTOK
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest">Scroll to Deploy</span>
          <ChevronRight className="rotate-90" />
        </motion.div>
      </section>

      {/* Multiverse Section */}
      <section id="games" className="relative py-20 px-6 overflow-hidden">
        {/* Digital Smoke Effect background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hellfire blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto">
        <div className="mb-12 text-center md:text-left flex items-center">
          <h2 className="text-xl font-black italic uppercase tracking-tighter text-emerald">ENTER THE SIMULATION</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald to-transparent ml-8 opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GameCard 
            title="Blood Strike"
            icon={Target}
            accentColor="#00FF95"
            cta="ACCESS INTEL"
            image="https://wallpapercave.com/wp/wp13935941.jpg"
            desc="Master high-kill rotations, dominate custom lobbies, and equip the most lethal loadouts designed to wipe entire squads solo."
          />
          <GameCard 
            title="Counter-Strike"
            icon={Sword}
            accentColor="#FF0040"
            cta="VIEW CLIPS"
            image="https://wallpapercave.com/wp/NAhM1kp.jpg"
            desc="Refine your aim, master tactical utility, and experience high-stakes competitive gameplay where precision is everything."
          />
          <GameCard 
            title="Minecraft & Beyond"
            icon={Box}
            accentColor="#4EDDCA"
            cta="EXPLORE WORLDS"
            image="https://wallpapercave.com/wp/wp14418339.jpg"
            desc="Experience modded survival, custom community servers, and massive architectural projects in the ultimate sandbox."
          />
        </div>
      </div>
      </section>

      {/* Social Hub */}
      <section className="py-20 px-6 bg-obsidian/50 border-t border-b border-white/5">
        <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center md:text-left flex items-center">
          <h2 className="text-4xl font-black italic uppercase mb-4 tracking-tighter text-emerald">CONNECT TO THE NETWORK</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-emerald to-transparent ml-8 opacity-30" />
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://youtube.com/@nonsansgaming?si=GccwqK-r2ZDv7ylC" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-none border-l-4 border-l-[#FF0000] flex items-center gap-6 hover:bg-[#FF0000] transition-all group overflow-hidden relative"
            >
              <img src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="YouTube" className="w-10 h-10 object-contain z-10 brightness-0 invert group-hover:brightness-100 group-hover:invert-0" />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm text-white">Youtube Channel</h4>
                <p className="text-[10px] text-gray-500 group-hover:text-white/80 uppercase">Movement guides & High-kill games</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase text-white">#BASE-01</div>
            </a>
            <a href="#" className="glass p-6 rounded-none border-l-4 border-l-[#5865F2] flex items-center gap-6 hover:bg-[#5865F2] transition-all group overflow-hidden relative">
              <Discord className="text-[#5865F2] group-hover:text-white z-10" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm text-white">The Comm Discord</h4>
                <p className="text-[10px] text-gray-500 group-hover:text-white/80 uppercase">Live chat & community lobbies</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase text-white">#BASE-02</div>
            </a>
            <a 
              href="https://www.tiktok.com/@nonsans_gaming?_r=1&_t=ZS-96NbYCaTxx6" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-none border-l-4 border-l-[#00f2ea] flex items-center gap-6 hover:bg-black border-r-4 border-r-[#ff0050] transition-all group overflow-hidden relative"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png" alt="TikTok" className="w-10 h-10 object-contain z-10 invert group-hover:brightness-100 group-hover:invert-0" />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm text-white">TikTok Clips</h4>
                <p className="text-[10px] text-gray-400 group-hover:text-white/80 uppercase">Daily highlights & short montages</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase text-white">#BASE-03</div>
            </a>
            <a href="#" className="glass p-6 rounded-none border-l-4 border-l-[#1DA1F2] flex items-center gap-6 hover:bg-[#1DA1F2] transition-all group overflow-hidden relative">
              <Twitter className="text-[#1DA1F2] group-hover:text-white z-10" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm text-white">X (Twitter)</h4>
                <p className="text-[10px] text-gray-400 group-hover:text-white/80 uppercase">Real-time updates & announcements</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase text-white">#BASE-04</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 opacity-50">
        <div className="text-xs font-medium tracking-widest uppercase">
          © 2026 NONSANS • Built for the Gaming Community.
        </div>
        <div className="text-[10px] text-gray-400 max-w-sm text-center md:text-right leading-relaxed">
          Blood Strike, Counter-Strike, and Minecraft are properties of their respective developers. This is a fan-curated hub.
        </div>
      </footer>
    </div>
  );
}
