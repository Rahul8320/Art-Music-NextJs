"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "I never thought I could learn to play piano at my age, but the supportive and encouraging teachers at this school made it possible. Now, I can finally play my favorite songs!",
    name: "Sarah Jones",
    title: "Adult Piano Student",
  },
  {
    quote:
      "This music school has helped me develop my vocal skills and confidence tremendously. The performance opportunities have been invaluable in preparing me for a career in music.",
    name: "David Lee",
    title: "Aspiring Singer",
  },
  {
    quote:
      "The collaborative learning environment at this school has been a game-changer for me. Working with other musicians has pushed me to grow creatively and made learning music even more enjoyable.",
    name: "Emily Chen",
    title: "Young Guitarist",
  },
  {
    quote:
      "My child has blossomed at this music school! The teachers are patient and enthusiastic, and they've instilled a true love of music in my child.",
    name: "Lisa Rodriguez (Parent)",
    title: "Parent of a Young Musician",
  },
  {
    quote:
      "I joined the adult choir here, and it's been such a rewarding experience. I've met wonderful people and learned so much about music theory. I highly recommend this school for anyone looking to explore their musical talents!",
    name: "Michael Brown",
    title: "Adult Choir Member",
  },
  {
    quote:
      "From shy beginner to confident performer, this music school has transformed my relationship with music. The teachers are incredibly talented and make learning a joy.",
    name: "William Miller",
    title: "Teen Drummer",
  },
  {
    quote:
      "This school offers a fantastic curriculum that caters to all skill levels. I've been able to refine my songwriting skills and connect with other aspiring musicians, which has been incredibly inspiring.",
    name: "Olivia Garcia",
    title: "Songwriting Student",
  },
  {
    quote:
      "As a busy professional, finding time to learn music was a challenge. The flexible class schedule at this school makes it possible for me to pursue my passion while balancing other commitments.",
    name: "Daniel Kim",
    title: "Working Adult Musician",
  },
];

const MusicSchoolTestimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestimonials;
