'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from "next/image";
import ParallaxItem from '@/components/ParallaxItem';

export default function FvSlider(){
  return (
    <Swiper
      className='f-full h-full'
      modules={[Autoplay, EffectFade]}
      effect="fade"
      speed={3000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[1, 2, 3, 4].map((i) => {
        return (
          <SwiperSlide key={i}>
            <ParallaxItem className='w-full h-full'>
              <Image
                className='w-full h-full'
                src={`/images/home/fv_main${i}.jpg`}
                alt={`FV IMAGE${i}`}
                width={365}
                height={448}
              />
            </ParallaxItem>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}