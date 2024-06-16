import { ModifiersType } from "../../utils";

export interface IDropdownProps {
  title: React.ReactNode;
  modifiers?: ModifiersType;
  memuModifiers?: ModifiersType;
  onClick?: () => void;
}
