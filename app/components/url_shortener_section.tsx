import { convertUrl } from "../server_actions";
import UrlShortener from "./url_shortener";

export default function UrlShortenerSection() {
    return <section className='relative flex flex-col items-center w-full bg-light-gray h-24'>
        <div className='absolute top-0 w-full max-w-lg px-12 -translate-y-[90px]'>
            <UrlShortener onShortenUrl={convertUrl} />
        </div>
    </section>
}