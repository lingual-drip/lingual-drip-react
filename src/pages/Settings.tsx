import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Settings = () => {
  const [api_key, setApi_key] = useState<string>();
  const [showSecret, setShowSecret] = useState<boolean>(false);

  useEffect(() => {
    const apiKey = localStorage.getItem("lingual_drip_api_key");
    apiKey && setApi_key(apiKey);
  }, []);
  return (
    <Flex w="100%" direction="column">
      <Flex w="100%" pl="40px" pt="50px" fontSize="25px" fontWeight={700}>
        Settings
      </Flex>
      <Flex
        w="100%"
        pl="40px"
        pt="50px"
        fontSize="15px"
        color="#686868"
        fontWeight={700}
        alignItems="center"
        direction="column"
      >
        Your api key to browser extension:
        <Flex
          onClick={() => setShowSecret((oldState) => !oldState)}
          color="#b9b9b9"
          mt="10px"
          _hover={{ cursor: "pointer" }}
        >
          {showSecret ? "Hide" : "Show"} secret key
        </Flex>
        {showSecret && (
          <Flex mt="10px" color="#b9b9b9" ml="5px">
            {api_key}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Settings;
