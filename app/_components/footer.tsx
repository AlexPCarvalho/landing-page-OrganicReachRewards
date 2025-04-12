import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#30503A] text-white px-[300] py-[54]">
      <div className="flex border-solid border-[#D3E9CA] border-b mx-auto pb-[30] justify-between text-center">
        <div className="flex items-center  justify-between">
          <Image
            src="/logo.png"
            width={94}
            height={92}
            alt="Logo Organic``Reach Rewards"
          />
          <h1 className="pl-[60px] max-w-[600px] text-[20px] font-semibold">
            Grow organically, build customer loyalty and transform engagement
            into real results. Your business, driven naturally!
          </h1>
        </div>

        <div className="flex flex-col justify-center text-[20px] font-semibold items-center gap-4">
          <div className="flex justify-center items-center gap-4">
            <Link href="/careers">Careers</Link>
            <Link href="/consumer-terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>

          <div className="flex justify-center items-center gap-4">
            <Link href="/compliance">Compliance</Link>
            <Link href="/data-deletion-policy">Data Deletion Policy</Link>
          </div>
        </div>
      </div>
      <div className="text-center text-[20px] font-semibold pt-[30]">
        <h1>© 2025 OrganicReach. All rights reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
