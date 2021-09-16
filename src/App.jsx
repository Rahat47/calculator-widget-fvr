import { chakra } from "@chakra-ui/react";
import Calculator from "components/Calculator/Calculator";

function App() {
    return (
        <chakra.main
            display="flex"
            justifyContent="center"
            marginTop="10"
            padding="4"
        >
            <Calculator />
        </chakra.main>
    );
}

export default App;
