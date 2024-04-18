import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/bundle"
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Header = () => {
    return (
        <div className='mt-12'>
            <Swiper
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 2400,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <div className='mx-auto w-10/12 h-[200px] sm:h-[300px] md:h-[400px] firstSlider flex justify-center items-center'>
                        <h2 className='text-white font-bold text-3xl'>Agricultural Land</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mx-auto w-10/12 h-[200px] sm:h-[300px] md:h-[400px] secondSlider flex justify-center items-center'>
                        <h2 className='text-white font-bold text-3xl'>Plantation Land</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mx-auto w-10/12 h-[200px] sm:h-[300px] md:h-[400px] thirdSlider flex justify-center items-center'>
                        <h2 className='text-white font-bold text-3xl'>Farm Land</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;