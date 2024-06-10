'use client'

import { useFormAction } from '@/app/hooks/useFormAction';
import { convertUrl } from '@/app/server_actions';
import Button from '@/app/ui/button';

export default function UrlShortener() {
    const [status, error, response, formAction, ref] = useFormAction(convertUrl);
    console.log(status, response)

    return (
        <>
            <form action={formAction} ref={ref} className='flex min-w-full items-center justify-between gap-x-2 bg-dark-violet px-3 py-10 rounded-lg text-white'>
                <input type='text' name='longUrl' id='longUrl' className='flex-1 p-1 text-black' />
                <Button type='submit' disabled={status === 'loading'} >Shorten it!</Button>
            </form>
            {!!error && <div>{String(error)}</div>}
            {response && <div>{response.shortUrl}</div>}
        </>
    );
}

