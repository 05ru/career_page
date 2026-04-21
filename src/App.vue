<script setup lang="ts">
import logo from './assets/logo.svg';
const navItems = [
  { label: 'Структура', href: '#structure' },
  { label: 'Принципы', href: '#principles' },
  { label: 'Команды', href: '#teams' },
  { label: 'Вакансии', href: '#jobs' },
];

const products = [
  {
    title: 'Мобильная платформа',
    description: 'Строим единый цифровой вход в сервисы компании и соединяем офлайн и онлайн-опыт.',
    metric: '28 млн MAU',
  },
  {
    title: 'Рекламные технологии',
    description: 'Развиваем data-driven продукты для брендов и продавцов внутри экосистемы.',
    metric: '500+ партнёров',
  },
  {
    title: 'Доставка и e-com',
    description: 'Оптимизируем путь заказа: от каталога до получения товара за считанные часы.',
    metric: '95 млн заказов',
  },
  {
    title: 'Лояльность и персонализация',
    description: 'Создаём персональные сценарии покупок и управляем жизненным циклом клиента.',
    metric: '82% покупок с картой',
  },
];

const principles = [
  {
    title: 'Решаем через метрики',
    text: 'Каждая гипотеза имеет цифры, срок и критерии результата. Интуиция помогает, но не заменяет данные.',
  },
  {
    title: 'Сильные команды без компромиссов',
    text: 'Собираем людей, которые готовы брать ответственность, развивать соседние функции и усиливать друг друга.',
  },
  {
    title: 'Быстрее делаем, быстрее учимся',
    text: 'Проверяем идеи короткими итерациями и встраиваем выводы в следующую версию продукта.',
  },
  {
    title: 'Влияние важнее формальностей',
    text: 'Поддерживаем инициативу и прямой диалог со стейкхолдерами на любом уровне.',
  },
  {
    title: 'Технологии ради бизнеса',
    text: 'Инвестируем в решения, которые создают устойчивый результат для клиентов и компании.',
  },
  {
    title: 'Клиент — главный ориентир',
    text: 'Любая функция оценивается через пользу для клиента: скорость, удобство, предсказуемость.',
  },
];

const jobs = [
  'Senior Product Manager',
  'Lead Frontend Engineer',
  'Data Analyst',
  'Engineering Manager',
  'Product Designer',
  'ML Engineer',
];

const teams = ['product', 'engineering', 'analytics', 'design', 'operations'];

const teamStories = [
  {
    date: '14 апреля 2026',
    title: 'Product Discovery Sprint: проверяем гипотезы за 5 дней',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    alt: 'Команда обсуждает roadmap у стеклянной доски',
  },
  {
    date: '8 апреля 2026',
    title: 'Платформенная неделя: как engineering ускоряет релизы',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    alt: 'Инженеры работают за столом с ноутбуками',
  },
  {
    date: '2 апреля 2026',
    title: 'Data Lab: строим модели персонализации в realtime',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    alt: 'Аналитик смотрит на дашборд с метриками',
  },
  {
    date: '27 марта 2026',
    title: 'Design Critique Day: от wireframe до интерфейса',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80',
    alt: 'Дизайнеры обсуждают макеты на большом экране',
  },
  {
    date: '19 марта 2026',
    title: 'Operations Pulse: как держим SLA на масштабе сети',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
    alt: 'Команда операций в офисе у доски с задачами',
  },
];
</script>

<template>
  <div class="omni-clone">
    <header class="clone-header">
      <div class="container flex items-center justify-between gap-4 py-5">
        <div class="flex items-center">
          <img :src="logo" alt="Omniverse" class="logo-image" />
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="hover:text-white transition-colors">{{ item.label }}</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container py-20 md:py-28">
          <p class="eyebrow">карьера в digital retail</p>
          <h1>
            МЕНЯЕМ РЫНОК<br>
            И РАСТЁМ<br>
            ВМЕСТЕ
          </h1>
          <p class="hero-lead">Присоединяйся к продуктовой организации, где масштаб, скорость и самостоятельность идут в комплекте.</p>
        </div>
      </section>

      <section id="structure" class="section section-light">
        <div class="container">
          <p class="eyebrow eyebrow-dark">структура</p>
          <h2>Омни-направления</h2>
          <div class="grid md:grid-cols-2 gap-4 mt-10">
            <article v-for="item in products" :key="item.title" class="panel">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <span class="metric">{{ item.metric }}</span>
            </article>
          </div>
        </div>
      </section>

      <section id="principles" class="section section-dark">
        <div class="container">
          <p class="eyebrow">принципы</p>
          <h2>Разные команды — одна энергия</h2>
          <div class="grid lg:grid-cols-2 gap-4 mt-10">
            <article v-for="item in principles" :key="item.title" class="principle-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="teams" class="section section-accent">
        <div class="container">
          <p class="eyebrow eyebrow-dark">команды</p>
          <h2>Собираем сильных</h2>
          <div class="bands mt-8">
            <div v-for="team in teams" :key="team">{{ team }}</div>
          </div>
          <div class="stories-row mt-8" aria-label="Вертикальные сторис команд">
            <article v-for="story in teamStories" :key="story.title" class="story-card">
              <img :src="story.image" :alt="story.alt" loading="lazy" class="story-cover">
              <div class="story-content">
                <p class="story-date">{{ story.date }}</p>
                <h3>{{ story.title }}</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="jobs" class="section section-light">
        <div class="container">
          <p class="eyebrow eyebrow-dark">вакансии</p>
          <h2>Открытые роли</h2>
          <div class="jobs-list mt-8">
            <a v-for="job in jobs" :key="job" href="#" class="job-row">
              <span>{{ job }}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
