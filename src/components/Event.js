/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "../styles/event.css";
import "../styles/common.css";
import { useRef } from "react";

function Event() {
  const swiperRef = useRef();

  return (
    <section className="event">
      <div className="event-inner">
        <div className="event-header">
          <h2 className="event-title">이벤트</h2>
          <span className="event-txt">
            인터파크에서 할인혜택을 꼭 챙기세요.
          </span>
        </div>
        <div className="event-main">
          <div className="event-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".event-slide-wrap .slide-next-bt",
                prevEl: ".event-slide-wrap .slide-prev-bt",
              }}
              className="event-slide"
            >
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="event-slide-item">
                  <a href="#" className="event-link">
                    <div className="event-img">
                      <img src="images/event_1" alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
