import { useState } from "react";
import SavedAddressInfo from "@/entities/element/SavedAddressInfo";
import NewAddressForm from "@/entities/element/NewAddressForm";

const mockResponse = [
  {
    apply: true,
    deliveryName: "조서영",
    deliveryPhone: "010-1234-1234",
    baseAddress: "서울특별시 서대문구 이화여대길52",
    detailAddress: "123동 123호",
  },
  {
    apply: false,
    deliveryName: "조희수",
    deliveryPhone: "010-1234-2345",
    baseAddress: "경기도 고양시 일산서구 행복길 12",
    detailAddress: "123동 123호",
  },
];

const AddressInfoPage = () => {
  const [isBasic, setIsBasic] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    detail: "",
  });

  const handleClickBasic = () => setIsBasic(!isBasic);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      {/*스웨거에 리스트로 변경되면 리스트 길이로 변경하기 address.length > 0 ?*/}
      {mockResponse.length ? (
        <SavedAddressInfo data={mockResponse} />
      ) : (
        //스웨거 isBasic, isSelected 반영되면 변경하기
        <NewAddressForm
          isBasic={isBasic}
          onToggleBasic={handleClickBasic}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

//error message: 티켓이 부족합니다.

//error message: 시속이 부족하여 신청이 불가합니다. -> 신청하기 전에 프론트에서 처리하기

export default AddressInfoPage;
