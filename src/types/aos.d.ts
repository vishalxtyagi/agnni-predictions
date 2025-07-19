declare module 'aos' {
  interface AosOptions {
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
  }

  const aos: {
    init: (options?: AosOptions) => void;
    refresh: () => void;
  };

  export default aos;
} 