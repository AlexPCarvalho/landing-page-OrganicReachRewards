import TypingText from "./typingText";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const Title = () => {
  const phrases = [
    "User Generated Content",
    "Social Proof and Recognition",
    "Empowering User Creativity",
  ];

  return (
    <div
      className={`${anton.className} text-4xl sm:text-6xl md:text-[100px] tracking-[-1] font-extrabold mb-6 text-lime-900 text-center  pt-50 sm:pt-50 sm:text-left sm:pl-20`}
    >
      <TypingText phrases={phrases} />
    </div>
  );
};

export default Title;
