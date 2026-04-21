import { Code, Palette, Database, LineChart, Shield, Cpu } from 'lucide-react';

export default function DirectionsSection() {
  const directions = [
    {
      icon: Code,
      title: 'Разработка',
      description: 'Backend, Frontend, Mobile, Full-stack',
      positions: 25,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Дизайн',
      description: 'UX/UI, Product Design, Research',
      positions: 8,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Data Science, Analytics, BI',
      positions: 12,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: LineChart,
      title: 'Продукт и менеджмент',
      description: 'Product Manager, Project Manager',
      positions: 10,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Information Security, DevSecOps',
      positions: 6,
      gradient: 'from-red-500 to-rose-500'
    },
    {
      icon: Cpu,
      title: 'DevOps & Infrastructure',
      description: 'DevOps, SRE, Cloud Engineering',
      positions: 9,
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Направления работы</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Выбери направление, которое соответствует твоим навыкам и интересам
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directions.map((direction, index) => {
            const Icon = direction.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${direction.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${direction.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="mb-2">{direction.title}</h3>
                  <p className="text-slate-600 mb-4">{direction.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      {direction.positions} {direction.positions === 1 ? 'вакансия' : 'вакансий'}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Смотреть →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
