import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id='header'>
        <div className="bg-[#F0F2F3]">
          <Carousel
          opts={{
            align: "start",
          }}
          className="w-full ">
            <CarouselContent >
            {Array.from({ length: 5 }).map((_, index) =>(
              <CarouselItem key={index}>
                <div id="hero" className="flex justify-center items-center">
                    <div id="text">
                      <p className="text-[#272343]">Welcome to chairy</p>
                      <h1 className="font-bold text-[68px]">Best Furniture<br/>Collection for your interior.</h1>
                      <button className="border rounded-sm bg-[#029FAE] text-white px-[24px] py-[14px]">Shop Now &rarr;</button>
                    </div>
                    <div id="image">
                    <Image
                  src={'/hero-chair.png'}
                  width={475}
                  height={649}
                  alt="hero chair image"
                />
                    </div>
                </div>
              </CarouselItem>))}
              
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
      </section>
    </main>

  );
}
