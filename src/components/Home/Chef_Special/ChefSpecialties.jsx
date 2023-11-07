// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ChefStyles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const ChefSpecialties = () => {
  return (
    <section className="mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <h1 className="text-center text-head text-2xl md:text-4xl font-metal font-semibold mb-8 md:mb-12 lg:mb-14 xl:mb-16">
        Chef&apos;s Specialties
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/MhQCB5L/Risotto-milanese.jpg" alt="" />
          <div className="absolute inset-0 slider-img-gradient"></div>
          <div className="absolute transform -translate-y-1/2 left-2 top-1/2 md:left-16 lg:left-20 space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4">
            <img
              className="w-12 md:w-20 xl:w-28"
              src="https://i.ibb.co/jyKqxb4/chef-ricci.jpg"
              alt="chef's-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              Chef: Giovanni Ricci
            </p>
            <p className="text-saffron md:text-base lg:text-xl xl:text-2xl font-semibold">
              Special: Risotto alla Milanese
            </p>
            <p className="max-w-xs lg:max-w-sm hidden md:flex text-blue-gray-100 md:text-sm lg:text-base md:font-medium">
              Meet our Italian culinary maestro, Chef Giovanni Ricci. With a
              passion for authentic Italian cuisine, he brings the flavors of
              Italy to your plate. His specialty dish, Risotto alla Milanese, is
              a masterpiece of creamy saffron-infused risotto, garnished with
              delicate gold leaf and served with a perfect osso buco. It&apos;s
              a true taste of Milan, right here in your city.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/hgDq8f1/nigiri-omakase.jpg" alt="" />
          <div className="absolute inset-0 slider-img-gradient"></div>
          <div className="absolute transform -translate-y-1/2 left-2 top-1/2 md:left-16 lg:left-20 space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4">
            <img
              className="w-12 md:w-20 xl:w-28"
              src="https://i.ibb.co/x2fWKYR/chef-aiko.jpg"
              alt="chef's-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              Chef: Aiko Nakamura
            </p>
            <p className="text-saffron md:text-base lg:text-xl xl:text-2xl font-semibold">
              Special: Nigiri Omakase
            </p>
            <p className="max-w-xs lg:max-w-sm hidden md:flex text-blue-gray-100 md:text-sm lg:text-base md:font-medium">
              Allow us to introduce Chef Aiko Nakamura, a master of sushi
              artistry. Her specialty dish, Nigiri Omakase, is a culinary
              journey through the freshest seafood and seasonal ingredients.
              Aiko&apos;s precision in crafting each piece of sushi, paired with
              the perfect balance of flavors, will transport you to the heart of
              Tokyo. Experience the art of sushi with Chef Aiko&apos;s
              creations.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/z7PJgqn/barbecue-brisket.jpg" alt="" />
          <div className="absolute inset-0 slider-img-gradient"></div>
          <div className="absolute transform -translate-y-1/2 left-2 top-1/2 md:left-16 lg:left-20 space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4">
            <img
              className="w-12 md:w-20 xl:w-28"
              src="https://i.ibb.co/2kVCkpM/chef-jack.jpg"
              alt="chef's-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              Chef: Jack Thompson
            </p>
            <p className="text-saffron md:text-base lg:text-xl xl:text-2xl font-semibold">
              Special: Smoked Texas Brisket
            </p>
            <p className="max-w-xs lg:max-w-sm hidden md:flex text-blue-gray-100 md:text-sm lg:text-base md:font-medium">
              Get ready for a flavor explosion with Chef Jack Thompson, our BBQ
              grill-master extraordinaire. Jack&apos;s specialty dish, Smoked
              Texas Brisket, is a slow-cooked masterpiece. He rubs the meat with
              a secret blend of spices, smokes it to perfection, and serves it
              with a tangy barbecue sauce. You&apos;ll savor the mouthwatering
              tenderness of this Texan classic, right in the heart of the city.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ChefSpecialties;
