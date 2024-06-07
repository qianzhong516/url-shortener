import { convertUrl } from '@/app/actions';

export default function Home() {
  const onSubmit = async (formData: FormData) => {
    'use server'
    console.log({ formData: Object.fromEntries(formData) });
    const longUrl = formData.get('longUrl');
    if (!longUrl) return;
    const shortUrl = await convertUrl(longUrl.toString());
    return { message: shortUrl };
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={onSubmit}>
        <label htmlFor="longUrl">Long Url: </label>
        <input type="text" name="longUrl" id="longUrl" />
        <input type="submit" value="Convert" />
      </form>
    </main>
  );
}
