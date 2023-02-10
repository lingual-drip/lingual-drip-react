import { Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

const SecondStep = ({ word, setStep }: any) => {
  const [bad, setBad] = useState<any>();
  const [done, setDone] = useState<boolean>(false);
  const [answer, setAnswer] = useState<any>([]);
  const [letters, setLetters] = useState<any>();
  const [countClick, setCountClick] = useState<any>(0);
  const arrWord = word.angWord.split("");

  useEffect(() => {
    if (word.angWord.length === answer.length) setDone(true);
  }, [answer]);

  useEffect(
    () => setLetters(arrWord?.sort((a: any, b: any) => 0.5 - Math.random())),
    []
  );

  return (
    <Flex w="100%" justifyContent="center" mt="50px">
      <Flex
        w="300px"
        h="271px"
        pb='30px'
        boxSizing="content-box"
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
          {word.plWord}
        </Flex>
        <Flex
          w="100%"
          minHeight="77px"
          wrap="wrap"
          justifyContent="center"
          mb="15px"
          mt="10px"
        >
          {answer &&
            answer.map((letter: string) => (
              <Flex
                key={uuidv4()}
                w="20px"
                h="20px"
                backgroundColor={done ? "green.500" : "#000"}
                borderRadius="2"
                color="#fff"
                justifyContent="center"
                alignItems="center"
                fontSize="12px"
                mt='5px'
                fontWeight={700}
                ml="5px"
              >
                {letter}
              </Flex>
            ))}
        </Flex>
        <Flex w="100%" wrap="wrap" justifyContent="center" mb="15px">
          {console.log(letters, letters?.length)}
          {letters?.length && letters?.map((item: any, index: number) => (
            <Flex
              key={uuidv4()}
              w="40px"
              h="40px"
              backgroundColor={bad === index ? "red.500" : "#000"}
              borderRadius="5"
              color="#fff"
              justifyContent="center"
              alignItems="center"
              fontSize="20px"
              fontWeight={700}
              mt='5px'
              ml="5px"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                if (word.angWord[countClick] === item) {
                  setAnswer((oldState: any[]) => oldState.concat([item]));
                  setLetters((oldState: []) =>
                    oldState.map((letter, i) => {
                      if(index !== i) return letter
                    })
                  );
                  setCountClick((oldstate: number) => oldstate + 1);
                } else {
                  setBad(index);
                  setTimeout(() => setBad(null), 2000);
                }
              }}
            >
              {item}
            </Flex>
          ))}
        </Flex>
        {done && (
          <button
            type="button"
            className="btn btn-success"
            style={{
              width: "100px",
              alignSelf: "center",
              marginRight: "10px",
              marginBottom: "10px",
            }}
            onClick={() => {
              setStep(1);
            }}
          >
            Go next!
          </button>
        )}
      </Flex>
    </Flex>
  );
};

export default SecondStep;
