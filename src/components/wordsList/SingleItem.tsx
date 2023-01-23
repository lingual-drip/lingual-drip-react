import { Flex } from "@chakra-ui/react";
import { useState } from "react";

const SingleItem = ({ item }: any) => {
  const [showTranslate, setShowTranslate] = useState(false);

  const handleShowTranslate = () => {
    setShowTranslate(true)
    setTimeout(() => setShowTranslate(false), 3000)
  }

  return (
    <li
      onClick={handleShowTranslate}
      className="list-group-item"
    >
      <Flex fontWeight={600}>
      {item.angWord}
      {showTranslate && (
        <Flex ml="30px" color="#999999">
          {item.plWord}
        </Flex>
      )}
      </Flex>
    </li>
  );
};

export default SingleItem;
