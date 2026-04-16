import React from 'react';
import { Mail, Phone, ExternalLink, ShieldCheck, Cpu, LineChart, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold tracking-tight text-blue-700">AB.</span>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
              <a href="#expertise" className="hover:text-blue-600 transition">Expertise</a>
              <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
              <a href="#research" className="hover:text-blue-600 transition">Research</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Hello, I'm <span className="text-blue-600">Abebaw Belay</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Senior Systems Architect and DFS IT Manager specializing in Digital Public Infrastructure (DPI) and FinTech. 
                Designing secure, scalable solutions that drive financial inclusion across East Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:abebawb30@gmail.com" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  <Mail size={18} /> Email Me
                </a>
                <a href="tel:+251929524222" className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition">
                  <Phone size={18} /> Call
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition duration-500">
                {/* Replace with actual image path in /public/images/profile.jpg */}
                <div className="flex items-center justify-center h-full text-slate-400">Profile Image</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExpertiseCard 
              icon={<Cpu className="text-blue-600" size={32} />}
              title="Digital Public Infrastructure"
              desc="Expert in DPI systems, digital financial services architecture, and instant payment solutions."
            />
            <ExpertiseCard 
              icon={<ShieldCheck className="text-emerald-600" size={32} />}
              title="FinTech & Systems Architecture"
              desc="Integrating complex payment gateways while ensuring strict industry compliance and security standards."
            />
            <ExpertiseCard 
              icon={<LineChart className="text-purple-600" size={32} />}
              title="Risk & AI Innovation"
              desc="Applying machine learning to optimize financial systems and enhance security protocols."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Key Projects & Initiatives</h2>
              <p className="text-slate-600">Building foundational payment infrastructure across Ethiopia.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              category="EthioPost"
              title="Shared Agent Network Platform"
              desc="Leading an interoperable 'Single sign-in' platform enabling agents to service customers across multiple institutions."
            />
            <ProjectCard 
              category="EthSwitch S.C."
              title="National Payment Switch"
              desc="Developed Ethiopia's national payment switch, achieving full interoperability between financial institutions."
            />
            <ProjectCard 
              category="Kifiya Financial Tech"
              title="One-Stop Utility Payment"
              desc="Architected a centralized utility payment platform for streamlined bill payments across the nation."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Work Together?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Discussing training needs, research initiatives, or development projects across East Africa.
          </p>
          <div className="flex justify-center gap-6 mb-12">
             <a href="#" className="hover:text-blue-400"><Linkedin /></a>
             <a href="#" className="hover:text-blue-400"><Twitter /></a>
             <a href="#" className="hover:text-blue-400"><Github /></a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Abebaw Belay. Crafted with precision and expertise.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ExpertiseCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 bg-white group">
      <div className="mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProjectCard({ category, title, desc }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 transition shadow-sm">
      <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
        Project Image Placeholder
      </div>
      <div className="p-6">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{category}</span>
        <h3 className="text-lg font-bold mt-2 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{desc}</p>
        <button className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition">
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
