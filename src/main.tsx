import { useEffect, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { ProgressiveBlur } from "./components/ProgressiveBlur";
import { contacts, experience, projects, skills } from "./data";
import ArrowUpRight from "./components/arrow-up-right";
import ArrowUp from "./components/arrow-up";

type Theme = "system" | "light" | "dark";

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M20.4 15.1A8.5 8.5 0 0 1 8.9 3.6 8.5 8.5 0 1 0 20.4 15.1Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3a9 9 0 1 0 0 18V3Z" />
      <path d="M12 3a9 9 0 0 1 0 18" />
    </svg>
  );
}

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system",
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme-switch" aria-label="Тема сайта">
      {(["system", "light", "dark"] as const).map((item) => (
        <button
          className={theme === item ? "is-active" : ""}
          key={item}
          onClick={() => setTheme(item)}
          aria-label={
            {
              system: "Системная тема",
              light: "Светлая тема",
              dark: "Тёмная тема",
            }[item]
          }
          aria-pressed={theme === item}
          title={
            {
              system: "Системная тема",
              light: "Светлая тема",
              dark: "Тёмная тема",
            }[item]
          }
          type="button"
        >
          <ThemeIcon theme={item} />
        </button>
      ))}
    </div>
  );
}

function SectionTitle({ children, id }: { children: ReactNode; id: string }) {
  return <h2 id={id}>{children}</h2>;
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 120);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <>
      <Analytics />
      <header
        className={`topbar ${isScrolled ? "is-scrolled" : ""}`}
        aria-label="Навигация"
      >
        <ProgressiveBlur height="100%" position="top" />
        <div className="topbar-inner">
          <button
            className="back-to-top"
            aria-label="Вернуться наверх"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            type="button"
          >
            вверх
            <ArrowUp />
          </button>
          <nav>
            <a href="#experience">опыт</a>
            <a href="#projects">проекты</a>
            <a href="#stack">стек</a>
            <a href="#contact">контакты</a>
          </nav>
          <ThemeSwitch />
        </div>
      </header>

      <main>
        <section className="intro" id="top" aria-labelledby="name">
          <p className="eyebrow">
            Fullstack-разработчик · Волгодонск / удалённо
          </p>
          <h1 id="name">
            Делаю продукты,
            <br />
            которые доходят до production
          </h1>
          <p className="lead">
            Михаил Веткаль · TypeScript, React, Next.js, Node.js. Беру
            веб-задачу целиком: от прояснения требований и интерфейса до API,
            фоновых процессов и выпуска.
          </p>
          <ul className="hero-proof" aria-label="Ключевые результаты">
            <li>
              <strong>4 года 1 мес.</strong> коммерческого опыта
            </li>
            <li>
              <strong>8 модулей</strong> выпущено для Gramax
            </li>
            <li>
              <strong>месяцы → 5 мин.</strong> подготовка отчётности
            </li>
          </ul>
          <div className="intro-links">
            <a href="/vetkal-mikhail-resume.pdf" download>
              Скачать резюме (PDF)
              <span>
                <ArrowUpRight />
              </span>
            </a>
            <a href={`mailto:${contacts.email}`}>
              Написать на почту
              <span>
                <ArrowUpRight />
              </span>
            </a>
            <a href={contacts.telegramUrl} target="_blank" rel="noreferrer">
              Telegram
              <span>
                <ArrowUpRight />
              </span>
            </a>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title">
          <SectionTitle id="experience-title">
            Коммерческий опыт <span>4 года 1 месяц</span>
          </SectionTitle>
          <div className="timeline">
            {experience.map((job) => (
              <article className="job" key={job.company}>
                <p className="period">{job.period}</p>
                <div className="job-main">
                  <div className="job-heading">
                    <h3>{job.company}</h3>
                    <p>
                      {job.role} · {job.city}
                    </p>
                  </div>
                  <p className="job-intro">{job.intro}</p>
                  <ul>
                    {job.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title">
          <SectionTitle id="projects-title">
            Проекты <span>public + private</span>
          </SectionTitle>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.name}>
                <div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                </div>
                <div>
                  <p>{project.description}</p>
                  <p className="project-stack">{project.stack}</p>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.urlLabel ?? "Открыть репозиторий"}
                      <span>
                        <ArrowUpRight />
                      </span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" aria-labelledby="stack-title">
          <SectionTitle id="stack-title">Рабочий стек</SectionTitle>
          <div className="stack-list">
            {skills.map(([group, ...items]) => (
              <div className="skill-row" key={group}>
                <p>{group}</p>
                <div>
                  {items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about" aria-labelledby="about-title">
          <SectionTitle id="about-title">О себе</SectionTitle>
          <p>
            Мне нравится доводить задачи до понятного результата: разобраться в
            процессе, обсудить ограничения с командой, выбрать разумное решение
            и выпустить его. В работе ценю прямую коммуникацию, ответственность
            за итог и внимательность к тому, как продуктом пользуются люди.
            Технически мой основной фокус — TypeScript, React и Next.js;
            комфортно беру задачу целиком, от интерфейса до production.
          </p>
        </section>

        <section className="education" aria-labelledby="education-title">
          <SectionTitle id="education-title">Образование</SectionTitle>
          <div className="education-card">
            <p className="education-year">2023 – 2028</p>
            <div>
              <p className="education-status">Неоконченное высшее</p>
              <h3>
                Донской государственный
                <br />
                технический университет
              </h3>
              <p>Информатика и вычислительная техника · Ростов-на-Дону</p>
            </div>
          </div>
          <p className="education-note">
            Учёба не пересекается с рабочим графиком и не ограничивает полную
            занятость.
          </p>
        </section>

        <footer id="contact">
          <p>Открыт к удалённой full-time работе</p>
          <a className="email" href={`mailto:${contacts.email}`}>
            {contacts.email}
          </a>
          <div className="footer-meta">
            <a href={contacts.telegramUrl} target="_blank" rel="noreferrer">
              {contacts.telegram}
            </a>
            <a href={contacts.githubUrl} target="_blank" rel="noreferrer">
              {contacts.github}
            </a>
            <span>© 2026</span>
          </div>
        </footer>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
