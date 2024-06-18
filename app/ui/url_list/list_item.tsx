import Button from "../button/button";

export default function UrlListItem({ longUrl, shortUrl }: { longUrl: string, shortUrl: string }) {
    return <li className="flex flex-wrap justify-between items-center rounded-md mb-4 last:mb-0 bg-white p-4">
        <p className="text-black">{longUrl}</p>
        <div className="flex flex-wrap gap-4 items-center">
            <a href={shortUrl} target="_blank" className="text-cyan">{shortUrl}</a>
            <Button>Copy</Button>
        </div>
    </li>
}