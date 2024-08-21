import { useCallback, useEffect, useState } from "react";

type AsyncHookResponse<T> = [boolean, Error | undefined, T | undefined];

export const useAsync = <T>(
  callback: () => Promise<any>,
  dependencies: any[] = []
): AsyncHookResponse<T> => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [value, setValue] = useState<T | undefined>();

  const callbackMemorized = useCallback(() => {
    setIsLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then((promise) => {
        return promise.json();
      })
      .then((res) => {
        setValue(res);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, dependencies);
  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);
  return [isLoading, error, value];
};
