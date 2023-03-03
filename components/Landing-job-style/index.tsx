/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 md: text-[28px] md:font-[900]">
          Testimonies
        </h1>

        <h1 className="text-indigo-600 font-bold text-xl"></h1>
        <br />
      </div>
      <div className=" items-center w-[60%]">
        <div className="grid mb-8  rounded-lg  dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-r border-indigo-400 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p className="my-4 font-light">
                If you care for your time, I hands down would go with this."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="font-bold">Neil Sims</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO, Flowbite
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-l border-indigo-400 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Perfect choice for a SaaS application
              </h3>
              <p className="my-4 font-light">
                Designing with Figma components that can be easily translated to
                the utility classNamees of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="font-bold">Michael Gough</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO, Flowbite
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-indigo-400 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p className="my-4 font-light">
                If you care for your time, I hands down would go with this."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="font-bold">Neil Sims</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO, Flowbite
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-l border-indigo-400 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Perfect choice for a SaaS application
              </h3>
              <p className="my-4 font-light">
                Designing with Figma components that can be easily translated to
                the utility classNamees of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div className="font-bold"> Joseph McFall</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO, Flowbite
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
