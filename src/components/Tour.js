import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "../styles/tour.css";
import "../styles/common.css";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Tour() {
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const axiosJsonData = () => {
    axios
      .get("tour.json")
      .then(function (res) {
        console.log(res.data);
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["tour_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosJsonData();
  }, []);

  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-header-title">투어 특가</h2>
          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>

        <div className="tour-main">
          <div className="tour-cate">
            <ul className="tour-list">
              <li>
                <button className="tour-cate-bt tour-cate-bt-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button className="tour-cate-bt">패키지</button>
              </li>
              <li>
                <button className="tour-cate-bt">국내숙소</button>
              </li>
              <li>
                <button className="tour-cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>

          <div className="tour-slide-wrap">
            <Swiper
              slidesPerView={3}
              spaceBetween={27}
              slidesPerGroup={3}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".tour-slide-wrap .slide-next-bt",
                prevEl: ".tour-slide-wrap .slide-prev-bt",
              }}
              className="tour-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {
                      <div className="swiper-slide">
                        <div className="tour-slide-item">
                          <a href={item.url} className="tour-link">
                            <div className="tour-img">
                              <img src={item.image} alt={item.url} />
                            </div>
                            <div className="tour-info">
                              <ul className="tour-good-list">
                                <li>
                                  <p className="tour-good-point">
                                    {item.point}
                                  </p>
                                </li>
                                <li>
                                  <p className="tour-good-summary">
                                    {item.summary}
                                  </p>
                                </li>
                                <li>
                                  <p className="tour-good-title">
                                    {item.title}
                                  </p>
                                </li>
                                <li className="tour-good-price">
                                  <b>{item.price}</b>
                                  <span>원~</span>
                                </li>
                              </ul>
                            </div>
                          </a>
                        </div>
                      </div>
                    }
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button className="slide-prev-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-bt">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="tour-footer">
          <button>
            <a href="#">
              투어 홈 바로가기
              <img src="images/icon_linkArrow.fc64c13a.svg" alt="" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Tour;
