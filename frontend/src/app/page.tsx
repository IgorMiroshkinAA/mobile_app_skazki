import Link from 'next/link';
import { InstallButton } from '@/components/InstallButton';

export default function LandingPage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>🌟 Сказки на ночь</h1>
        <p className="hero__subtitle">
          Добрые истории для детей 6+. Слушайте с озвучкой или читайте всей семьёй.
        </p>
        <div className="hero__actions">
          <InstallButton />
          <Link href="/skazki" className="btn btn--primary">
            📖 Читать сказки
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Как это работает</h2>
        <div className="features__grid">
          <div className="feature-card">
            <span className="feature-card__icon">📲</span>
            <h3>Установите приложение</h3>
            <p>Нажмите «Установить» — и сказки всегда под рукой, даже без интернета.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card__icon">🎧</span>
            <h3>Слушайте или читайте</h3>
            <p>Каждая сказка озвучена. Включайте аудио перед сном или читайте сами.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card__icon">💛</span>
            <h3>Поддержите проект</h3>
            <p>Если сказки понравились — помогите издать их в виде бумажной книги.</p>
          </div>
        </div>
      </section>

      <section className="about-brief">
        <h2>Почему этот проект?</h2>
        <p>
          Я — разработчик и автор этих сказок. Хочу собрать добрые истории в одном месте,
          чтобы они были доступны каждому ребёнку. А если проект найдёт отклик — издать книгу.
        </p>
        <Link href="/about" className="link">Подробнее о проекте →</Link>
      </section>

      <footer className="footer">
        <Link href="/about">О проекте</Link>
        <Link href="/support">Поддержать</Link>
      </footer>
    </main>
  );
}