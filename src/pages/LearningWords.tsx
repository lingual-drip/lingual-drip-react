import { Flex, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstStep from "../components/learningWords/FistStep";
import SecondStep from "../components/learningWords/SecondStep";
import { getLearningWord } from "../store/words/actions";
import { getLearningWordSelector } from "../store/words/selectors";

const LearningWords = () => {
  const dispatch = useDispatch();
  const learningWord = useSelector(getLearningWordSelector);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      dispatch(getLearningWord());
    }
  }, [step]);

  return (
    <Flex w="100%" direction="column">
      <Flex w="100%" pl="40px" pt="50px" fontSize="25px" fontWeight={700}>
        Learning Words
      </Flex>
      <Flex
        w="100%"
        justifyContent="center"
        pt="50px"
        fontSize="15px"
        fontWeight={700}
      >
        {learningWord && `Step ${learningWord?.step}`}
      </Flex>
      {step === 1 && learningWord && (
        <FirstStep word={learningWord} setStep={setStep} />
      )}
      {step === 2 && learningWord && (
        <SecondStep word={learningWord} setStep={setStep} />
      )}
      {!learningWord && (
        <Flex
          w="100%"
          justifyContent="center"
          pt="50px"
        >
          <Stack w="300px">
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
          </Stack>
        </Flex>
      )}
    </Flex>
  );
};

export default LearningWords;
