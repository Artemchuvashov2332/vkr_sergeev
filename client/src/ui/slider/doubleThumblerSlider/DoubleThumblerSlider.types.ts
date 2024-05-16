export interface IDoubleThumblerSliderProps {
  limits: {
    min: number;
    max: number;
  };
  units?: string;
  onChange: ({ min, max }: { min: number; max: number }) => void;
}
