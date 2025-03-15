import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="flex flex-col sm:flex-row justify-between border-b border-solid border-stone-700  p-4 sm:p-8 text-center sm:text-left">
        <div className=" text-base flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <Image src="/favicon.ico" width={120} height={70} alt="Logo APCNet" />
          <h1 className="mt-2 font-bold max-w-md">
            “Grow organically, build customer loyalty and transform engagement
            into real results. Your business, driven naturally!”
          </h1>
        </div>

        <div className="flex  flex-col justify-center sm:justify-end items-center pr-15 gap-4">
          <Link href="/">Careers</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Compliance</Link>
          <Link href="/">Data Deletion Policy</Link>
        </div>
      </div>

      <div className="text-center  p-4">
        <h1>© 2025 OrganicReach. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
