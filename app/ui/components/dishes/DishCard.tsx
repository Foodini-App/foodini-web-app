import * as React from "react";
import Link from "next/link";
import { spaceToUnderscore, lowercase } from "@/utils/global-utils";

import { cn } from "@/app/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  dishName: string;
}

const DishCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, dishName, ...props }, ref) => (
    <Link href={`/dishes/${spaceToUnderscore(lowercase(dishName))}`}>
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-gray-200 bg-white text-gray-950 shadow-md",
          className
        )}
        {...props}
      />
    </Link>
  )
);
DishCard.displayName = "DishCard";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-3", className)} {...props} />
));
CardContent.displayName = "CardContent";

export {
  DishCard,
  CardContent,
};
