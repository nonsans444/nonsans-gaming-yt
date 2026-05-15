import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Youtube, 
  Gamepad2, 
  Disc as Discord, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
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
          background: `linear-gradient(to top, var(--color-amethyst), transparent)`,
          boxShadow: `0 0 ${10 * intensity}px var(--color-amethyst)`,
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
          background: `linear-gradient(to left, var(--color-amethyst), transparent)`,
          boxShadow: `0 ${10 * intensity}px 0 var(--color-amethyst)`,
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
        className="text-7xl md:text-9xl font-black italic tracking-tighter glitch-text text-white font-sans uppercase leading-none"
        data-text={text}
      >
        {text}
      </h1>
    </div>
  );
};

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 glass rounded-full flex items-center gap-4 transition-all hover:bg-white/10">
      <audio 
        ref={audioRef} 
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder Phonk-ish loop
      />
      
      <button 
        onClick={togglePlay}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-hellfire text-white transition-transform hover:scale-110 active:scale-95"
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
      </button>

      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-bold tracking-widest text-amethyst">Now Playing</span>
        <span className="text-xs font-mono truncate max-w-[120px]">Phonk / Synthwave Mix</span>
      </div>

      <div className="flex items-center gap-1 h-4 px-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={isPlaying ? { height: [4, 16, 8, 14, 4] } : { height: 4 }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
            className="w-1 bg-hellfire rounded-full"
          />
        ))}
      </div>

      <button onClick={() => setIsMuted(!isMuted)}>
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[105] p-6 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto group">
        <h2 className="text-3xl font-black italic tracking-tighter bg-gradient-to-r from-amethyst to-hellfire bg-clip-text text-transparent group-hover:drop-shadow-[0_0_15px_rgba(157,78,221,0.8)] transition-all cursor-default">
          NONSANS
        </h2>
      </div>

      <nav className="pointer-events-auto hidden md:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-gray-400">
        <a href="#" className="text-white border-b border-hellfire pb-1">[ HOME ]</a>
        <a href="#" className="hover:text-white transition-colors">[ BLOOD STRIKE ]</a>
        <a href="#" className="hover:text-white transition-colors">[ OTHER GAMES ]</a>
        <a href="#" className="text-amethyst hover:text-amethyst/80 transition-colors flex items-center gap-1 inline-flex">
          [ THE COMM DISCORD ]
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
          className="w-full py-2 rounded-sm font-black text-[10px] uppercase tracking-widest transition-all border border-white/20 group-hover:border-amethyst group-hover:bg-amethyst/10"
        >
          {cta}
        </button>
      </div>

      {/* Fiery Border on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amethyst/50 rounded-2xl transition-all" />
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
      <AudioPlayer />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" // Battlefield placeholder
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
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
            className="h-[85%] object-contain drop-shadow-[0_0_50px_rgba(230,57,70,0.3)]"
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
            <GlitchTitle text="NONSANS" />
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-hellfire drop-shadow-[0_0_15px_rgba(230,57,70,0.5)]">
              NEXT-LEVEL
            </h2>
            <h3 className="text-xl md:text-2xl font-bold tracking-[0.2em] mb-4 text-white/90">
              ⚡ GAMING ARCHIVE ⚡
            </h3>
            <p className="max-w-md text-gray-400 text-lg leading-relaxed border-l-2 border-amethyst pl-4 font-medium italic">
              "Welcome to the official hub. From high-tier movement guides to intense clutches—we don't just play the game, we break it."
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
              <motion.button 
                onHoverStart={() => setFlameIntensity(2)}
                onHoverEnd={() => setFlameIntensity(1)}
                className="skew-btn px-10 py-4 bg-hellfire font-black uppercase italic tracking-tighter shadow-[0_0_20px_rgba(230,57,70,0.4)]"
              >
                📺 WATCH YOUTUBE
              </motion.button>
              <motion.button 
                onHoverStart={() => setFlameIntensity(2)}
                onHoverEnd={() => setFlameIntensity(1)}
                className="skew-btn px-10 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-black uppercase italic tracking-tighter"
              >
                🎵 BROWSE TIKTOK
              </motion.button>
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amethyst blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hellfire blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 container mx-auto">
        <div className="mb-12 text-center md:text-left flex items-center">
          <h2 className="text-xl font-black italic uppercase tracking-tighter text-amethyst">// ENTER THE SIMULATION</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-amethyst to-transparent ml-8 opacity-30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GameCard 
            title="Blood Strike"
            icon={Target}
            accentColor="#9D4EDD"
            cta="Access Intel"
            image="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2000"
            desc="High-kill games, custom lobby chaos, and the absolute best loadouts to wipe lobbies solo-vs-squad."
          />
          <GameCard 
            title="Counter-Strike"
            icon={Sword}
            accentColor="#E63946"
            cta="View Clips"
            image="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2000"
            desc="Raw aim, tactical smokes, and competitive clips. Where the old-school FPS grind never stops."
          />
          <GameCard 
            title="Minecraft & Beyond"
            icon={Box}
            accentColor="#4EDDCA"
            cta="Explore Worlds"
            image="https://images.unsplash.com/photo-1587573089734-09cb99c5f068?q=80&w=2000"
            desc="Taking a break from the sweat. Modded survival, community servers, and late-night chill streams."
          />
        </div>
      </div>
      </section>

      {/* Social Hub */}
      <section className="py-20 px-6 bg-obsidian/50 border-t border-b border-white/5">
        <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center md:text-left flex items-center">
          <h2 className="text-4xl font-black italic uppercase mb-4 tracking-tighter text-amethyst">// CONNECT TO THE NETWORK</h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-amethyst to-transparent ml-8 opacity-30" />
        </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#" className="glass p-6 rounded-none border-l-4 border-l-hellfire flex items-center gap-6 hover:bg-hellfire transition-all group overflow-hidden relative">
              <Youtube className="text-hellfire group-hover:text-white z-10" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm">Youtube Channel</h4>
                <p className="text-[10px] text-gray-500 group-hover:text-white/80 uppercase">Movement guides & High-kill games</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase">#BASE-01</div>
            </a>
            <a href="#" className="glass p-6 rounded-none border-l-4 border-l-[#5865F2] flex items-center gap-6 hover:bg-[#5865F2] transition-all group overflow-hidden relative">
              <Discord className="text-[#5865F2] group-hover:text-white z-10" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm">The Comm Discord</h4>
                <p className="text-[10px] text-gray-500 group-hover:text-white/80 uppercase">Live chat & community lobbies</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase">#BASE-02</div>
            </a>
            <a href="#" className="glass p-6 rounded-none border-l-4 border-l-cyan-500 flex items-center gap-6 hover:bg-cyan-500 transition-all group overflow-hidden relative">
              <Music className="text-cyan-500 group-hover:text-white z-10" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm">TikTok Clips</h4>
                <p className="text-[10px] text-gray-400 group-hover:text-white/80 uppercase">Daily highlights & short montages</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase">#BASE-03</div>
            </a>
            <a href="#" className="glass p-6 rounded-none border-l-4 border-l-[#1DA1F2] flex items-center gap-6 hover:bg-[#1DA1F2] transition-all group overflow-hidden relative">
              <Twitter className="text-[#1DA1F2] group-hover:text-white z-10" size={40} />
              <div className="z-10">
                <h4 className="font-black italic uppercase tracking-widest text-sm">X (Twitter)</h4>
                <p className="text-[10px] text-gray-400 group-hover:text-white/80 uppercase">Real-time updates & announcements</p>
              </div>
              <div className="absolute top-0 right-0 p-2 text-[8px] font-bold opacity-10 uppercase">#BASE-04</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 opacity-50">
        <div className="text-xs font-medium tracking-widest uppercase">
          © 2026 NONSANS | Built for the Gaming Community.
        </div>
        <div className="text-[10px] text-gray-400 max-w-sm text-center md:text-right leading-relaxed">
          Blood Strike, Counter-Strike, and Minecraft are properties of their respective developers. This is a fan-curated hub.
        </div>
      </footer>
    </div>
  );
}
