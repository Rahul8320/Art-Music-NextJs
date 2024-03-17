"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Unleash Your Creativity (Empower, Flourish)",
      description:
        "At our art-music school, we believe that creativity is a powerful force that enriches lives. We provide a nurturing environment where you can explore your artistic and musical talents without judgment. Whether you're a budding painter, a passionate singer, or simply curious to discover your unique voice, we offer a variety of courses and workshops that cater to all skill levels. Through expert guidance and hands-on learning, you'll gain the technical skills you need to express yourself confidently and bring your artistic visions to life.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white text-xl">
          Empower Expression
        </div>
      ),
    },
    {
      title: "Learn from Renowned Instructors (Expertise, Guidance)",
      description:
        "Our faculty isn't just comprised of accomplished artists and musicians – they're passionate educators dedicated to fostering your artistic growth. With extensive experience in their respective fields, they bring a wealth of knowledge and industry insights to the classroom. They believe in personalized learning and provide tailored guidance to help you reach your full potential. Whether you're striving to master a new technique or refine your existing skills, our instructors offer the support and encouragement you need to excel on your artistic journey.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white text-xl">
          Expert Guidance
        </div>
      ),
    },
    {
      title: "Collaborative Learning Community (Connect, Inspire)",
      description:
        "Art and music thrive on connection and inspiration. At our school, you'll become part of a vibrant community of like-minded individuals who share your passion for creativity. You'll have the opportunity to collaborate on projects, share ideas, and learn from each other's diverse perspectives. These collaborations not only hone your artistic skills but also forge lasting friendships that will fuel your creative journey. Together, you'll inspire one another to reach new heights and push the boundaries of artistic expression.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white text-xl">
          Connect & Inspire
        </div>
      ),
    },
    {
      title: "State-of-the-Art Facilities (Resources, Innovation)",
      description:
        "We understand that the right environment can make a world of difference in your artistic development. That's why we provide access to top-notch facilities that empower your creativity. Our well-equipped studios are stocked with the latest tools and materials, allowing you to explore various artistic mediums and experiment with different techniques. Dedicated performance spaces offer a professional platform to showcase your talents and gain valuable experience in front of an audience. Practice rooms provide a quiet space for focused practice and self-improvement. These advanced resources ensure that you have everything you need to learn, grow, and thrive as an artist or musician.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white text-xl">
          Advanced Resources
        </div>
      ),
    },
    {
      title: "Performance Opportunities (Showcase, Confidence)",
      description:
        "There's nothing quite like the thrill of sharing your artistic talents with the world. At our school, we provide numerous performance opportunities throughout the year. Whether you're participating in recitals, exhibitions, or other live events, you'll gain invaluable experience performing in front of an audience. These opportunities not only allow you to showcase your skills and build confidence, but also help you refine your performance techniques in a real-world setting. Additionally, these events provide a platform for you to connect with the wider artistic community and build a strong foundation for your future artistic endeavors.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white text-xl">
          Showcase & Confidence
        </div>
      ),
    },
  ];

  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
