import { convertUrl } from "../server_actions";
import UrlShortener from "./url_shortener";

export default function UrlShortenerSection() {
    return <section className='flex flex-col items-center w-full bg-gray h-96'>
        <div className='-translate-y-1/2 w-full max-w-lg px-12'>
            <UrlShortener onShortenUrl={convertUrl} />
        </div>
    </section>
}