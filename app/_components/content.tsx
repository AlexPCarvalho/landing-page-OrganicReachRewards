const Content = () => {
  return (
    <div className="m-10">
      <div className="text-5xl font-bold text-center text-lime-700">
        <h1>OrganicReach</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 ml-3 ">
        <div className="md:w-1/2 text-lg md:text-xl text-lime-900 font-bold indent-10 text-center md:text-left">
          <p>
            OrganicReach helps businesses grow naturally by connecting brands and customers through social media engagement.
          </p>
          <p>
            It works like a modern loyalty program: by posting stories, reels, or posts on Instagram tagging the location, customers accumulate points. When they reach the goal set by the establishment, they receive exclusive rewards.
          </p>
          <p>
            This encourages authentic and spontaneous advertising, attracting more customers without the need to invest in paid traffic.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/card-instagram.gif"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg"
            alt="Card Instagram"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 ml-3 ">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/card-coffee.gif"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg"
            alt="Card Coffee"
          />
        </div>
        <div className="md:w-1/2 text-lg md:text-xl text-lime-900 font-bold indent-10 text-center md:text-left">
          <p>
            Selling more to loyal customers costs less than attracting new buyers – and the numbers prove it. But loyalty goes beyond saving money: it strengthens your business credibility.
          </p>
          <p>
            Having a base of recurring customers is a clear sign that your products or services are winning them over.
          </p>
          <p>
            This means that even in the face of competition, your customers choose to stay with you.
          </p>
          <p>
            And the best part? Loyal customers not only return but also become spontaneous promoters of your brand, sharing positive reviews and boosting your results.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 ml-3 ">
        <div className="md:w-1/2 text-lg md:text-xl text-lime-900 font-bold indent-10 text-center md:text-left">
          <p>
            Consumption-based giveaways, loyalty programs, exclusive benefits... These systems are widely used because they trigger powerful psychological drivers that boost customer engagement and loyalty.
          </p>
          <p>
            **Belonging** – When customers feel part of a select group, gaining access to exclusive experiences and special treatment, their emotional connection to the brand strengthens.
          </p>
          <p>
            **Reward** – The combination of emotion and reason: the customer perceives value in what they invest, knowing their efforts will be recognized with benefits or prizes.
          </p>
          <p>
            **Progress** – The motivation to follow a journey and reach a goal, whether to achieve a new status within the program or earn the desired reward.
          </p>
          <p>
            These triggers not only encourage repeat purchases but also create a lasting bond between the brand and the customer, transforming consumption into experience and loyalty into sustainable growth.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/card-salon.gif"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg"
            alt="Card Salon"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
