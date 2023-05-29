import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
  margin-bottom: 40px;
  height: 680px;
  background: linear-gradient(to left, #1e95c8a4 70%, transparent 100%),
    url(${props => props.w500imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1280px) {
    height: 580px;
    background: linear-gradient(to left, #1e96c8 70%, transparent 100%),
      url(${props => props.w500imgUrl});
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
  }

  & img {
    display: block;
    /* width: 40%; */
    float: left;
    overflow: hidden;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  padding: 10px;
  /* background: #1e96c8; */
  /* background: #000000; */
  @media (min-width: 1280px) {
    padding: 30px;

    width: 70%;
  }

  & h1 {
    text-transform: uppercase;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 28px;
    letter-spacing: 1px;
    @media (min-width: 1280px) {
      padding: 0 0 0 40px;

      margin: 30px 0 0 0;

      font-size: 32px;
    }
    @media (min-width: 1280px) {
      font-size: 60px;
    }
  }
  & h2 {
    color: #e3e3e3;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: left;
    font-size: 22px;

    letter-spacing: 1px;
    @media (min-width: 768px) {
      margin: 30px 0 0 0;
      padding: 0 0 0 40px;
      font-size: 28px;
    }
    @media (min-width: 1280px) {
      font-size: 32px;
      margin-bottom: 40px;
    }
  }
  & h3 {
    font-weight: 700;
  }
  & ul {
    list-style-type: none;
    margin: 10px 0 0 0;
    padding-left: 0;
    @media (min-width: 768px) {
      padding: 0 0 0 40px;

      font-size: 28px;
      display: flex;
      gap: 10px;
      margin-bottom: 40px;
    }

    & li {
      display: inline;
      color: #e3e3e3;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 18px;
      margin: 0;
      padding: 0;
      /* display: flex;
      gap: 10px; */
      @media (min-width: 1280px) {
        padding: 0 40px 0 0;
      }
    }
  }
  & p,
  & h3 {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 10px 0 10px 0;
    line-height: 20px;
    /* margin: 0; */
    padding: 0;
    @media (min-width: 1280px) {
      padding: 0 40px 0 40px;
    }
  }
`;
