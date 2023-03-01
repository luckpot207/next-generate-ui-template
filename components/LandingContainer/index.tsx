/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function LandingContainer() {
  return (
    <div className="lg:flex flex-col mt-48 px-14 md:mt-24 sm: mt-12 ">
      <div className="flex flex-wrap  mb-12">
        <div className="lg:flex justify-between ">
          <div className="flex flex-col ">
            <h1 className="lg:text-[65px] font-bold mb-6 md: text-[28px] md:font-[900]">
              What Makes Us Better <br />{" "}
              <span className="text-main">From Others</span>
            </h1>
            <h1 className="text-gray-600 text-xl mt-5">
              With our 24/7 customer support, real time updates on your project,
              our middleman service to ensure the security of your funds, and an
              open and welcoming community of freelancers - you can be sure that
              your project is in safe hands.
            </h1>
          </div>
          <div className="grid justify-items-stretch lg:flex flex-wrap">
            <div className="lg:inline-grid grid-cols-2 gap-4 md:flex flex-col md: space-y-4 w-full">
              <div className="flex flex-col lg:mt-5  md:mt-5">
                <div className="flex items-center mb-3 h-[56px]">
                  <img
                    src="/icons/Group 1000001088.png"
                    alt="icon"
                    className="w-14 -translate-x-2"
                  />
                  <h1 className="text-2xl font-bold text-main-gray">
                    Growing Fast!
                  </h1>
                </div>
                <h1 className=" text-gray-600 pt-0 pl-14">
                  Our community of more than 5,000 freelancers covers multiple
                  disciplines.
                </h1>
              </div>
              <div className="flex flex-col mt-5 md:mt-0">
                <div className="flex items-center mb-3 h-[56px] ">
                  <img src="/icons/like.png" alt="icon" className="w-7 mr-3" />
                  <h1 className="text-2xl font-bold text-main-gray">
                    100% Satisfaction
                  </h1>
                </div>
                <h1 className=" text-gray-600 pl-14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et mattis dolor, ut egestas risus.
                </h1>
              </div>
              <div className="flex flex-col  mt-6">
                <div className="flex items-center mb-3 h-[56px]">
                  <img
                    src="/icons/people.png"
                    alt="icon"
                    className="w-7 mr-3"
                  />
                  <h1 className="text-2xl font-bold text-main-gray">
                    Expert Team Members
                  </h1>
                </div>
                <h1 className=" text-gray-600 pl-14">
                  Our multi discipline team are experts in their fields,
                  producing only the highest quality of work for an affordable
                  price.
                </h1>
              </div>
              <div className="flex flex-col mt-5">
                <div className="flex items-center mb-3 h-[56px]">
                  <img
                    src="/icons/ranking.png"
                    alt="icon"
                    className="w-7 mr-3"
                  />
                  <h1 className="text-2xl font-bold text-main-gray">
                    Welcoming Community
                  </h1>
                </div>
                <h1 className="text-gray-600 pl-14">
                  Our expert community is always happy to help, direct and
                  advise to help you along the way to a successful project!
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="lg:flex  justify-between  mt-10 ">
            <div className="flex">
              <img
                src="/images/whyvanta.png"
                className="z-30 lg:w-[600px] mr-20 md: w-full"
              />
            </div>
            <div className="flex flex-col lg:ml-20 mt-20 md:ml-10">
              <h1 className="text-main-gray font-bold lg:text-[54px] md: text-[28px]">
                Why Are People Choosing LaunchGen?
              </h1>
              <div className="flex items-center mt-4">
                <img
                  src="/icons/user-tick.png"
                  alt="user"
                  className="my-4 mr-4"
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-main-gray">
                    Integrity
                  </h1>
                  <h1 className="text-gray-600 max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et mattis dolor
                  </h1>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/icons/medal-star.png"
                  alt="medal-star"
                  className="my-4 mr-4"
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-main-gray">Trust</h1>
                  <h1 className="text-gray-600 max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et mattis dolor
                  </h1>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src="/icons/ranking2.png"
                  alt="medal-star"
                  className="my-4 mr-4"
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-main-gray">
                    Excellence
                  </h1>
                  <h1 className="text-gray-600 max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et mattis dolor
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
