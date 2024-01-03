import Image from 'next/image';

import modelBoy from '@/public/hero/Model Boy.png';
import modelGirl from '@/public/hero/Model Girl.png';

const TabletAndLargerScreensHeroImageDisplay = () => {
  return (
    <>
      {/* Tablet and Larger Display for the hero image- modelBoy  */}
      <div className="hidden absolute left-2 bottom-0 md:block lg:hidden">
        <Image
          width={200}
          height={271}
          src={modelBoy}
          alt="s"
          priority={true}
          className="md:w-[200px] md:h-[271px] lg:w-[284px] h-[345px]"
        />
      </div>
      <div className="hidden absolute -left-[0.09rem] xl:-left-10 2xl:-left-20 bottom-0 lg:block">
        <Image
          width={290}
          height={450}
          src={modelBoy}
          alt="s"
          priority={true}
        />
      </div>

      {/* Tablet and Larger Display for the hero image- modelGirl  */}
      <div className="hidden absolute -right-5 -bottom-[2rem] md:block lg:hidden">
        <Image
          width={300.957}
          height={418.552}
          src={modelGirl}
          alt="s"
          priority={true}
        />
      </div>
      {/* Tablet and Larger Display for the hero image- modelGirl  */}
      <div className="hidden absolute -right-9 xl:-right-20 2xl:-right-40 -bottom-[2rem] lg:block">
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
