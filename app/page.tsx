import HeroSection from '@/app/components/hero';
import UrlShortenerSection from './components/url_shortener_section';
import StatsSection from './components/stats_section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeroSection />
      <UrlShortenerSection />
      <StatsSection />
    </main>
  );
}

