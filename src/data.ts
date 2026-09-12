export const contacts = {
  email: "unkstd@mail.ru",
  telegram: "@mikevetkal",
  telegramUrl: "https://t.me/mikevetkal",
  github: "github.com/mikenoired",
  githubUrl: "https://github.com/mikenoired",
};

export const experience = [
  {
    period: "июн 2026 — сен 2026",
    company: "Уют",
    city: "Волгодонск",
    role: "Fullstack-разработчик",
    intro:
      "Внутренняя платформа для управляющей компании: отчётность, обращения и рабочие процессы в одном интерфейсе.",
    results: [
      "Сократил подготовку ежемесячной и годовой отчётности с нескольких недель и месяцев до 5 минут.",
      "Автоматизировал подготовку проектов ответов на обращения с помощью ИИ, внутренних данных и шаблонов; снизил объём ручной работы сотрудников.",
      "Самостоятельно проработал архитектуру, бизнес-логику и сценарии для разных ролей сотрудников.",
    ],
  },
  {
    period: "окт 2025 — янв 2026",
    company: "ics-it · Gramax",
    city: "Москва/Удалённо",
    role: "Fullstack-разработчик",
    intro:
      "Развитие приложения для ведения документации Gramax в связке с PM и Team Lead.",
    results: [
      "Разработал 8 production-модулей: внешний reader документов, ограниченное клонирование репозиториев, иконки, подтверждения изменений и offline-сценарии.",
      "Интегрировал SSO через Kerberos, покрыл ключевые сценарии unit-тестами и участвовал в RU/EN-локализации.",
      "Разделил слои представления и логики при рефакторинге архитектуры; сделал критические действия понятнее в админ-панели.",
    ],
  },
  {
    period: "июл 2023 — июн 2025",
    company: "Белая Доска",
    city: "Удалённо",
    role: "Fullstack-разработчик",
    intro:
      "Коммерческие веб-продукты в команде из пяти человек: кабинеты, AI-функции и обработка данных.",
    results: [
      "Разрабатывал интерфейсы на React, Vue, Next.js, Nuxt.js и React Native: авторизацию, drag-and-drop, пагинацию и типизированные API.",
      "Создавал API и серверную логику на TypeScript и Python, JWT-аутентификацию, фоновые процессы на BullMQ и Trigger.dev.",
      "Настраивал CI/CD, Docker, dev/prod-окружения, PM2, Redis/MinIO и резервное копирование.",
    ],
  },
  {
    period: "фев 2022 — июн 2023",
    company: "CyberТека",
    city: "Волгодонск",
    role: "Специалист наладки информационных систем / Администратор",
    intro:
      "Компьютерный клуб: администрирование системы GIZMO, поддержка мероприятий и первые коммерческие разработки на Electron и React.",
    results: [
      "Создал с нуля оболочки с бонусной системой и event mini app на Electron и React с привязкой аккаунтов к GIZMO.",
      "Провёл реверс-инжиниринг GIZMO для кастомизации тем под задачи клуба.",
      "Участвовал в мероприятиях, оперативно решал неполадки и стажировал новых сотрудников.",
    ],
  },
] as const;

export const skills = [
  [
    "Клиент",
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "React Native",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],
  ["Сервер", "Node.js", "Python", "Hono", "Elysia", "REST API", "JWT"],
  [
    "Данные и процессы",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Dragonfly",
    "Drizzle ORM",
    "BullMQ",
    "Trigger.dev",
    "MinIO",
  ],
  ["Доставка", "Docker", "CI/CD", "PM2", "Git", "Figma"],
] as const;

export const projects = [
  {
    name: "no.audio",
    type: "Коммерческий проект · Белая Доска",
    description:
      "Разработка новой версии сервиса: timeline-интерфейс, экспорт для сторонних редакторов и очередь обработки задач.",
    stack: "React · TypeScript · очереди обработки",
    url: "https://no.audio",
    urlLabel: "Открыть сервис",
  },
  {
    name: "Один дома",
    type: "Коммерческий проект · Белая Доска",
    description:
      "Миграция сайта на самостоятельный движок управления контентом и реализация нового дизайна.",
    stack: "Fullstack · CMS · новый дизайн",
    url: "http://odindoma.media",
    urlLabel: "Открыть сайт",
  },
  {
    name: "RAG для анализа КБЖУ",
    type: "Коммерческий проект · Белая Доска",
    description:
      "Система определения КБЖУ по фотографии: подготовили и оптимизировали базу данных, реализовали ранжированный поиск BM25 и встроили движок в Telegram Mini App.",
    stack: "AI · RAG · BM25 · Telegram Mini App",
    url: undefined,
    urlLabel: undefined,
  },
  {
    name: "Fren",
    type: "Коммерческий проект · Белая Доска",
    description:
      "Помощь в интеграции новых интерфейсных функций во frontend Telegram Mini App.",
    stack: "Frontend · Telegram Mini App",
    url: "https://t.me/frenglobal",
    urlLabel: "Открыть в Telegram",
  },
  {
    name: "npp_to_docx",
    type: "Публичный проект · desktop",
    description:
      "Приложение для обработки наборов SVG и БД с подготовкой паспортов для операторов РОАЭС. Архитектура разделяет общий движок, Electron main/preload, React-renderer и общие IPC-типы.",
    stack: "TypeScript · React 19 · Electron · Vite",
    url: "https://github.com/mikenoired/npp_to_docx",
    urlLabel: "Открыть репозиторий",
  },
  {
    name: "Контур",
    type: "Закрытый проект · internal tool",
    description:
      "Внутренняя платформа управляющей компании: объединила сбор данных, формирование документов и контроль отчётности. Подготовка регулярных отчётов сократилась до 5 минут.",
    stack: "Fullstack · автоматизация процессов · AI",
    url: undefined,
    urlLabel: undefined,
  },
  {
    name: "Gramax",
    type: "Закрытый проект · documentation",
    description:
      "Приложение для работы с документацией. Разработал 8 production-модулей: внешний reader, клонирование репозиториев с ограниченными правами, управление иконками и offline-сценарии.",
    stack: "TypeScript · React · Kerberos SSO · offline",
    url: "https://github.com/Gram-ax/gramax",
    urlLabel: "Открыть репозиторий",
  },
] as const;
