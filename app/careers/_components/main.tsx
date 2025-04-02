const Main = () => {
  return (
    <>
      <div className="container border-solid pt-20 pb-10 border-stone-700 border-t mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Title */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              What we value and how we act
            </h1>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-3 text-2xl space-y-8 text-gray-700">
            <p>
              At Organic Reach Rewards, we believe that our team values ​​are
              fundamental to our collective success. Our culture is built on
              solid principles that guide our work and the way we relate to each
              other within the company and with our clients.
            </p>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                Collaboration
              </h3>
              <p>
                We work together because we know that the sum of our skills is
                the key to achieving great results. Collaboration is a daily
                practice in our team, and it is a core value that permeates
                everything we do. We believe that supporting the growth and
                success of each team member is crucial to collective success,
                which is why we foster an environment where everyone helps and
                learns from each other.
              </p>
            </div>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                Innovation
              </h3>
              <p>
                We are always looking for new ways of doing things. Innovation
                is not limited to the technologies we use, but also to the way
                we solve problems, improve processes and meet the needs of our
                clients. Innovation is at the heart of our mission, and it is
                reflected in every project we deliver. We believe that with the
                right mindset and a creative approach, we can turn any challenge
                into an opportunity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                Empathy
              </h3>
              <p>
                Empathy is a core value, both within the team and in our
                interactions with customers. We know that understanding the
                needs of others and demonstrating mutual respect creates an
                environment of trust, where everyone feels valued and motivated
                to contribute. We strive to build sincere and lasting
                relationships with both our colleagues and customers, always
                prioritizing well-being and genuine understanding.
              </p>
            </div>

            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                Transparency
              </h3>
              <p>
                We believe that open and honest communication is fundamental to
                the success of any team. At Organic Reach Rewards, everyone has
                access to the information they need to make informed decisions
                and directly impact the business. We value clarity in all
                aspects, from goal setting to ongoing feedback. This ensures
                that everyone on the team knows how their work is contributing
                to the success of the company.
              </p>
            </div>
            <div>
              <h3 className="font-semibold  text-gray-800 mb-2 text-3xl">
                Results-Oriented
              </h3>
              <p>
                While collaboration and well-being are essential, we are a
                results-oriented company. We work with clear goals and focus on
                exceeding them. Our commitment to results is balanced by an
                ethical and human approach, where the quality of life and
                happiness of our team are equally important. We always seek to
                exceed our clients’ expectations, ensuring that we deliver value
                at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
