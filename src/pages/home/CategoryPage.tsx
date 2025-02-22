import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  Sports,
  Food,
  Clothes,
  Electronic,
  Toy,
  All,
  Beauty,
  colors,
} from "@/shared";
import { PageWrapper, DivLine, HotCard } from "@/entities";
import { useRef, useState } from "react";

const CategoryPage = () => {
  const type = useParams().type;
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const [order, setOrder] = useState("최신순");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToPosition = (amount: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageWrapper>
      <CategoryContainer ref={containerRef}>
        {Categories.map((category, idx) => (
          <>
            <Category
              key={category.name}
              onClick={() => {
                scrollToPosition(idx * 80);
                navigate("/category/" + category.type);
              }}
            >
              <category.icon
                fill={
                  category.fill
                    ? category.type === type
                      ? colors.main
                      : colors.gray[3]
                    : "none"
                }
                stroke={
                  category.stroke
                    ? category.type === type
                      ? colors.main
                      : colors.gray[3]
                    : "none"
                }
              />
              {category.name}
            </Category>
            {idx + 1 === Categories.length || <CategoryDivline key={idx} />}
          </>
        ))}
      </CategoryContainer>
      <DivLine />
      <div>
        <DropdownTitle onClick={() => setDropdown(!dropdown)}>
          {order}{" "}
          <img
            width={17}
            height={17}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nO3avUoDQRRA4aPFHfXFBRGsLfQhLMI+kY2F4A+WkYWtQv5A9+7M7PlgId3ce9hkAwlIkiRJkiRJkiRJkiRJkupxMV1proFH4At4A+6AQr8KcA+8Az/AE3CTcfAYebtzbTqNXabddvd9nvvg8a3zuefgHmOXA5HH6xu4nHuAjwOH9xS7HIm8nRrM7uHIAD3ELicib6cGVQzSauxS224BvJwYaACuaEfUulO1g/W4S/UD9rRDM4P2MHtzA9PmzM0NHg3N2uwC0cCMzS8SFc/WzUJR4UzdLRYVzdLtglHBDCliwUVXE3nJhWNtkZdYfLWRMwOsPnJGCCMnBDFyQhgjJwSKtT/4zhV/CGXkhNjhnTz/nR1Gzvm5f9Pp3x1SxRl3qw++hWMPfruYP7aRE2IbOSH24MfF/LEHI/+/AtwCr9M1vvYrnCRJkiRJkiRJkiRJkiSJZL/HXxTfMSb/iQAAAABJRU5ErkJggg=="
            style={{ transform: dropdown ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </DropdownTitle>
        <Dropdown>
          {dropdown && (
            <>
              {DropdownItems.map((item) => (
                <DropdownItem
                  key={item}
                  onClick={() => {
                    setOrder(item);
                    setDropdown(false);
                  }}
                >
                  {item}
                </DropdownItem>
              ))}
            </>
          )}
        </Dropdown>
      </div>
      <CardWrapper>
        {CardList.map((card) => (
          <HotCard key={card.id} {...card} />
        ))}
      </CardWrapper>
    </PageWrapper>
  );
};

export default CategoryPage;

const CategoryContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  padding-right: 26px;
  scroll-behavior: smooth;
  gap: 20px;
`;

const CategoryDivline = styled.div`
  min-width: 1px;
  height: 20px;
  background-color: #f6f5ff;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  gap: 12px;
  font-size: 12px;
`;
const DropdownTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const Dropdown = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 150px;
  flex-direction: column;
  align-items: end;
  padding: 12px;
  gap: 12px;
  z-index: 1;
  background-color: white;
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-right: 28px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 47% 47%;
  gap: 5px;
`;
const Categories = [
  {
    name: "전체",
    icon: All,
    type: "all",
    stroke: false,
    fill: true,
  },
  {
    name: "뷰티",
    icon: Beauty,
    type: "beauty",
    stroke: true,
    fill: false,
  },
  {
    name: "스포츠",
    icon: Sports,
    type: "sports",
    stroke: true,
    fill: true,
  },
  {
    name: "식품",
    icon: Food,
    type: "food",
    stroke: true,
    fill: true,
  },
  {
    name: "의류",
    icon: Clothes,
    type: "clothes",
    stroke: true,
    fill: false,
  },
  {
    name: "전자기기",
    icon: Electronic,
    type: "electronic",
    stroke: false,
    fill: true,
  },
  {
    name: "장난감",
    icon: Toy,
    type: "toy",
    stroke: false,
    fill: true,
  },
];

const DropdownItems = ["최신순", "인기순", "가격 높은 순", "가격 낮은 순"];
const CardList = [
  {
    id: 1,
    title: "시제품1",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "시제품2",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "시제품3",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "시제품4",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "시제품5",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "시제품6",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "시제품7",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "시제품8",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "시제품9",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "시제품10",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
];
