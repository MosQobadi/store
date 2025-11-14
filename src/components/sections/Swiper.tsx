"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // ✅ Named exports in Swiper 12
import { Card, CardBody } from "@heroui/react";

import "swiper/css";
import "swiper/css/pagination";

export default function SwiperCarousel() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Swiper
      className="py-10!"
      modules={[Pagination, Autoplay]} // register modules here
      slidesPerView={3.2}
      spaceBetween={16}
      loop={true} // infinite loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      breakpoints={{
        // responsive
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item}>
          <Card className="h-40 shadow-lg flex items-center justify-center">
            <CardBody className="text-center text-lg font-semibold">
              Card {item}
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
