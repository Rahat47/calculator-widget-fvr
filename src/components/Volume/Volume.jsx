import React from "react";
import {
    FormControl,
    Box,
    Text,
    Tooltip,
    InputGroup,
    Select,
} from "@chakra-ui/react";
import { GiMedicinePills } from "react-icons/gi";
import { FiHelpCircle } from "react-icons/fi";

const Volume = () => {
    return (
        <FormControl>
            <Box display="flex" alignItems="center" mt={4}>
                <Text fontSize="xl" display="flex" alignItems="center">
                    <Box as={GiMedicinePills} mr={2} />
                    <span>Volume (optional)</span>
                </Text>
                <Tooltip
                    label="How big is your bottle of CBD?"
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
                    <InputGroup>
                        <Select placeholder="--">
                            <option value={15}>15 mL (0.5 oz)</option>
                            <option value={30}>30 mL (1 oz)</option>
                            <option value={50}>50 mL (1.7 oz)</option>
                            <option value={60}>60 mL (2 oz)</option>
                            <option value={120}>120 mL (4 oz)</option>
                        </Select>
                    </InputGroup>
                </Box>
            </Box>
        </FormControl>
    );
};

export default Volume;
