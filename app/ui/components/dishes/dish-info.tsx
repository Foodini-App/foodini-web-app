import React from "react";
import { getDish } from "@/utils/dish-utils";

interface DishInfoProps {
  // Define the props for your component here
  name: string;
}

export default async function DishInfo(
  props: DishInfoProps
): Promise<React.ReactElement> {
  const dish = await getDish(props.name);

  return (
    <div className="mx-24 pt-12">
      <div className="bg-white grid grid-cols-1 md:grid-cols-2">
        <div className="border-black border w-full">
          <div className="overflow-scroll">{dish.images[0]}</div>
          <div>
            <div>{dish.name}</div>
          </div>
          <div className="">{dish.description}</div>
        </div>
        <div className="border-black border w-full">column 2</div>
      </div>
    </div>
  );
}
