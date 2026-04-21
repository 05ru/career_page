import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">05</span>
              </div>
              <span className="text-xl font-semibold">05 Карьера</span>
            </div>
            <p className="text-slate-400 mb-6">
              Создаем финтех-будущее вместе с лучшими специалистами России
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Навигация</h4>
            <ul className="space-y-3">
              <li><a href="#vacancies" className="text-slate-400 hover:text-white transition-colors">Вакансии</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#life" className="text-slate-400 hover:text-white transition-colors">Жизнь в 05</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-white transition-colors">Процесс найма</a></li>
            </ul>
          </div>

          {/* Directions */}
          <div>
            <h4 className="mb-4">Направления</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Разработка</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Дизайн</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Data & Analytics</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Продукт</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5" />
                <a href="mailto:hr@05.ru" className="hover:text-white transition-colors">hr@05.ru</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5" />
                <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-1" />
                <span>Москва, ул. Примерная, д. 1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 05. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
