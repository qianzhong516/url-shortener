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
    const [urlList, setUrlList] = useState<string[]>([]);
    const { status, error, formAction, formRef: ref } = useFormAction({
        action: onShortenUrl,
        onSuccess: (result) => setUrlList(prev => [...prev, result.shortUrl]),
    });

    return (
        <>
            <form action={formAction} ref={ref} className='flex min-w-full items-center justify-between gap-x-2 bg-dark-violet px-3 py-10 rounded-lg text-white'>
                <input type='text' name='longUrl' id='longUrl' className='flex-1 p-1 text-black' />
                <Button type='submit' disabled={status === 'loading'} >Shorten it!</Button>
            </form>
            {!!error && <div>{String(error)}</div>}
            {urlList.length > 0 && <UrlList data={urlList} />}
        </>
    );
}

