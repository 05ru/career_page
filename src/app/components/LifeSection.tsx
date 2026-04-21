import { Image, Video, Coffee, PartyPopper, Trophy, Heart } from 'lucide-react';

export default function LifeSection() {
  const lifeAspects = [
    {
      icon: Coffee,
      title: 'Офисная культура',
      description: 'Современные офисы с зонами отдыха, кофепоинтами и комфортными рабочими местами'
    },
    {
      icon: PartyPopper,
      title: 'Корпоративы',
      description: 'Регулярные командные мероприятия, празднования и тимбилдинги'
    },
    {
      icon: Trophy,
      title: 'Хакатоны',
      description: 'Внутренние хакатоны и технологические челленджи с призами'
    },
    {
      icon: Heart,
      title: 'Забота о здоровье',
      description: 'ДМС, спортивные активности и программы поддержки well-being'
    }
  ];

  const photos = [
    { id: 1, title: 'Командная работа', gradient: 'from-blue-400 to-cyan-400' },
    { id: 2, title: 'Хакатон 2025', gradient: 'from-purple-400 to-pink-400' },
    { id: 3, title: 'Офис в Москве', gradient: 'from-green-400 to-emerald-400' },
    { id: 4, title: 'Корпоратив', gradient: 'from-orange-400 to-red-400' },
    { id: 5, title: 'Tech Talk', gradient: 'from-indigo-400 to-purple-400' },
    { id: 6, title: 'Команда дизайна', gradient: 'from-pink-400 to-rose-400' }
  ];

  return (
    <section id="life" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            05 LIFE
          </div>
          <h2 className="mb-4">Жизнь в компании</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы не просто работаем — мы создаем комьюнити профессионалов, где каждый может быть собой
          </p>
        </div>

        {/* Life Aspects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {lifeAspects.map((aspect, index) => {
            const Icon = aspect.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all"
              >
                <Icon className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="mb-2">{aspect.title}</h4>
                <p className="text-slate-600 text-sm">{aspect.description}</p>
              </div>
            );
          })}
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h3 className="text-center mb-8">Наша жизнь в фото</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-16 h-16 text-white/50" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-semibold">{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <Video className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h3 className="mb-4">Смотри наши видео о жизни в 05</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Истории сотрудников, обзоры офисов, влоги с мероприятий —
              узнай, как мы работаем и отдыхаем
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-2xl transition-all">
              Смотреть на YouTube
            </button>
          </div>
        </div>

        {/* Employee Stories */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Алексей',
              role: 'Senior Backend Developer',
              quote: 'В 05 я вырос от Middle до Senior за 2 года. Здесь ценят инициативу и дают возможность работать над сложными задачами',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              name: 'Мария',
              role: 'Product Designer',
              quote: 'Команда дизайна в 05 — это настоящая семья. Мы вместе растем, делимся опытом и создаем крутые продукты',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              name: 'Дмитрий',
              role: 'Product Manager',
              quote: 'Работа в финтехе — это всегда вызов. В 05 я нашел баланс между интересными задачами и комфортными условиями',
              gradient: 'from-green-500 to-emerald-500'
            }
          ].map((story, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all">
              <div className={`w-16 h-16 bg-gradient-to-br ${story.gradient} rounded-full mb-4`}></div>
              <p className="text-slate-600 italic mb-6">"{story.quote}"</p>
              <div>
                <div className="font-semibold text-slate-900">{story.name}</div>
                <div className="text-sm text-slate-500">{story.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
