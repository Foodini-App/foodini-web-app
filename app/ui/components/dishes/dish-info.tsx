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

function FoodiniIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#FF9900" />
      <path
        d="M23.1915 20.5532C23.1915 20.8352 22.9629 21.0638 22.6808 21.0638C22.3988 21.0638 22.1702 20.8352 22.1702 20.5532V16.2347C22.1702 15.944 22.0772 15.661 21.9048 15.427L21.2999 14.6061C21.0936 14.3262 21.0023 13.9779 21.0445 13.6328L21.4802 10.0748C21.4854 10.0321 21.5217 10 21.5647 10H21.5693C21.6183 10 21.6571 10.0412 21.6543 10.0901L21.4989 12.7314C21.4937 12.8194 21.5637 12.8936 21.6518 12.8936H21.6936C21.7712 12.8936 21.8366 12.8355 21.8457 12.7583L22.1614 10.0752C22.1664 10.0323 22.2027 10 22.2459 10H22.2602C22.3052 10 22.3425 10.0351 22.3451 10.0801L22.5022 12.7494C22.5069 12.8304 22.574 12.8936 22.6551 12.8936H22.7066C22.7877 12.8936 22.8548 12.8304 22.8595 12.7494L23.0166 10.0801C23.0192 10.0351 23.0565 10 23.1015 10H23.1158C23.159 10 23.1953 10.0323 23.2003 10.0752L23.516 12.7583C23.5251 12.8355 23.5905 12.8936 23.6681 12.8936H23.7099C23.798 12.8936 23.868 12.8194 23.8628 12.7314L23.7074 10.0901C23.7045 10.0412 23.7434 10 23.7924 10H23.797C23.84 10 23.8763 10.0321 23.8815 10.0748L24.3172 13.6328C24.3594 13.9779 24.2681 14.3262 24.0618 14.6061L23.4569 15.427C23.2845 15.661 23.1915 15.944 23.1915 16.2347V20.5532Z"
        fill="#FFFF00"
      />
      <path
        d="M27.7872 15.617C27.7872 15.3349 28.0159 15.1063 28.2979 15.1063C28.5799 15.1063 28.8085 15.3349 28.8085 15.617V19.9331C28.8085 20.4218 29.0842 20.8648 29.4207 21.2192C29.713 21.527 30 21.9675 30 22.5106C30 24.2978 29.0638 25.9148 28.2979 25.9148C27.5319 25.9148 26.5957 24.2978 26.5958 22.5106C26.5958 21.9675 26.8828 21.527 27.1751 21.2192C27.5116 20.8648 27.7872 20.4218 27.7872 19.9331V15.617Z"
        fill="#FFFF00"
      />
      <path
        d="M6.34043 16.1277C6.15241 16.1277 6 16.2801 6 16.4681V19.8724C6 20.0604 6.15241 20.2128 6.34043 20.2128H6.68085C6.86886 20.2128 7.02128 20.0604 7.02128 19.8724V18.766H8.21277C8.40078 18.766 8.55319 18.6136 8.55319 18.4256V18.0851C8.55319 17.8971 8.40078 17.7447 8.21277 17.7447H7.02128V17.149H8.7234C8.91142 17.149 9.06383 16.9965 9.06383 16.8085V16.4681C9.06383 16.2801 8.91142 16.1277 8.7234 16.1277H6.34043Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.2766 20.2128C12.4047 20.2128 13.3192 19.2983 13.3192 18.1702C13.3192 17.0422 12.4047 16.1277 11.2766 16.1277C10.1486 16.1277 9.23407 17.0422 9.23407 18.1702C9.23407 19.2983 10.1486 20.2128 11.2766 20.2128ZM11.2766 19.1915C11.8407 19.1915 12.2979 18.7343 12.2979 18.1702C12.2979 17.6062 11.8407 17.149 11.2766 17.149C10.7126 17.149 10.2553 17.6062 10.2553 18.1702C10.2553 18.7343 10.7126 19.1915 11.2766 19.1915Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.7021 20.2128C16.8302 20.2128 17.7447 19.2983 17.7447 18.1702C17.7447 17.0422 16.8302 16.1277 15.7021 16.1277C14.574 16.1277 13.6595 17.0422 13.6595 18.1702C13.6595 19.2983 14.574 20.2128 15.7021 20.2128ZM15.7021 19.1915C16.2661 19.1915 16.7234 18.7343 16.7234 18.1702C16.7234 17.6062 16.2661 17.149 15.7021 17.149C15.1381 17.149 14.6808 17.6062 14.6808 18.1702C14.6808 18.7343 15.1381 19.1915 15.7021 19.1915Z"
        fill="white"
      />
      <path
        d="M24.0426 16.2979C23.8546 16.2979 23.7021 16.4503 23.7021 16.6383V20.0425C23.7021 20.2305 23.8546 20.383 24.0426 20.383H24.383C24.571 20.383 24.7234 20.2305 24.7234 20.0425V18.1702L26.3233 20.2501C26.3878 20.3339 26.4875 20.383 26.5932 20.383H26.9362C27.1242 20.383 27.2766 20.2305 27.2766 20.0425V16.6383C27.2766 16.4503 27.1242 16.2979 26.9362 16.2979H26.5958C26.4078 16.2979 26.2553 16.4503 26.2553 16.6383V18.4255L24.8256 16.5191C24.7613 16.4334 24.6604 16.2979 24.5532 16.2979H24.0426Z"
        fill="#FFFF00"
      />
      <path
        d="M23.1915 22.2553C23.1915 22.5373 22.9629 22.7659 22.6809 22.7659C22.3988 22.7659 22.1702 22.5373 22.1702 22.2553C22.1702 21.9732 22.3988 21.7446 22.6809 21.7446C22.9629 21.7446 23.1915 21.9732 23.1915 22.2553Z"
        fill="white"
      />
      <path
        d="M28.8085 13.9149C28.8085 14.197 28.5799 14.4256 28.2979 14.4256C28.0159 14.4256 27.7872 14.197 27.7872 13.9149C27.7872 13.6329 28.0159 13.4043 28.2979 13.4043C28.5799 13.4043 28.8085 13.6329 28.8085 13.9149Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.4255 16.1277C18.2375 16.1277 18.0851 16.2801 18.0851 16.4681V19.8724C18.0851 20.0604 18.2375 20.2128 18.4255 20.2128H19.617C20.7451 20.2128 21.6596 19.2983 21.6596 18.1702C21.6596 17.0422 20.7451 16.1277 19.617 16.1277H18.4255ZM19.617 17.149H19.1064V19.1915H19.617C20.181 19.1915 20.6383 18.7343 20.6383 18.1702C20.6383 17.6062 20.181 17.149 19.617 17.149Z"
        fill="white"
      />
    </svg>
  );
}
