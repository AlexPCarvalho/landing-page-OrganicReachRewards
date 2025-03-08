"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b-lime-500 border-solid  px-8 pt-5 pb-3">
      {/* ESQUERDA */}
      <div >
        <Image src="/logo.svg" width={150} height={90} alt={"Logo APCNet"} />

      </div>
      <div className="flex items-center gap-10">
      <Link
          href="/"
          className={
            pathname == "/" ? "font-bold text-lime-700" : "text-muted-foreground"
          }
        >
            Home
        </Link>
        <Link
          href="about"
          className={
            pathname == "/about"
              ? "font-bold text-lime-700"
              : "text-muted-foreground"
          }
        >
          About
        </Link>
        <Link
          href="/contact"
          className={
            pathname == "/contact"
              ? "font-bold text-lime-700"
              : "text-muted-foreground"
          }
        >
          Contact Us
        </Link>
      </div>
      {/* DIREITA */}

      <div className="flex items-center gap-10">
      <Link
        href="/SingIn"
        className="text-lime-700 font-bold">
        Sing In
        </Link>
        <Link
          href="/Register"
          className= " font-bold bg-lime-600 px-3 py-2 rounded-lg text-white">
            Register
          </Link>
      
      </div>
    </nav>
  );
};

export default Navbar;
