import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  BarChart3, 
  BookOpen, 
  CheckCircle2, 
  Activity,
  Cpu,
  Hash,
  Box,
  ChevronRight,
  Zap,
  Maximize2,
  Terminal,
  Settings
} from 'lucide-react';

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const products = [
    { 
      id: "SYS-001", 
      title: "SORO FINANCE", 
      url: "https://my-real-budget-dnkpdnziw-kuoxuanlins-projects.vercel.app/",
      type: "ALGORITHMIC_ENGINE", 
      value: "98.4%", 
      status: "OPTIMIZED",
      desc: "自動化記帳核心。透過馬爾可夫鏈預測消費行為，將混沌的支出轉化為有序的數據矩陣。",
      tech: ["REACT", "POSTGRES", "WASMLOGIC"],
      color: "#ffeb3b"
    },
    { 
      id: "SYS-002", 
      title: "MAI DIARY", 
      type: "ENCRYPTION_CORE", 
      value: "4096-BIT", 
      status: "SECURED",
      desc: "零知識證明日記系統。情緒是不應被讀取的變量，我們只負責將其進行軍用級加密存儲。",
      tech: ["RUST", "P2P_NETWORK", "ZK-SNARKS"],
      color: "#00e5ff"
    },
    { 
      id: "SYS-003", 
      title: "TASK RHYTHM", 
      type: "SEQUENCE_CONTROLLER", 
      value: "60FPS", 
      status: "SYNCED",
      desc: "高頻任務調度器。將生命週期的每一秒進行切片，確保在有限的時間內達到最大的生產熵值。",
      tech: ["WEB_WORKER", "D3.JS", "TIME_SLICE"],
      color: "#ff1744"
    },
    { 
      id: "SYS-004", 
      title: "LOGIC LAB", 
      type: "SANDBOX_ENVIRONMENT", 
      value: "STABLE", 
      status: "ACTIVE",
      desc: "純粹的代碼實驗空間。提供零干擾的純文字環境，讓邏輯在無塵室中自由生長。",
      tech: ["MONACO", "DOCKER", "CLOUD_V2"],
      color: "#00ff88"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#ffeb3b] selection:text-black cursor-crosshair">
      
      {/* 全局掃描線背景 - 確保 z-0 且完全不干擾點擊 */}
<div className="fixed inset-0 pointer-events-none z-0 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* 互動背景網格 (固定在背景) */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
          {Array.from({ length: 400 }).map((_, i) => (
            <div 
              key={i} 
              className="border-[0.5px] border-white/20 transition-all duration-300"
              style={{
                transform: `scale(${Math.max(0.7, 1 - Math.sqrt(Math.pow(mousePos.x - (i % 20) * (window.innerWidth/20), 2) + Math.pow(mousePos.y - Math.floor(i / 20) * (window.innerHeight/20), 2)) / 800)})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 頂部導航與進度 */}
      <nav className="fixed top-0 w-full z-[110] border-b border-white/10 bg-black/80 backdrop-blur-xl h-16 flex items-center justify-between px-6 overflow-hidden">
        <div className="flex items-center gap-6 h-full border-r border-white/10 pr-12">
          <div className="font-black text-xl tracking-tighter animate-glitch">SOLO_ARCHIVE</div>
          <div className="hidden md:flex gap-4 text-[9px] font-bold opacity-40">
            <span>COORD_{mousePos.x}:{mousePos.y}</span>
            <span>STATUS_OK</span>
          </div>
        </div>
        
        <div className="h-full flex items-center gap-12">
          <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
            {['Index', 'Manifesto', 'Terminal', 'Secure_Inquiry'].map(item => (
              <a key={item} href="#" className="hover:text-[#ffeb3b] hover:line-through transition-all">{item}</a>
            ))}
          </div>
          <div className="w-16 h-16 border-l border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white transition-all">
            <Settings size={18} className="group-hover:text-black group-hover:rotate-180 transition-transform duration-1000" />
          </div>
        </div>

        {/* 頂部滾動進度條 */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-[#ffeb3b] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* 側邊資訊 (固定) */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8 opacity-20">
        {products.map((p, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className={`w-2 h-2 ${scrollProgress > (i * 20) ? 'bg-[#ffeb3b]' : 'bg-white'}`} />
            <span className="text-[9px] font-black tracking-widest">{p.id}</span>
          </div>
        ))}
      </aside>

      {/* Hero 區：巨型標題 */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 border-b border-white/10 pt-20">
        <div className="mb-4 text-[10px] font-bold tracking-[1em] opacity-40">DECRYPTING_SYSTEM_DATA...</div>
        <h1 className="text-[15vw] font-black leading-[0.8] tracking-tighter uppercase mb-20">
          Pure <br />
          <span className="text-outline-white text-transparent hover:text-white transition-all duration-700">Digital</span> <br />
          <span className="flex items-center gap-8">
            Order
            <div className="flex-grow h-[2vw] bg-[#ffeb3b] animate-pulse" />
          </span>
        </h1>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 p-8 border border-white/10 bg-white/5 backdrop-blur-md">
            <Terminal size={24} className="mb-6 text-[#ffeb3b]" />
            <p className="text-xs leading-relaxed opacity-60">
              這不是一個傳統的網站。這是一個運行中的作業系統介面。每一個滾動都在執行一次數據檢索。
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 flex items-end justify-end">
            <div className="text-[10px] font-black text-right space-y-2 opacity-30 uppercase">
              <div>Build_Hash: 8829-X-2024</div>
              <div>Kernel_Status: 0x00021</div>
              <div>Scroll_To_Analyze_Products ↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* 產品列表：縱向一頁式 */}
      <section className="relative">
        {products.map((p, i) => (
          <div key={p.id} className="min-h-screen border-b border-white/10 flex flex-col group relative overflow-hidden">
            
            {/* 背景動態字母裝飾 */}
            <div className="absolute top-20 right-0 text-[30vw] font-black opacity-[0.02] pointer-events-none select-none group-hover:opacity-[0.05] transition-opacity duration-1000 uppercase leading-none">
              {p.title.split(' ')[0]}
            </div>

            {/* 產品標題區塊 (無聊排版) */}
            <div className="grid grid-cols-12 flex-grow h-full">
              
              {/* 左側資訊欄 */}
              <div className="col-span-12 md:col-span-5 p-6 md:p-20 flex flex-col justify-between border-r border-white/10">
                <div className="space-y-12">
                  <div className="flex items-center gap-4">
                    <span className="bg-white text-black text-[10px] px-3 py-1 font-black uppercase tracking-widest">{p.id}</span>
                    <span className="text-[10px] font-bold opacity-40">{p.type}</span>
                  </div>
                  
                  <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase group-hover:animate-glitch">
                    {p.title.split(' ').map((word, idx) => (
                      <span key={idx} className="block">{word}</span>
                    ))}
                  </h2>

                  <p className="text-lg font-light leading-relaxed max-w-sm opacity-60">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-20 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="text-[9px] font-black border border-white/20 px-3 py-1 hover:border-[#ffeb3b] hover:text-[#ffeb3b] transition-all cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-end border-t border-white/10 pt-6">
                    <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Efficiency_Rate</div>
                    <div className="text-4xl font-black italic tracking-tighter" style={{ color: p.color }}>{p.value}</div>
                  </div>
                </div>
              </div>

              {/* 右側視覺展示欄 */}
              <div className="col-span-12 md:col-span-7 relative flex items-center justify-center bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors duration-1000">
                
                {/* 模擬工業介面的中心框 */}
                <div className="w-4/5 aspect-video border border-white/10 relative p-4 group-hover:border-[#ffeb3b]/50 transition-colors">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-current" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-current" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-current" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-current" />
                  
                  <div className="w-full h-full bg-black/40 flex items-center justify-center relative overflow-hidden">
                    {/* 產品圖標動畫 */}
                    <div className="relative z-10 group-hover:scale-125 transition-transform duration-[2s] ease-in-out">
                      {i === 0 && <BarChart3 size={120} strokeWidth={1} className="text-[#ffeb3b] animate-pulse" />}
                      {i === 1 && <BookOpen size={120} strokeWidth={1} className="text-[#00e5ff] animate-pulse" />}
                      {i === 2 && <CheckCircle2 size={120} strokeWidth={1} className="text-[#ff1744] animate-pulse" />}
                      {i === 3 && <Box size={120} strokeWidth={1} className="text-[#00ff88] animate-pulse" />}
                    </div>
                    
                    {/* 背景滾動數據流 */}
                    <div className="absolute inset-0 flex flex-col gap-1 opacity-[0.05] font-mono text-[8px] overflow-hidden select-none pointer-events-none p-2 animate-flow-down">
                      {Array.from({ length: 30 }).map((_, idx) => (
                        <div key={idx}>0101010101110101010101010101011110101010101010101010101010101110101</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 行動按鈕：固定在右下角 */}
<a 
  href={p.url || "#"} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="absolute bottom-12 right-12 w-20 h-20 bg-white text-black flex items-center justify-center hover:bg-[#ffeb3b] hover:scale-110 transition-all duration-500 rounded-none overflow-hidden group/btn z-[999] cursor-pointer"
>
  <ArrowUpRight 
    size={32} 
    className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" 
  />
</a>

            </div>
          </div>
        ))}
      </section>

      {/* 底部數據牆 */}
      <footer className="py-40 bg-black px-6 md:px-20 border-t border-white/10 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-12">
            <h3 className="text-[6vw] font-black tracking-tighter uppercase leading-none">
              System <br /> Integrity <br /> Verified.
            </h3>
            <button className="px-12 py-6 border border-white hover:bg-white hover:text-black transition-all text-[10px] font-black tracking-[0.5em] uppercase">
              Establish Connection
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-[10px] font-black opacity-30 uppercase tracking-widest">Directories</div>
              <ul className="text-xs space-y-2 opacity-60">
                <li className="hover:text-[#ffeb3b] cursor-pointer">/root/products</li>
                <li className="hover:text-[#ffeb3b] cursor-pointer">/root/manifesto</li>
                <li className="hover:text-[#ffeb3b] cursor-pointer">/root/lab</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] font-black opacity-30 uppercase tracking-widest">Connect</div>
              <ul className="text-xs space-y-2 opacity-60">
                <li className="hover:text-[#ffeb3b] cursor-pointer">Terminal_01</li>
                <li className="hover:text-[#ffeb3b] cursor-pointer">Signal_Stream</li>
                <li className="hover:text-[#ffeb3b] cursor-pointer">P2P_Channel</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 底部跑馬燈 */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[#ffeb3b] text-black overflow-hidden flex items-center">
          <div className="whitespace-nowrap font-black text-[10px] animate-marquee tracking-widest uppercase">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="mx-8">SYSTEM_STABLE // NO_ERRORS_DETECTED // LATENCY_2ms // USER_AUTHENTICATED // </span>
            ))}
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&display=swap');
        body {
          font-family: 'JetBrains Mono', monospace;
          background: #0a0a0a;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); text-shadow: 2px 0 red, -2px 0 blue; }
          40% { transform: translate(-3px, -3px); text-shadow: -2px 0 red, 2px 0 blue; }
          60% { transform: translate(3px, 3px); text-shadow: 2px 0 red, -2px 0 blue; }
          80% { transform: translate(3px, -3px); text-shadow: -2px 0 red, 2px 0 blue; }
          100% { transform: translate(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes flow-down {
          from { transform: translateY(-10%); }
          to { transform: translateY(0); }
        }
        .animate-glitch { animation: glitch 0.3s steps(2, end) infinite; }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .animate-flow-down { animation: flow-down 1s linear infinite; }
        .text-outline-white { -webkit-text-stroke: 1px rgba(255,255,255,0.3); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
};

export default App;
