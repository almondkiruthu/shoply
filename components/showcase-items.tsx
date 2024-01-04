'use client';

import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import image1 from '@/public/hero/showcase/image-1.png';
import { ShowCaseImages } from '@/types';

interface ShowCaseItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  showCaseImage: ShowCaseImages;
}

const ShowCaseItems = ({ showCaseImage }: ShowCaseItemsProps) => {
  return (
    <Carousel className=''>
      <CarouselContent className="-ml-2">
        {showCaseImage.map((image, index) => (
          <CarouselItem
            className="flex basis-1/1 xl:basis-1/5 rounded-lg"
            key={index}
          >
            <div className="rounded-lg overflow-hidden">
              <Image src={image.path} alt="#" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ShowCaseItems;
