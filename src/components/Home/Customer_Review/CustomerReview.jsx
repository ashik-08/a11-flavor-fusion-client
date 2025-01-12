// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CustomerReview.css";

import user1 from "../../../assets/home/user-1.jpg";
import user2 from "../../../assets/home/user-2.jpg";
import user3 from "../../../assets/home/user-3.jpg";
import user4 from "../../../assets/home/user-4.jpg";
import user5 from "../../../assets/home/user-5.jpg";

const CustomerReview = () => {
  return (
    <section className="mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <h1 className="text-center text-head text-2xl md:text-4xl font-metal font-semibold mb-8 md:mb-12 lg:mb-14 xl:mb-16">
        Customer Review
      </h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
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
          <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4 p-5 md:pl-16 lg:pl-28 xl:pl-36 mb-10 border rounded-lg shadow-sm">
            <img
              className="w-12 md:w-20 xl:w-28 drop-shadow-md"
              src={user1}
              alt="user-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              Emily W.
            </p>
            <p className="text-sub-head text-sm md:text-base font-semibold">
              Review 1 - From Gourmet Enthusiast
            </p>
            <p className="max-w-xs lg:max-w-sm text-details md:text-sm lg:text-base md:font-medium">
              A culinary adventure like no other! I recently dined at
              FlavorFusion and was blown away by the exquisite flavors and
              presentation. The dishes were true works of art, and the attentive
              staff made the experience even more special. I can&apos;t wait to
              return for more gastronomic delights.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4 p-5 md:pl-16 lg:pl-28 xl:pl-36 mb-10 border rounded-lg shadow-sm">
            <img
              className="w-12 md:w-20 xl:w-28 drop-shadow-md"
              src={user2}
              alt="user-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              James C.
            </p>
            <p className="text-sub-head text-sm md:text-base font-semibold">
              Review 2 - From a Food Critic
            </p>
            <p className="max-w-xs lg:max-w-sm text-details md:text-sm lg:text-base md:font-medium">
              As a food critic, I&apos;ve dined at numerous restaurants, but
              FlavorFusion stands out. The creativity and attention to detail in
              each dish are unparalleled. The Chef&apos;s Specialties are a
              must-try. The combination of flavors is a symphony for the taste
              buds. An exceptional dining experience!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4 p-5 md:pl-16 lg:pl-28 xl:pl-36 mb-10 border rounded-lg shadow-sm">
            <img
              className="w-12 md:w-20 xl:w-28 drop-shadow-md"
              src={user3}
              alt="user-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              Sarah L.
            </p>
            <p className="text-sub-head text-sm md:text-base font-semibold">
              Review 3 - From a Regular Patron
            </p>
            <p className="max-w-xs lg:max-w-sm text-details md:text-sm lg:text-base md:font-medium">
              FlavorFusion is my go-to restaurant for special occasions and
              casual dinners alike. The consistency in quality and the warm
              ambiance make it a favorite. The Chef&apos;s Specialties section
              is always a delightful surprise. My family and I have created
              beautiful memories here.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4 p-5 md:pl-16 lg:pl-28 xl:pl-36 mb-10 border rounded-lg shadow-sm">
            <img
              className="w-12 md:w-20 xl:w-28 drop-shadow-md"
              src={user4}
              alt="user-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              Diego M.
            </p>
            <p className="text-sub-head text-sm md:text-base font-semibold">
              Review 4 - From a Traveler
            </p>
            <p className="max-w-xs lg:max-w-sm text-details md:text-sm lg:text-base md:font-medium">
              I stumbled upon FlavorFusion during my travels, and it was a
              delightful discovery. The fusion of flavors in their dishes is
              impressive. The service was impeccable, and the atmosphere was
              inviting. I can&apos;t wait for my next visit!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-1 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4 p-5 md:pl-16 lg:pl-28 xl:pl-36 mb-10 border rounded-lg shadow-sm">
            <img
              className="w-12 md:w-20 xl:w-28 drop-shadow-md"
              src={user5}
              alt="user-img"
            />
            <p className="text-head text-sm md:text-base lg:text-xl xl:text-2xl font-semibold">
              Isabella R.
            </p>
            <p className="text-sub-head text-sm md:text-base font-semibold">
              Review 5 - From a Foodie Blogger
            </p>
            <p className="max-w-xs lg:max-w-sm text-details md:text-sm lg:text-base md:font-medium">
              I write about food for a living, and FlavorFusion left a lasting
              impression. From the moment I walked in, I was welcomed by the
              enticing aroma of fresh ingredients. The menu is a gastronomic
              journey, and the presentation of each dish is Instagram-worthy. A
              true gem for food enthusiasts.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CustomerReview;
