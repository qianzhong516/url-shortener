import UrlShortener from './url_shortener';
import { convertUrl } from '@/app/server_actions';
import HeroSection from '@/app/hero';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col ">
      <HeroSection />
      <UrlShortener onShortenUrl={convertUrl} />
    </main>
  );
}

