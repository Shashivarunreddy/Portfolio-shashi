import HTMLIcon from "@/assets/icons/html5.svg";
import JSIcon from "@/assets/icons/square-js.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import gitIcon from "@/assets/icons/github.svg";
import reactIcon from "@/assets/icons/react.svg";
import { TechIcon } from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JSIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Github",
    iconType: gitIcon,
  },
  {
    title: "React",
    iconType: reactIcon,
  },
];

export const ToolboxItems = ({className, itemsWrapperClassName}:{className?:string, itemsWrapperClassName?:string}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
        {toolboxItems.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
