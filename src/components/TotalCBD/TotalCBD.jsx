import {
    FormControl,
    Box,
    Text,
    Tooltip,
    Input,
    InputGroup,
    InputRightAddon,
} from "@chakra-ui/react";
import { GiChemicalDrop } from "react-icons/gi";
import { FiHelpCircle } from "react-icons/fi";

const TotalCBD = ({ totalCBD, setTotalCBD }) => {
    return (
        <FormControl>
            <Box display="flex" alignItems="center" mt={4}>
                <Text fontSize="xl" display="flex" alignItems="center">
                    <Box as={GiChemicalDrop} mr={2} />
                    <span>Total CBD (optional)</span>
                </Text>
                <Tooltip
                    label="How much CBD is in the bottle (found on the label)?"
                    hasArrow
                    placement="bottom"
                    fontSize="xx-small"
                >
                    <Box ml={2} role="button" display="flex">
                        <Box as={FiHelpCircle} />
                    </Box>
                </Tooltip>

                <Box
                    ml="auto"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <InputGroup w="60%">
                        <Input
                            textAlign="right"
                            type="number"
                            placeholder="Basic usage"
                            name="totalCBD"
                            value={totalCBD}
                            onChange={e => setTotalCBD(e.target.value)}
                        />
                        <InputRightAddon children="mg" />
                    </InputGroup>
                </Box>
            </Box>
        </FormControl>
    );
};

export default TotalCBD;
