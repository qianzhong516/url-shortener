'use client'

import { useState } from "react";
import Button from "../button/button";
import clsx from 'clsx';

export default function UrlListItem({ longUrl, shortUrl }: { longUrl: string, shortUrl: string }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(shortUrl);
        setIsCopied(true);
    }

    return <li className="flex flex-wrap justify-between items-center rounded-md mb-4 last:mb-0 bg-white p-4">
        <p className="text-black">{longUrl}</p>
        <div className="flex flex-wrap gap-4 items-center">
            <a href={shortUrl} target="_blank" className="text-cyan">{shortUrl}</a>
            <Button className={clsx(isCopied && 'bg-dark-violet', 'rounded-md')} onClick={handleClick}>{isCopied ? 'Copied!' : 'Copy'}</Button>
        </div>
    </li>
}