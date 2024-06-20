'use server';

import { z, ZodError } from 'zod';
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

// TODO: Rate limit this request. Ref: https://stackoverflow.com/a/77559252/8893023
export async function convertUrl(
  formData: FormData
): Promise<
  | SuccessResponse<{ longUrl: string; shortUrl: string }>
  | ErrorResponse<string>
> {
  try {
    const isUrl = z
      .string()
      .min(1, {
        message: 'Please add a link',
      })
      .url();
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
  } catch (error: unknown) {
    const err = error as ZodError;
    return {
      success: false,
      error: err.issues[0].message,
    };
  }
}
