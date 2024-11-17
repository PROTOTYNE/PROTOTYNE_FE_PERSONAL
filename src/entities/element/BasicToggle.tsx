import { IoCheckmarkCircleOutline, IoCheckmarkCircle } from "react-icons/io5";

interface BasicToggleProps {
  isBasic: boolean;
  onToggle: () => void;
}

const BasicToggle = ({ isBasic, onToggle }: BasicToggleProps) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
    {isBasic ? (
      <IoCheckmarkCircle size={"25px"} color="#0500ff" onClick={onToggle} />
    ) : (
      <IoCheckmarkCircleOutline size={"25px"} onClick={onToggle} />
    )}
    <div>기본 배송 주소로 설정</div>
  </div>
);

export default BasicToggle;
