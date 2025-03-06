import styled from "@emotion/styled";
import { useState } from "react";

interface ProductDetailProps {
  detailTitle?: string;
  isWinned?: boolean;
  deliverStatus: number;
}

const deliverStatusArray = [
  { label: 1, id: "배송 준비중" },
  { label: 2, id: "배송중" },
];

const ProductDetailContainer = styled.div`
  /* Back */
  background: #f6f5ff;
  border-radius: 9px;
`;

const ProductDetailTitle = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height, or 147% */

  color: #000000;
`;

const ResultSquare = styled.div<{ isWinned: boolean }>`
  /* Frame 339 */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  /* Main */
  border: 1px solid ${(props) => (props.isWinned ? " #0500ff" : "FF0000")};
  border-radius: 9px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height, or 147% */

  /* Main */
  color: #0500ff;
`;

export const ProductDetailAnnounce = ({
  isWinned,
  deliverStatus,
}: ProductDetailProps) => {
  return (
    <ProductDetailContainer>
      <ProductDetailTitle>{"당첨 결과"}</ProductDetailTitle>
      <ResultSquare
        content={isWinned ? "당첨" : "미당첨"}
        isWinned={isWinned!}
      />
      <div>
        {`배송상태 | ${
          deliverStatusArray.find((index) => index.label === deliverStatus)
            ?.id || "미정"
        }`}
      </div>
    </ProductDetailContainer>
  );
};

export const ProductDetailReview = ({ detailTitle }: ProductDetailProps) => {
  return (
    <ProductDetailContainer>
      <ProductDetailTitle content={detailTitle} />
    </ProductDetailContainer>
  );
};
