import Image from "next/image";
import { Instagram, Facebook, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="flex justify-between border-b border-solid border-stone-700 font-bold">
        <div className="px-8 pt-5 pb-4 text-lime-900 text-1xl">
          <>
            <Image src="/logo.png" width={150} height={90} alt="Logo APCNet" />
            <h1>
              “Grow organically, build customer loyalty and transform engagement
              into real results. Your business, driven naturally!”
            </h1>
          </>
        </div>
        <div className="flex items-center gap-5 mr-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              size={30}
              className="cursor-pointer hover:text-lime-600 transition"
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              size={30}
              className="cursor-pointer hover:text-lime-600 transition"
            />
          </a>
          <a
            href="http://wa.me/53984856438"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send
              size={30}
              className="cursor-pointer hover:text-lime-600 transition"
            />
          </a>
        </div>
      </div>

      <div className="text-center gap-10 p-5">
        <h1>© 2025 OrganicReach. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
