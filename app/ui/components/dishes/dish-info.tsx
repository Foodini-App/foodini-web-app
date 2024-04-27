import React from "react";
import { getDish } from "@/utils/dish-utils";
import { capitalize, capitalizeList } from "@/utils/global-utils";
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "../global/sheet";
import { Button, CloseButton } from "../global/button";

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
        <div className="w-full pb-0 lg:pb-12">
          <DishImageContainer imageUrl={dish.images[0]} />
          <DishNameContainer dishName={dish.name} tooltip={true}>
            <div>
              <div>{dish.traditional_name}</div>
              <div>{capitalizeList(dish.cuisine).join(", ")}</div>
            </div>
          </DishNameContainer>
          <DishInfoContainer children={dish.description} />
        </div>
        <div className="w-full pb-12">
          <DishInfoContainer
            title="Ingredients"
            disclaimer={true}
            tooltip={true}
          >
            {dish.ingredients
              ? capitalizeList(dish.ingredients).join(", ")
              : "Ingredients not available"}
          </DishInfoContainer>

          <DishInfoContainer title="Common Allergens" disclaimer={true}>
            {dish.allergens
              ? capitalizeList(dish.allergens).join(", ")
              : "No major allergens"}
          </DishInfoContainer>

          {dish.alternate_names && (
            <DishInfoContainer title="Alternate Names" tooltip={true}>
              {capitalizeList(dish.alternate_names).join(", ")}
            </DishInfoContainer>
          )}

          {dish.related && (
            <DishInfoContainer title="Related">
              <div>{dish.related}</div>
            </DishInfoContainer>
          )}
        </div>
      </div>
    </div>
  );
}

function DishNameContainer({
  children,
  dishName,
  tooltip,
}: {
  children: React.ReactNode;
  dishName: string;
  tooltip?: boolean;
}) {
  return (
    <div className="px-12 pt-8">
      <div className="border-b border-#CCCCCC pb-8">
        {dishName && (
          <div className="flex justify-between items-center pb-3">
            <div className="text-gray-700 text-4xl font-medium">
              {capitalize(dishName)}
            </div>
            {tooltip && (
              <div className="text-right">
                <DishInfoOverlay />
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

function DishInfoContainer({
  children,
  title,
  disclaimer,
  tooltip,
}: {
  children: React.ReactNode;
  title?: string;
  disclaimer?: boolean;
  tooltip?: boolean;
}) {
  return (
    <div className="px-12 pt-8">
      <div className="border-b border-#CCCCCC pb-8">
        {title && (
          <div className="flex justify-between items-center pb-3">
            <div className="text-gray-700 text-lg font-bold ">
              {title.toUpperCase()}
            </div>
            {tooltip && (
              <div className="text-right">
                <DishInfoOverlay />
              </div>
            )}
          </div>
        )}
        {children}
        {disclaimer && (
          <div className="text-gray-500 pt-3 text-center">
            *Always ask your server
          </div>
        )}
      </div>
    </div>
  );
}

function DishInfoOverlay() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary">
          <ToolTipIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetClose>
          <CloseButton />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

function DishImageContainer({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="aspect-[16/9] overflow-hidden flex items-center justify-center">
      <img src={imageUrl} alt="Dish Image" className="w-full object-cover" />
    </div>
  );
}

function ToolTipIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7ZM12 10.5C11.4477 10.5 11 10.9477 11 11.5V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11.5C13 10.9477 12.5523 10.5 12 10.5ZM4.00002 12C4.00002 16.41 7.59002 20 12 20C16.41 20 20 16.41 20 12C20 7.58999 16.41 3.99999 12 3.99999C7.59002 3.99999 4.00002 7.58999 4.00002 12Z"
        fill="#5A5A5A"
      />
    </svg>
  );
}
