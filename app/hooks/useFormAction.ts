'use client';

import { useState } from 'react';
import type {
  ErrorResponse as Error,
  SuccessResponse as Success,
} from '@/app/server_actions';

type FormAction<S, E> = (
  formData: FormData
) => Promise<Success<S> | Error<E>>;
type Status = 'initial' | 'loading' | 'complete';

export function useFormAction<S, E>(
  action: FormAction<S, E>
): [
  Status,
  Error<E>['error'] | null,
  Success<S>['message'] | null,
  (formData: FormData) => void
] {
  const [status, setStatus] = useState<Status>('initial');
  const [error, setError] = useState<Error<E>['error'] | null>(null);
  const [response, setResponse] = useState<
    Success<S>['message'] | null
  >(null);
  console.log({ action });
  const formAction = async (formData: FormData) => {
    try {
      setStatus('loading');
      const result = await action(formData);
      if (!result.success) {
        throw result.error;
      }
      setResponse(result.message);
    } catch (err) {
      setError(err as E);
    } finally {
      setStatus('complete');
    }
  };

  return [status, error, response, formAction];
}
