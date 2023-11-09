import { BtSlidePrev, BtSlideNext } from "../components/ui/buttons";
import {
  SectionTag,
  InnerArea,
  SlideItem,
  SlideLink,
} from "../components/ui/layout";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/visual.css";
import { useEffect, useRef, useState } from "react";
// axios 모듈(js.파일) 가져오기
import axios from "axios";

function Visual() {
  // js 코드 자리
  //jsx에 작성된 html태그를 React에서 참조
  //1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();

  // 외부 데이터 연동(axios활용)
  const axiosGetData = function () {
    axios
      .get("visual.json")
      .then(function (res) {
        console.log(res.data);
        // 자료를 출력하자
        makeVisualSlide(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 외부 데이터 연동(fetch활용)
  const fetchGetData = () => {
    fetch("visual.json")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        // 자료를 출력하자
        makeVisualSlide(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // visual 슬라이드 내용 채우는 기능
  // 리액트용 변수: 컴포넌트에 출력할 JSX
  // 일반변수 말고 리액트용 변수를 state라고 합니다.
  let [visualHtml, setVisualHtml] = useState([]);

  const makeVisualSlide = (_data) => {
    const visualRes = _data;
    // for(초기값; 조건식; 증감식) {
    // 할일
    // };
    let visualArray = [];
    for (let i = 0; i < visualRes.total; i++) {
      // console.log("visual_" + (i + 1));
      visualArray[i] = visualRes["visual_" + (i + 1)];
    }
    console.log(visualArray);
    setVisualHtml(visualArray);

    // 배열 자료(visualArray))를 뜯어서 컴포넌트 담기
    let slideArray = [];
    for (let i = 0; i < visualRes.total; i++) {
      slideArray[i] = <SwiperSlide></SwiperSlide>;
    }
    console.log(slideArray);
  };

  // 화면(컴포넌트)이 보이(렌터링)면
  // 데이터 호출 및 배치
  // 주로 하는 작업
  // 1. 네트워크 연동 외부 데이터 불러들임
  // 2. html을 제어할 때
  // 3. window를 제어할 때
  // 4. window.addEventLisner 작성할 때
  // 5. window.removeEventListner 작성할 때
  // 6. 컴포넌트가 삭제 될 때
  useEffect(() => {
    // 렌더링 될 때
    // visual.json 데이터 불러들이기 기능 실행
    axiosGetData();
    // fetchGetData();

    return () => {
      //  삭제될 때 (Clean Up 함수)
    };
  }, []);

  return (
    <SectionTag pt={30} pb={80}>
      <InnerArea style={{ height: 345 }}>
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{
            delay: 1000, // 대기시간
            disableOnInteraction: false, // 사용자 터치후 자동실행 다시
          }}
          modules={[Autoplay]}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="visual-slide"
        >
          {visualHtml.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <SlideItem>
                  <SlideLink href={item.url}>
                    <img
                      src={process.env.PUBLIC_URL + item.file}
                      alt={item.file}
                    />
                  </SlideLink>
                </SlideItem>
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
      </InnerArea>
    </SectionTag>
  );
}
// 내보내기~~
export default Visual;
