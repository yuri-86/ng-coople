export interface Loadable<T = any> {
  data: T;
  isLoading: boolean;
  isLoaded: boolean;
  error?: LoadableError;
}

export interface LoadableError {
  message: string;
  status: number;
}

export function onLoadableInit(): Loadable<any> {
  return {
    data: null,
    isLoading: false,
    isLoaded: false,
    error: null
  };
}

export function onLoadableLoad<T>(data?: T): Loadable<T> {
  return {
    data: data || null,
    isLoading: true,
    isLoaded: false,
    error: null
  };
}

export function onLoadableSuccess<T>(data?: T): Loadable<T> {
  return {
    data: data || null,
    isLoading: false,
    isLoaded: true,
    error: null
  };
}

export function onLoadableError<T>(error: LoadableError): Loadable<T> {
  return {
    data: null,
    isLoading: false,
    isLoaded: true,
    error
  };
}

export function generateLoadableError(
  message: string = '',
  status: number = 0
): LoadableError {
  return {
    message,
    status
  };
}
