import Link from "next/link";
import Logo from "./Logo";
import React from "react";

const Navbar = () => {
  const navigation = [
    { _id: 910, title: "Home", href: "/" },
    { _id: 911, title: "Phone", href: "/phones" },
    { _id: 912, title: "Phone Cases", href: "/phonecases" },
    { _id: 913, title: "Watches", href: "/watches" },
    { _id: 914, title: "Accessories", href: "/accessories" },
  ];
  return (
    <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0">
        <Logo />
        <ul className="hidden md:flex items-center gap-5 text-sm uppercase font-semibold">
          {navigation.map((item) => (
            <Link href={item?.href} key={item._id}>
              <li>{item?.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
