"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";

import { webinars } from "@/data/webinars.json";

const AllWebinars = () => {
  return (
    <div className="pt-36 w-full dark:bg-black dark:bg-dot-white/[0.2]">
      <h2 className="text-3xl text-center underline decoration-orange-300 underline-offset-4">
        All Webinars
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-5 lg:py-10 lg:px-20">
        {webinars.map((webinar) => (
          <CardContainer className="inter-var" key={webinar.title}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {webinar.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {webinar.description.slice(0, 150)} ...
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={`/courses/${webinar.image}`}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={`/webinar/${webinar.slug}`}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  View Details
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-default"
                >
                  {webinar.isFeatured ? "Featured Already" : "Coming Soon"}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default AllWebinars;
