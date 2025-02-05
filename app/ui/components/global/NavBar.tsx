"use client";

import { Input } from "@/app/ui/components/global/Inputt";
import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/app/ui/components/global/Sheett";
import { Button, CloseButton } from "@/app/ui/components/global/Buttonn";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => (isOpen ? setIsOpen(false) : void null), [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white py-4 px-4 md:px-24 flex items-center justify-between space-x-8 md:space-x-12">
      <div className="flex-none">
        <Link href="/">
          <Image
            src="/foodini-logo-gradient.png"
            width={60}
            height={50}
            alt="Foodini Logo"
          />
        </Link>
      </div>
      <div className="flex-grow">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 w-full rounded-full"
            placeholder="Search for dishes, cuisines..."
            type="search"
          />
        </div>
      </div>
      <div className="flex space-x-8 hidden md:flex">
        <Link className="text-[#FF9900] text-lg font-semibold" href="/dishes">
          Dishes
        </Link>
        <Link
          className="text-[#FF9900] text-lg font-semibold text-nowrap"
          href="/food_fairs"
        >
          Food Fairs
        </Link>
        <Link className="text-[#FF9900] text-lg font-semibold" href="/about">
          About
        </Link>
      </div>
      <div className="md:hidden">
        <Sheet open={isOpen}>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="secondary"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="text-[#FF9900] h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetClose>
              <CloseButton onClick={() => setIsOpen(!isOpen)} />
            </SheetClose>

            <div className="flex flex-col items-end space-y-8 py-12">
              <Link
                className="text-[#FF9900] font-semibold text-xl"
                href="/dishes"
                onClick={() => setIsOpen(!isOpen)}
              >
                Dishes
              </Link>
              <Link
                className="text-[#FF9900] font-semibold text-xl"
                href="/food_fairs"
                onClick={() => setIsOpen(!isOpen)}
              >
                Food Fairs
              </Link>
              <Link
                className="text-[#FF9900] font-semibold text-xl"
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.551 16.3199 14.9056L21.7071 20.2929L20.2929 21.7071L14.9056 16.3199C13.551 17.3729 11.8487 18 10 18ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
        fill="#323232"
      />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
