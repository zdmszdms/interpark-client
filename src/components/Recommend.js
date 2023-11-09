/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/recommend.css";
import "../styles/common.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

import {
  BtSlidePrev,
  BtSlideNext,
  BtCate,
  BtHome,
} from "../components/ui/buttons";
import { SectionTag, InnerArea } from "../components/ui/layout";

function Recommend() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  const swiperRef = useRef();
  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할
  // 리액트 변수를 만든다.
  const [htmlTag, setHtmlTag] = useState([]);

  // 외부 데이터 연동하기 (aixos 이용)
  const axiosJsonData = () => {
    axios
      .get("recommend.json")
      .then(function (res) {
        console.log(res.data);
        let arr = [];
        for (let i = 0; i < res.data.total; i++) {
          const obj = res.data["good_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 외부 데이터 연동하기 (fetch 이용)
  // const getJsonData = () => {
  //   fetch("recommend.json")
  //     .then((response) => {
  //       console.log("response : ", response);
  //       // 자료가 불러들여졌을 때
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log("result : ", result);
  //       // 자료를 원하는데로 처리하겠다.
  //       // result를 화면에 출력하겠다.
  //       // 자료가 바뀌면 화면을 변경하는 기능을 생성하겠다.
  //       let arr = [];
  //       for (let i = 0; i < result.total; i++) {
  //         const obj = result["good_" + (i + 1)];
  //         arr[i] = obj;
  //       }
  //       console.log(arr);
  //       setHtmlTag(arr);
  //     })
  //     .catch((error) => {
  //       // 에러가 발생했다.
  //       console.log("error : ", error);
  //     });
  // };

  // html이 준비가 되면, json을 불러들이겠다.
  // 1. 외부데이터 부르기 좋은 자리
  // 2. html 태그 참조(useRef할 때)
  // 3. window 참조할 때
  // 4. window.addEventListener("scroll"..)
  // 5. cleanUp할 때: 컴포넌트 화면에서 사라질 때 실행할 함수
  // 6. 타이머 만들고, 제거할 때
  // 컴포넌트가 화면에 보여질 때 실행할 내용 기재 장소
  // use는 Hook이라고 합니다.
  // 원하는 시점을 감시하고 실행할 함수
  useEffect(() => {
    //외부 데이터 불러들이기
    axiosJsonData();
    // getJsonData();
  }, []);

  return (
    <SectionTag pt={0} pb={90}>
      <InnerArea>
        <div className="recommend-header">
          <h2 className="recommend-title">쇼핑추천</h2>
          <span className="recommend-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div className="recommend-main">
          <div className="recommend-cate">
            <ul className="recommend-list">
              <li>
                <BtCate active={true}>쎈딜</BtCate>
              </li>
              <li>
                <BtCate>베스트</BtCate>
              </li>
              <li>
                <BtCate>블프데이</BtCate>
              </li>
              <li>
                <BtCate>디지털프라자</BtCate>
              </li>
              <li>
                <a href="#" className="recommend-cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>

          <div className="recommend-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                nextEl: ".recommend-slide-wrap .slide-next-bt",
                prevEl: ".recommend-slide-wrap .slide-prev-bt",
              }}
              className="recommend-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <div className="recommend-slide-end">
                        <a href={item.url}>
                          <img src={item.image} alt="전체보기" />
                          <span>전체보기</span>
                        </a>
                      </div>
                    ) : (
                      <div className="recommend-slide-item">
                        <a href={item.url} className="recommend-link">
                          <div className="recommend-img">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="recommend-info">
                            <ul className="recommend-good-list">
                              <li>
                                <span className="recommend-good-info-price">
                                  <b>{item.discount && item.discount + "%"}</b>
                                  <em>{item.price}</em>원
                                </span>
                              </li>
                              <li>
                                <p className="recommend-good-info-desc">
                                  {item.desc}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </a>
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

        <div className="recommend-footer">
          <BtHome>
            <a href="#">쇼핑 홈 바로가기</a>
          </BtHome>
        </div>
      </InnerArea>
    </SectionTag>
  );
}
export default Recommend;
