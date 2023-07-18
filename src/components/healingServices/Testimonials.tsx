import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Swiper,
  SwiperSlide,
  Navigation,
  SwiperOptions,
} from '@/components/ui/slider';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
SwiperCore.use([Pagination]);
import { useIsRTL } from '@/lib/locals';
export default function Testimonials() {
  const { isRTL } = useIsRTL();

  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    // 900: {
    //   slidesPerView: 4,
    // },

    // 1100: {
    //   slidesPerView: 5,
    // },

    // 1280: {
    //   slidesPerView: 6,
    //   spaceBetween: 24,
    // },
    // 1400: {
    //   slidesPerView: 7,
    //   spaceBetween: 30,
    // },
    // 1700: {
    //   slidesPerView: 8,
    //   spaceBetween: 30,
    // },
    // 2600: {
    //   slidesPerView: 10,
    //   spaceBetween: 40,
    // },
  };

  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  const fetchTestimonials = async () => {
    const url = process.env.NEXT_PUBLIC_WP_API + `/wp/v2/ysr-testimonial`;
    const data = await fetch(url).then((r) => r.json());
    if (data && data.length > 0) {
      setTestimonials(data);
    }
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <div className="my-8">
      <p className="my-8 text-center text-3xl font-bold text-darkBlue">
        Testimonials
      </p>
      <p className="my-8 text-center text-xl font-semibold">
        {' '}
        What Our Customers Are Saying
      </p>
      <Swiper
        id="author-card-menu"
        className=" grid grid-cols-3 !px-3 py-16"
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          bulletClass:
            'swiper-pagination-bullet !w-2.5 !h-2.5 !p-1 mt-8 !rounded-full !bg-gray-900 !border-0 !opacity-70',
          bulletActiveClass: '!w-3 !h-3 !bg-accent',
          clickableClass: 'cursor-pointer',
          clickable: true,
        }}
        breakpoints={breakpoints}
      >
        {testimonials.length > 0 &&
          testimonials.map((testimonial: any, idx: number) => (
            <SwiperSlide
              key={idx}
              className=" rounded-md   border px-4 py-8 shadow-900 "
            >
              <div className="mb-5 flex gap-4">
                <div>
                  <Image
                    src={testimonial.x_featured_media_original}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                <div className="font-semibold text-darkBlue">
                  <p>{testimonial.title.rendered}</p>
                  <p>{testimonial.x_metadata.location}</p>
                </div>
              </div>
              <div className="text- max-h-[200px] overflow-y-auto px-2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: testimonial.x_metadata.short_review,
                  }}
                ></p>
              </div>
            </SwiperSlide>
          ))}
        <div className="pagination my-8 pt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Swiper>
    </div>
  );
}
