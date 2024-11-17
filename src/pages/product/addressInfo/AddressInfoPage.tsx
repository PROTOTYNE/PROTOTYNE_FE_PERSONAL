import { useState } from "react";
import SavedAddressInfo from "@/entities/element/SavedAddressInfo";
import NewAddressForm from "@/entities/element/NewAddressForm";

const mockResponse = {
  apply: true,
  deliveryName: "조서영",
  deliveryPhone: "010-1234-1234",
  baseAddress: "gfesfds",
  detailAddress: "123동 123호",
};

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
      {mockResponse.baseAddress ? (
        <SavedAddressInfo
          deliveryName={mockResponse.deliveryName}
          baseAddress={mockResponse.baseAddress}
          detailAddress={mockResponse.detailAddress}
          deliveryPhone={mockResponse.deliveryPhone}
        />
      ) : (
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
//error message: 시속이 부족하여 신청이 불가합니다. 

export default AddressInfoPage;
