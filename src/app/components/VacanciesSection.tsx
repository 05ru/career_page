import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

interface VacanciesSectionProps {
  searchQuery: string;
}

export default function VacanciesSection({ searchQuery }: VacanciesSectionProps) {
  const vacancies = [
    {
      title: 'Senior Backend Developer',
      department: 'Разработка',
      location: 'Москва / Удаленно',
      type: 'Полная занятость',
      tags: ['Go', 'Kubernetes', 'PostgreSQL', 'Backend'],
      gradient: 'from-blue-500 to-cyan-500',
      illustration: '💻'
    },
    {
      title: 'Product Designer',
      department: 'Дизайн',
      location: 'Москва',
      type: 'Полная занятость',
      tags: ['Figma', 'UX/UI', 'Product Design'],
      gradient: 'from-purple-500 to-pink-500',
      illustration: '🎨'
    },
    {
      title: 'Frontend Engineer (React)',
      department: 'Разработка',
      location: 'Москва / Удаленно',
      type: 'Полная занятость',
      tags: ['React', 'TypeScript', 'Frontend'],
      gradient: 'from-cyan-500 to-blue-500',
      illustration: '⚛️'
    },
    {
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Москва',
      type: 'Полная занятость',
      tags: ['Python', 'ML', 'Data Science'],
      gradient: 'from-green-500 to-emerald-500',
      illustration: '📊'
    },
    {
      title: 'Product Manager',
      department: 'Продукт',
      location: 'Москва',
      type: 'Полная занятость',
      tags: ['Product', 'Agile', 'Product Manager'],
      gradient: 'from-orange-500 to-red-500',
      illustration: '🚀'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Москва / Удаленно',
      type: 'Полная занятость',
      tags: ['Kubernetes', 'AWS', 'DevOps'],
      gradient: 'from-indigo-500 to-purple-500',
      illustration: '⚙️'
    }
  ];

  const filteredVacancies = vacancies.filter(vacancy => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      vacancy.title.toLowerCase().includes(query) ||
      vacancy.department.toLowerCase().includes(query) ||
      vacancy.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <section id="vacancies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Открытые вакансии</h2>
          <p className="text-xl text-slate-600">
            {filteredVacancies.length} {filteredVacancies.length === 1 ? 'вакансия' : 'вакансий'} {searchQuery && `по запросу "${searchQuery}"`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVacancies.map((vacancy, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Illustration Header */}
              <div className={`h-32 bg-gradient-to-br ${vacancy.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <span className="relative z-10">{vacancy.illustration}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm mb-3">
                    {vacancy.department}
                  </span>
                  <h3 className="mb-3">{vacancy.title}</h3>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{vacancy.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Briefcase className="w-4 h-4" />
                    <span>{vacancy.type}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vacancy.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://hh.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <span>Подробнее на HH.ru</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredVacancies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">Не найдено вакансий по запросу "{searchQuery}"</p>
            <p className="text-slate-500 mt-2">Попробуйте изменить поисковый запрос</p>
          </div>
        )}
      </div>
    </section>
  );
}
