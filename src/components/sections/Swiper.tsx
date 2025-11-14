"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import { productCards } from "@/types/products";

export default function SwiperCarousel() {
  return (
    <Swiper
      className="py-20!"
      modules={[Pagination, Autoplay]}
      slidesPerView={4}
      spaceBetween={16}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {productCards.map((product) => (
        <SwiperSlide key={product.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              isBlurred
              shadow="sm"
              className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
            >
              {/* Optional accent gradient behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-xl -z-10"></div>

              <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-start justify-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <Image
                      alt={product.name}
                      className="object-cover rounded-lg "
                      height={200}
                      src={product.image}
                      width="100%"
                    />
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-foreground/90">
                        {product.name}
                      </h3>
                      <p className="text-small text-foreground/60">
                        Electronics
                      </p>
                      <span className="mt-1 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
