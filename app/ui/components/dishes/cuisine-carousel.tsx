"use client";

import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { capitalize } from "@/utils/global-utils";

export function CuisineCarousel({ cuisines }: { cuisines: any[] }) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaysSpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          autoplaysSpeed: 2000,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          autoplaysSpeed: 2000,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="pt-8 pb-4 px-4 md:px-24">
      <Slider {...settings}>
        {cuisines.map((cuisine) => {
          const link = "/dishes/search?q=" + cuisine.name;
          return (
            <div key={cuisine.id}>
              <Link
                href={link}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-full"
                />
                <div className="pt-4 text-lg font-medium text-gray-900">
                  {capitalize(cuisine.name)}
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

// export function CuisineCarousel({ cuisines }: { cuisines: any[] }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const carouselScroll = () => {
//     if (currentIndex == cuisines.length - 1) {
//       return setCurrentIndex(0);
//     }
//     return setCurrentIndex(currentIndex + 1);
//   };

//   useEffect(() => {});

//   return (
//     <div className="pt-8 px-4 md:px-24">
//       <div className="flex flex-row gap-8">
//         {cuisines.map((cuisine) => {
//           const link = "/dishes/search?q=" + cuisine.name;
//           return (
//             <div key={cuisine.id}>
//               <Link
//                 href={link}
//                 className="flex flex-col items-center justify-center"
//               >
//                 <img
//                   src={cuisine.image}
//                   alt={cuisine.name}
//                   className="h-32 w-32 object-cover rounded-full"
//                 />
//                 <div className="text-lg font-semibold text-gray-900">
//                   {cuisine.name}
//                 </div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
