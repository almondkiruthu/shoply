import Image from "next/image";

import modelBoy from "@/public/hero/Model Boy.png";
import modelGirl from "@/public/hero/Model Girl.png";

const TabletAndLargerScreensHeroImageDisplay = () => {
  return (
    <>
      {/* Tablet and Larger Display for the hero image- modelBoy  */}
      <div className="absolute bottom-0 left-2 hidden md:block lg:hidden">
        <Image
          src={modelBoy}
          alt="s"
          priority={true}
          className="h-[345px] md:h-[271px] md:w-[200px] lg:w-[284px]"
        />
      </div>
      <div className="absolute -left-[0.09rem] bottom-0 hidden lg:block xl:-left-10 2xl:-left-20">
        <Image
          width={290}
          height={450}
          src={modelBoy}
          alt="s"
          priority={true}
        />
      </div>

      {/* Tablet and Larger Display for the hero image- modelGirl  */}
      <div className="absolute -bottom-[2rem] -right-5 hidden md:block lg:hidden">
        <Image
          width={300.957}
          height={418.552}
          src={modelGirl}
          alt="s"
          priority={true}
        />
      </div>
      {/* Tablet and Larger Display for the hero image- modelGirl  */}
      <div className="absolute -bottom-[2rem] -right-9 hidden lg:block xl:-right-20 2xl:-right-40">
        <Image
          width={420}
          height={533}
          src={modelGirl}
          alt="s"
          priority={true}
        />
      </div>
    </>
  );
};

export default TabletAndLargerScreensHeroImageDisplay;
