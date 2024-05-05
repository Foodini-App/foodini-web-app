import React from "react";
import { getDish } from "@/utils/dish-utils";
import { capitalize, capitalizeList } from "@/utils/global-utils";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
  SheetHeader,
} from "../global/sheet";
import { Button, CloseButton } from "../global/button";
import Link from "next/link";
import { FoodiniIcon } from "../global/foodini-icon";

interface DishInfoProps {
  name: string;
}

export default async function DishInfo(
  props: DishInfoProps
): Promise<React.ReactElement> {
  const dish = await getDish(props.name);

  return (
    <div className="bg-white md:mx-24 md:my-12 rounded-xl overflow-hidden text-gray-700">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full pb-0 lg:pb-12">
          <DishImageContainer imageUrl={dish.images[0]} />
          <DishNameContainer dishName={dish.name} tooltip={true}>
            <div className="text-lg">
              <div>{dish.traditional_name}</div>
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
    <div className="px-8 md:px-12 pt-8">
      <div className="border-b border-#CCCCCC pb-8">
        {dishName && (
          <div className="flex justify-between items-center pb-3">
            <div className="text-gray-700 text-4xl font-semibold">
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
    <div className="px-8 md:px-12 pt-8">
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
        <SheetHeader>
          <div className="text-3xl font-semibold text-gray-700 dark:text-gray-50 text-center">
            Dish Info
          </div>
        </SheetHeader>
        <div className="py-8 text-gray-700 dark:text-gray-400 flex flex-col gap-8">
          <div className="flex flex-row gap-4">
            <div className="place-content-center">
              <IngredientsIcon />
            </div>
            <div>
              <div className="text-lg font-medium ">Typical Ingredients</div>
              <div>The ingredients most often used in the dish</div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="place-content-center">
              <AltNamesIcon />
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
                <FoodiniIcon />
              </div>
              <div>
                <div className="text-lg font-medium ">About Foodini</div>
                <div>Here to help you experience new foods</div>
              </div>
            </div>
          </Link>
        </div>
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

function IngredientsIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#74C773" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.5 17.4651C6.22386 17.4651 6 17.6879 6 17.9628V20.42C6 24.4314 8.98025 27.7501 12.8572 28.302V30.0001H22.8572V28.3375C26.8724 27.9118 30 24.5294 30 20.42V17.9628C30 17.6879 29.7761 17.4651 29.5 17.4651H6.5Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.8572 27.4389V29.0047H21.8572V27.4425L22.7512 27.3477C26.2635 26.9754 29 24.0151 29 20.42V18.4604H7V20.42C7 23.9291 9.60739 26.8339 12.9988 27.3167L13.8572 27.4389ZM6 17.9628C6 17.6879 6.22386 17.4651 6.5 17.4651H29.5C29.7761 17.4651 30 17.6879 30 17.9628V20.42C30 24.5294 26.8724 27.9118 22.8572 28.3375V30.0001H12.8572V28.302C8.98025 27.7501 6 24.4314 6 20.42V17.9628Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.4853 16.7186H26.8493L28.8263 14.7508C29.705 13.8762 29.705 12.4582 28.8263 11.5837C27.9476 10.7091 26.523 10.7091 25.6443 11.5837L20.4853 16.7186Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.435 15.7233L28.1192 14.047C28.6073 13.5611 28.6073 12.7734 28.1192 12.2875L28.8263 11.5837C29.705 12.4582 29.705 13.8762 28.8263 14.7508L26.8493 16.7186H20.4853L25.6443 11.5837C26.523 10.7091 27.9476 10.7091 28.8263 11.5837L28.1192 12.2875C27.631 11.8016 26.8396 11.8016 26.3514 12.2875L22.8995 15.7233H26.435Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.8107 16.0255C13.6504 14.9029 14.004 13.7216 14.8715 12.8581C15.739 11.9946 16.9259 11.6426 18.0537 11.8022C18.214 12.9248 17.8604 14.1061 16.9929 14.9696C16.1253 15.833 14.9385 16.185 13.8107 16.0255Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.07569 11.3195C9.48537 11.1201 10.9688 11.56 12.0531 12.6393C13.1374 13.7185 13.5794 15.195 13.3791 16.5981C11.9694 16.7975 10.486 16.3576 9.40164 15.2783C8.31734 14.1991 7.87536 12.7226 8.07569 11.3195Z"
        fill="white"
      />
    </svg>
  );
}

function AltNamesIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#A181E7" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26 10H10C8.9 10 8 10.9 8 12V30L12 26H26C27.1 26 28 25.1 28 24V12C28 10.9 27.1 10 26 10ZM26 24H11.5L10 25.5V12H26V24ZM15 17H13V19H15V17ZM17 17H19V19H17V17ZM23 17H21V19H23V17Z"
        fill="white"
      />
    </svg>
  );
}
