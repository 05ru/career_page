import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Лидер российского финтеха</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Построй карьеру<br />в <span className="text-yellow-300">финтех-будущем</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Присоединяйся к команде 05 — создавай инновационные финансовые продукты,
            влияй на жизнь миллионов людей и развивайся вместе с нами
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#vacancies" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-2xl transition-all group">
              <span className="font-semibold">Смотреть вакансии</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#life" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all">
              <span className="font-semibold">Жизнь в компании</span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
          {[
            { value: '1000+', label: 'Сотрудников' },
            { value: '15+', label: 'Лет на рынке' },
            { value: '50+', label: 'Открытых вакансий' },
            { value: '10М+', label: 'Пользователей' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
