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
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "@emotion/styled";

type SpeedColorProps = {
  speed: number;
  eventSpeed: number;
};

type ShoesImgProps = {
  src: string;
  speed: number;
  eventSpeed: number;
};

const ProductPage = () => {
  const [productData, setProductData] = useState(null);
  const { eventId } = useParams<{ eventId: string }>();
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `http://prototyne.site/users/product/detail/${eventId}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzQwNTY5NzQxLCJleHAiOjE3NDA1NzMzNDF9.DE-r6GPJSs8-OP-4G3PUuCQY6dVSEhJhisMQqtGu1xU`,
            },
          }
        );
        const data = await response.json();
        setProductData(data.result);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [eventId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {productData.imageUrls && productData.imageUrls.length > 0 ? (
        <ProductImg src={productData.imageUrls[0]} alt={productData.name} />
      ) : (
        <div>No image available</div>
      )}
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
        {/* <div style={{ textAlign: "center" }}>
          해당 체험은
          <span style={{ color: "blue" }}>
            초속 {productData.eventSpeed}m이상
          </span>
          의 회원만 신청 가능
        </div> */}
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
          {/* <SpeedText>YOUR SPEED</SpeedText>
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
          </SpeedBar> */}
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
        eventId={eventId}
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
