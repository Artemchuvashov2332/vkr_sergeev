export interface IDoubleThumblerSliderProps {
  limits: {
    min: number;
    max: number;
  };
  values?: number[];
  units?: string;
  onChange: ({ min, max }: { min: number; max: number }) => void;
}
