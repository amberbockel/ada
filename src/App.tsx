import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const albums = [
  {
    id: 'SUM',
    title: 'SUMMER SATISFACTION',
    desc: 'The intoxicating high of a perfect summer moment — the kind you know won\'t last. Warm synths and hazy beats capture the feeling of fully surrendering to something beautiful, even knowing it\'s temporary.',
    image: 'https://i.scdn.co/image/ab67616d00001e02e6b41916697691a7aef4cdcc',
    url: 'https://open.spotify.com/track/1SobjteKKkDspDbDTfPSOK',
    spotifyId: '15skPrwds32YJ0SDw0dRc6',
    techData: 'LATEST SINGLE // RELEASE DATE: MAY 2026 // GENRE: ELECTRONIC / SYNTHWAVE'
  },
  {
    id: 'ESC',
    title: 'ESCAPE',
    desc: 'Escape is about stepping outside the noise and disappearing into your own world for a while. Pulsing beats and atmospheric synths create a soundtrack for late-night drives, empty streets, and the freedom of letting go.',
    image: '/escape.jpg',
    url: 'https://distrokid.com/hyperfollow/adafen/escape',
    spotifyId: '6nghejF21TFcogzQ8HalEK',
    techData: 'SINGLE // RELEASE DATE: 2026 // GENRE: ELECTRONIC / SYNTHWAVE'
  },
  {
    id: 'SNT',
    title: 'SENTIMENT',
    desc: 'A moody electronic collection built around tension and release, where deep bass and shadowy synths carry quiet emotion. Sentiment explores the spaces between confidence and vulnerability — the feeling of being powerful and uncertain at the same time.',
    image: '/ada-pool-orig.jpg',
    url: 'https://distrokid.com/hyperfollow/adafen/sentiment',
    spotifyId: '7h4RnS36JLMVk1SYIQm4Sz', 
    techData: 'EP RELEASE // 5 TRACKS // YEAR: 2025 // VIBE: LATE NIGHT DRIVE'
  },
  {
    id: 'PRT',
    title: 'PORTSMOUTH',
    desc: 'A late-night electronic track inspired by the harbor lights and restless energy of Portsmouth, Maine. Dark synths and deep bass carry the feeling of wandering a coastal town after midnight, where the night feels full of possibility.',
    image: '/portsmouth.jpg',
    url: 'https://distrokid.com/hyperfollow/adafen/portsmouth',
    spotifyId: '18KbHIiHH4MhMGQIjnbBNe',
    techData: 'DEBUT SINGLE // YEAR: 2025 // ORIGIN STAMP: PORTSMOUTH VA'
  }
];

const App = () => {
  const [activeItem, setActiveItem] = useState(albums[0]);
  const [typedText, setTypedText] = useState('');
  
  // "Typing" effect for description
  useEffect(() => {
    setTypedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setTypedText(activeItem.desc.substring(0, i));
      i++;
      if (i > activeItem.desc.length) clearInterval(intervalId);
    }, 15); // Fast tech typing speed
    
    return () => clearInterval(intervalId);
  }, [activeItem]);

  return (
    // Outer Container (The Terminal Screen)
    <div className="min-h-screen bg-cyber-dark text-white p-4 md:p-8 font-sans selection:bg-cyber-red selection:text-white flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Noise & Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Subtle scanline overlay spanning entire screen */}
        <div className="absolute inset-0 scanline-bg mix-blend-overlay opacity-30"></div>
        {/* Dark vignette to focus the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      {/* Layout Wrapper to ensure logo aligns with HUD on ultra-wide screens */}
      <div className="relative w-full max-w-[1600px] flex flex-col justify-center">
        
        {/* Top Header Logo (absolutely positioned to sit inside the notch) */}
        <div className="absolute top-5 md:top-6 left-6 md:left-10 z-30">
          <div className="flex flex-col">
            <h2 className="text-sm md:text-xl font-display font-black tracking-[1px] text-white glitch-text drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] uppercase" data-text="ADAFEN.MUSIC">
              ADAFEN.MUSIC
            </h2>
            {/* The glowing red underline detail */}
            <div className="w-16 h-1 mt-1 bg-cyber-red shadow-[0_0_10px_rgba(255,42,42,0.8)]"></div>
          </div>
        </div>

        {/* Main HUD Frame Wrapper for Clip-Path Border Outline */}
        <div className="relative w-full min-h-[90vh] md:min-h-[85vh] h-fit p-[1px] clip-hud-main bg-white/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
          <div className="relative w-full h-full min-h-[calc(90vh-2px)] md:min-h-[calc(85vh-2px)] clip-hud-main bg-[#0a0a0f] overflow-hidden flex flex-col pt-16 md:pt-20">
        
        {/* Background Image (Reactive to hovering) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 1.05, filter: 'contrast(1.5) saturate(0) brightness(0.5)' }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: 'contrast(1.2) saturate(1.1) brightness(0.7)',
            }}
            exit={{ opacity: 0, scale: 0.95, filter: 'contrast(2) saturate(2)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={activeItem.image} 
              alt={activeItem.title} 
              className="w-full h-full object-cover object-center"
            />
            {/* Color burn overlay for the image to make it fit the UI */}
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
            {activeItem.id === 'ADA' && <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay"></div>}
            {/* Vertical gradient so bottom content is legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/40 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        {/* Top Right Decorative Tech Lines */}
        <div className="absolute top-6 right-8 z-20 flex space-x-2">
          <div className="w-1 h-6 bg-white/20"></div>
          <div className="w-8 h-6 border-y border-white/20"></div>
          <div className="w-1 h-6 bg-white/20"></div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-20 flex-grow flex flex-col justify-between px-8 md:px-16 pb-8 pt-4">
          
          <div className="flex flex-col md:flex-row justify-between items-start w-full">
            {/* Left Column: Title and Lore */}
            <div className="max-w-xl mt-5">
              <motion.h1 
                key={activeItem.title}
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                className="text-6xl md:text-[104px] font-display font-black uppercase tracking-tighter text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)] leading-none mb-6"
              >
                {activeItem.title}
              </motion.h1>
              
              <div className="min-h-[100px]">
                <p className="text-sm md:text-base font-normal text-white/70 leading-relaxed font-sans max-w-sm tracking-wide">
                  {typedText}
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 md:w-3 h-4 md:h-5 bg-cyber-cyan ml-1 align-middle"
                  />
                </p>
              </div>

              {activeItem.url !== '#' && (
                <a 
                  href={activeItem.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block clip-button bg-white text-black font-bold text-[10px] md:text-xs tracking-widest px-6 py-2.5 uppercase hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  ACCESS RECORD
                </a>
              )}

              {/* Character Select / Discography Thumbnails under Left Column */}
              <div className="flex space-x-3 md:space-x-4 mt-8 md:mt-16 z-40 relative">
                {albums.map((album) => (
                  <div
                    key={album.id}
                    onMouseEnter={() => setActiveItem(album)}
                    className={`relative w-20 h-28 md:w-28 md:h-36 cursor-pointer transition-all duration-300 clip-thumb overflow-hidden ${activeItem.id === album.id ? 'transform -translate-y-2 shadow-[0_10px_20px_rgba(0,0,0,0.5)]' : 'border border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'}`}
                  >
                    <img src={album.image} className="w-full h-full object-cover filter saturate-50 contrast-125" />

                    {/* Hover Overlay effects on thumbnail */}
                    <div className={`absolute inset-0 bg-cyber-red/30 mix-blend-overlay transition-opacity duration-300 ${activeItem.id === album.id ? 'opacity-100' : 'opacity-0'}`}></div>

                    {/* Cyberpunk corner bracket UI on active item */}
                    {activeItem.id === album.id && (
                      <>
                        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-white"></div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* About Section */}
              <div className="mt-8 border-t border-white/20 pt-6 max-w-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-3">
                  ABOUT ADAFEN
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-sans tracking-wide max-w-sm">
                  Ada Fen is an experimental music project created by artist and designer Amber Heinbockel. It's a space to explore new ways of making music—blending songwriting, AI collaboration, and visual storytelling into late-night electronic pop.
                </p>
              </div>
            </div>

            {/* Right Column: Embedded Audio Player / Mini HUD & Tech Data */}
            <div className="hidden lg:flex flex-col items-end max-w-sm text-right mt-4 md:mt-0 z-50">
              
              {/* HUD Audio Player Module */}
              <div className="w-[350px] min-h-[540px] bg-cyber-dark/80 border border-white/20 clip-hud overflow-hidden relative mb-2 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col justify-end pt-8">
                
                {/* Embedded Spotify Player dynamically based on selected album */}
                <iframe 
                  key={activeItem.id} 
                  style={{borderRadius: '0px'}} 
                  src={`https://open.spotify.com/embed/album/${activeItem.spotifyId}?utm_source=generator&theme=0`} 
                  width="100%" 
                  height="494" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy"
                  className="relative z-10 filter grayscale-[0.2] contrast-125 saturate-150 mix-blend-screen"
                ></iframe>
                
                 {/* Top Tech Bar for the module */}
                 <div className="absolute top-0 left-0 right-0 h-8 bg-black/80 flex items-center justify-between px-4 z-20 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-cyber-red animate-pulse shadow-[0_0_10px_red]"></div>
                      <span className="text-[10px] font-mono font-bold text-cyber-red tracking-widest leading-none">AUDIO.SYS</span>
                    </div>
                    <div className="flex space-x-1">
                       <span className="block w-4 h-1 bg-white/30"></span>
                       <span className="block w-2 h-1 bg-white/30"></span>
                    </div>
                 </div>

                 {/* Custom UI Overlays to blend it in */}
                 <div className="absolute inset-0 border-2 border-cyber-cyan/10 pointer-events-none z-30 mix-blend-overlay m-1 clip-hud"></div>
                 <div className="absolute inset-0 scanline-bg opacity-30 pointer-events-none z-30"></div>
              </div>

              <a href={activeItem.url} target="_blank" rel="noreferrer" className="text-sm font-sans font-bold text-white hover:text-cyber-cyan transition-colors tracking-wide mb-10 mt-3 flex items-center drop-shadow-md">
                &gt; View External Database
              </a>

              <p className="text-[11px] md:text-xs uppercase font-sans font-medium text-white/60 tracking-wider leading-relaxed max-w-[240px] text-right break-words mt-4 drop-shadow-sm">
                {activeItem.techData}
              </p>
            </div>
          </div>

          {/* Bottom Area: EQ Graphic */}
          <div className="w-full flex justify-end items-end mt-0">
            {/* EQ Graphic Detail */}
            <div className="hidden md:flex items-end space-x-1 h-10 border border-white/20 p-2 clip-button bg-cyber-dark/50 backdrop-blur-sm">
               {[40, 70, 30, 90, 50, 80, 20].map((h, i) => (
                 <motion.div 
                   key={i}
                   animate={{ height: [`${h}%`, `${Math.random() * 100}%`, `${h}%`] }}
                   transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: i * 0.1 }}
                   className="w-1.5 bg-white/70"
                 />
               ))}
            </div>
          </div>

        </div>
      </div>
      </div>
      {/* End Layout Wrapper */}

      {/* Site Footer */}
      <footer className="w-full max-w-[1600px] mt-4 flex flex-col md:flex-row justify-between items-center px-4 md:px-8 z-20">
         <p className="text-xs font-mono tracking-[0.3em] text-white/30 uppercase text-center md:text-left">
           © {new Date().getFullYear()} Ada Fen void <br/>
           <a href="https://amberbockel.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-cyber-cyan transition-colors">Design & Development by amberbockel.com</a>
         </p>
      </footer>
    </div>
  </div>
);
};

export default App;
