import { FileText, MessageSquare, Users, CheckCircle, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Отклик',
      description: 'Отправь резюме через HH.ru или заполни форму на сайте',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'HR-интервью',
      description: 'Знакомство с рекрутером, обсуждение опыта и ожиданий',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Техническое интервью',
      description: 'Решение задач и общение с будущими коллегами',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CheckCircle,
      title: 'Оффер',
      description: 'Получение предложения о работе с условиями',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Rocket,
      title: 'Онбординг',
      description: 'Адаптация в команде и старт работы над проектами',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Прозрачный процесс
          </div>
          <h2 className="mb-4">Как попасть в команду 05</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Мы ценим открытость и прозрачность. Процесс найма построен так,
            чтобы ты понимал каждый этап и чувствовал себя комфортно
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-white border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm z-10">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
          <h3 className="mb-4">Обычно весь процесс занимает 1-2 недели</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Мы стараемся принимать решения быстро и держать тебя в курсе на каждом этапе.
            Даже если что-то пойдет не так, ты получишь фидбек
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all">
            Начать процесс
          </button>
        </div>
      </div>
    </section>
  );
}
