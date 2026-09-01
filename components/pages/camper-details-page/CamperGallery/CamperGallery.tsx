'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { CamperGalleryItem } from '@/types/camper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import css from './CamperGallery.module.css';

type CamperGalleryProps = {
  gallery: CamperGalleryItem[];
  name: string;
};

export default function CamperGallery({
  gallery,
  name,
}: CamperGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] =
    useState<SwiperType | null>(null);

  if (gallery.length === 0) {
    return null;
  }

  return (
    <div className={css.gallery}>
      <Swiper
        modules={[
          FreeMode,
          Navigation,
          Thumbs,
        ]}
        navigation
        spaceBetween={16}
        thumbs={{
          swiper:
            thumbsSwiper &&
            !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        className={css.mainSwiper}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div className={css.mainImage}>
              <Image
                src={image.original}
                alt={`${name} photo ${index + 1}`}
                width={648}
                height={500}
                className={css.image}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {gallery.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[
            FreeMode,
            Navigation,
            Thumbs,
          ]}
          spaceBetween={16}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          className={css.thumbsSwiper}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            376: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            769: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
        >
          {gallery.map((image, index) => (
            <SwiperSlide key={image.id}>
              <button
                type="button"
                className={css.thumb}
                aria-label={`Show ${name} photo ${index + 1}`}
              >
                <Image
                  src={image.thumb}
                  alt=""
                  width={142}
                  height={100}
                  className={css.image}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}