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

const PersonalInfoPage = () => (
  <Container>
    <Link to={PAGE_URL.SignUp}>
      <Plus fill="black" transform="rotate(45) scale(1.5)" />
    </Link>
    <div>프로토타인 정보 수집 및 활용 동의서 </div>
    <span>1. 수집 및 이용 목적</span>
    <br />
    다음과 같은 목적으로 개인정보를 수집하고 이용합니다.
    <br />
    <br />
    서비스 제공 및 요금 정산
    <br />
    회원 관리
    <br />
    마케팅 및 광고에 활용
    <br />
    <br />
    <span>2. 수집하는 개인정보 항목</span>
    <br />
    필수: 이름, 이메일, 비밀번호, 전화번호, 생년월일, 성별
    <br />
    선택: 소득수준, 가족 구성, 관심 제품 유형,핸드폰 기종, 건강 상세, 주소,
    직업, 관심사, 결제 정보
    <br />
    자동 수집: IP 주소, 쿠키, 서비스 이용 기록 등<br />
    <br />
    <span>3. 보유 및 이용 기간</span>
    <br />
    개인정보는 수집 목적이 달성된 후 지체 없이 파기합니다. 단, 법령에 따라 일정
    기간 보존해야 하는 경우는 예외로 합니다.
    <br />
    <br />
    <span>4. 개인정보 파기 절차 및 방법</span>
    <br />
    파기 절차: 개인정보는 목적 달성 후 별도의 DB로 옮겨져 일정 기간 저장 후
    파기됩니다.
    <br />
    파기 방법: 종이 문서는 분쇄, 전자 파일은 재생 불가한 방법으로 삭제합니다.
    <br />
    <br />
    <span>5. 개인정보 제공</span>
    <br />
    회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 단, 법령에
    의한 경우는 예외로 합니다.
    <br />
    <br />
    <span>6. 이용자의 권리</span>
    <br />
    이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있으며, 가입
    해지를 요청할 수 있습니다.
    <br />
    <br />
    <span>7. 개인정보의 안전성 확보 조치</span>
    <br />
    회사는 개인정보 보호를 위해 암호화, 해킹 방지 대책 등 기술적/관리적 조치를
    취하고 있습니다.
    <br />
    <br />
    <span>8. 개인정보 보호책임자</span>
    <br />
    개인정보 보호책임자: 강민규
    <br />
    연락처: 010-8685-0566, officialkyus@gmail.com
    <br />
  </Container>
);

export default PersonalInfoPage;
