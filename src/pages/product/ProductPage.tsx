import {
  PeriodSection,
  ProductImg,
  Company,
  ProductTitle,
  TicketInfo,
  Description,
  ReleaseDate,
  Index,
  DetailBottom,
} from "@/entities";

import styled from "@emotion/styled";
import shoes from "/image/orange_sneaker.png";
import product from "/image/product.png";

type SpeedColorProps = {
  speed: number;
  eventSpeed: number;
};

type ShoesImgProps = {
  src: string;
  speed: number;
  eventSpeed: number;
};

const mockResponse = {
  eventId: 0,
  productId: 0,
  eventSpeed: 30,
  name: "AirPods Max",
  enterprise: "Apple",
  category: "뷰티",
  reqTickets: 2,
  imageUrls: [product],
  notes:
    "제공받은 제품은 당첨자 본인만 사용 가능하며, 타인에게 양도할 수 없습니다. 만약 후기 작성 의무를 이행하지 않을 경우, 불이익이나 참여 제한이 있을 수 있음을 유의해 주시기 바랍니다.",
  contents:
    "섬세한 하이파이 오디오를 통해 독보적인 청취 경험을 선사한다. 맞춤형으로 제작된 드라이버의 각 요소가 연동하여 전체 음역대에 걸쳐 사운드 왜곡을 극한으로 줄여준다. 최대 2배 더 많은 소음을 차단하는 프로급 액티브 노이즈 캔슬링 기능은 외부 소음을 그에 상응하는 안티 노이즈로 상쇄한다. ",
  isBookmarked: true,
  dateInfo: {
    eventStart: "2024-11-14",
    eventEnd: "2024-11-30",
    releaseStart: "2024-12-19",
    releaseEnd: "2024-12-19",
    feedbackStart: "2024-12-20",
    feedbackEnd: "2024-12-20",
    judgeStart: "2024-12-19T16:52:13.931Z",
    judgeEnd: "2024-12-19T16:52:13.931Z",
    endDate: "2024-12-19",
  },
  investInfo: {
    apply: true,
    speed: 5,
    status: "미당첨",
    shipping: "배송중",
    transportNum: "한진 1234567890",
    penalty: true,
  },
};

const ProductPage = () => {
  const productData = mockResponse;

  return (
    <div>
      <ProductImg src={productData.imageUrls[0]} alt={productData.name} />
      <div
        style={{
          marginTop: "50px",
          padding: "20px",
          boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <Company companyText={productData.enterprise} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ProductTitle productText={productData.name} />
          <TicketInfo ticketCount={productData.reqTickets} />
        </div>
        <div style={{ textAlign: "center" }}>
          해당 체험은
          <span style={{ color: "blue" }}>
            초속 {productData.eventSpeed}m이상
          </span>
          의 회원만 신청 가능
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
            marginBottom: "100px",
          }}
        >
          <SpeedText>YOUR SPEED</SpeedText>
          <SpeedBar>
            <SpeedColor
              speed={productData.investInfo.speed}
              eventSpeed={productData.eventSpeed}
            />
            <SpeedContainer
              speed={productData.investInfo.speed}
              eventSpeed={productData.eventSpeed}
            >
              {productData.investInfo.speed}m/s
            </SpeedContainer>

            <ShoesImg
              src={shoes}
              speed={productData.investInfo.speed}
              eventSpeed={productData.eventSpeed}
            />
          </SpeedBar>
        </div>
        <Index indexText="체험 일정" />
        <PeriodSection
          dateInfo={productData.dateInfo}
          investInfo={productData.investInfo}
        />
        <Index indexText="설명" />
        <Description description={productData.contents} />
        <ReleaseDate releaseDate={productData.dateInfo.releaseStart} />
        <Index indexText="추가 안내 사항" />
        <Description description={productData.notes} />
      </div>
      <DetailBottom
        dateInfo={productData.dateInfo}
        investInfo={productData.investInfo}
        isBookmarked={productData.isBookmarked}
      />
    </div>
  );
};

export default ProductPage;

const SpeedText = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 13px;
  color: #0500ff;
`;

const SpeedBar = styled.div`
  width: 222px;
  height: 6px;
  position: relative;
  /* Back */
  background: linear-gradient(0deg, #f6f5ff, #f6f5ff), #d9d9d9;
  border-radius: 20px;
`;

const SpeedColor = styled.div<SpeedColorProps>`
  width: ${({ speed, eventSpeed }) => (speed / eventSpeed) * 100}%;
  height: 6px;

  /* Main */
  background: #0500ff;
  border-radius: 20px;
`;

const ShoesImg = styled.img<ShoesImgProps>`
  position: absolute;
  top: -15px;
  left: ${({ speed, eventSpeed }) =>
    `calc(${(speed / eventSpeed) * 100}% - 10px)`};
`;

const SpeedContainer = styled.div<SpeedColorProps>`
  position: absolute;
  top: -15px;
  left: ${({ speed, eventSpeed }) =>
    `calc(${(speed / eventSpeed) * 100}% + 15px)`};
  /* 5m/s */
  font-weight: 400;
  font-size: 10px;
  color: #0500ff;
`;
