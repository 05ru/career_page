import { DollarSign, TrendingUp, GraduationCap, Heart, Award, Zap } from 'lucide-react';

export default function EVPSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Конкурентная зарплата',
      description: 'Высокий уровень дохода, соответствующий рыночным стандартам финтех-индустрии',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Карьерный рост',
      description: 'Прозрачная система развития, регулярные ревью и возможности для повышения',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: GraduationCap,
      title: 'Обучение и развитие',
      description: 'Корпоративное обучение, конференции, сертификации за счет компании',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Инновационные проекты',
      description: 'Работа с современным стеком технологий над продуктами для миллионов пользователей',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Гибкий график, удаленная работа, забота о здоровье и комфорте сотрудников',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Award,
      title: 'Премии и бонусы',
      description: 'Система мотивации, ДМС, корпоративные мероприятия и другие льготы',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Ценностное предложение
          </div>
          <h2 className="mb-4">Почему стоит работать в 05</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы создали среду, где каждый может реализовать свой потенциал и внести вклад в развитие финтеха
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
