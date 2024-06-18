import UrlShortener from './url_shortener';
import { convertUrl } from '@/app/server_actions';
import HeroSection from '@/app/hero';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <section className='w-full bg-gray h-96'>
        <div className='-translate-y-1/2 px-24'>
          <UrlShortener onShortenUrl={convertUrl} />
        </div>
      </section>
    </main>
  );
}

