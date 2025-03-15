import React from "react";
import { getDish } from "@/utils/dish-utils";
import { capitalize, capitalizeList } from "@/utils/global-utils";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
  SheetHeader,
} from "../global/Sheett";
import { Button, CloseButton } from "../global/Buttonn";
import Link from "next/link";
import Icon from "@/app/ui/components/global/Iconn";
interface DishInfoProps {
  name: string;
}

const DishInfo: React.FC<DishInfoProps> = async (props) => {
  const dish = await getDish(props.name);

  return (
    <div className="bg-white md:mx-24 md:my-12 rounded-xl overflow-hidden text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full pb-0 lg:pb-12">
          <DishImageContainer imageUrl={dish.images[0]} />
          <DishNameContainer dishName={dish.name} tooltip={true}>
            <div className="text-lg">
              <div>
                <em>{dish.traditional_name}</em>
              </div>
              <div>{capitalizeList(dish.cuisine).join(", ")}</div>
            </div>
          </DishNameContainer>
          <DishInfoContainer>{dish.description}</DishInfoContainer>
        </div>
        <div className="w-full pb-12">
          <DishInfoContainer
            title="Typical Ingredients"
            disclaimer={true}
            tooltip={true}
          >
            {dish.ingredients
              ? capitalizeList(dish.ingredients).join(", ")
              : "Not Available"}
          </DishInfoContainer>

          {dish.allergens && (
            <DishInfoContainer title="Common Allergens" disclaimer={true}>
              {capitalizeList(dish.allergens).join(", ")}
            </DishInfoContainer>
          )}

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
};

const DishNameContainer: React.FC<{
  children: React.ReactNode;
  dishName: string;
  tooltip?: boolean;
}> = ({ children, dishName, tooltip }) => {
  return (
    <div className="px-8 md:px-12 pt-8">
      <div className="border-b border-#CCCCCC pb-8">
        {dishName && (
          <div className="flex justify-between items-center pb-3">
            <div className="text-gray-900 text-4xl font-semibold">
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
};

const DishInfoContainer: React.FC<{
  children: React.ReactNode;
  title?: string;
  disclaimer?: boolean;
  tooltip?: boolean;
}> = ({ children, title, disclaimer, tooltip }) => {
  return (
    <div className="px-8 md:px-12 pt-8">
      <div className="border-b border-#CCCCCC pb-8">
        {title && (
          <div className="flex justify-between items-center pb-3">
            <div className="text-gray-900 text-lg font-bold ">
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
};

const DishInfoOverlay: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="secondary">
          <Icon name="toolTip" color="#5A5A5A" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetClose>
          <CloseButton />
        </SheetClose>
        <SheetHeader>
          <div className="text-3xl font-semibold text-gray-900 dark:text-gray-50 text-center">
            Dish Info
          </div>
        </SheetHeader>
        <div className="py-8 text-gray-900 dark:text-gray-400 flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <div className="place-content-center">
              <Icon name="ingredientsCircle" size={48} />
            </div>
            <div>
              <div className="text-lg font-medium ">Typical Ingredients</div>
              <div>The ingredients most often used in the dish</div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="place-content-center">
              <Icon name="altNamesCircle" size={48} />
            </div>
            <div>
              <div className="text-lg font-medium ">Alternate Names</div>
              <div>The dish may also go by these names</div>
            </div>
          </div>
          <div className="border-b border-#CCCCCC"></div>
          <Link
            href="/about"
            className="rounded-lg overflow-hidden hover:bg-gray-100"
          >
            <div className=" flex flex-row gap-4">
              <div className="place-content-center">
                <Icon name="foodiniLogoCircle" size={48} />
              </div>
              <div>
                <div className="text-lg font-medium ">About Foodini</div>
                <div>Your friendly local food guide</div>
              </div>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const DishImageContainer: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="aspect-[16/9] overflow-hidden flex items-center justify-center">
      <img src={imageUrl} alt="Dish Image" className="w-full object-cover" />
    </div>
  );
};

export default DishInfo;
