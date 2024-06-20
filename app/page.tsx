import HeroSection from '@/app/components/hero';
import UrlShortenerSection from './components/url_shortener_section';
import StatsSection from './components/stats_section';
import CallToAction from './components/call_to_action';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center ">
      <HeroSection />
      <UrlShortenerSection />
      <StatsSection />
      <CallToAction />
    </main>
  );
}

