import { useEffect, useState } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ChakraProvider,
  Flex,
  Text,
  Input,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { getToken } from "./commons/authentication/getToken";
import { storageToken } from "./commons/authentication/storageToken";
import Router from "./components/Router";
import { useDispatch, useSelector } from "react-redux";
import { getAuthentication } from "./store/auth/actions";
import { getAuthToken } from "./store/auth/selectors";

interface LoginForm {
  email: string;
  password: string;
}

function App() {
  const dispatch = useDispatch()
  const isAuthentication = useSelector(getAuthToken)


  const initialValues: LoginForm = { email: "", password: "" };
  return (
    <ChakraProvider>
      <Flex w="100%" h="100vh" backgroundColor="red.500">
        {isAuthentication ? (
          <Router />
        ) : (
          <Flex
            w="100%"
            h="100vh"
            backgroundColor="#0F172A"
            justifyContent="center"
            alignItems="center"
          >
            <Card backgroundColor="#2D3748" w="300px">
              <CardBody>
                <Formik
                  initialValues={initialValues}
                  onSubmit={async (
                    { email, password }: LoginForm,
                    actions: any
                  ) => {
                    dispatch(getAuthentication({ email: "elo@elo.pl", password: "admin" }))
                    actions.setSubmitting(false);
                  }}
                >
                  <Form>
                    <Text color="#EEEFF0">
                      Login to App
                      <Input mt="17px" variant="outline" placeholder="Email" />
                      <Input
                        mt="15px"
                        type="password"
                        variant="outline"
                        placeholder="password"
                      />
                    </Text>
                    <Flex justifyContent="flex-end">
                      <Button mt="15px" colorScheme="green" type="submit">
                        Green
                      </Button>
                    </Flex>
                  </Form>
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
