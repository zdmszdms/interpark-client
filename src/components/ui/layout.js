import styled from "@emotion/styled";

export const SectionTag = styled.section`
  position: relative;
  padding-top: ${(props) =>
    props.pt === 0 ? props.pt + "px" : props.pt + "px"};
  padding-bottom: ${(props) => (props.pb === 0 ? "0px" : props.pb + "px")};
`;

export const InnerArea = styled.div`
  position: relative;
  width: 1280px;
  margin: 0 auto;
`;

export const SlideItem = styled.div`
  position: relative;
  width: ${(props) =>
    props.wd === "628px" ? props.wd + "px" : props.wd + "px"};
`;

export const SlideLink = styled.a`
  position: relative;
  width: 100%;
  display: block;
  overflow: hidden;
  border-radius: 13px;
`;
