import React, { useEffect } from "react";
import Head from "next/head";
import KakaomapComponent from "../components/Map/KakaoMap";

const Map: React.FC = () => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);

  function getLocation(print: Function) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          print(position);
        },
        function (error) {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: Infinity,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  }

  useEffect(() => {
    const x = 126.570667;
    const y = 33.450701;
    const coords = new (window as any).daum.maps.LatLng(y, x); // 지도의 중심좌표
    const options = {
      center: coords,
      level: 2,
    };
    const map = new (window as any).daum.maps.Map(kakaoMap.current, options);
    const marker = new (window as any).daum.maps.Marker({
      position: coords,
      map,
    });
  }, [kakaoMap]);

  const kakaoKey = "ee7e2a2ec53c1eca006e98eaa132ca34";
  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoKey}&libraries=services`}
        />
      </Head>
      <KakaomapComponent ref={kakaoMap} />
    </div>
  );
};

export default Map;
