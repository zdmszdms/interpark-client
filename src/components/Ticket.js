import "../styles/ticket.css";
import "../styles/common.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useEffect, useRef, useState } from "react";
import { BtHome, BtSlideNext, BtSlidePrev } from "../components/ui/buttons";
import axios from "axios";

function Ticket() {
  // js 코드 자리
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const axiosJsonData = () => {
    axios
      .get("ticket.json")
      .then(function (res) {
        console.log(res.data);
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["ticket_" + (i + 1)];
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
    <section className="ticket">
      <div className="ticket-inner">
        <div className="ticket-header">
          <h2 className="ticket-title">티켓 랭킹</h2>
          <span className="ticket-txt">오늘 뭐볼까? 지금 HOT한 공연</span>
        </div>
        <div className="ticket-main">
          <div className="ticket-cate">
            <ul className="ticket-list">
              <button className="ticket-cate-bt ticket-cate-bt-active">
                뮤지컬
              </button>
              <button className="ticket-cate-bt">콘서트</button>
              <button className="ticket-cate-bt">스포츠</button>
              <button className="ticket-cate-bt">전시/행사</button>
              <button className="ticket-cate-bt">클래식/무용</button>
              <button className="ticket-cate-bt">아동/가족</button>
              <button className="ticket-cate-bt">연극</button>
              <button className="ticket-cate-bt">레저/캠핑</button>
            </ul>
          </div>

          <div className="ticket-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".ticket-slide-wrap .slide-next-bt",
                prevEl: ".ticket-slide-wrap .slide-prev-bt",
              }}
              className="ticket-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <div className="ticket-slide-end">
                        <a href={item.url}>
                          <img src={item.image} alt="전체보기" />
                          <span>전체보기</span>
                        </a>
                      </div>
                    ) : (
                      <div className="swiper-slide">
                        <div className="ticket-slide-item">
                          <a href={item.url}>
                            <div className="ticket-img">
                              <img src={item.image} alt={item.desc} />
                            </div>
                            <div className="ticket-info">
                              <ul className="ticket-info-txt">
                                <li>
                                  <b className="ticket-info-txt-rank">
                                    {item.rank}
                                  </b>
                                </li>
                                <li>
                                  <b className="ticket-info-txt-title">
                                    {item.title}
                                  </b>
                                </li>
                                <li>
                                  <span className="ticket-info-txt-location">
                                    {item.location}
                                  </span>
                                </li>
                                <li>
                                  <span className="ticket-info-txt-date">
                                    {item.date}
                                  </span>
                                </li>
                                <li>
                                  {item.button === "좌석우위" ? (
                                    <span className="ticket-info-txt-blue">
                                      {item.button}
                                    </span>
                                  ) : (
                                    <span className="ticket-info-txt-red">
                                      {item.button}
                                    </span>
                                  )}
                                </li>
                              </ul>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
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
        <div className="ticket-footer">
          <BtHome>
            <a href=".html">티켓 홈 바로가기</a>
          </BtHome>
        </div>
      </div>
    </section>
  );
}

export default Ticket;
