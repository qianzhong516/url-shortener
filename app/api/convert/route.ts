// client actions used in client components
import { convertUrl } from '@/app/actions';

export async function POST(req: Request) {
  const { longUrl } = await req.json();
  console.log('received: ', longUrl);
  const url = await convertUrl(longUrl);
  return Response.json(url);
}
