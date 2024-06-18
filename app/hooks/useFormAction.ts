'use client';

import { useEffect, useRef, useState } from 'react';
import type {
  ErrorResponse as Error,
  SuccessResponse as Success,
} from '@/app/server_actions';

export type FormAction<S, E> = (
  formData: FormData
) => Promise<Success<S> | Error<E>>;

type Status = 'initial' | 'loading' | 'complete';

// this hook
// 1) tracks the form submission status after the server action is invoked.
// 2) triggers callbacks on form submission success/error.
export function useFormAction<S, E>({
  action,
  onSuccess,
  onError,
}: {
  action: FormAction<S, E>;
  onSuccess?: (message: Success<S>['message']) => void;
  onError?: (error: Error<E>['error']) => void;
}): {
  status: Status;
  error: Error<E>['error'] | null;
  response: Success<S>['message'] | null;
  formAction: (formData: FormData) => void;
  formRef: React.MutableRefObject<HTMLFormElement | null>;
} {
  const [status, setStatus] = useState<Status>('initial');
  const [error, setError] = useState<Error<E>['error'] | null>(null);
  const [response, setResponse] = useState<
    Success<S>['message'] | null
  >(null);
  const ref = useRef<HTMLFormElement | null>(null);

  const formAction = async (formData: FormData) => {
    try {
      const result = await action(formData);
      if (!result.success) {
        throw result.error;
      }
      setResponse(result.message);
      onSuccess?.(result.message);
    } catch (err) {
      setError(err as E);
      onError?.(err as E);
    } finally {
      setStatus('complete');
    }
  };

  // pending state needs to be updated on the client side, because it seems
  // state changes are delayed until the server action finishes.
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const onSubmit = () => {
      setError(null);
      setStatus('loading');
    };

    ref.current.addEventListener('submit', onSubmit);

    return () => {
      ref.current?.removeEventListener('submit', onSubmit);
    };
  }, []);

  return { status, error, response, formAction, formRef: ref };
}
