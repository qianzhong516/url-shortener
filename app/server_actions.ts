'use server';

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
  // TODO: add validation
  try {
    const longUrl = formData.get('longUrl');
    const url = await Url.build({ longUrl, shortUrl: 'x' }).save();
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
