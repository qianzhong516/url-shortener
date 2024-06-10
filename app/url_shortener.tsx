'use client'

import { useFormAction } from '@/app/hooks/useFormAction';
import { convertUrl } from '@/app/server_actions';
import Button from '@/app/ui/button';
import { useState } from 'react';

export default function UrlShortener() {
    const [urlList, setUrlList] = useState<string[]>([]);
    const { status, error, formAction, formRef: ref } = useFormAction({
        action: convertUrl,
        onSuccess: (result) => setUrlList(prev => [...prev, result.shortUrl]),
    });

    return (
        <>
            <form action={formAction} ref={ref} className='flex min-w-full items-center justify-between gap-x-2 bg-dark-violet px-3 py-10 rounded-lg text-white'>
                <input type='text' name='longUrl' id='longUrl' className='flex-1 p-1 text-black' />
                <Button type='submit' disabled={status === 'loading'} >Shorten it!</Button>
            </form>
            {!!error && <div>{String(error)}</div>}
            {urlList.length > 0 && <ul>
                {urlList.map((url, i) => <li key={i}>{url}</li>)}
            </ul>}
        </>
    );
}

