import { Url } from '@/app/db/model';

export async function GET(
  req: Request,
  { params }: { params: { shortUrl: string } }
) {
  const match = await Url.findOne({
    where: {
      shortUrl: params.shortUrl,
    },
  });

  if (match == null) {
    return Response.error();
  }

  return Response.redirect(match.longUrl, 302);
}
