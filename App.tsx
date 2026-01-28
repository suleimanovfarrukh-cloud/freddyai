import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Menu, 
  X, 
  ChevronRight, 
  Target, 
  FileText, 
  Users, 
  HelpCircle, 
  Briefcase, 
  AlertTriangle,
  Search,
  Download,
  Printer,
  Home,
  CheckCircle2,
  Info,
  LayoutGrid,
  ArrowRight
} from 'lucide-react';
import { topics } from './data';
import { Topic, PracticalTask, CaseStudy, ProblemSituation } from './types';

// Helper Components
const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-6 mt-10 pb-2 border-b-2 border-blue-100">
    <div className="text-blue-600 p-2 bg-blue-50 rounded-lg">{icon}</div>
    <h2 className="text-xl font-extrabold text-slate-800 uppercase tracking-tight">{title}</h2>
  </div>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 transition-all hover:shadow-xl hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

// Added className to the props type and combined it with the default styles
const Badge: React.FC<{ children: React.ReactNode; color?: string; className?: string }> = ({ children, color = "blue", className = "" }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    green: "bg-green-50 text-green-700 border-green-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    rose: "bg-rose-50 text-rose-700 border-rose-100",
    slate: "bg-slate-50 text-slate-700 border-slate-100",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

const App: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentTopic = useMemo(() => 
    topics.find(t => t.id === selectedTopicId) || null
  , [selectedTopicId]);

  const filteredTopics = useMemo(() => 
    topics.filter(t => 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase())
    )
  , [searchQuery]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8fafc]">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4 flex justify-between items-center sticky top-0 z-50 no-print">
        <div className="flex items-center gap-2 text-blue-700">
          <BookOpen size={24} />
          <span className="font-bold uppercase tracking-tighter">TSUE | ECONOMICS</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-slate-100 rounded-lg"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 transform no-print
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0
      `}>
        <div className="p-8 border-b border-slate-50">
          <div className="flex items-center gap-3 text-blue-600 mb-2">
            <BookOpen size={32} strokeWidth={2.5} />
            <h1 className="font-black text-xl leading-none uppercase tracking-tighter">Methodological<br/>Guide</h1>
          </div>
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-2">TSUE - 2025</p>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search topic..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
          <button 
            onClick={() => { setSelectedTopicId(null); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left
              ${selectedTopicId === null ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 font-bold' : 'text-slate-600 hover:bg-slate-50'}
            `}
          >
            <Home size={20} />
            <span className="text-sm">Home</span>
          </button>
          
          <div className="pt-4 pb-2 px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Table of Contents</div>
          {filteredTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopicId(topic.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left group
                ${selectedTopicId === topic.id ? 'bg-blue-50 text-blue-700 border border-blue-100 font-bold' : 'text-slate-600 hover:bg-slate-50 border border-transparent'}
              `}
            >
              <span className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-black shrink-0
                ${selectedTopicId === topic.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}
              `}>
                {topic.id}
              </span>
              <span className="text-sm line-clamp-1">{topic.title}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-50">
           <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl">
             <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xs">FS</div>
             <div className="text-[10px]">
               <p className="font-black text-slate-900 uppercase">F. Suleimanov</p>
               <p className="text-slate-400 font-bold uppercase">Ph.D. TSUE</p>
             </div>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto custom-scrollbar relative bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-6 py-12 md:px-12">
          {!selectedTopicId ? (
            <div className="space-y-16">
              <header className="text-center space-y-6 pt-10">
                <Badge color="blue">Economics of Commercial Enterprises</Badge>
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                  Methodological Guide <br/> <span className="text-blue-600">for Instructors</span>
                </h2>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
                  A strategic digital solution for TSUE students to effectively organize practical and independent learning, and for instructors to plan curriculum delivery.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-6 no-print">
                  <button onClick={handlePrint} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-3">
                    <Printer size={22} /> DOWNLOAD & PRINT PDF
                  </button>
                  <button className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition-all flex items-center gap-3 shadow-sm">
                    <Download size={22} /> SAVE GUIDE
                  </button>
                </div>
              </header>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: <Target className="text-blue-600" size={32} />, title: "Clear Objectives", desc: "Structured knowledge and skills defined for every single topic." },
                  { icon: <Briefcase className="text-green-600" size={32} />, title: "Ready Materials", desc: "Complete sets of lesson plans, theoretical content, and tasks." },
                  { icon: <Users className="text-amber-600" size={32} />, title: "Interactive Cases", desc: "Real business scenarios and sophisticated problem-solving cases." },
                ].map((feature, i) => (
                  <Card key={i} className="text-center flex flex-col items-center">
                    <div className="mb-6 p-4 bg-slate-50 rounded-2xl">{feature.icon}</div>
                    <h3 className="text-xl font-black text-slate-800 mb-3 uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-slate-500 font-medium">{feature.desc}</p>
                  </Card>
                ))}
              </div>

              <div className="space-y-10">
                <div className="flex items-center justify-between">
                   <h3 className="text-3xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-tighter">
                    <LayoutGrid className="text-blue-600" size={32} /> List of Topics
                  </h3>
                  <span className="text-slate-400 font-black text-sm uppercase tracking-widest">Total: 15 Topics</span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topics.map((topic) => (
                    <button 
                      key={topic.id}
                      onClick={() => setSelectedTopicId(topic.id)}
                      className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all text-left flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-3xl font-black text-slate-100 group-hover:text-blue-100 transition-colors">{topic.id < 10 ? `0${topic.id}` : topic.id}</span>
                        <div className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                      <h4 className="font-black text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors leading-tight uppercase">{topic.title}</h4>
                      <p className="text-xs text-slate-400 font-medium line-clamp-2 mt-auto italic">{topic.summary}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 no-print">
                <button 
                  onClick={() => setSelectedTopicId(null)}
                  className="bg-white px-5 py-3 rounded-xl border border-slate-200 text-slate-500 hover:text-blue-600 transition-all flex items-center gap-2 text-xs font-black uppercase tracking-widest shadow-sm"
                >
                  <ChevronRight className="rotate-180" size={16} /> Back to Home
                </button>
                <div className="flex gap-3">
                  <button onClick={handlePrint} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-100 uppercase text-xs">
                    <Printer size={18} /> PRINT PAGE
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="px-5 py-2 bg-slate-900 text-white text-lg font-black rounded-2xl shadow-xl">TOPIC {currentTopic?.id}</div>
                  <div className="h-[2px] flex-1 bg-slate-100" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-none uppercase tracking-tighter">
                  {currentTopic?.title}
                </h1>
                <p className="text-2xl text-slate-400 font-bold italic border-l-4 border-blue-600 pl-6 py-2">
                  {currentTopic?.summary}
                </p>
              </div>

              {/* 1. Learning Objectives */}
              <SectionHeader icon={<Target size={24} />} title="Learning Objectives" />
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Knowledge", text: currentTopic?.learningObjectives.knowledge, color: "blue" },
                  { label: "Skills", text: currentTopic?.learningObjectives.skills, color: "green" },
                  { label: "Competency", text: currentTopic?.learningObjectives.competencies, color: "rose" },
                ].map((obj, i) => (
                  <div key={i} className={`p-6 rounded-3xl border-2 bg-white shadow-sm border-${obj.color}-50 relative group overflow-hidden`}>
                    <div className={`absolute top-0 right-0 p-4 font-black text-4xl text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity`}>0{i+1}</div>
                    <div className={`text-${obj.color}-600 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2`}>
                      <div className={`w-2 h-2 rounded-full bg-${obj.color}-600`} /> {obj.label}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{obj.text}</p>
                  </div>
                ))}
              </div>

              {/* 2. Lesson Plan */}
              <SectionHeader icon={<FileText size={24} />} title="Lesson Plan" />
              <div className="grid gap-4">
                {currentTopic?.lessonPlan.map((step, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white p-6 rounded-2xl border-2 border-slate-50 shadow-sm transition-all hover:border-blue-200 group">
                    <span className="text-blue-100 group-hover:text-blue-600 font-black text-4xl transition-colors">{i+1 < 10 ? `0${i+1}` : i+1}</span>
                    <span className="text-slate-700 font-bold text-lg">{step}</span>
                  </div>
                ))}
              </div>

              {/* 3. Theoretical Content */}
              <SectionHeader icon={<Info size={24} />} title="Theoretical Content" />
              <div className="space-y-8">
                {currentTopic?.theoreticalContent.map((theory, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border-2 border-slate-50 relative">
                    <div className="absolute top-8 right-10 text-[10px] font-black text-slate-200 uppercase tracking-widest">Section {theory.section.split('.')[0]}</div>
                    <h4 className="text-blue-600 font-black text-xl mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-xs">§</div>
                      {theory.section}
                    </h4>
                    <p className="text-slate-600 leading-[2] text-lg text-justify font-medium">{theory.content}</p>
                  </div>
                ))}
              </div>

              {/* 4. Practical Tasks */}
              <SectionHeader icon={<Briefcase size={24} />} title="Practical Tasks" />
              <div className="grid md:grid-cols-2 gap-8">
                {currentTopic?.practicalTasks.map((task) => (
                  <div key={task.id} className="bg-white rounded-3xl p-8 border-2 border-slate-50 shadow-sm hover:shadow-2xl transition-all flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                       <Badge color="blue">PRACTICAL TASK</Badge>
                       <span className="text-xs font-black text-slate-300">ID: {task.id}</span>
                    </div>
                    <h4 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tight leading-tight">{task.title}</h4>
                    
                    <div className="space-y-6 flex-1">
                      <div className="bg-slate-50 p-4 rounded-2xl">
                        <div className="text-[10px] font-black uppercase text-slate-400 mb-2">Objective:</div>
                        <p className="text-sm text-slate-600 font-bold italic leading-relaxed">"{task.objective}"</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="text-[10px] font-black uppercase text-slate-400 mb-1">Instructions:</div>
                        {task.instructions.map((ins, i) => (
                          <div key={i} className="flex gap-3 text-sm text-slate-600 font-medium">
                            <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-black shrink-0">{i+1}</span>
                            {ins}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-slate-400">Deliverable:</span>
                      <div className="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase border border-green-100">{task.deliverable}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 5. Case Studies */}
              <SectionHeader icon={<Users size={24} />} title="Case Studies" />
              <div className="space-y-8">
                {currentTopic?.caseStudies.map((cs) => (
                  <div key={cs.id} className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                    <div className="lg:w-1/3 p-12 text-white flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-800 bg-gradient-to-br from-slate-900 to-blue-900">
                      <Badge color="blue" className="mb-6 w-fit">CASE ANALYSIS</Badge>
                      <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-none">{cs.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed italic opacity-80">Designed for collaborative in-class discussion and strategic thinking.</p>
                    </div>
                    <div className="flex-1 p-12 bg-white space-y-10">
                      <div className="space-y-4">
                        <div className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Situation Analysis</div>
                        <p className="text-slate-700 text-xl leading-relaxed text-justify font-medium">{cs.situation}</p>
                      </div>
                      <div className="space-y-6">
                        <div className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Analytical Questions</div>
                        <div className="grid gap-4">
                          {cs.questions.map((q, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100 group hover:bg-blue-600 hover:text-white transition-all">
                              <div className="w-10 h-10 shrink-0 bg-white text-blue-600 rounded-xl flex items-center justify-center font-black shadow-sm group-hover:scale-90 transition-transform">{i+1}</div>
                              <p className="font-bold text-sm">{q}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 6. Discussion Questions */}
              <SectionHeader icon={<HelpCircle size={24} />} title="Discussion Questions" />
              <div className="bg-white p-12 rounded-[3rem] border-2 border-slate-50 shadow-sm grid md:grid-cols-2 gap-8">
                {currentTopic?.discussionQuestions.map((q, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-2xl bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-lg font-bold text-slate-800 leading-tight">{q}</p>
                  </div>
                ))}
              </div>

              {/* 7. Independent Study */}
              <SectionHeader icon={<FileText size={24} />} title="Independent Study Topics" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentTopic?.independentWork.map((topic, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border-2 border-slate-50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit mb-6"><BookOpen size={24} /></div>
                    <h5 className="text-lg font-black text-slate-800 uppercase tracking-tight leading-tight mb-4">{topic}</h5>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Research Topic</p>
                  </div>
                ))}
              </div>

              {/* 8. Problem Situations */}
              <SectionHeader icon={<AlertTriangle size={24} />} title="Problem Situations" />
              <div className="space-y-10">
                {currentTopic?.problemSituations.map((ps) => (
                  <div key={ps.id} className="bg-[#fff1f2] p-12 rounded-[3.5rem] border-l-[12px] border-rose-500 shadow-xl relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 text-rose-100 opacity-20">
                      <AlertTriangle size={200} />
                    </div>
                    <div className="relative z-10 space-y-8">
                      <div className="flex items-center gap-3 text-rose-600">
                        <AlertTriangle size={32} />
                        <span className="text-sm font-black uppercase tracking-[0.3em]">Problem Scenario</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Situation:</div>
                        <p className="text-slate-800 text-2xl font-bold leading-relaxed italic">"{ps.situation}"</p>
                      </div>

                      <div className="space-y-4">
                        <div className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Key Problem:</div>
                        <p className="text-rose-900 text-3xl font-black leading-tight uppercase tracking-tighter">{ps.problem}</p>
                      </div>

                      <div className="pt-10 border-t border-rose-200">
                        <div className="text-[10px] font-black text-slate-400 uppercase mb-6 tracking-widest">Guiding questions for the solution:</div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {ps.questions.map((q, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-rose-100 text-sm font-black text-rose-700 shadow-sm hover:scale-[1.02] transition-transform">
                              {q}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <footer className="mt-32 py-16 px-6 border-t border-slate-200 bg-white no-print">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center font-black text-xl text-center p-2 uppercase shadow-2xl">TSUE</div>
              <div>
                <div className="text-sm font-black uppercase tracking-[0.3em] text-slate-900">Tashkent State University of Economics</div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">2025 Methodological Guide</div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-2">Developed by</p>
              <p className="text-sm font-black text-slate-800 uppercase tracking-tighter">PhD. Farrukh Suleimanov</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
