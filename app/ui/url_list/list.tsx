export default function UrlList({ data }: { data: string[] }) {
    return <ul>
        {data.map((url, i) => <li key={i}>{url}</li>)}
    </ul>
}