import UrlShortener from './url_shortener';
import { convertUrl } from '@/app/server_actions';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UrlShortener onShortenUrl={convertUrl} />
    </main>
  );
}

