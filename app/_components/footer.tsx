import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#30503A] text-white px-4 md:px-10 xl:px-[300px] py-10 md:py-16 xl:py-[54px]">
      <div className="flex flex-col xl:flex-row border-solid border-[#D3E9CA] border-b mx-auto pb-10 md:pb-[30px] justify-between items-center xl:items-start text-center xl:text-left gap-10 xl:gap-0">
        <div className="flex flex-col md:flex-row items-center justify-center xl:justify-between gap-6">
          <Image
            src="/logo.png"
            width={94}
            height={92}
            alt="Logo OrganicReach Rewards"
          />
          <h1 className="max-w-full xl:max-w-[600px] text-center xl:text-start text-base md:text-lg xl:text-[20px] font-semibold">
            Grow organically, build customer loyalty and transform engagement
            into real results. Your business, driven naturally!
          </h1>
        </div>

        <div className="flex flex-col justify-center text-base md:text-lg xl:text-[20px] font-semibold items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="/careers">Careers</Link>
            <Link href="/consumer-terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="/compliance">Compliance</Link>
            <Link href="/data-deletion-policy">Data Deletion Policy</Link>
          </div>
        </div>
      </div>

      <div className="text-center text-base md:text-lg xl:text-[20px] font-semibold pt-10 md:pt-[30px]">
        <h1>© 2025 OrganicReach. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;