import { FormControl, Box, Text } from "@chakra-ui/react";
import { HiStatusOnline } from "react-icons/hi";
import RadioGroup from "components/RadioGroup/RadioGroup";

const Strength = ({ desiredStrength, setDesiredStrength }) => {
    // const [desiredStrength, setDesiredStrength] = useState("Mild");

    const changeDesiredStrength = value => {
        setDesiredStrength(value);
    };

    const options = ["Mild", "Moderate", "Heavy"];
    const toolTips = [
        "Mild Dose (General Health, Nausea)",
        "Moderate Dose (Nausea, Pain, Inflammation, Mild Insomnia, Mild Anxiety, Headaches)",
        "Heavy Dose (Chronic pain, Inflammation, Insomnia, Anxiety, Migraines, Epilepsy)",
    ];

    return (
        <FormControl>
            <Box display="flex" alignItems="center" mt={4}>
                <Text fontSize="xl" display="flex" alignItems="center">
                    <Box as={HiStatusOnline} mr={2} /> Desired Strength
                </Text>

                <Box ml="auto">
                    <RadioGroup
                        changeOptionType={changeDesiredStrength}
                        defaultValue={desiredStrength}
                        options={options}
                        toolTips={toolTips}
                    />
                </Box>
            </Box>
        </FormControl>
    );
};

export default Strength;
