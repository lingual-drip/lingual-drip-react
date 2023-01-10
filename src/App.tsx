import { ChakraProvider, Flex } from '@chakra-ui/react'
import { useQuery, gql } from '@apollo/client';


// const TRANSLATE_WORD = gql`
//   query {
//     translateWord(plWord: "okno") {
//       plWord
//       angWord
//       translationId
//     }
//   }
// `;

function App() {
  // const { loading, error, data } = useQuery(TRANSLATE_WORD);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return (
    <ChakraProvider>
      <Flex w='100%' h='100vh' backgroundColor='#22222a' color='white'>
        {/* {data && console.log(data)} */}
        Elo
      </Flex>
    </ChakraProvider>
  );
}

export default App;
