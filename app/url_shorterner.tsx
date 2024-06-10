'use client'

import { useFormAction } from '@/app/hooks/useFormAction';
import { convertUrl } from '@/app/server_actions';

export default function UrlShortener() {
    const [status, error, response, formAction] = useFormAction(convertUrl);
    console.log(useFormAction(convertUrl))

    return (
        <>
            <form action={formAction}>
                <label htmlFor="longUrl">Long Url: </label>
                <input type="text" name="longUrl" id="longUrl" />
                <input type="submit" value="Convert" disabled={status === 'loading'} />
            </form>
            {error && <div>{String(error)}</div>}
        </>
    );
}

