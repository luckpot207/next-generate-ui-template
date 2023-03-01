/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="mx-24 mt-32 lg:flex space-x-4 border-b-2 border-grey-500 pb-24 ">
          <div className="lg:w-1/2 lg:pr-32 md:w-full mb-12">
            <div className="flex items-center">
              <img src="/logo.svg" className="w-12 " />
              <p className="text-2xl leading-6 font-semibold ml-6"></p>
            </div>
            <div className="mt-4">
              <p className="text-xl font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et mattis dolor, ut egestas risus. Proin iaculis porta
                hendrerit. Aliquam facilisis tincidunt enim
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-8 lg:w-1/4 pr-32 md:w-full  mb-12">
            <p className="text-2xl leading-6 font-semibold">Contact info</p>

            <p className="text-xl font-medium"></p>
            <p className="text-xl font-medium"></p>
          </div>
          <div className="flex flex-col space-y-8 lg:w-1/4 md:w-full">
            <p className="text-2xl leading-6 font-semibold">Quick Links</p>

            <a
              className="text-xl text-[#4954b0] font-medium"
              href="https://youtube.com"
            >
              Instagram
            </a>
            <a
              className="text-xl text-[#1b9dea] font-medium"
              href="https://youtube.com"
            >
              Twitter
            </a>
            <a
              className="text-xl text-[#d51a1a] font-medium"
              href="https://youtube.com"
            >
              Youtube
            </a>
            <a
              className="text-xl text-[#037fc4] font-medium"
              href="https://youtube.com"
            >
              LinkedIn
            </a>
            <a
              className="text-xl text-[#220a1c] font-medium"
              href="https://youtube.com"
            >
              TikTok
            </a>
          </div>
        </div>
        <p className="my-4 text-center text-sm font-normal leading-5">
          Copyright 2022, All Right Reserved
        </p>
      </motion.div>
    </div>
  );
}
