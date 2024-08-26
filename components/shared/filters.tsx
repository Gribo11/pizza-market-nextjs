import React from "react";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can make" value="2" />
        <FilterCheckbox text="New" value="1" />
      </div>
    </div>
  );
};
