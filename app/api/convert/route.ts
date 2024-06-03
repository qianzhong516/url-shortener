import { Url } from '@/app/db/model';

export async function POST(req: Request) {
  const { longUrl } = await req.json();
  const url = await Url.build({ longUrl, shortUrl: 'x' }).save();
  return Response.json(url);
}
