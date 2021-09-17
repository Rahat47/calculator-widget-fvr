import { Box, useRadio, Tooltip } from "@chakra-ui/react";
const CustomRadioButtonWTooltip = props => {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();
    return (
        <Tooltip
            label={props.tooltip}
            hasArrow
            placement="bottom"
            colorScheme="twitter"
            fontSize="x-small"
        >
            <Box as="label">
                <input {...input} />
                <Box
                    {...checkbox}
                    cursor="pointer"
                    borderWidth="1px"
                    boxShadow="md"
                    _checked={{
                        bg: "facebook.600",
                        color: "white",
                        borderColor: "facebook.600",
                    }}
                    px={5}
                    py={3}
                    transition="all 0.4s ease-in-out"
                >
                    {props.children}
                </Box>
            </Box>
        </Tooltip>
    );
};

export default CustomRadioButtonWTooltip;
