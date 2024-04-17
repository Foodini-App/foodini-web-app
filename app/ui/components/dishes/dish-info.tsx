import React from "react";
import { getDish } from "@/utils/dish-utils";
import { capitalize } from "@/utils/global-utils";

interface DishInfoProps {
  // Define the props for your component here
  name: string;
}

export default async function DishInfo(
  props: DishInfoProps
): Promise<React.ReactElement> {
  const dish = await getDish(props.name);

  return (
    <div className="bg-white md:mx-24 md:my-12 rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full pb-4">
          <DishImageContainer imageUrl={dish.images[0]} />
          <DishInfoContainer>
            <div>
              <div className="text-2xl font-bold">{capitalize(dish.name)}</div>
              <div>{dish.traditional_name}</div>
              <div>{dish.cuisine.join(", ")}</div>
            </div>
          </DishInfoContainer>
          <DishInfoContainer children={dish.description} />
        </div>
        <div className="w-full pb-4">
          <DishInfoContainer title="Ingredients">
            <ul>
              {dish.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </DishInfoContainer>
          <DishInfoContainer title="Common Allergens">
            <ol>
              {dish.allergens.map((allergen, index) => (
                <li key={index}>{allergen}</li>
              ))}
            </ol>
          </DishInfoContainer>
          <DishInfoContainer title="Alternate Names">
            <ol>
              {dish.alternate_names.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ol>
          </DishInfoContainer>
          <DishInfoContainer title="Related">
            <div>{dish.related}</div>
          </DishInfoContainer>
        </div>
      </div>
    </div>
  );
}

function DishInfoContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="px-12 pt-8">
      <div className="border-b border-#CCCCCC pb-8">
        {title && (
          <div className="text-#444242 text-lg font-bold pb-3">
            {title.toUpperCase()}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

function DishImageContainer({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="">
      <img src={imageUrl} alt="Dish Image" className="object-cover" />
    </div>
  );
}
