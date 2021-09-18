import { Box, Divider } from "@chakra-ui/react";
import Strength from "components/Strength/Strength";
import TotalCBD from "components/TotalCBD/TotalCBD";
import Volume from "components/Volume/Volume";
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
                <Divider borderColor="GrayText" py={2} />
                <Strength />
                <Divider borderColor="GrayText" py={2} />
                <TotalCBD />
                <Divider borderColor="GrayText" py={2} />
                <Volume />
            </form>
        </Box>
    );
};

export default Calculator;
