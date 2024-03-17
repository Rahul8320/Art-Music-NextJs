"use client";

import { useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { SparklesCore } from "@/components/ui/sparkles";
import { webinars } from "@/data/webinars.json";
import { WebinarModel } from "@/app/models/webinar.model";
import Image from "next/image";

const loadingStates = [
  {
    text: "👉 Gathering params data",
  },
  {
    text: "🔍 Searching webinar details",
  },
  {
    text: "🎉 Found matched webinar",
  },
];

const WebinarPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [webinarDetails, setWebinarDetails] = useState<WebinarModel | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const details = webinars.find((item) => item.slug === slug);
    if (details) {
      setWebinarDetails(details);
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={1000}
        />
      </div>
    );
  }

  if (!loading && !webinarDetails) {
    return (
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          No webinar details found!
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    );
  }

  if (!loading && webinarDetails) {
    return (
      <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.5}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#BE7B72"
          />
        </div>
        <div className="max-w-7xl z-20 px-20">
          <Image
            src={`/courses/${webinarDetails.image}`}
            alt={webinarDetails.title}
            width={500}
            height={500}
            className="mx-auto object-fill shadow-md shadow-neutral-600"
          />
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative my-10">
            {webinarDetails.title}
          </h1>
          <p className="text-xl">{webinarDetails.description}</p>
        </div>
      </div>
    );
  }
};

export default WebinarPage;
