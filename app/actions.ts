// server actions used in server components
import { Url } from '@/app/db/model';

export async function convertUrl(longUrl: string) {
  const url = await Url.build({ longUrl, shortUrl: 'x' }).save();
  return url.toJSON();
}
