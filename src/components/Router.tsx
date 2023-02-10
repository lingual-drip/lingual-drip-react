import {
  createBrowserRouter,
  BrowserRouter,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
import Dashboard from "../pages/Dashboard";
import LearningWords from "../pages/LearningWords";
import WordsList from "../pages/WordsList";
import { useEffect, useRef, useState } from "react";
import Settings from "../pages/Settings";

const Router = () => {
  const menuRef: any = useRef(null);
  const menuButtonRef: any = useRef(null);
  const [openedMobileMenu, setOpenedMobileMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        menuRef.current &&
        !menuRef.current?.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target) &&
        !openedMobileMenu
      ) {
        setOpenedMobileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <Flex w="100%" h="100vh" backgroundColor="#efefef">
      <BrowserRouter>
        <Flex
          w="240px"
          h='100vh'
          background="#0b1d2c"
          direction="column"
          pt="117px"
          ref={menuRef}
          color="#EEEFF0"
          //@ts-ignore
          position={{ base: 'absolute', md: 'unset'}}
          zIndex='1'
          display={{ base: openedMobileMenu ? "flex" : "none", md: "flex" }}
        >
          <Flex ml='10px' mb='10px' color='#b1b1b1'>Studing words</Flex>
          <Link onClick={() => setOpenedMobileMenu(false)} to="/">
            <Flex
              w="100%"
              h="40px"
              color="#EEEFF0"
              pl="20px"
              justifyContent="flex-start"
              alignItems="center"
              _hover={{ background: "#1e2b38", cursor: "pointer" }}
            >
              Dashboard
            </Flex>
          </Link>
          <Link onClick={() => setOpenedMobileMenu(false)} to="/learning-words">
            <Flex
              w="100%"
              h="40px"
              color="#EEEFF0"
              pl="20px"
              justifyContent="flex-start"
              alignItems="center"
              _hover={{ background: "#1e2b38", cursor: "pointer" }}
            >
              Learning Words
            </Flex>
          </Link>
          <Link onClick={() => setOpenedMobileMenu(false)} to="/words-list">
            <Flex
              w="100%"
              h="40px"
              color="#EEEFF0"
              pl="20px"
              justifyContent="flex-start"
              alignItems="center"
              _hover={{ background: "#1e2b38", cursor: "pointer" }}
            >
              Words List
            </Flex>
          </Link>
          <Flex ml='10px' mb='10px' mt='20px' color='#b1b1b1'>Profile</Flex>
          <Link onClick={() => setOpenedMobileMenu(false)} to="/settings">
            <Flex
              w="100%"
              h="40px"
              color="#EEEFF0"
              pl="20px"
              justifyContent="flex-start"
              alignItems="center"
              _hover={{ background: "#1e2b38", cursor: "pointer" }}
            >
              Settings
            </Flex>
          </Link>
        </Flex>
        {!openedMobileMenu && (
          <Flex
            ref={menuButtonRef}
            position="absolute"
            w="50px"
            h="20px"
            display={{ base: "flex", md: "none" }}
            mt="15px"
            ml="7px"
            justifyContent="center"
            alignItems="center"
            onClick={() => setOpenedMobileMenu(true)}
          >
            &#x2022; &#x2022; &#x2022;
          </Flex>
        )}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="learning-words" element={<LearningWords />} />
            <Route path="words-list" element={<WordsList />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
      </BrowserRouter>
    </Flex>
  );
};

export default Router;
