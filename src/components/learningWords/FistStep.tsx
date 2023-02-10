import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import service from "../../commons/axiosService";

const FirstStep = ({ word, setStep }: any) => {
  const [showTranslate, setShowTranslate] = useState(false);

  const sendVote = (type: string) => {
    service.post('/learning-words/add-point-to-word', { type, wordId: word.learningWordId})
    setStep(2)
  }
  return (
      <Flex w="100%" justifyContent="center" mt="50px">
        <Flex
          w="300px"
          borderWidth={1}
          borderColor="gray.400"
          borderRadius={4}
          direction="column"
        >
          <Flex
            w="100%"
            fontWeight={700}
            fontSize="20px"
            justifyContent="center"
            mt="15px"
          >
            {word.angWord}
          </Flex>
          <Flex
            w="100%"
            h="30px"
            fontWeight={700}
            fontSize="20px"
            justifyContent="center"
            mt="15px"
          >
            {showTranslate && word.plWord}
          </Flex>
          {!showTranslate && (
            <button
              type="button"
              className="btn btn-primary"
              style={{
                width: "80px",
                alignSelf: "center",
                marginTop: "30px",
                marginRight: "10px",
                marginBottom: "10px",
              }}
              onClick={() => setShowTranslate(true)}
            >
              Show
            </button>
          )}
          {showTranslate && (
            <Flex
              width="100%"
              justifyContent="space-around"
              mt="30px"
              mb="15px"
            >
              <button type="button" className="btn btn-danger" onClick={() => sendVote('minus')}>
                I don't remember
              </button>
              <button type="button" className="btn btn-success" onClick={() => sendVote('plus')}>
                I remember
              </button>
            </Flex>
          )}
        </Flex>
      </Flex>
  );
};

export default FirstStep;
