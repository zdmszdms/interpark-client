import "../styles/live.css";
import "../styles/common.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { BtSlidePrev, BtSlideNext, BtHome } from "./ui/buttons";

function Live() {
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const axiosJsonData = () => {
    axios
      .get("live.json")
      .then(function (res) {
        console.log(res.data);
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["live_" + (i + 1)];
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
    <section class="live">
      <div class="live-inner">
        <div class="live-header">
          <img src="images/title_live.svg" alt="" />
        </div>

        <div class="live-main">
          <div class="live-slide-warp">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              Navigation={{
                nextEl: ".recommend-slide-wrap .slide-next-bt",
                prevEl: ".recommend-slide-wrap .slide-prev-bt",
              }}
              className="live-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {
                      <div class="swiper-slide">
                        <div class="live-slide-item">
                          <a href={item.info.url} class="live-link">
                            <div class="live-img">
                              <img src={item.info.image} alt={item.info.url} />
                            </div>
                            <div class="live-info">
                              <ul class="live-info-top">
                                <li class="live-state">${item.info.state}</li>
                                <li class="live-title">${item.info.title}</li>
                              </ul>
                              <ul class="live-info-main">
                                <li class="live-date">{item.main.date}</li>
                                <li class="live-time">{item.main.time}</li>
                              </ul>
                            </div>
                          </a>
                          {item.goods.goods_image === ""
                            ? ""
                            : `<div class="live-goods">
              <a href="${item.goods.goods_url}">
                <img src="${item.goods.goods_image}" alt="${item.goods.url}" />
                <div class="live-goods-title">${item.goods.goods_title}</div>
                <ul class="live-goods-price">
                  <li>
                    <span class="live-goods-price">

                      <b class="live-goods-discount">
                        ${
                          item.goods.goods_discount &&
                          item.goods.goods_discount + "%"
                        }
                      </b>
                      <b class="live-goods-number">${item.goods.goods_price}</b>
                      <em>${item.goods.goods_price === "" ? "" : "원"}</em>
                    </span>
                  </li>
                </ul>
              </a>
            </div>`}
                        </div>
                      </div>
                    }
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <BtSlidePrev
              onClick={() => {
                swiperRef.current.slidePrev();
              }}
            ></BtSlidePrev>
            <BtSlideNext
              onClick={() => {
                swiperRef.current.slideNext();
              }}
            ></BtSlideNext>
          </div>
        </div>

        <div class="live-footer">
          <BtHome>
            <a href=".html">인터파크 라이브 바로가기</a>
          </BtHome>
        </div>
      </div>
    </section>
  );
}

export default Live;
