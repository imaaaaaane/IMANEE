export default function RightSidebar() {
  return (
    <div className="absolute top-8 right-8 w-72 h-[calc(100vh-4rem)] p-8 rounded-2xl bg-[#0B132B]/80 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col justify-between z-10">
      
      {/* Top Section: Status */}
      <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10 w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-medium text-white/90">Available for work</span>
      </div>

      {/* Middle Section: Recent Projects */}
      <div className="flex-1 flex flex-col justify-center my-8">
        <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">Recent Projects</h3>
        
        <div className="flex flex-col gap-4">
          <a href="#" className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
            <h4 className="font-semibold text-white group-hover:text-pink-200 transition-colors">Fotojenik</h4>
            <p className="text-xs text-white/60 mt-1">Photography portfolio & booking</p>
          </a>
          
          <a href="#" className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all">
            <h4 className="font-semibold text-white group-hover:text-pink-200 transition-colors">Rihla</h4>
            <p className="text-xs text-white/60 mt-1">Travel experiences platform</p>
          </a>
        </div>
      </div>

      {/* Bottom Section: Contact */}
      <div>
        <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">Contact</h3>
        <div className="flex gap-4 text-sm font-medium">
          <a href="#" className="text-white/70 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">
            GitHub
          </a>
          <span className="text-white/30">•</span>
          <a href="#" className="text-white/70 hover:text-white transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white">
            LinkedIn
          </a>
        </div>
      </div>
      
    </div>
  );
}
