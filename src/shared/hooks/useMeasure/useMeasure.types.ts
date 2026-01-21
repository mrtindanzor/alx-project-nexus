export type UseMeasure<T> = {
  element?: React.RefObject<T | null>;
  selector?: string;
  enabled?: boolean;
};
