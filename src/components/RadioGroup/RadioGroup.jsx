import { HStack, useRadioGroup } from "@chakra-ui/react";
import CustomRadioButton from "components/CustomRadioButton/CustomRadioButton";

const RadioGroup = ({ changeWeightType, weightType }) => {
    const options = ["kg", "lb"];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "weight",
        defaultValue: weightType,
        onChange: changeWeightType,
    });

    const group = getRootProps();

    return (
        <HStack spacing="0" {...group}>
            {options.map(value => {
                const radio = getRadioProps({ value });
                return (
                    <CustomRadioButton key={value} {...radio}>
                        {value}
                    </CustomRadioButton>
                );
            })}
        </HStack>
    );
};

export default RadioGroup;
