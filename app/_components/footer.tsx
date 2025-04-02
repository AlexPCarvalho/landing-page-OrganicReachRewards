import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-900  text-white  ">
      <div className="flex flex-col container mx-auto px-4 py-16 sm:flex-row justify-between     p-4 sm:p-8 text-center sm:text-left">
        <div className=" text-base flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <Image
            src="/logoW.png"
            width={150}
            height={90}
            alt="Logo Organic Reach Rewards White"
          />
          <h1 className="mt-2 text-2xl font-bold max-w-md">
            Grow organically, build customer loyalty and transform engagement
            into real results. Your business, driven naturally!
          </h1>
        </div>

        <div className="flex flex-col justify-center sm:justify-center text-xl items-center  gap-4">
          <Link href="/careers">Careers</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/">Compliance</Link>
          <Link href="/">Data Deletion Policy</Link>
        </div>
      </div>

      <div className="text-center border-solid border-stone-700 border-t p-4">
        <h1>© 2025 OrganicReach. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
