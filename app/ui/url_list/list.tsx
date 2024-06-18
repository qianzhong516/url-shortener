import UrlListItem from './list_item';

export default function UrlList({ data }: { data: { longUrl: string, shortUrl: string }[] }) {
    return <ul className="mt-4">
        {data.map(({ longUrl, shortUrl }, i) => <UrlListItem key={i} longUrl={longUrl} shortUrl={shortUrl} />)}
    </ul>
}