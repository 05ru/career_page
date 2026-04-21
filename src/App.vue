<script setup lang="ts">
import { computed, ref } from 'vue';

const searchQuery = ref('');

const heroStats = [
  { value: '1000+', label: 'Сотрудников' },
  { value: '15+', label: 'Лет на рынке' },
  { value: '50+', label: 'Открытых вакансий' },
  { value: '10М+', label: 'Пользователей' },
];

const popularTags = [
  'Backend',
  'Frontend',
  'DevOps',
  'Product Manager',
  'Data Science',
  'QA',
  'UX/UI Designer',
  'Marketing',
];

const benefits = [
  { icon: '💰', title: 'Конкурентная зарплата', description: 'Высокий уровень дохода, соответствующий рыночным стандартам финтех-индустрии', color: 'from-[#ff8a00] to-[#ff5a00]' },
  { icon: '📈', title: 'Карьерный рост', description: 'Прозрачная система развития, регулярные ревью и возможности для повышения', color: 'from-[#ff4b4b] to-[#9f0f17]' },
  { icon: '🎓', title: 'Обучение и развитие', description: 'Корпоративное обучение, конференции, сертификации за счет компании', color: 'from-zinc-700 to-[#3a3a3f]' },
  { icon: '⚡', title: 'Инновационные проекты', description: 'Работа с современным стеком технологий над продуктами для миллионов пользователей', color: 'from-[#ffb347] to-[#ff6a00]' },
  { icon: '❤️', title: 'Work-Life Balance', description: 'Гибкий график, удаленная работа, забота о здоровье и комфорте сотрудников', color: 'from-[#ff2d2d] to-[#9f0f17]' },
  { icon: '🏆', title: 'Премии и бонусы', description: 'Система мотивации, ДМС, корпоративные мероприятия и другие льготы', color: 'from-zinc-700 to-zinc-900' },
];

const directions = [
  { icon: '💻', title: 'Разработка', description: 'Backend, Frontend, Mobile, Full-stack', positions: 25, gradient: 'from-[#ff4b4b] to-[#c91424]' },
  { icon: '🎨', title: 'Дизайн', description: 'UX/UI, Product Design, Research', positions: 8, gradient: 'from-zinc-700 to-[#3a3a3f]' },
  { icon: '🗄️', title: 'Data & Analytics', description: 'Data Science, Analytics, BI', positions: 12, gradient: 'from-[#ff8a00] to-[#ff5a00]' },
  { icon: '📊', title: 'Продукт и менеджмент', description: 'Product Manager, Project Manager', positions: 10, gradient: 'from-[#ff8a00] to-[#ff2d2d]' },
  { icon: '🛡️', title: 'Безопасность', description: 'Information Security, DevSecOps', positions: 6, gradient: 'from-[#ff2d2d] to-[#9f0f17]' },
  { icon: '⚙️', title: 'DevOps & Infrastructure', description: 'DevOps, SRE, Cloud Engineering', positions: 9, gradient: 'from-zinc-700 to-zinc-900' },
];

const vacancies = [
  { title: 'Senior Backend Developer', department: 'Разработка', location: 'Москва / Удаленно', type: 'Полная занятость', tags: ['Go', 'Kubernetes', 'PostgreSQL', 'Backend'], gradient: 'from-[#ff4b4b] to-[#c91424]', illustration: '💻' },
  { title: 'Product Designer', department: 'Дизайн', location: 'Москва', type: 'Полная занятость', tags: ['Figma', 'UX/UI', 'Product Design'], gradient: 'from-zinc-700 to-[#3a3a3f]', illustration: '🎨' },
  { title: 'Frontend Engineer (Vue)', department: 'Разработка', location: 'Москва / Удаленно', type: 'Полная занятость', tags: ['Vue', 'TypeScript', 'Frontend'], gradient: 'from-[#ff7a7a] to-[#c91424]', illustration: '🟢' },
  { title: 'Data Scientist', department: 'Data & Analytics', location: 'Москва', type: 'Полная занятость', tags: ['Python', 'ML', 'Data Science'], gradient: 'from-[#ff8a00] to-[#ff5a00]', illustration: '📊' },
  { title: 'Product Manager', department: 'Продукт', location: 'Москва', type: 'Полная занятость', tags: ['Product', 'Agile', 'Product Manager'], gradient: 'from-[#ff8a00] to-[#ff2d2d]', illustration: '🚀' },
  { title: 'DevOps Engineer', department: 'Infrastructure', location: 'Москва / Удаленно', type: 'Полная занятость', tags: ['Kubernetes', 'AWS', 'DevOps'], gradient: 'from-zinc-700 to-zinc-900', illustration: '⚙️' },
];

const processSteps = [
  { icon: '📝', title: 'Отклик', description: 'Отправь резюме через HH.ru или заполни форму на сайте', color: 'from-[#ff4b4b] to-[#c91424]' },
  { icon: '💬', title: 'HR-интервью', description: 'Знакомство с рекрутером, обсуждение опыта и ожиданий', color: 'from-zinc-700 to-[#3a3a3f]' },
  { icon: '👥', title: 'Техническое интервью', description: 'Решение задач и общение с будущими коллегами', color: 'from-[#ff8a00] to-[#ff5a00]' },
  { icon: '✅', title: 'Оффер', description: 'Получение предложения о работе с условиями', color: 'from-[#ff8a00] to-[#ff2d2d]' },
  { icon: '🚀', title: 'Онбординг', description: 'Адаптация в команде и старт работы над проектами', color: 'from-zinc-700 to-zinc-900' },
];

const lifeAspects = [
  { icon: '☕', title: 'Офисная культура', description: 'Современные офисы с зонами отдыха, кофепоинтами и комфортными рабочими местами' },
  { icon: '🎉', title: 'Корпоративы', description: 'Регулярные командные мероприятия, празднования и тимбилдинги' },
  { icon: '🏆', title: 'Хакатоны', description: 'Внутренние хакатоны и технологические челленджи с призами' },
  { icon: '❤️', title: 'Забота о здоровье', description: 'ДМС, спортивные активности и программы поддержки well-being' },
];

const photos = [
  { id: 1, title: 'Командная работа', gradient: 'from-[#ff7a7a] to-[#ff2d2d]' },
  { id: 2, title: 'Хакатон 2025', gradient: 'from-zinc-600 to-zinc-800' },
  { id: 3, title: 'Офис в Москве', gradient: 'from-[#ffae42] to-[#ff6a00]' },
  { id: 4, title: 'Корпоратив', gradient: 'from-[#ffb347] to-[#ff4b4b]' },
  { id: 5, title: 'Tech Talk', gradient: 'from-zinc-600 to-zinc-800' },
  { id: 6, title: 'Команда дизайна', gradient: 'from-[#ff8f8f] to-[#ff4b4b]' },
];

const stories = [
  { name: 'Алексей', role: 'Senior Backend Developer', quote: 'В 05 я вырос от Middle до Senior за 2 года. Здесь ценят инициативу и дают возможность работать над сложными задачами', gradient: 'from-[#ff4b4b] to-[#c91424]' },
  { name: 'Мария', role: 'Product Designer', quote: 'Команда дизайна в 05 — это настоящая семья. Мы вместе растем, делимся опытом и создаем крутые продукты', gradient: 'from-zinc-700 to-[#3a3a3f]' },
  { name: 'Дмитрий', role: 'Product Manager', quote: 'Работа в финтехе — это всегда вызов. В 05 я нашел баланс между интересными задачами и комфортными условиями', gradient: 'from-[#ff8a00] to-[#ff5a00]' },
];

const filteredVacancies = computed(() => {
  if (!searchQuery.value.trim()) return vacancies;
  const query = searchQuery.value.toLowerCase();
  return vacancies.filter((vacancy) =>
    vacancy.title.toLowerCase().includes(query)
    || vacancy.department.toLowerCase().includes(query)
    || vacancy.tags.some((tag) => tag.toLowerCase().includes(query)),
  );
});
</script>

<template>
  <div class="omni-page min-h-screen">
    <header class="omni-header fixed top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-[#ff2d2d] to-[#9f0f17] rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">05</span>
          </div>
          <span class="text-xl font-semibold text-slate-900">Карьера в OMNI</span>
        </div>
        <nav class="hidden md:flex items-center gap-8">
          <a href="#vacancies" class="text-slate-600 hover:text-[#c91424] transition-colors">Вакансии</a>
          <a href="#about" class="text-slate-600 hover:text-[#c91424] transition-colors">О компании</a>
          <a href="#life" class="text-slate-600 hover:text-[#c91424] transition-colors">Жизнь в 05</a>
          <a href="#process" class="text-slate-600 hover:text-[#c91424] transition-colors">Как попасть</a>
        </nav>
        <button class="omni-primary-button px-6 py-2 rounded-lg hover:shadow-lg transition-all">Откликнуться</button>
      </div>
    </header>

    <main class="pt-20">
      <section class="omni-hero relative overflow-hidden text-white py-24 md:py-32">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>
        <div class="relative max-w-7xl mx-auto px-6">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"><span>✨</span><span class="text-sm">Лидер российского финтеха</span></div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Построй карьеру<br>в <span class="text-[#ff4b4b]">финтех-будущем</span></h1>
            <p class="text-xl md:text-2xl text-zinc-200 mb-8 leading-relaxed">Присоединяйся к команде 05 — создавай инновационные финансовые продукты, влияй на жизнь миллионов людей и развивайся вместе с нами</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#vacancies" class="inline-flex items-center justify-center gap-2 bg-white text-[#c91424] px-8 py-4 rounded-xl hover:shadow-2xl transition-all"><span class="font-semibold">Смотреть вакансии</span><span>→</span></a>
              <a href="#life" class="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all"><span class="font-semibold">Жизнь в компании</span></a>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl">
            <div v-for="stat in heroStats" :key="stat.label" class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"><div class="text-3xl font-bold mb-1">{{ stat.value }}</div><div class="text-zinc-200 text-sm">{{ stat.label }}</div></div>
          </div>
        </div>
      </section>

      <section class="py-12 bg-white border-b border-zinc-800/10">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-center mb-6">Найди свою вакансию</h2>
            <div class="relative mb-6"><span class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400">🔎</span><input v-model="searchQuery" type="text" placeholder="Поиск по вакансиям, навыкам, ключевым словам..." class="w-full pl-12 pr-4 py-4 bg-zinc-100/60 border border-zinc-800/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff2d2d] focus:border-transparent transition-all"></div>
            <div class="flex flex-wrap items-center gap-3"><span class="text-slate-400">🏷️</span><span class="text-sm text-slate-600">Популярные теги:</span><button v-for="tag in popularTags" :key="tag" class="px-4 py-2 bg-slate-100 hover:bg-[#ffe3e3] hover:text-[#c91424] text-slate-700 rounded-lg transition-all text-sm" @click="searchQuery = tag">{{ tag }}</button></div>
          </div>
        </div>
      </section>

      <section id="about" class="py-20 bg-gradient-to-b from-white to-slate-50">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16"><div class="inline-block px-4 py-2 bg-[#ffe3e3] text-[#c91424] rounded-full text-sm font-medium mb-4">Ценностное предложение</div><h2 class="mb-4">Почему стоит работать в 05</h2><p class="text-xl text-slate-600 max-w-3xl mx-auto">Мы создали среду, где каждый может реализовать свой потенциал и внести вклад в развитие финтеха</p></div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="benefit in benefits" :key="benefit.title" class="omni-card group p-8 hover:border-[#ff9b9b] hover:shadow-xl transition-all duration-300"><div :class="`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`"><span class="text-2xl">{{ benefit.icon }}</span></div><h3 class="mb-3">{{ benefit.title }}</h3><p class="text-slate-600 leading-relaxed">{{ benefit.description }}</p></div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-zinc-100/60">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16"><h2 class="mb-4">Направления работы</h2><p class="text-xl text-slate-600 max-w-2xl mx-auto">Выбери направление, которое соответствует твоим навыкам и интересам</p></div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="direction in directions" :key="direction.title" class="omni-card group relative p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"><div :class="`absolute inset-0 bg-gradient-to-br ${direction.gradient} opacity-0 group-hover:opacity-5 transition-opacity`" /><div class="relative"><div :class="`w-16 h-16 bg-gradient-to-br ${direction.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`"><span class="text-3xl">{{ direction.icon }}</span></div><h3 class="mb-2">{{ direction.title }}</h3><p class="text-slate-600 mb-4">{{ direction.description }}</p><div class="flex items-center justify-between"><span class="text-sm text-slate-500">{{ direction.positions }} вакансий</span><button class="text-[#c91424] hover:text-[#9f0f17] font-medium text-sm">Смотреть →</button></div></div></div>
          </div>
        </div>
      </section>

      <section id="vacancies" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16"><h2 class="mb-4">Открытые вакансии</h2><p class="text-xl text-slate-600">{{ filteredVacancies.length }} вакансий <template v-if="searchQuery">по запросу "{{ searchQuery }}"</template></p></div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="vacancy in filteredVacancies" :key="vacancy.title" class="omni-card group hover:border-[#ff9b9b] hover:shadow-xl transition-all duration-300 overflow-hidden"><div :class="`h-32 bg-gradient-to-br ${vacancy.gradient} flex items-center justify-center text-6xl relative overflow-hidden`"><div class="absolute inset-0 bg-white/10 backdrop-blur-sm" /><span class="relative z-10">{{ vacancy.illustration }}</span></div><div class="p-6"><div class="mb-4"><span class="omni-chip inline-block px-3 py-1 rounded-full text-sm mb-3">{{ vacancy.department }}</span><h3 class="mb-3">{{ vacancy.title }}</h3></div><div class="space-y-2 mb-4"><div class="flex items-center gap-2 text-slate-600 text-sm"><span>📍</span><span>{{ vacancy.location }}</span></div><div class="flex items-center gap-2 text-slate-600 text-sm"><span>💼</span><span>{{ vacancy.type }}</span></div></div><div class="flex flex-wrap gap-2 mb-6"><span v-for="tag in vacancy.tags" :key="`${vacancy.title}-${tag}`" class="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs">{{ tag }}</span></div><a href="https://hh.ru" target="_blank" rel="noopener noreferrer" class="omni-primary-button flex items-center justify-center gap-2 w-full py-3 rounded-xl hover:shadow-lg transition-all"><span>Подробнее на HH.ru</span><span>→</span></a></div></div>
          </div>
          <div v-if="filteredVacancies.length === 0" class="text-center py-12"><p class="text-xl text-slate-600">Не найдено вакансий по запросу "{{ searchQuery }}"</p><p class="text-slate-500 mt-2">Попробуйте изменить поисковый запрос</p></div>
        </div>
      </section>

      <section id="process" class="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16"><div class="inline-block px-4 py-2 bg-[#ffe8cc] text-[#d9480f] rounded-full text-sm font-medium mb-4">Прозрачный процесс</div><h2 class="mb-4">Как попасть в команду 05</h2><p class="text-xl text-slate-600 max-w-3xl mx-auto">Мы ценим открытость и прозрачность. Процесс найма построен так, чтобы ты понимал каждый этап и чувствовал себя комфортно</p></div>
          <div class="relative"><div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ffd0d0] via-[#ffb3b3] to-[#ffc4c4] -translate-y-1/2" /><div class="grid md:grid-cols-3 lg:grid-cols-5 gap-8"><div v-for="(step, index) in processSteps" :key="step.title" class="relative"><div class="flex flex-col items-center text-center"><div class="absolute -top-3 -left-3 w-8 h-8 bg-white border-2 border-[#c91424] text-[#c91424] rounded-full flex items-center justify-center font-bold text-sm z-10">{{ index + 1 }}</div><div :class="`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform`"><span class="text-3xl">{{ step.icon }}</span></div><h3 class="mb-3">{{ step.title }}</h3><p class="text-slate-600 text-sm leading-relaxed">{{ step.description }}</p></div></div></div></div>
          <div class="mt-16 bg-gradient-to-br from-[#fff1f1] to-[#ffe3e3] rounded-2xl p-8 md:p-12 text-center border border-[#ffd0d0]"><h3 class="mb-4">Обычно весь процесс занимает 1-2 недели</h3><p class="text-slate-600 mb-8 max-w-2xl mx-auto">Мы стараемся принимать решения быстро и держать тебя в курсе на каждом этапе. Даже если что-то пойдет не так, ты получишь фидбек</p><button class="omni-primary-button px-8 py-4 rounded-xl hover:shadow-xl transition-all">Начать процесс</button></div>
        </div>
      </section>

      <section id="life" class="py-20 bg-gradient-to-br from-slate-50 via-white to-[#fff5f5]">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16"><div class="inline-block px-4 py-2 bg-[#ffe3e3] text-[#c91424] rounded-full text-sm font-medium mb-4">05 LIFE</div><h2 class="mb-4">Жизнь в компании</h2><p class="text-xl text-slate-600 max-w-3xl mx-auto">Мы не просто работаем — мы создаем комьюнити профессионалов, где каждый может быть собой</p></div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"><div v-for="aspect in lifeAspects" :key="aspect.title" class="omni-card p-6 hover:shadow-lg transition-all"><div class="text-4xl mb-4">{{ aspect.icon }}</div><h4 class="mb-2">{{ aspect.title }}</h4><p class="text-slate-600 text-sm">{{ aspect.description }}</p></div></div>
          <div class="mb-12"><h3 class="text-center mb-8">Наша жизнь в фото</h3><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><div v-for="photo in photos" :key="photo.id" class="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"><div :class="`absolute inset-0 bg-gradient-to-br ${photo.gradient} opacity-80 group-hover:opacity-90 transition-opacity`"><div class="absolute inset-0 flex items-center justify-center text-6xl text-white/50">🖼️</div></div><div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" /><div class="absolute bottom-0 left-0 right-0 p-6 text-white"><h4 class="font-semibold">{{ photo.title }}</h4></div></div></div></div>
          <div class="bg-gradient-to-br from-[#ff2d2d] to-[#9f0f17] rounded-2xl p-12 text-center text-white relative overflow-hidden"><div class="absolute inset-0 opacity-10"><div class="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" /><div class="absolute bottom-10 left-10 w-64 h-64 bg-purple-300 rounded-full blur-3xl" /></div><div class="relative"><div class="text-6xl mb-6 opacity-80">🎬</div><h3 class="mb-4">Смотри наши видео о жизни в 05</h3><p class="text-zinc-200 mb-8 max-w-2xl mx-auto">Истории сотрудников, обзоры офисов, влоги с мероприятий — узнай, как мы работаем и отдыхаем</p><button class="bg-white text-[#c91424] px-8 py-4 rounded-xl hover:shadow-2xl transition-all">Смотреть на YouTube</button></div></div>
          <div class="mt-16 grid md:grid-cols-3 gap-8"><div v-for="story in stories" :key="story.name" class="omni-card p-8 hover:shadow-lg transition-all"><div :class="`w-16 h-16 bg-gradient-to-br ${story.gradient} rounded-full mb-4`" /><p class="text-slate-600 italic mb-6">"{{ story.quote }}"</p><div><div class="font-semibold text-slate-900">{{ story.name }}</div><div class="text-sm text-slate-500">{{ story.role }}</div></div></div></div>
        </div>
      </section>
    </main>

    <footer class="omni-footer text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div><div class="flex items-center gap-2 mb-6"><div class="w-10 h-10 bg-gradient-to-br from-[#ff2d2d] to-[#9f0f17] rounded-lg flex items-center justify-center"><span class="text-white font-bold text-xl">05</span></div><span class="text-xl font-semibold">OMNI Карьера</span></div><p class="text-slate-400 mb-6">Создаем финтех-будущее вместе с лучшими специалистами России</p></div>
          <div><h4 class="mb-4">Навигация</h4><ul class="space-y-3"><li><a href="#vacancies" class="text-slate-400 hover:text-white transition-colors">Вакансии</a></li><li><a href="#about" class="text-slate-400 hover:text-white transition-colors">О компании</a></li><li><a href="#life" class="text-slate-400 hover:text-white transition-colors">Жизнь в 05</a></li><li><a href="#process" class="text-slate-400 hover:text-white transition-colors">Процесс найма</a></li></ul></div>
          <div><h4 class="mb-4">Направления</h4><ul class="space-y-3"><li><a href="#" class="text-slate-400 hover:text-white transition-colors">Разработка</a></li><li><a href="#" class="text-slate-400 hover:text-white transition-colors">Дизайн</a></li><li><a href="#" class="text-slate-400 hover:text-white transition-colors">Data & Analytics</a></li><li><a href="#" class="text-slate-400 hover:text-white transition-colors">Продукт</a></li></ul></div>
          <div><h4 class="mb-4">Контакты</h4><ul class="space-y-3"><li class="text-slate-400">✉️ <a href="mailto:hr@05.ru" class="hover:text-white transition-colors">hr@05.ru</a></li><li class="text-slate-400">📞 <a href="tel:+74951234567" class="hover:text-white transition-colors">+7 (495) 123-45-67</a></li><li class="text-slate-400">📍 Москва, ул. Примерная, д. 1</li></ul></div>
        </div>
        <div class="border-t border-zinc-800 pt-8"><div class="flex flex-col md:flex-row justify-between items-center gap-4"><p class="text-slate-400 text-sm">© 2026 05. Все права защищены.</p><div class="flex gap-6 text-sm"><a href="#" class="text-slate-400 hover:text-white transition-colors">Политика конфиденциальности</a><a href="#" class="text-slate-400 hover:text-white transition-colors">Условия использования</a></div></div></div>
      </div>
    </footer>
  </div>
</template>
