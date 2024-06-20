'use client'

import type { FormAction } from '@/app/hooks/useFormAction'
import { useFormAction } from '@/app/hooks/useFormAction';
import Button from '@/app/ui/button/button';
import React, { useState } from 'react';
import UrlList from '@/app/ui/url_list/list';
import clsx from 'clsx';

export default function UrlShortener({
    onShortenUrl
}: {
    onShortenUrl: FormAction<{
        longUrl: string;
        shortUrl: string;
    }, string>
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
    const errorBorder = clsx(error && 'border-2 border-red');

    return (
        <>
            <form action={formAction} ref={ref} className='flex flex-col min-w-full min-h-[180px] justify-center bg-dark-violet bg-[url("/bg-shorten-desktop.svg")] bg-no-repeat bg-cover px-6 md:px-20 md:py-10 rounded-lg text-white'>
                <div className='flex flex-wrap items-center justify-between gap-x-2 gap-y-4'>
                    <input type='text' name='longUrl' id='longUrl' className={`flex-1  px-4 py-2 max-w-full min-h-[40px] text-black rounded-md ${errorBorder}`} placeholder='Shorten a link here...' />
                    <Button type='submit' disabled={status === 'loading'} className='w-full md:w-auto rounded-md'>Shorten it!</Button>
                </div>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </form>
            {urlList.length > 0 && <UrlList data={urlList} />}
        </>
    );
}

const ErrorMessage = ({ children }: { children: React.ReactNode }) => <p className='text-red italic'>{children}</p>

function makeUrl(shortcode: string) {
    return `http://localhost:3000/${shortcode}`;
}

