import { Search, ArrowRight, TrendingUp, Users, Target, Award, DollarSign, GraduationCap, Heart, MapPin, Clock, Briefcase } from 'lucide-react';
import { useState } from 'react';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import EVPSection from './components/EVPSection';
import DirectionsSection from './components/DirectionsSection';
import VacanciesSection from './components/VacanciesSection';
import ProcessSection from './components/ProcessSection';
import LifeSection from './components/LifeSection';
import Footer from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">05</span>
            </div>
            <span className="text-xl font-semibold text-slate-900">Карьера в 05</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#vacancies" className="text-slate-600 hover:text-blue-600 transition-colors">Вакансии</a>
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">О компании</a>
            <a href="#life" className="text-slate-600 hover:text-blue-600 transition-colors">Жизнь в 05</a>
            <a href="#process" className="text-slate-600 hover:text-blue-600 transition-colors">Как попасть</a>
          </nav>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
            Откликнуться
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <SearchSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <EVPSection />
        <DirectionsSection />
        <VacanciesSection searchQuery={searchQuery} />
        <ProcessSection />
        <LifeSection />
      </main>

      <Footer />
    </div>
  );
}
