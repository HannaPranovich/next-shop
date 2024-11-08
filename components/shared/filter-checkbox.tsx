import { Checkbox } from "../ui/checkbox";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  endAdornment?: React.ReactNode;
}

export const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
}: FilterCheckboxProps) => {
  const id = `checkbox-${String(value)}`;

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className="h-6 w-6 rounded-[8px]"
        checked={checked}
        id={id}
        onCheckedChange={onCheckedChange}
        value={value}
      />
      <label className="flex-1 cursor-pointer leading-none" htmlFor={id}>
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
