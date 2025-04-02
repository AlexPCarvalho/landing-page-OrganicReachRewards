import Image from "next/image";

const Offer = () => {
  return (
    <>
      <div className="border-solid  border-stone-700 border-t">
        <h1 className="text-6xl pt-20 pb-10 font-bold ">What we offer</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6  px-4 sm:px-6 md:px-12 py-12 ">
          <div className="flex justify-center">
            <Image
              src="/health.png"
              width={600}
              height={600}
              alt="Health and Wellbeing"
              className="rounded-3xl w-full max-w-[600px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl text-lime-900 font-bold mb-4">
              Health & Wellbeing
            </h2>
            <p className="text-gray-800 text-2xl">
              At Organic Reach Rewards, we believe that the well-being of our
              employees is essential to the collective success of our company.
              That’s why we offer a range of benefits focused on the physical
              and mental health of our team, ensuring that you have the support
              you need to take care of yourself and your family.
            </p>

            <ul className="list-disc text-2xl pl-15  text-gray-500">
              <li className="pb-3">
                Comprehensive health and dental plan for you and your dependents
              </li>
              <li className="pb-3">
                Mental health support, with psychological support programs for
                you and your family
              </li>
              <li className="pb-3">Benefits to promote work-life balance</li>
              <li className="pb-3">
                Wellness programs, including activities and resources to care
                for physical and mental health
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 py-12">
        <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-lime-900 ">
            Compensation and Support
          </h2>
          <p className="text-gray-800 text-2xl">
            We value the work of our team and ensure that you have the tools and
            support you need to reach your full potential. At Organic Reach
            Rewards, we invest in your professional growth and always strive for
            fair compensation that recognizes your contributions.
          </p>
          <ul className="list-disc text-2xl pl-15  text-gray-500">
            <li className="pb-3">Competitive salary aligned with the market</li>
            <li className="pb-3">
              Mentoring programs for continuous development
            </li>
            <li className="pb-3">
              Access to workshops and professional development courses
            </li>
            <li className="pb-3">
              Dedicated support for your development, with performance
              monitoring and constant feedback
            </li>
          </ul>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/compensation.png"
            width={600}
            height={600}
            alt="Compensation and Support"
            className="rounded-3xl w-full max-w-[600px] h-auto"
          />
        </div>
      </section>

      <section className="grid mb-10 grid-cols-1 md:grid-cols-2 gap-6  px-4 sm:px-6 md:px-12 py-12 ">
        <div className="flex justify-center">
          <Image
            src="/innovation.png"
            width={600}
            height={600}
            alt="Culture of Continuous Innovation"
            className="rounded-3xl w-full max-w-[600px] h-auto"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl text-lime-900 font-bold mb-4">
            Culture of Continuous Innovation
          </h2>
          <p className="text-gray-800 text-2xl">
            At Organic Reach Rewards, innovation is one of the pillars of our
            work. We are constantly looking for new ways to improve our
            processes, our products and the experience of our users. Join us to
            be part of a team that is always at the forefront of innovation.
          </p>

          <ul className="list-disc text-2xl pl-15  text-gray-500">
            <li className="pb-3">
              Opportunity to work with the most current and cutting-edge
              technologies
            </li>
            <li className="pb-3">
              Space to experiment, test and implement new ideas and solutions
            </li>
            <li className="pb-3">
              Stimulation of creativity and the search for innovative solutions
              that positively impact our customers
            </li>
            <li className="pb-3">
              Collaboration with cross-functional teams to transform ideas into
              real solutions
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Offer;
