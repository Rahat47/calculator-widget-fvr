import { Box, Divider } from "@chakra-ui/react";
import Weight from "components/weight/Weight";

const Calculator = () => {
    return (
        <Box
            w={{
                base: "80%",
                md: "60%",
                lg: "50%",
            }}
            justifyContent="center"
            p={{
                base: 2,
                md: 4,
                lg: 6,
            }}
            shadow="2xl"
            rounded="base"
            bg="gray.100"
        >
            <form>
                <Weight />
                <Divider />
            </form>
        </Box>
    );
};

export default Calculator;
