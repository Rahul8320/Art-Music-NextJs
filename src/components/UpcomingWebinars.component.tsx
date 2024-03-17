"use client";

import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const webinars = [
  {
    title: "Mastering Music Theory for Beginners",
    description:
      "Demystify the fundamentals of music theory and gain a solid foundation for composing, performing, and appreciating music at a deeper level. This introductory webinar is perfect for anyone curious about the language of music.",
    slug: "mastering-music-theory-beginners",
    isFeatured: true,
  },
  {
    title: "Unlocking Your Vocal Potential",
    description:
      "Learn practical techniques and exercises to improve your vocal range, control, and confidence. This webinar is valuable for singers of all levels, from those just starting out to those looking to refine their existing skills.",
    slug: "unlocking-vocal-potential",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting: Crafting Compelling Lyrics",
    description:
      "Explore the power of words in music. This webinar will equip you with strategies for writing meaningful lyrics that connect with your audience and elevate your songs. Suitable for aspiring songwriters and musicians who want to take their songwriting to the next level.",
    slug: "art-songwriting-compelling-lyrics",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials: Recording at Home",
    description:
      "Turn your home into a recording studio! This webinar will guide you through the basics of home music production, from setting up your equipment to capturing high-quality audio. Ideal for musicians who want to record their own music without breaking the bank.",
    slug: "music-production-essentials-home",
    isFeatured: true,
  },
  {
    title: "Building a Successful Music Career in the Digital Age",
    description:
      "Navigate the ever-evolving music industry landscape. This webinar will provide actionable tips on marketing yourself online, building your fanbase, and achieving your musical goals in the digital age. Perfect for aspiring musicians and artists looking to gain a competitive edge.",
    slug: "successful-music-career-digital",
    isFeatured: true,
  },
  {
    title: "Ear Training for Musicians: Recognizing Intervals and Chords",
    description:
      "Develop your musical ear and become a more well-rounded musician. This webinar will introduce you to ear training techniques that help you identify intervals and chords by ear. This skill is valuable for improvisation, composition, and overall musicianship.",
    slug: "ear-training-musicians",
    isFeatured: false,
  },
  {
    title: "Music History 101: Exploring the Evolution of Music",
    description:
      "Embark on a journey through time and discover the rich history of music. This webinar will introduce you to major musical styles and periods, from the classical era to contemporary music. Perfect for music enthusiasts who want to deepen their understanding and appreciation of the art form.",
    slug: "music-history-101",
    isFeatured: true,
  },
];

const UpcomingWebinars = () => {
  const featuredWebinars = webinars.filter((webinar) => webinar.isFeatured);

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinar/${webinar.slug}`,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View all webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
