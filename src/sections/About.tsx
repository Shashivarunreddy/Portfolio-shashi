import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import MapImage from "@/assets/images/map.png";
import memojiSmile from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "50%",
    top: "200%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "20%",
    top: "290%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "190%",
  },
  {
    title: "Hiking",
    emoji: "🏔️",
    left: "80%",
    top: "390%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "0%",
    top: "460%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏻‍♂️",
    left: "20%",
    top: "530%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glimpse Into My World"
          description="Learn more about who i am, what i do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              >
                <div className="w-40 mx-auto mt-2">
                  <Image src={bookImage} alt="book" />
                </div>
              </CardHeader>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My ToolBox"
                description="Explore the technologies and tools I use to craft exceptional digital experience."
              >
                <div>
                  <ToolboxItems className="mt-6" />
                  <ToolboxItems
                    className="mt-6"
                    itemsWrapperClassName="-translate-x-1/2"
                  />
                </div>
              </CardHeader>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond The Code!"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            >
              <div className="relative flex-1 pt-6">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </CardHeader>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image
              src={MapImage}
              alt="map"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after-absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
              <Image src={memojiSmile} alt="memoji" className="size-20" />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
