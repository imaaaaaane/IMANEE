export default function LeftSidebar() {
  return (
    <div className="absolute top-8 left-8 w-80 h-[calc(100vh-4rem)] p-8 rounded-2xl bg-[#0B132B]/80 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col justify-between z-10">
      <div>
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white">IMANE H.</h1>
          <h2 className="text-sm font-bold tracking-widest text-white/80 uppercase">Decode & Build</h2>
        </div>
        
        <p className="text-white/70 text-sm leading-relaxed mb-12">
          A Full-Stack Developer & Computer Engineer crafting elegant digital solutions.
        </p>
      </div>

      <div>
        <h3 className="text-xs font-bold tracking-widest text-white/50 uppercase mb-4">Tech Stack</h3>
        <ul className="flex flex-col gap-3 text-sm font-medium text-white/80">
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
            React
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
            Astro
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            Python
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            Supabase
          </li>
        </ul>
      </div>
    </div>
  );
}
