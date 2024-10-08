import Slider from "react-slick";
import Title from '../UI/Title';

import dots from '../../assets/icons/dots.svg';
import test1 from '../../assets/image/testimonials/test1.png';
import test2 from '../../assets/image/testimonials/test2.png';
import test3 from '../../assets/image/testimonials/test3.png';
import test4 from '../../assets/image/testimonials/test4.png';
import test5 from '../../assets/image/testimonials/test5.png';
import test6 from '../../assets/image/testimonials/test6.png';
import test7 from '../../assets/image/testimonials/test7.png';
import test8 from '../../assets/image/testimonials/test8.png';
import prewArrow from '../../assets/icons/prew-arrow.svg';
import nextArrow from '../../assets/icons/next-arrow.svg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/testimonials.scss';

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <span><img className="prew-arrow" src={prewArrow} alt="prewArrow" /></span>,
        nextArrow: <span><img className="next-arrow" src={nextArrow} alt="nextArrow" /></span>,
        responsive: [
          {
            breakpoint: 1461,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 1122,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 669,
            settings: {
                speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <section className="testimonials">
            <div className="container">
                <Title title={'ВІДГУКИ'}/>
            </div>
            <div className="testimonials__wrapper">
                    <Slider {...settings}>
                        <div className="testimonials__card">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test1} alt="test" className="testimonials__test-img" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Ethan Thompson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                Високоякісний ремонт моєї Tesla! Результат перевершив мої очікування. Дякую!
                            </div>
                        </div>

                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test2} alt="test" className="testimonials__test-img"/>
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Liam Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                Швидкий і надійний ремонт Tesla. Задоволений обслуговуванням.
                            </div>
                        </div>

                        <div className="testimonials__card">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test3} alt="test" className="testimonials__test-img"/>
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Noah Davis
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                Професійний сервісний центр Tesla. Рекомендую!
                            </div>
                        </div>

                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test4} alt="test" className="testimonials__test-img"/>
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Benjamin Martinez
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                            Відновили мою Tesla в найкоротший термін. Дякую, все працює належним чином.
                            </div>
                        </div>

                        <div className="testimonials__card"> 
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test5} alt="test" className="testimonials__test-img"/>
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    William Wilson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                Ефективний ремонт моєї Tesla. Ціна відповідає якості.
                            </div>
                        </div>
                        
                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test6} alt="test" className="testimonials__test-img"/>
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    James Anderson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                Звертався до них із проблемою, і вони вирішили її швидко. Вдячний за сервіс.
                            </div>
                        </div>

                        <div className="testimonials__card">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test7} alt="test" className="testimonials__test-img"/>
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Alexander Rodriguez
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                Моє авто було відремонтовано професійною командою Tesla. Раджу їх послуги.
                            </div>
                        </div>

                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test8} alt="test" className="testimonials__test-img"/>
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Michael Collins
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                Відмінний сервісний центр Tesla. Ремонт пройшов без жодних побоювань.
                            </div>
                        </div>
                    </Slider>
            </div>
        </section>
    )
}

export default Testimonials;