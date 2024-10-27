import Image, { StaticImageData } from "next/image";

export const EducationCard = ({image, instiName, year, course}:{image:StaticImageData, instiName:string, year:string, course:string}) => {
  return (
    <div className="lg:mx-2 rounded-lg lg:p-3 flex lg:justify-evenly mx-2 p-3 justify-around"
        style={{
            paddingRight: 0
        }}
    >
      <div className="size-16 text-center">
        <Image src={image} alt="image" />
      </div>
      <div>
        <h2 className="sm:ml-3 font-serif bg-graid gradient-text flex  gap-1 text-center">
          <span>{instiName}</span>
          <span className="sm:-ml-2 lg:ml-0">&bull;</span>
          <span >{year}</span>
        </h2>
        <p className="font-sans text-center">{course}</p>
      </div>
    </div>
  );
};
