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
  const [currentWord, setCurrentWord] = useState<any>(null)
  const [wordIndex, setWordIndex] = useState<number>(0)
  const [step, setStep] = useState(1);

  useEffect(() => {
    wordIndex === 0 && step === 1 && dispatch(getLearningWord());
  }, []);

  useEffect(() => {
    step === 1 &&  learningWord && setWordIndex((oldIndex) => ++oldIndex)
  }, [step])

  useEffect(() => {
    learningWord && setCurrentWord(learningWord[wordIndex])
  }, [wordIndex, learningWord])

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
        {currentWord && `Step ${currentWord?.step}`}
      </Flex>
      {step === 1 && currentWord && (
        <FirstStep word={currentWord} setStep={setStep} />
      )}
      {step === 2 && currentWord && (
        <SecondStep word={currentWord} setStep={setStep} />
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
