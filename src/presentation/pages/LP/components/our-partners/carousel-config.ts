import { CarouselProps } from "infinity-forge/dist/ui/components/carousel/interfaces";

export const carouselConfig: CarouselProps["config"] = {
  spaceBetween: 20,
  pagination: { clickable: true },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    900: {
      slidesPerView: 5,
    },
    800: {
      slidesPerView: 4,
    },
    550: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
};
