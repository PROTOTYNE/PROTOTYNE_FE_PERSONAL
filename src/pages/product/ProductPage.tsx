import styled from "@emotion/styled";
import product from "../../../public/image/product.png";
import { Period } from "@/entities/element/Period";
import ticket from "../../../public/icons/티켓.svg";
import { Bottom } from "@/entities/element/Bottom";

interface ProductProps {
  companyText?: string;
  productText?: string;
  ticketCount?: number;
  indexText?: string;
}

const ProductExample = [
  { label: "productCompany", id: "Apple" },
  { label: "productName", id: "AirPods Max" },
  { label: "applicationPeriod", id: "24.07.02 ~ 24.07.25" },
  { label: "announceDate", id: "24.07.27" },
  { label: "reviewPeriod", id: "24.07.29 ~ 24.08.10" },
  { label: "ticketCount", id: 2 },
  {
    label: "productDescription",
    id: "섬세한 하이파이 오디오를 통해 독보적인 청취 경험을 선사한다. 맞춤형으로 제작된 드라이버의 각 요소가 연동하여 전체 음역대에 걸쳐 사운드 왜곡을 극한으로 줄여준다. 최대 2배 더 많은 소음을 차단하는 프로급 액티브 노이즈 캔슬링 기능은 외부 소음을 그에 상응하는 안티 노이즈로 상쇄한다.",
  },
  { label: "productReleaseDate", id: "24.11.15" },
  {
    label: "additionalInformation",
    id: "제공받은 제품은 당첨자 본인만 사용 가능하며, 타인에게 양도할 수 없습니다. 만약 후기 작성 의무를 이행하지 않을 경우, 불이익이나 참여 제한이 있을 수 있음을 유의해 주시기 바랍니다.미당첨자의 경우 결제하신 티켓 금액은 전액 환불 처리될 예정입니다. 환불 절차는 안내된 기간 내 자동으로 진행되며, 별도의 신청은 필요하지 않습니다.",
  },
];

const ProductPage = () => {
  return (
    <>
      <ProductImg>
        <img src={product} />{" "}
      </ProductImg>
      <ProductPageContainer>
        <Company
          companyText={
            ProductExample.find((index) => index.label === "productCompany")
              ?.id as string
          }
        />
        <TitleContainer>
          <Product
            productText={
              ProductExample.find((index) => index.label === "productName")
                ?.id as string
            }
          />
          <Ticket
            ticketCount={
              ProductExample.find((index) => index.label === "ticketCount")
                ?.id as number
            }
          />
        </TitleContainer>
        <Index indexText={"체험 일정"} />
        <PeriodsContainer>
          <Period
            content={"체험 신청 기간"}
            isSelected={true}
            dateContent={
              ProductExample.find(
                (index) => index.label === "applicationPeriod"
              )?.id
            }
          />
          <Period
            content={"당첨자 발표"}
            isSelected={true}
            dateContent={
              ProductExample.find((index) => index.label === "announceDate")?.id
            }
          />
          <Period
            content={"후기 작성 기간"}
            isSelected={false}
            dateContent={
              ProductExample.find((index) => index.label === "reviewPeriod")?.id
            }
          />
        </PeriodsContainer>
        <Index indexText={"설명"} />
        <div>
          {
            ProductExample.find((index) => index.label === "productDescription")
              ?.id
          }
        </div>
        <Index indexText={"추가 안내 사항"} />
        <div>
          {
            ProductExample.find(
              (index) => index.label === "additionalInformation"
            )?.id
          }
        </div>
      </ProductPageContainer>
    </>
  );
};

const ProductImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ProductPageContainer = styled.div`
  /* Rectangle 303 */

  position: absolute;
  width: 100vw;
  height: 619px;
  padding: 10px 25px;
  padding-bottom: 130px;
  box-sizing: border-box;

  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompanyContainer = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  /* identical to box height, or 169% */

  color: #8e8e8e;
`;

const Company = ({ companyText }: ProductProps) => {
  return <CompanyContainer>{companyText}</CompanyContainer>;
};

const ProductContainer = styled.h2`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 18px;
  /* identical to box height, or 86% */

  color: #000000;
`;

const Product = ({ productText }: ProductProps) => {
  return <ProductContainer>{productText}</ProductContainer>;
};

const TicketContainer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;

  color: #667197;
`;

const Ticket = ({ ticketCount }: ProductProps) => {
  return (
    <TicketContainer>
      <img src={ticket} />
      {"X"} {ticketCount}
      {"개"}
    </TicketContainer>
  );
};

const IndexContainer = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  height: 20px;
  margin: 20px 0;

  /* Back */
  background: #f6f5ff;
  border-radius: 6px;
  /* 체험 일정 */

  display: inline-block;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  /* identical to box height, or 147% */

  color: #000000;
`;

const Index = ({ indexText }: ProductProps) => {
  return <IndexContainer>{indexText}</IndexContainer>;
};

const PeriodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default ProductPage;
