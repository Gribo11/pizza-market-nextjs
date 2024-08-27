'use client';

import React from "react";
import { Input } from "../ui/input";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
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
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 5000]} />
      </div>


      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            "text": "Thin Crust",
            "value": "1"
          },
          {
            "text": "Traditional Crust",
            "value": "2"
          },
          {
            "text": "Cheese Lovers",
            "value": "3"
          },
          {
            "text": "Pepperoni Feast",
            "value": "4"
          },
          {
            "text": "Vegetarian",
            "value": "5"
          },
    
        ]}
        items={[
          {
            "text": "Thin Crust",
            "value": "1"
          },
          {
            "text": "Traditional Crust",
            "value": "2"
          },
          {
            "text": "Cheese Lovers",
            "value": "3"
          },
          {
            "text": "Pepperoni Feast",
            "value": "4"
          },
          {
            "text": "Vegetarian",
            "value": "5"
          },
          {
            "text": "Meat Lovers",
            "value": "6"
          },
          {
            "text": "BBQ Chicken",
            "value": "7"
          },
          {
            "text": "Hawaiian",
            "value": "8"
          },
          {
            "text": "Buffalo Chicken",
            "value": "9"
          },
          {
            "text": "Supreme",
            "value": "10"
          },
          {
            "text": "Margherita",
            "value": "11"
          },
          {
            "text": "Four Cheese",
            "value": "12"
          },
          {
            "text": "Seafood Delight",
            "value": "13"
          },
          {
            "text": "Spicy Italian",
            "value": "14"
          },
          {
            "text": "Mushroom & Truffle",
            "value": "15"
          }
        ]}
       
      />
    </div>
  );
};
