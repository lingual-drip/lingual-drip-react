import { useEffect, useState } from "react";
import {
  ChakraProvider,
  Flex,
  Text,
  Input,
  Card,
  CardBody,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { Formik } from "formik";
import Router from "./components/Router";
import { useDispatch, useSelector } from "react-redux";
import { getAuthentication } from "./store/auth/actions";
import { getAuthToken } from "./store/auth/selectors";
import { getUserStatistic } from "./store/user/actions";
import { getUserStatisticSelector } from "./store/user/selectors";
import Loader from "./components/Loader";
import { getLoginData } from "./commons/authentication/getLoginData";

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

function App() {
  const dispatch = useDispatch();

  const isAuthentication = useSelector(getAuthToken);
  const statistic = useSelector(getUserStatisticSelector);

  useEffect(() => {
    if(statistic === 'no-token') {
      const loginData = getLoginData()

      if(loginData) {
        dispatch(
          getAuthentication({
            email: loginData.email,
            password: loginData.password
          })
        );
      }
    }
  }, [statistic])

  useEffect(() => {
    dispatch(getUserStatistic());
  }, [isAuthentication]);

  const initialValues: LoginForm = {
    email: "",
    password: "",
    rememberMe: false,
  };

  return (
    <ChakraProvider>
      <Flex w="100%" minH="100vh">
        {statistic && statistic !== "no-token" ? (
          <Router />
        ) : !statistic ? (
          <Flex width="100%" justifyContent="center" alignItems="center">
            <Loader />
          </Flex>
        ) : (
          <Flex
            w="100%"
            minH="100vh"
            backgroundColor="#0F172A"
            justifyContent="center"
            alignItems="center"
          >
            <Card backgroundColor="#2D3748" w="300px">
              <CardBody>
                <Formik
                  initialValues={initialValues}
                  onSubmit={async (
                    { email, password, rememberMe }: LoginForm,
                    actions: any
                  ) => {
                    dispatch(
                      //elo@elo.pl/admin
                      getAuthentication({
                        email,
                        password,
                        rememberMe
                      })
                    );
                    actions.setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <>
                        <Text color="#EEEFF0">
                          Login to App
                          <Input
                            mt="17px"
                            variant="outline"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                          />
                          <Input
                            mt="15px"
                            type="password"
                            name="password"
                            variant="outline"
                            placeholder="password"
                            onChange={handleChange}
                            value={values.password}
                          />
                        </Text>
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                          mt='10px'
                        >
                          <Checkbox
                            type="checkbox"
                            name="rememberMe"
                            color="#fff"
                            onChange={handleChange}
                          >
                            Remember me
                          </Checkbox>
                          <Button mt="15px" colorScheme="green" type="submit">
                            Log-in
                          </Button>
                        </Flex>
                        <Flex color='red.400' w='260px' h='24px'>
                          {isAuthentication && isAuthentication === 'bad-data' && 'Incorrect login details'}
                        </Flex>
                      </>
                    </form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Flex>
        )}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
