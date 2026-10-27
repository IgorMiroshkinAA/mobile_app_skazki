export interface Story {
  id: number;
  slug: string;
  title: string;
  age: string;
  duration: number;
  text: string;
  audioUrl: string;
  coverUrl?: string;
}