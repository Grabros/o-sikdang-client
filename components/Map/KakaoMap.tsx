import React, { forwardRef, Ref } from "react";
import { KakaoMapWrapper } from "./Map.element";

type KakaoMapProps = {
  ref: Ref<HTMLDivElement>;
};
const KakaoMap: React.FC<KakaoMapProps> = forwardRef((props, ref) => {
  return (
    <KakaoMapWrapper>
      <div
        ref={ref}
        style={{ width: "100%", height: "100%" }}
        className="map"
      />
      {/* <div className="logo-marker">
        <h1>오늘의식당</h1>
      </div> */}
    </KakaoMapWrapper>
  );
});

export default KakaoMap;
