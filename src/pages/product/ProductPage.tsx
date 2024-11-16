import { useState } from "react";
import PeriodSection from "@/entities/element/PeroidSection";
import ProductImg from "@/entities/element/ProductImg";
import Company from "@/entities/element/Company";
import ProductTitle from "@/entities/element/ProductTitle";
import TicketInfo from "@/entities/element/TicketInfo";
import Description from "@/entities/element/Description";
import ReleaseDate from "@/entities/element/ReleaseDate";
import Index from "@/entities/element/Index";
import product from "../../../public/image/product.png";

const mockResponse = {
  eventId: 0,
  productId: 0,
  name: "AirPods Max",
  enterprise: "Apple",
  category: "뷰티",
  reqTickets: 2,
  imageUrls: [product],
  notes: "추가 안내 사항입니다.",
  contents: "섬세한 하이파이 오디오를 통해 독보적인 청취 경험을 선사합니다.",
  isBookmarked: true,
  dateInfo: {
    eventStart: "2024-11-16",
    eventEnd: "2024-11-16",
    releaseStart: "2024-11-16",
    releaseEnd: "2024-11-16",
    feedbackStart: "2024-11-16",
    feedbackEnd: "2024-11-16",
    judgeStart: "2024-11-16T16:52:13.931Z",
    judgeEnd: "2024-11-16T16:52:13.931Z",
    endDate: "2024-11-16",
  },
  investInfo: {
    apply: true,
    status: "신청",
    shipping: "배송전",
    transportNum: "12345",
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
        <Index indexText="체험 일정" />
        <PeriodSection dateInfo={productData.dateInfo} />
        <Index indexText="설명" />
        <Description description={productData.contents} />
        <ReleaseDate releaseDate={productData.dateInfo.releaseStart} />
        <Index indexText="추가 안내 사항" />
        <div>{productData.notes}</div>
      </div>
    </div>
  );
};

export default ProductPage;
