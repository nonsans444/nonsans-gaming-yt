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
  Twitter,
  X,
  Copy,
  Check,
  Award,
  Users,
  Cpu,
  Tv,
  Play,
  Volume2,
  Info
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
  accentColor,
  onClick
}: { 
  title: string, 
  icon: any, 
  desc: string, 
  image: string, 
  cta: string,
  accentColor: string,
  onClick?: () => void
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
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
  const [activeModal, setActiveModal] = useState<"bloodstrike" | "cs" | "minecraft" | "discord" | "twitter" | null>(null);
  const [copiedIP, setCopiedIP] = useState(false);
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  const copyIPToClipboard = () => {
    navigator.clipboard.writeText("play.nonsans.gg");
    setCopiedIP(true);
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const csClips = [
    {
      title: "AWP 1v5 Clutch - Mirage B-Site",
      duration: "0:45",
      views: "12,403",
      likes: "1,542",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Deagle Headshot Ace - Eco Round",
      duration: "0:18",
      views: "8,924",
      likes: "942",
      thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Nuke Vent Pop Double Entry",
      duration: "0:22",
      views: "5,110",
      likes: "432",
      thumbnail: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-void bold-theme-border">
      <FlameBorder intensity={flameIntensity} />
      
      {/* Header */}
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
          <button onClick={() => setActiveModal("discord")} className="hover:text-[#5865F2] transition-colors flex items-center gap-1 inline-flex cursor-pointer font-sans italic font-black text-[11px] uppercase tracking-widest">
            <Discord size={14} /> DISCORD
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920" // Premium Esports Setup
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
          className="absolute right-12 bottom-0 top-0 w-1/2 hidden lg:flex items-end justify-center pointer-events-none"
        >
          <img 
            src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200" // Premium Gaming Character Art
            className="h-[82%] object-contain drop-shadow-[0_0_50px_rgba(255,0,64,0.4)] rounded-2xl"
            alt="Gaming Avatar"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-void to-transparent" />
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
          <span className="text-[10px] uppercase font-bold tracking-widest animate-pulse">Scroll to Deploy</span>
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
              image="https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?auto=format&fit=crop&q=80&w=800" // Elite soldier
              desc="Master high-kill rotations, dominate custom lobbies, and equip the most lethal loadouts designed to wipe entire squads solo."
              onClick={() => setActiveModal("bloodstrike")}
            />
            <GameCard 
              title="Counter-Strike"
              icon={Sword}
              accentColor="#FF0040"
              cta="VIEW CLIPS"
              image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800" // Competitive gear setup
              desc="Refine your aim, master tactical utility, and experience high-stakes competitive gameplay where precision is everything."
              onClick={() => setActiveModal("cs")}
            />
            <GameCard 
              title="Minecraft & Beyond"
              icon={Box}
              accentColor="#4EDDCA"
              cta="EXPLORE WORLDS"
              image="https://images.unsplash.com/photo-1607988795691-3d0147b43231?auto=format&fit=crop&q=80&w=800" // 3D blocks Scenery
              desc="Experience modded survival, custom community servers, and massive architectural projects in the ultimate sandbox."
              onClick={() => setActiveModal("minecraft")}
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
            <div 
              onClick={() => setActiveModal("discord")}
              className="glass p-6 rounded-none border-l-4 border-l-[#5865F2] flex items-center gap-6 hover:bg-[#5865F2] transition-all group overflow-hidden relative cursor-pointer"
            >
              <Discord className="text-[#5865F2] group-hover:text-white z-10 animate-pulse" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm text-white">The Comm Discord</h4>
                <p className="text-[10px] text-gray-500 group-hover:text-white/80 uppercase">Live chat & community lobbies</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase text-white">#BASE-02</div>
            </div>
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
            <div 
              onClick={() => setActiveModal("twitter")}
              className="glass p-6 rounded-none border-l-4 border-l-[#1DA1F2] flex items-center gap-6 hover:bg-[#1DA1F2] transition-all group overflow-hidden relative cursor-pointer"
            >
              <Twitter className="text-[#1DA1F2] group-hover:text-white z-10" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm text-white">X (Twitter)</h4>
                <p className="text-[10px] text-gray-400 group-hover:text-white/80 uppercase">Real-time updates & announcements</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase text-white">#BASE-04</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cyber Modals */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-void/90 backdrop-blur-md"
            onClick={() => setActiveModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl glass p-8 border-l-4 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              style={{
                borderColor: 
                  activeModal === "bloodstrike" ? "#00FF95" :
                  activeModal === "cs" ? "#FF0040" :
                  activeModal === "minecraft" ? "#4EDDCA" :
                  activeModal === "discord" ? "#5865F2" : "#1DA1F2"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {activeModal === "bloodstrike" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Target className="text-emerald animate-pulse" size={32} />
                    <div>
                      <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white">BLOOD STRIKE SYSTEMS OPERATIONAL</h3>
                      <p className="text-xs font-mono text-emerald">CLASSIFIED METRICS // AUTHORIZED PERSONNEL ONLY</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-white/5 p-4 border border-white/5 text-center">
                      <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">CREATOR LEVEL</div>
                      <div className="text-xl font-black text-white">150 (MAX)</div>
                    </div>
                    <div className="bg-white/5 p-4 border border-white/5 text-center">
                      <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">AVERAGE K/D</div>
                      <div className="text-xl font-black text-emerald">4.82</div>
                    </div>
                    <div className="bg-white/5 p-4 border border-white/5 text-center">
                      <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">WIN RATE</div>
                      <div className="text-xl font-black text-white">78.5%</div>
                    </div>
                    <div className="bg-white/5 p-4 border border-white/5 text-center">
                      <div className="text-[10px] uppercase font-mono text-gray-400 tracking-wider">HIGHEST STREAK</div>
                      <div className="text-xl font-black text-hellfire">42 KILLS</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-black text-emerald tracking-widest flex items-center gap-2">
                      <Award size={14} /> ACTIVE TOURNAMENT LOADOUTS
                    </h4>
                    <div className="glass p-4 rounded-none space-y-2 text-sm">
                      <div className="flex justify-between items-center border-b border-white/5 pb-1">
                        <span className="font-bold text-white uppercase italic">KAG-6 (Primary Assault Rifle)</span>
                        <span className="text-[10px] font-mono text-emerald uppercase bg-emerald/10 px-2 py-0.5 animate-pulse">Laser Accurate</span>
                      </div>
                      <p className="text-xs text-gray-400">Custom high-mobility attachments designed specifically for solo vs squad wipes. Absolute dominant shred speed at mid-to-long ranges.</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="px-6 py-2 border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <a 
                      href="https://youtube.com/@nonsansgaming?si=GccwqK-r2ZDv7ylC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-emerald text-void text-xs font-black uppercase tracking-wider hover:bg-emerald/80 transition-all flex items-center gap-1 rounded-sm cursor-pointer"
                    >
                      Watch Movement Guide <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              )}

              {activeModal === "cs" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Sword className="text-hellfire" size={32} />
                    <div>
                      <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white">COUNTER-STRIKE 2 HIGHLIGHTS</h3>
                      <p className="text-xs font-mono text-hellfire">CLUTCH CLIPS PLAYLIST // FACEIT LVL 10</p>
                    </div>
                  </div>

                  {/* Simulated Media Player */}
                  <div className="relative aspect-video glass overflow-hidden border border-white/10 flex flex-col justify-end">
                    <img 
                      src={csClips[activeClipIndex].thumbnail} 
                      alt="Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent pointer-events-none" />
                    
                    {/* Centered Decorative Play Icon */}
                    <div className="absolute inset-x-0 top-0 bottom-12 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-hellfire/80 text-white flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(255,0,64,0.4)]">
                        <Play size={24} fill="white" className="ml-1" />
                      </div>
                    </div>

                    <div className="relative z-10 p-4 bg-void/80 border-t border-white/5 backdrop-blur-sm flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-mono text-hellfire tracking-widest uppercase">CLIP {activeClipIndex + 1} OF 3</div>
                        <h4 className="font-bold text-white text-sm uppercase italic leading-none">{csClips[activeClipIndex].title}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-gray-400">{csClips[activeClipIndex].duration}</span>
                        <Volume2 size={16} className="text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Clip Selection Selector */}
                  <div className="grid grid-cols-3 gap-3">
                    {csClips.map((clip, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveClipIndex(index)}
                        className={`text-left p-3 glass border transition-all text-xs flex flex-col justify-between h-20 cursor-pointer ${
                          activeClipIndex === index 
                            ? "border-hellfire bg-hellfire/15 text-white" 
                            : "border-white/5 text-gray-400 hover:border-white/20"
                        }`}
                      >
                        <span className="font-bold truncate uppercase">{clip.title}</span>
                        <span className="text-[9px] font-mono text-gray-500">{clip.views} views</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="px-6 py-2 border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <a 
                      href="https://youtube.com/@nonsansgaming?si=GccwqK-r2ZDv7ylC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-hellfire text-white text-xs font-black uppercase tracking-wider hover:bg-hellfire/80 transition-all flex items-center gap-1 rounded-sm cursor-pointer"
                    >
                      Full Video Playlist <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}

              {activeModal === "minecraft" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Box className="text-[#4EDDCA]" size={32} />
                    <div>
                      <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white">NONSANS COMMUNITY SMP</h3>
                      <p className="text-xs font-mono text-[#4EDDCA]">ACTIVE SERVERS // SERVER IP & SPECS</p>
                    </div>
                  </div>

                  {/* Interactive Server Connect Box */}
                  <div className="glass p-6 text-center space-y-4 border border-[#4EDDCA]/20 relative overflow-hidden">
                    <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 bg-[#4EDDCA]/10 rounded-full text-[9px] font-mono text-[#4EDDCA]">
                      <span className="w-2 h-2 rounded-full bg-[#4EDDCA] animate-pulse" />
                      ONLINE ● 24/50 PLAYERS
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-mono text-gray-400 tracking-widest">DIRECT SERVER CONNECT ADDRESS</div>
                      <div className="text-2xl font-black font-mono text-white tracking-wider">play.nonsans.gg</div>
                    </div>

                    <button 
                      onClick={copyIPToClipboard}
                      className="px-6 py-2.5 bg-[#4EDDCA] text-void font-black text-xs uppercase tracking-wider hover:bg-[#4EDDCA]/80 transition-all inline-flex items-center gap-2 rounded-sm cursor-pointer"
                    >
                      {copiedIP ? <Check size={14} /> : <Copy size={14} />}
                      {copiedIP ? "IP ADDRESS COPIED!" : "COPY IP ADDRESS"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass p-4 rounded-none space-y-2">
                      <h4 className="text-xs font-black uppercase text-[#4EDDCA] flex items-center gap-1">
                        <Cpu size={14} /> SERVER SPECIFICATIONS
                      </h4>
                      <p className="text-[11px] text-gray-400 font-mono leading-relaxed">
                        Intel Core i9-14900K High-Frequency Core <br />
                        32GB Dedicated Fast DDR5 Server RAM <br />
                        Enterprise PCIe NVMe Gen 4 Storage Array
                      </p>
                    </div>
                    <div className="glass p-4 rounded-none space-y-2">
                      <h4 className="text-xs font-black uppercase text-[#4EDDCA] flex items-center gap-1">
                        <Users size={14} /> INSTALLED ADVENTURE MODPACKS
                      </h4>
                      <p className="text-[11px] text-gray-400 font-mono leading-relaxed">
                        Create Mod (Mechanical Automation) <br />
                        Twilight Forest & BetterNether <br />
                        Iris/Oculus + Complementary Shaders v5
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-white/10">
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="px-6 py-2 border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {activeModal === "discord" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Discord className="text-[#5865F2]" size={32} />
                    <div>
                      <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white">THE COMM DISCORD NETWORK</h3>
                      <p className="text-xs font-mono text-[#5865F2]">SECURE GATEWAY // ENCRYPTED HANDSHAKE</p>
                    </div>
                  </div>

                  <div className="text-center space-y-4 py-8 glass border border-dashed border-[#5865F2]/20">
                    <div className="inline-flex w-16 h-16 rounded-full bg-[#5865F2]/10 text-[#5865F2] items-center justify-center mb-2 animate-bounce">
                      <Discord size={36} />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight text-white italic">ESTABLISHING COMMUNITY HANDSHAKE</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Custom lobby registration, tournament key distributions, scrim dates, and premium creator banter. The ultimate gamer comms center!
                    </p>
                    <div className="text-[10px] font-mono text-emerald">GATEWAY STATUS: READY FOR LAUNCH</div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="px-6 py-2 border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <a 
                      href="https://discord.gg" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#5865F2] text-white text-xs font-black uppercase tracking-wider hover:bg-[#5865F2]/80 transition-all flex items-center gap-1 rounded-sm cursor-pointer"
                    >
                      SECURE MATCH TICKET <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}

              {activeModal === "twitter" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Twitter className="text-[#1DA1F2]" size={32} />
                    <div>
                      <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white">X REAL-TIME UPDATES</h3>
                      <p className="text-xs font-mono text-[#1DA1F2]">NEWS TRANSMISSIONS // DIRECT ANNOUNCEMENTS</p>
                    </div>
                  </div>

                  <div className="text-center space-y-4 py-8 glass border border-dashed border-[#1DA1F2]/20">
                    <div className="inline-flex w-16 h-16 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] items-center justify-center mb-2 animate-pulse">
                      <Twitter size={36} />
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-tight text-white italic">REAL-TIME TELEMETRY STREAM</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                      Follow @nonsans_gaming for daily highlights, upcoming stream announcements, clips, memes, and game strategies as they drop first.
                    </p>
                    <div className="text-[10px] font-mono text-emerald">GATEWAY STATUS: READY FOR TRANSMISSION_</div>
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="px-6 py-2 border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <a 
                      href="https://twitter.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#1DA1F2] text-white text-xs font-black uppercase tracking-wider hover:bg-[#1DA1F2]/80 transition-all flex items-center gap-1 rounded-sm cursor-pointer"
                    >
                      ACCESS NETWORK STREAM <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
