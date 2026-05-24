import { ArrowRight, Search, CheckSquare, Sparkles, FolderClosed, ThumbsUp, ThumbsDown, Copy, RotateCcw } from 'lucide-react';

export default function Askyou() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-center text-[#1a1a2e] mb-12">
        Ask your on-demand assistants.
      </h2>
      
      {/* Bento Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-3 h-full min-h-[500px]">
        {/* Left Column */}
        <div className="bg-[#f9f9f8] rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-gray-100 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 flex items-center justify-center text-[#9333ea]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-gray-800 tracking-wide uppercase">
                Notion Agent
              </span>
            </div>
            <h3 className="text-[32px] md:text-[40px] font-bold leading-[1.1] text-black mb-8 tracking-tight">
              You assign the tasks.<br />
              Notion Agent does the work.
            </h3>
          </div>
          
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors self-start relative z-10">
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Right Column */}
        <div className="bg-[#FBC02D] rounded-3xl p-6 md:p-10 relative overflow-hidden flex items-center justify-center min-h-[450px]">
          {/* Mockups Container */}
          <div className="relative w-full max-w-lg h-full flex items-center justify-center">
            
            {/* Main Chat Window */}
            <div className="absolute right-0 md:right-4 w-[95%] md:w-[85%] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-10 transform scale-[0.95] md:scale-100 transition-transform origin-right">
              {/* Header */}
              <div className="border-b border-gray-100/60 p-3 px-4 flex items-center gap-1.5">
                <span className="font-semibold text-[13px] text-gray-700">Status update</span>
                <span className="text-[10px] text-gray-400 mt-0.5">▼</span>
              </div>
              
              {/* Chat Content */}
              <div className="p-5 space-y-5">
                {/* User Message */}
                <div className="bg-[#F1F1F0] rounded-[18px] rounded-tr-sm p-3.5 px-4 max-w-[88%] ml-auto text-[14px] text-gray-800 leading-relaxed shadow-sm">
                  Draft my weekly update in <span className="inline-flex items-center gap-1.5 bg-white px-1.5 py-0.5 rounded-md text-[13px] border border-gray-200/60 font-medium mx-0.5 shadow-sm"><FolderClosed className="w-3.5 h-3.5 text-blue-400"/> Weekly status @Today</span> with updates from the current sprint
                </div>
                
                {/* Agent Response */}
                <div className="text-[14px] text-gray-800 pr-4">
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-4 leading-relaxed">I'll help you draft your standard weekly update. Let me fill it in with all the relevant progress from <span className="inline-flex items-center gap-1.5 font-medium"><CheckSquare className="w-3.5 h-3.5 text-blue-500"/> Task tracker</span>.</p>
                      
                      {/* Logs */}
                      <div className="space-y-3 bg-[#f9f9f8] p-3.5 rounded-xl border border-gray-100 text-[13px]">
                        <div className="flex items-center gap-2.5 font-medium text-gray-700">
                          <span className="text-base">🖊️</span> Updated page <FolderClosed className="w-3.5 h-3.5 text-gray-400 ml-1"/> Weekly status @Today
                        </div>
                        <div className="pl-[26px] relative">
                          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gray-200"></div>
                          <p className="py-0.5 text-gray-500 leading-relaxed">
                            It looks like some of the tasks inside your ✅ Task tracker are out of date... I'll go ahead and update those as I draft it.
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5 text-gray-800 font-medium">
                          <span className="text-base">🖊️</span> Updated 4 pages <span className="text-gray-400 font-bold ml-1">〉</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-col space-y-3">
                        <p className="font-semibold text-gray-800">You should be all set now!</p>
                        
                        {/* Footer Actions */}
                        <div className="flex items-center gap-3 pt-2">
                          <button className="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                            <Copy className="w-4 h-4" />
                          </button>
                          <button className="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                          <button className="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                            <ThumbsDown className="w-4 h-4" />
                          </button>
                          <div className="w-px h-4 bg-gray-200 mx-1"></div>
                          <button className="flex items-center gap-1.5 p-1.5 px-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors text-[13px] font-medium">
                            <RotateCcw className="w-3.5 h-3.5" />
                            Undo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-card (Left, floating) */}
            <div className="absolute left-[-5%] md:left-[-15%] lg:left-[-25%] top-[15%] z-20 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100/50 p-4 w-[240px] md:w-[260px] transform hover:scale-[1.02] transition-transform duration-300">
              <p className="font-semibold text-[13px] text-gray-700 mb-3 px-1">How can I help you today?</p>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 text-[13px] font-medium text-gray-600 hover:bg-[#f9f9f8] p-2 rounded-lg text-left transition-colors">
                  <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-[10px] font-bold border border-gray-200/50">A/文</div>
                  Translate this page
                </button>
                <button className="w-full flex items-center gap-3 text-[13px] font-medium text-gray-600 hover:bg-[#f9f9f8] p-2 rounded-lg text-left transition-colors">
                  <div className="w-6 h-6 flex items-center justify-center text-gray-500">
                    <Search className="w-4 h-4" />
                  </div>
                  Analyze for insights
                </button>
                <button className="w-full flex items-center gap-3 text-[13px] font-medium text-gray-600 hover:bg-[#f9f9f8] p-2 rounded-lg text-left transition-colors">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-500">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  Create a task tracker
                </button>
              </div>
            </div>

            {/* Character Icon Overlay */}
            <div className="absolute -bottom-6 -right-6 md:-right-8 z-30 transform hover:rotate-6 transition-transform duration-300">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center p-1 border border-gray-100">
                   {/* Fallback to emoji if external image fails or is preferred */}
                   <div className="w-full h-full bg-[#FFF4D4] rounded-full flex items-center justify-center text-3xl md:text-4xl">
                     👷
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Two Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Enterprise Search Card */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col min-h-[450px]">
          <div className="p-8 pb-8 flex justify-between items-start">
            <div>
              <h4 className="text-[15px] font-semibold text-gray-500 mb-2">Enterprise Search</h4>
              <h3 className="text-[32px] md:text-[36px] leading-[1.1] font-bold text-black tracking-tight">One search for everything.</h3>
            </div>
            <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="bg-[#FF7A6A] p-6 pt-10 flex-1 mt-auto flex flex-col justify-end">
            <div className="bg-white rounded-t-xl shadow-lg border border-gray-100 p-5 h-full min-h-[220px]">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[13px] font-medium text-gray-400">
                  <Search className="w-4 h-4" />
                  <span>99+ results</span>
                </div>
                <div className="bg-gray-100 rounded-full px-3 py-1.5 text-[11px] text-gray-500 font-semibold tracking-wide uppercase">
                  top customer requests this quarter
                </div>
              </div>
              <p className="text-[14px] text-gray-800 leading-relaxed font-medium max-w-[80%]">
                ...tomer requests this quarter (so far), based on the latest GTM analysis:
              </p>
            </div>
          </div>
        </div>

        {/* AI Meeting Notes Card */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden flex flex-col min-h-[450px]">
          <div className="p-8 pb-8 flex justify-between items-start">
            <div>
              <h4 className="text-[15px] font-semibold text-gray-500 mb-2">AI Meeting Notes</h4>
              <h3 className="text-[32px] md:text-[36px] leading-[1.1] font-bold text-black tracking-tight">Perfect notes, every time.</h3>
            </div>
            <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0 hover:bg-gray-800 transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="bg-[#42A5F5] p-6 pt-10 flex-1 mt-auto flex flex-col justify-end">
            <div className="bg-white rounded-t-xl shadow-lg border border-gray-100 p-5 h-full min-h-[220px]">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                <div className="font-semibold text-gray-800 text-[15px] flex items-center gap-2">
                  <span className="text-gray-600">📅</span>
                  Joyce & Sam weekly 1:1
                </div>
                <div className="text-[13px] text-gray-500 font-medium flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-pink-200 border-2 border-white z-10"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-200 border-2 border-white z-0"></div>
                  </div>
                  June 2
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-5 text-[13px] font-semibold text-gray-400">
                  <span className="text-black flex items-center gap-1.5"><div className="w-3.5 h-3.5 flex items-center justify-center border border-gray-300 rounded-[3px]"><div className="w-1.5 h-px bg-gray-400"></div></div> Summary</span>
                  <span className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 flex items-center justify-center border border-gray-200 rounded-[3px]"><div className="w-1 h-2 border-l border-gray-300"></div></div> Notes</span>
                  <span className="flex items-center gap-1.5"><div className="w-3.5 h-3.5 flex items-center justify-center border border-gray-200 rounded-[3px]"><div className="w-2 h-0.5 bg-gray-300"></div></div> Transcript</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-[12px] font-semibold text-gray-600 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50 transition-colors">Pause</button>
                  <button className="text-[12px] font-semibold bg-[#FFF1F0] text-[#FF4D4F] px-3 py-1 rounded-md hover:bg-[#FFE5E5] transition-colors">Stop</button>
                </div>
              </div>
              <h5 className="font-semibold text-[14px] text-gray-800">Current progress</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
