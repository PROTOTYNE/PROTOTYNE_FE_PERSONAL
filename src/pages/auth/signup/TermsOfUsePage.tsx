import styled from "@emotion/styled";
import { PAGE_URL, Plus } from "@/shared";
import { Link } from "react-router-dom";

const Container = styled.div`
  top: 0px;
  left: 0px;

  padding: 20px;
  padding-top: 40px;

  > a {
    position: absolute;
    top: 40px;
  }

  > div {
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  > span {
    font-weight: bold;
  }
`;

const TermsOfUsePage = () => (
  <Container>
    <Link to={PAGE_URL.SignUp}>
      <Plus fill="black" transform="rotate(45) scale(1.5)" />
    </Link>
    <div>프로토타인 이용약관 </div>
    <span>제1조 (목적)</span>
    <br />
    이 약관은 프로토타인(이하 "회사")가 제공하는 서비스의 이용과 관련된 회사와
    이용자 간의 권리, 의무 및 책임사항을 규정합니다.
    <br />
    <br />
    <span>제2조 (정의)</span>
    <br />
    "서비스": 회사가 제공하는 모든 디지털 콘텐츠 및 관련 서비스.
    <br />
    "이용자": 서비스를 이용하는 회원 및 비회원.
    <br />
    "회원": 서비스 이용 계약을 체결하고 사용자 계정을 부여받은 자.
    <br />
    "비회원": 회원에 가입하지 않고 서비스를 이용하는 자.
    <br />
    <br />
    <span>제3조 (약관의 효력 및 변경)</span>
    <br />
    이 약관은 서비스를 이용하는 모든 이용자에게 효력이 발생합니다.
    <br />
    회사는 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
    <br />
    약관을 개정할 경우, 변경 내용 및 사유를 적용일자 7일 전부터 공지합니다.
    불리한 변경은 30일 전부터 공지합니다.
    <br />
    변경된 약관에 동의하지 않으면, 서비스 이용을 중단하고 회원 탈퇴할 수
    있습니다.
    <br />
    <br />
    <span>제4조 (이용계약의 성립)</span>
    <br />
    이용계약은 이용자가 서비스 이용 신청을 하고, 회사가 이를 승낙함으로써
    성립합니다.
    <br />
    <br />
    <span>제5조 (회원 정보의 변경)</span>
    <br />
    회원은 개인정보를 수정할 수 있으며, 변경사항을 회사에 알려야 합니다.
    <br />
    <br />
    <span>제6조 (개인정보 보호)</span>
    <br />
    회사는 관련 법령에 따라 회원의 개인정보를 보호합니다.
    <br />
    <br />
    <span>제7조 (서비스의 제공 및 변경)</span>
    <br />
    회사는 다양한 서비스를 제공하며, 서비스 내용 및 제공 방식을 변경할 수
    있습니다.
    <br />
    <br />
    <span>제8조 (서비스의 중단)</span>
    <br />
    회사는 시스템 정기점검, 불가항력 등의 사유로 서비스 제공을 일시적으로 중단할
    수 있습니다.
    <br />
    <br />
    <span>제9조 (계약 해지 및 이용 제한)</span>
    <br />
    회원은 언제든지 계약을 해지할 수 있으며, 회사는 회원이 약관을 위반할 경우
    사전 통지 없이 계약을 해지하거나 서비스 이용을 중단할 수 있습니다.
    <br />
    <br />
    <span>제10조 (손해배상)</span>
    <br />
    회사는 무료로 제공하는 서비스와 관련하여 회원에게 발생한 손해에 대해 책임을
    지지 않습니다. 다만, 회사의 고의 또는 중과실로 인한 손해는 예외로 합니다.
    <br />
    <br />
    <span>제11조 (면책조항)</span>
    <br />
    회사는 천재지변 등 불가항력으로 인한 서비스 제공 불가 시 책임이 면제됩니다.
    <br />
    <br />
    <span>제12조 (분쟁 해결)</span>
    <br />
    회사는 이용자와 발생한 분쟁을 원활히 해결하기 위해 최선을 다합니다.
    <br />
    <br />
    <span>부칙</span>
    <br />
    이 약관은 2024년 7월 22일부터 시행합니다.
    <br />
  </Container>
);

export default TermsOfUsePage;
