import Image from "next/image";

const Steps = () => {
  return (
    <div className="bg-white px-4 md:px-10 xl:px-[300px] py-10 md:py-20 xl:py-[120px]">
      <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
        <div>
          <div>
            <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
              <Image src="/one.svg" alt="steps" width={54} height={54} />
              <li className="max-w-full xl:max-w-[598px]">
                <p className="mb-[-10px] md:mb-[-25px]">Login with</p>
                <p>Instagram</p>
              </li>
            </ul>

            <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
              <Image src="/two.svg" alt="steps" width={54} height={54} />
              <li className="max-w-full xl:max-w-[598px]">
                <p className="mb-[-10px] md:mb-[-25px]">Define</p>
                <p>campaings</p>
              </li>
            </ul>

            <ul className="text-[#30503A] pb-8 md:pb-[30px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
              <Image src="/three.svg" alt="steps" width={54} height={54} />
              <li className="max-w-full xl:max-w-[598px]">
                <p>Set live</p>
              </li>
            </ul>

            <p className="max-w-full xl:max-w-[512px] text-base md:text-lg xl:text-[20px] pb-10 md:pb-[50px] text-[#689E54]">
              Connect your Instagram account to automatically capture customer
              posts, reels, stories, and comments. Next, specify the campaigns
              and decide on rewards that excite your audience. Finally, activate
              your campaign and watch customers promote your brand while you
              track real-time engagement—all without extra apps or hassle.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/steps2.png"
            alt="steps"
            width={566}
            height={643}
            className="h-auto xl:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;