import * as React from "react";
import Link from "next/link";
import { spaceToUnderscore, lowercase } from "@/utils/global-utils";

import { cn } from "@/app/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    fairName: string;
    fairId: number;
}

const FairCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, fairName, fairId, ...props }, ref) => (
    <Link href={`/food_fairs/${fairId}`}>
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-gray-200 bg-white text-gray-950 shadow-md overflow-hidden",
          className
        )}
        {...props}
      />

    </Link>
  )
);
FairCard.displayName = "FairCard";

export { FairCard };
