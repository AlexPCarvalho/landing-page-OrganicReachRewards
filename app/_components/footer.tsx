import Image from "next/image";
import { Instagram, Facebook, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="flex flex-col sm:flex-row justify-between border-b border-solid border-stone-700 font-bold p-4 sm:p-8 text-center sm:text-left">
        <div className="text-lime-900 text-base flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <Image src="/logo.png" width={120} height={70} alt="Logo APCNet" />
          <h1 className="mt-2 max-w-md">
            “Grow organically, build customer loyalty and transform engagement
            into real results. Your business, driven naturally!”
          </h1>
        </div>

        <div className="flex justify-center sm:justify-end items-center gap-4">
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

      <div className="text-center p-4">
        <h1>© 2025 OrganicReach. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
