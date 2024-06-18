'use client'

import type { FormAction } from '@/app/hooks/useFormAction'
import { useFormAction } from '@/app/hooks/useFormAction';
import Button from '@/app/ui/button/button';
import { useState } from 'react';
import UrlList from '@/app/ui/url_list/list';

export default function UrlShortener({
    onShortenUrl
}: {
    onShortenUrl: FormAction<{
        longUrl: string;
        shortUrl: string;
    }, unknown>
}) {
    const [urlList, setUrlList] = useState<{
        longUrl: string,
        shortUrl: string
    }[]>([]);
    const { status, error, formAction, formRef: ref } = useFormAction({
        action: onShortenUrl,
        onSuccess: (result) => setUrlList(prev => [...prev, {
            longUrl: result.longUrl,
            shortUrl: makeUrl(result.shortUrl)
        }]),
    });

    return (
        <>
            <form action={formAction} ref={ref} className='flex flex-wrap min-w-full min-h-[180px] items-center justify-between gap-x-2 bg-dark-violet bg-[url("/bg-shorten-desktop.svg")] bg-no-repeat bg-cover px-20 py-18 py-10 rounded-lg text-white'>
                <input type='text' name='longUrl' id='longUrl' className='flex-1 p-1 text-black min-h-[40px]' />
                <Button type='submit' disabled={status === 'loading'} className='max-w-full'>Shorten it!</Button>
            </form>
            {!!error && <div>{String(error)}</div>}
            {urlList.length > 0 && <UrlList data={urlList} />}
        </>
    );
}

function makeUrl(shortcode: string) {
    return `http://localhost:3000/${shortcode}`;
}

