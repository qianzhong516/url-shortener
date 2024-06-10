'use client'

import { useFormAction } from '@/app/hooks/useFormAction';
import { convertUrl } from '@/app/server_actions';

export default function UrlShortener() {
    const [status, error, response, formAction] = useFormAction(convertUrl);
    console.log(useFormAction(convertUrl))

    return (
        <>
            <form action={formAction} className='flex min-w-full items-center justify-between gap-x-2 bg-dark-violet px-3 py-10 rounded-lg text-white'>
                <div className='flex flex-1 gap-x-2 items-center'>
                    <label htmlFor="longUrl">Long Url: </label>
                    <input type="text" name="longUrl" id="longUrl" className='flex-1 p-1 text-black' />
                </div>
                <input type="submit" value="Convert" disabled={status === 'loading'} />
            </form>
            {!!error && <div>{String(error)}</div>}
        </>
    );
}

