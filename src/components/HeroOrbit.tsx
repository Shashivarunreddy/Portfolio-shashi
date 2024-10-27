import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  className,
  orbitDuration,
  spinDuration,
  shouldOrbit = false,
  shouldSpin = false
}: PropsWithChildren<{
  size: number;
  rotation: number;
  className?: string;
  orbitDuration?: number;
  spinDuration?: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
}>) => {
  return (
    <div
      className={twMerge(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20",
        className
      )}
    >
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{ animationDuration: `${orbitDuration}s` }}
      >
        <div
          className="flex items-start justify-start "
          style={{
            rotate: `${rotation}deg`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div className={twMerge(shouldSpin===true && "animate-spin [animation-duration:10s]")}
          style={{ animationDuration: `${spinDuration}s` }}>
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}def)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
