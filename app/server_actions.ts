'use server';

import { z } from 'zod';
import CRC32 from 'crc-32';
import { Url } from '@/app/db/model';

export type SuccessResponse<T> = {
  success: true;
  message: T;
};

export type ErrorResponse<T> = {
  success: false;
  error: T;
};

export async function convertUrl(
  formData: FormData
): Promise<
  | SuccessResponse<{ longUrl: string; shortUrl: string }>
  | ErrorResponse<unknown>
> {
  try {
    const isUrl = z.string().url();
    const longUrl = isUrl.parse(formData.get('longUrl'));

    const [url, created] = await Url.findOrCreate({
      where: {
        longUrl,
        // x >>> 0 converts a number value to unsigned 32-bit integer.
        shortUrl: (CRC32.str(longUrl) >>> 0).toString(16),
      },
    });
    return {
      success: true,
      message: url.toJSON(),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}
