import Image from "next/image";

import featuredItem from "@/public/hero/Hero Featured Item.png";
import modelBoy from "@/public/hero/Model Boy.png";
import modelGirl from "@/public/hero/Model Girl.png";

const MobileHeroImageDisplay = () => {
  return (
    <div className="relative -top-32 flex flex-col items-center justify-center gap-y-2 md:hidden">
      <Image width={223} height={271} src={modelBoy} alt="model" priority={true} />
      <Image
        width={194.4}
        height={194.4}
        src={featuredItem}
        priority={true}
        alt="model"
        className="mt-8"
      />
      <Image
        width={399.957}
        height={418.552}
        src={modelGirl}
        priority={true}
        alt="model"
      />
    </div>
  );
};

export default MobileHeroImageDisplay;
