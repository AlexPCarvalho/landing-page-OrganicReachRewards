"use client";

import { useI18n } from "@/app/i18n";

const other = () => {

  const { t } = useI18n();
  return (
    <>
      <div className="container border-solid pt-20 pb-10 border-stone-700 border-t mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Title */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            {t("careers.other.title")}
            </h1>
          </div>

          {/* Right Column: Text Content */}

          <div className="lg:col-span-3 text-2xl space-y-8 text-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Title */}
                <div>
                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl ">
              {t("careers.other.title1")}
              </h3>
              <p>
              {t("careers.other.text1")}
              </p>
              <ul className="list-disc text-xl pl-10 pt-5 text-gray-500">
              <li className="pb-3">
              {t("careers.other.1list1")}
              </li>
              <li className="pb-3">
              {t("careers.other.1list2")}
              </li>
              
            </ul>
            </div>
                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl pt-8">
              {t("careers.other.title2")}
              </h3>
              <p>
              {t("careers.other.text2")}
              </p>

            </div>
               
                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl pt-8">
              {t("careers.other.title3")}
              </h3>
              <p>
              {t("careers.other.text3")}
              </p>

            </div>


                </div>
                {/* Right Column: Text Content */}
                <div>
                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
              {t("careers.other.tile4")}
              </h3>
              <p>
              {t("careers.other.text4")}
              </p>
            </div>
                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl pt-8">
              {t("careers.other.tile5")}
              </h3>
              <p>
              {t("careers.other.text5")}
              </p>
            </div>
            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl pt-8">
              {t("careers.other.tile6")}
              </h3>
              <p>
              {t("careers.other.text6")}
              </p>

            </div>
                



                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl pt-8">
              {t("careers.other.tile7")}
              </h3>
              <p>
              {t("careers.other.text7")}
              </p>
            </div>
                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl pt-8">
              {t("careers.other.tile8")}
              </h3>
              <p>
              {t("careers.other.text8")}
              </p>
            </div>
                <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl pt-8">
              {t("careers.other.tile9")}
              </h3>
              <p>
              {t("careers.other.text9")}
              </p>
            </div>


                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default other;
