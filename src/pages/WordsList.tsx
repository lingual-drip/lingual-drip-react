import { Flex, Skeleton, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleItem from "../components/wordsList/SingleItem";
import { getWordsList } from "../store/words/actions";
import { getWordsListSelector } from "../store/words/selectors";

const WordsList = () => {
  const dispatch: any = useDispatch();
  const wordsList = useSelector(getWordsListSelector);

  useEffect(() => {
    dispatch(getWordsList());
  }, []);

  return (
    <Flex w="100%" direction="column">
      <Flex w="100%" pl="40px" pt="50px" fontSize="25px" fontWeight={700}>
        Words list
      </Flex>
      <Flex w="100%" justifyContent="center" mt="50px">
        <ul className="list-group" style={{ width: "300px" }}>
          {!wordsList && (
            <Stack>
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
              <Skeleton height="40px" />
            </Stack>
          )}
          {wordsList &&
            wordsList?.map((item: any) => <SingleItem item={item} />)}
        </ul>
      </Flex>
    </Flex>
  );
};

export default WordsList;
