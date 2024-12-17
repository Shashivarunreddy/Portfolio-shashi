import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/shashisai27/",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/shashi-varun-28874124a/",
  },
  {
    title: "Github",
    link: "https://github.com/Shashivarunreddy",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container relative z-10">
        {" "}
        {/* Added z-10 here */}
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((footlink) => (
              <a
                key={footlink.title}
                href={footlink.link}
                className="inline-flex items-center gap-1.5"
              >
                <span>{footlink.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
