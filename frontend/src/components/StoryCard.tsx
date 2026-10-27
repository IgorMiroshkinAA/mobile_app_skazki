import Link from 'next/link';
import { Story } from '@/types/story';

interface Props {
  story: Story;
}

export default function StoryCard({ story }: Props) {
  return (
    <div className="story-card">
      <div className="story-card__info">
        <h2>{story.title}</h2>
        <p className="story-card__meta">
          ⏱ {story.duration} минут · {story.age}
        </p>
      </div>
      <div className="story-card__actions">
        <Link href={`/skazki/${story.slug}`} className="btn btn--listen">
          ▶ Слушать
        </Link>
        <Link href={`/skazki/${story.slug}`} className="btn btn--read">
          📖 Читать
        </Link>
      </div>
    </div>
  );
}