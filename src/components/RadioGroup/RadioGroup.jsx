import { HStack, useRadioGroup } from "@chakra-ui/react";
import CustomRadioButton from "components/CustomRadioButton/CustomRadioButton";
import CustomRadioButtonWTooltip from "components/CustomRadioButton/CustomRadioButtonWTooltip";

const RadioGroup = ({ changeOptionType, defaultValue, options, toolTips }) => {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: "weight",
        defaultValue: defaultValue,
        onChange: changeOptionType,
    });

    const group = getRootProps();

    return (
        <HStack spacing="0" {...group}>
            {options.map((value, index) => {
                const radio = getRadioProps({ value });

                if (toolTips) {
                    return (
                        <CustomRadioButtonWTooltip
                            key={value}
                            {...radio}
                            tooltip={toolTips[index]}
                        >
                            {value}
                        </CustomRadioButtonWTooltip>
                    );
                } else {
                    return (
                        <CustomRadioButton key={value} {...radio}>
                            {value}
                        </CustomRadioButton>
                    );
                }
            })}
        </HStack>
    );
};

export default RadioGroup;
