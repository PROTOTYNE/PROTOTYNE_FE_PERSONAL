import styled from "@emotion/styled";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { Button, DisableButton } from "@/entities";
import { PAGE_URL, useReviewStore, ReviewService, colors } from "@/shared";

const ReviewPage = () => {
  const { id } = useParams();
  const { getReview, submitReview } = ReviewService();

  const [multiChoiceQuestion, setMultiChoiceQuestion] = useState<string[]>([]);
  const [subjectiveQuestion, setSubjectQuestion] = useState("");

  const setMutiChoiceAnswer = useReviewStore(
    (state) => state.setMutiChoiceAnswer
  );
  const setSubjectiveAnswer = useReviewStore(
    (state) => state.setSubjectiveAnswer
  );

  const multiChoiceAnswers = [
    useReviewStore((state) => state.answer1),
    useReviewStore((state) => state.answer2),
    useReviewStore((state) => state.answer3),
    useReviewStore((state) => state.answer4),
  ];

  const subjectAnswer = useReviewStore((state) => state.answer5);
  const images = useReviewStore((state) => state.images);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!id) return;
      const questions = await getReview(id);

      setMultiChoiceQuestion(questions.multiChoiceQuestion);
      setSubjectQuestion(questions.subjectiveQuestion);
    })();
  }, []);

  return (
    <>
      <ScrollArea>
        {multiChoiceQuestion.map((question, index) => (
          <MultiChoiceQuestion
            key={index}
            index={index + 1}
            label={question}
            state={multiChoiceAnswers[index]}
            onChange={(num: number) => {
              setMutiChoiceAnswer(index + 1, num);
            }}
          ></MultiChoiceQuestion>
        ))}
        <SubjectiveQuestion
          index={multiChoiceQuestion.length + 1}
          label={subjectiveQuestion}
          onChange={setSubjectiveAnswer}
        ></SubjectiveQuestion>

        <ImageQuestion
          index={multiChoiceQuestion.length + 2}
          label="사용한 이미지를 붙여주세요!"
        />
        <Repurchase />
        <div style={{ height: "100px" }}></div>
      </ScrollArea>
      {multiChoiceAnswers.findIndex((answer) => answer === 0) === -1 &&
      subjectAnswer.length > 30 &&
      images.length > 0 ? (
        <Button
          onClick={() => {
            if (id) {
              submitReview(id);
              navigate(PAGE_URL.Home); //업데이트 필요
            }
          }}
        >
          제출하기
        </Button>
      ) : (
        <DisableButton>모든 항목을 입력해주세요!</DisableButton>
      )}
    </>
  );
};

export const ScrollArea = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: "relative" }}>
    <GradientBox />
    <ScrollBox>
      <ScrollContainer>{children}</ScrollContainer>
      <div style={{ height: "30px" }}></div>
    </ScrollBox>
  </div>
);

const GradientBox = styled.div`
  z-index: 2;
  position: absolute;
  top: 20px;
  left: 0px;
  width: 100%;
  height: 70vh;

  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 80%,
    #ffffff 100%
  );
`;

const ScrollBox = styled.div`
  position: absolute;

  left: 50%;
  transform: translate(-50%, 0%);

  width: 332px;
  top: 0px;
  height: 70vh;

  border-radius: 4px;

  overflow-y: scroll;

  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;

  /* ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #152662b7;

    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;

    border-radius: 5px;
  } */
`;

const ScrollContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Label = styled.div`
  margin-top: 30px;
  font-size: 16px;
`;

const ChoicesContainer = styled.div`
  width: 100%;

  margin-top: 14px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ChoiceContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;

  input {
    display: none; /* 기본 체크박스 숨김 */
  }

  label {
    display: inline-flex;
    flex-direction: column;

    text-align: center;
  }

  label::before {
    content: "";
    width: 5px;
    height: 5px;

    border-radius: 50%; /* 원형으로 만듦 */
    border: 10px solid #c4c4c4;
    display: inline-block;
    position: relative;

    margin-bottom: 2px;
    margin-left: 1px;
  }

  input:checked + label::before {
    border-color: ${colors.main};
  }

  input:checked + label::before::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    transform: translate(-50%, -50%);
  }
`;

export const MultiChoiceQuestion = ({
  index,
  label,
  state,
  onChange,
}: {
  index: number;
  label: string;
  state: number;
  onChange: (num: number) => void;
}) => (
  <>
    <Label>Q. {label}</Label>
    <ChoicesContainer>
      {[1, 2, 3, 4, 5].map((num) => (
        <ChoiceContainer key={num}>
          <input
            type="checkbox"
            id={`${num}${index}`}
            checked={num === state}
            onChange={() => {
              onChange(num);
            }}
          />
          <label htmlFor={`${num}${index}`}>{num}</label>
        </ChoiceContainer>
      ))}
    </ChoicesContainer>
  </>
);

export const SubjectiveQuestion = ({
  index,
  label,
  onChange,
}: {
  index: number;
  label: string;
  onChange: (content: string) => void;
}) => (
  <>
    <Label>
      [{index}] {label} (30자 이상)
    </Label>
    <Textarea
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  </>
);

const Textarea = styled.textarea`
  width: calc(94% - 16px);
  height: 100px;

  position: relative;
  left: 2%;

  border: 2px solid #c4c4c4;
  border-radius: 10px;

  padding-left: 6px;
  padding-right: 6px;

  margin-top: 10px;
`;

export const ImageQuestion = ({
  index,
  label,
}: {
  index: number;
  label: string;
}) => {
  const addImage = useReviewStore((state) => state.addImage);
  const images = useReviewStore((state) => state.images);

  return (
    <>
      <Label>
        [{index}] {label}
      </Label>
      <ImageContainer>
        {images.map((image, index) => (
          <ImageBlock key={index} src={URL.createObjectURL(image)}></ImageBlock>
        ))}
        {images.length < 3 ? (
          <>
            <AddImageBlock htmlFor="upload">+</AddImageBlock>
            <input
              type="file"
              id="upload"
              style={{ display: "none" }}
              name="upload"
              accept="image/*"
              capture="environment"
              onChange={(event) => {
                if (event.target.files) addImage(event.target.files[0]);
              }}
            ></input>
          </>
        ) : null}
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  justify-content: flex-start;

  margin-top: 8px;
`;

const ImageBlock = styled.div`
  width: 101px;
  height: 101px;

  background-image: url(${(props: { src: string }) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 10px;

  margin-right: 10px;
`;

const AddImageBlock = styled.label`
  width: 101px;
  height: 101px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;

  background-color: #d9d9d9;

  border-radius: 10px;

  color: white;
`;

export const Repurchase = () => {
  const setRepurchase = useReviewStore((state) => state.setRepurchase);
  const answer6 = useReviewStore((state) => state.answer6);

  return (
    <RepurchaseContainer>
      <div>⭐ 재구매 의향이 있나요?</div>
      <RepurchaseChoiceContainer>
        <input
          type="checkbox"
          id="yes"
          checked={answer6}
          onChange={() => {
            setRepurchase(true);
          }}
        />
        <label htmlFor="yes">할래요</label>
      </RepurchaseChoiceContainer>
      <RepurchaseChoiceContainer>
        <input
          type="checkbox"
          id="no"
          checked={!answer6}
          onChange={() => {
            setRepurchase(false);
          }}
        />
        <label htmlFor="no">안 할래요</label>
      </RepurchaseChoiceContainer>
    </RepurchaseContainer>
  );
};

const RepurchaseContainer = styled.div`
  width: 90%;

  height: 40px;

  margin-top: 35px;

  font-size: 17px;
  font-weight: bold;
`;

const RepurchaseChoiceContainer = styled(ChoiceContainer)`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: start;

  margin-top: 15px;

  margin-left: 2px;

  font-weight: normal;

  label {
    flex-direction: row;
    margin-right: 10px;
  }

  label::before {
    margin-right: 10px;
  }
`;

export default ReviewPage;
