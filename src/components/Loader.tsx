import { Stack, Skeleton } from "@chakra-ui/react";

const Loader = ({ width = '80%' }: any) => {
  return (
    <Stack w={width}>
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
      <Skeleton height="40px" />
    </Stack>
  );
};

export default Loader;
