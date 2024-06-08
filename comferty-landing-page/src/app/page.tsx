import Navbar from "@/components/Navbar";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {Package,Truck,Clock,ShieldCheck} from 'lucide-react'
export default function Home() {
  return (
    <main>
      <Navbar />
      <section id='header' className="mx-12 relative">
        <div className="bg-[#F0F2F3] px-40 rounded-b-3xl relative overflow-hidden">
          <div id='cirlce' className="rounded-full bg-[#E1E3E5] w-[747px] h-[747px] absolute right-10 bottom-10 "></div>
          <Carousel
          opts={{
            align: "start",
          }}
          className="w-full ">
            <CarouselContent >
            {Array.from({ length: 5 }).map((_, index) =>(
              <CarouselItem key={index}>
                <div id="hero" className="flex justify-between items-center py-10">
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
        <div id="features" className="w-[1320px] flex justify-between border shadow-md bg-white rounded-md m-auto py-[50px] px-[70px] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="flex items-center gap-[16px]">
              <Package className="w-[46px] h-[46px] stroke-1"/>
              <p><span className="font-medium text-[18px] text-[#272343]">Discount</span><br /><span className="text-[15px] text-[#9A9CAA]">Every week new sales</span></p>
            </div>
            <div className="flex items-center gap-[16px]">
            <Truck className="w-[46px] h-[46px] stroke-1"/>
              <p><span className="font-medium text-[18px] text-[#272343]">Free Delivery</span><br /><span className="text-[15px] text-[#9A9CAA]">100% Free for all orders</span></p>
            </div>
            <div className="flex items-center gap-[16px]">
            <Clock className="w-[46px] h-[46px] stroke-1"/>
              <p><span className="font-medium text-[18px] text-[#272343]">Great Support 24/7</span><br /><span className="text-[15px] text-[#9A9CAA]">We care your experiences</span></p>
            </div>
            <div className="flex items-center gap-[16px]">
            <ShieldCheck className="w-[46px] h-[46px] stroke-1"/>
              <p><span className="font-medium text-[18px] text-[#272343]">secure Payment</span><br /><span className="text-[15px] text-[#9A9CAA]">100% Secure Payment Method</span></p>
            </div>
        </div>
      </section>
    </main>

  );
}
