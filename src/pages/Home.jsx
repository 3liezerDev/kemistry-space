import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export const Home = () => {
  return (
    <>
      <div className=" flex items-center justify-center flex-col">
        <div className="bg-white">
          <Carousel>
            <CarouselContent>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>


        </div>
        <div className="bg-black flex items-center justify-center flex-col w-full mt-10 p-36">
          <h1 className="mt-20 mb-10 text-6xl text-white text-center">WOULD YOU LIKE TO BE PART OF OUR TEAM?</h1>
          <Button className="mt-12 bg-pink-600 rounded-full  m-3 p-5 h-16 w-1/5 text-4xl">JOIN US</Button>
        </div>
      </div>
    </>
  );
};
