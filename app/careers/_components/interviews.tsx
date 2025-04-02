const Interviews = () => {
  return (
    <>
      <div className="container border-solid pt-20 pb-10 border-stone-700 border-t mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column: Title */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Technical Interviews
            </h1>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-3 text-2xl space-y-8 text-gray-700">
            <p>
              The new challenges we face at Organic Reach Rewards require
              diverse expertise and perspectives. Our interview process is
              designed to identify thoughtful candidates who bring unique
              strengths to our multidisciplinary team. If this sounds like you,
              we’d love to hear from you, regardless of your background or
              experience.
            </p>
            <p>
              One of the most common questions we get is whether it’s worth
              applying to work at Organic Reach Rewards if you don’t have
              experience with modern web development or organic engagement
              systems. Yes! For some roles, experience with the technologies we
              use is expected, but many employees come to Organic Reach Rewards
              without having worked directly with these tools before. If you’re
              unsure about the experience required for the role, ask your
              recruiter.
            </p>
            <p>
              We use shared environments like CodeSandbox or Replit for our
              coding-focused interviews. We’ll be very interested in how you
              think through each problem, analyze the tradeoffs between possible
              approaches, and implement solutions. We expect you to write, run,
              and debug your solutions along the way. You’ll be able to search
              the documentation or the web as you normally would (which is why
              we’ll ask you to share your screen during each interview), but
              it’s still important to be familiar with the basic syntax,
              standard libraries, and common idioms in the technologies we use
              so that research doesn’t take up too much time.
            </p>
            <p>
              Your interview process will also include non-technical questions
              about your experience and what motivates you. And of course,
              you’ll have time to ask us about Organic Reach Rewards and how we
              work. We can’t wait to meet you and see how you can contribute to
              our mission!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interviews;
