import React, { useState } from "react";
import {
    Box,
    FormControl,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Text,
    Input,
    Tooltip,
} from "@chakra-ui/react";
import RadioGroup from "components/RadioGroup/RadioGroup";
const Weight = () => {
    const [maxWeight] = useState({
        kg: 200,
        lb: 441,
    });

    const [weight, setWeight] = useState(50);
    const [weightType, setWeightType] = useState("kg");

    const calculateWeight = (type, weight) => {
        if (type === "kg") {
            //convert lb to kg, and round the value
            return Math.round(weight * 0.45359237);
        } else if (type === "lb") {
            return Math.round(weight * 2.20462);
        }
    };

    //Change the weight type, and calculate the new weight based on the weight type
    const changeWeightType = type => {
        setWeightType(type);
        const newWeight = calculateWeight(type, weight);
        setWeight(newWeight);
    };
    return (
        <FormControl>
            <Box display="flex" alignItems="center" mb={4}>
                <Text fontSize="xl">Your Weight</Text>

                <Input
                    ml="auto"
                    type="number"
                    value={weight}
                    placeholder={weight}
                    min={1}
                    max={200}
                    w="15%"
                    mr={3}
                    onChange={e => {
                        setWeight(e.target.value);
                    }}
                    textAlign="right"
                />

                <Box>
                    <RadioGroup
                        changeWeightType={changeWeightType}
                        weightType={weightType}
                    />
                </Box>
            </Box>

            <Slider
                colorScheme="orange"
                aria-label="weight select slider"
                min={1}
                max={maxWeight[weightType]}
                defaultValue={30}
                value={weight}
                onChange={value => {
                    setWeight(value);
                }}
            >
                <SliderTrack h={2}>
                    <SliderFilledTrack />
                </SliderTrack>
                <Tooltip
                    bg="facebook.500"
                    hasArrow
                    placement="bottom"
                    label={weight}
                >
                    <SliderThumb w={5} h={5} bg="orange.500" />
                </Tooltip>
            </Slider>
        </FormControl>
    );
};

export default Weight;
