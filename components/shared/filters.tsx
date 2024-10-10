import { CheckboxFilterGroup, FilterCheckbox, Title } from "./";
import { Input } from "../ui";

export const Filters = () => {
  return (
    <div>
      <Title text="Filters" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="option-1" value="option-1" />
        <FilterCheckbox text="option-2" value="option-2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={100}
            defaultValue={0}
          />
          <Input type="number" min={0} max={100} placeholder="100" />
        </div>
      </div>
      <CheckboxFilterGroup
        className="mt-5"
        title="Ingredients"
        limit={5}
        items={[
          { text: "ingredient-1", value: "ingredient-1" },
          { text: "ingredient-2", value: "ingredient-2" },
          { text: "ingredient-3", value: "ingredient-3" },
          { text: "ingredient-4", value: "ingredient-4" },
          { text: "ingredient-5", value: "ingredient-5" },
          { text: "ingredient-16", value: "ingredient-16" },
        ]}
      />
    </div>
  );
};
