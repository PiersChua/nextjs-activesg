import { CircularProgress } from "@chakra-ui/react";

const Loading = () => {
  return (
    <>
      <CircularProgress isIndeterminate color="green.300" />
      <p>Loading...</p>
    </>
  );
};

export default Loading;
