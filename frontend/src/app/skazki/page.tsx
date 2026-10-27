import StoryCard from '@/components/StoryCard';
import stories from '@/data/stories.json';
import { Story } from '@/types/story';

export default function SkazkiPage() {
  const storyList: Story[] = stories;

  return (
    <main className="container">
      <header className="header">
        <h1>🌟 Сказки</h1>
        <p className="subtitle">Выберите историю</p>
      </header>

      <section className="stories-list">
        {storyList.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </section>

      <div className="support-wrapper">
        <a href="/support" className="support-button">💛 Поддержать проект</a>
      </div>
    </main>
  );
}