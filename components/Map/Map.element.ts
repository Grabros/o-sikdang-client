import styled from "styled-components";

export const MapLoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const KakaoMapWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;
  overflow-y: hidden;

  .logo-marker {
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    position: fixed;
    z-index: 10000;
    top: 2%;
    left: 2%;
    background-color: green;
    color: white;

    h1 {
    }
  }
`;
