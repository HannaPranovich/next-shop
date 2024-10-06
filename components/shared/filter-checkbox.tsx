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
        className="rounded-[8px] w-6 h-6"
        checked={checked}
        id={id}
        onCheckedChange={onCheckedChange}
        value={value}
      />
      <label className="leading-none cursor-pointer flex-1" htmlFor={id}>
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
