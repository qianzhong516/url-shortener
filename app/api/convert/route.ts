// client actions used in client components
import { convertUrl } from '@/app/server_actions';

export async function POST(req: Request) {
  const { longUrl } = await req.json();
  const url = await convertUrl(longUrl);
  return Response.json(url);
}
