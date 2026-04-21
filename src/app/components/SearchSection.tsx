import { Search, Tag } from 'lucide-react';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchSection({ searchQuery, setSearchQuery }: SearchSectionProps) {
  const popularTags = [
    'Backend',
    'Frontend',
    'DevOps',
    'Product Manager',
    'Data Science',
    'QA',
    'UX/UI Designer',
    'Marketing'
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-6">Найди свою вакансию</h2>

          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Поиск по вакансиям, навыкам, ключевым словам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap items-center gap-3">
            <Tag className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-600">Популярные теги:</span>
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 text-slate-700 rounded-lg transition-all text-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
