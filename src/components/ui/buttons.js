import styled from "@emotion/styled";

// 슬라이드 좌측 이동 버튼
export const BtSlidePrev = styled.button`
  position: absolute;
  top: 50%;
  left: 0px;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;

  &::before {
    content: "";
    position: relative;
    width: 10px;
    height: 18px;
    display: block;
    margin: 0 auto;
    background: url("../../images/slider_arrow.svg") no-repeat center;
    transform: rotateY(180deg);
  }
`;
// 슬라이드 우측 이동 버튼
export const BtSlideNext = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.13);
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transform: translateX(50%) translateY(-50%);
  border-radius: 50px;

  &::after {
    content: "";
    position: relative;
    width: 10px;
    height: 18px;
    display: block;
    margin: 0 auto;
    background: url("../../images/slider_arrow.svg") no-repeat center;
  }
`;

// 카테고리 버튼
export const BtCate = styled.button`
  position: relative;
  display: block;
  padding: 0px 20px;
  border: 1px solid ${(props) => (props.active ? "transparent" : "#e5e5e5")};
  background-color: ${(props) => (props.active ? "#111" : "#fff")};
  font-size: 1.4rem;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  line-height: 42px;
  color: ${(props) => (props.active ? "#fff" : "#111")};
  cursor: pointer;
  border-radius: 44px;
`;

// 바로가기 버튼
export const BtHome = styled.button`
  position: absolute;
  display: flex;
  height: 5.6rem;
  padding: 0px 39px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 42px;
  color: #111;
  cursor: pointer;
  border-radius: 44px;

  &::after {
    content: "";
    position: relative;
    display: inline-block;
    left: 8px;
    width: 7px;
    height: 12px;
    z-index: 2;
    background-repeat: no-repeat;
    background: url("../../images/icon_linkArrow.fc64c13a.svg");
  }
`;
