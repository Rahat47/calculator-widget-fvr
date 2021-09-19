import { useState } from "react";
import { Box, Divider, Button, chakra } from "@chakra-ui/react";
import { GrPowerReset } from "react-icons/gr";

import Strength from "components/Strength/Strength";
import TotalCBD from "components/TotalCBD/TotalCBD";
import Volume from "components/Volume/Volume";
import Weight from "components/weight/Weight";
import CopyModal from "components/CopyModal/CopyModal";

const Calculator = () => {
    const [weight, setWeight] = useState(50);
    const [strength, setStrength] = useState("Mild");
    const [totalCBD, setTotalCBD] = useState(null);
    const [volume, setVolume] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ weight, strength, totalCBD, volume });
    };

    const resetForm = () => {
        setWeight(50);
        setStrength("Mild");
        setTotalCBD(null);
        setVolume(null);
    };

    //Generate a iframe link to display the calculator on any website
    const generateIframeEmbeddLink = () => {
        //return a script tag to white the iframe into document body
        //make the iframe src dynamic to the site url

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = `document.write('<iframe src="${window.location.href}" style="border:0;min-height:600px;height:100%;left:0;position:absolute;top:0;width:100%"></iframe>');`;

        return script;
    };

    console.log(generateIframeEmbeddLink());

    return (
        <>
            <chakra.form
                w={{
                    base: "90%",
                    md: "50%",
                    lg: "40%",
                }}
                justifyContent="center"
                onSubmit={handleSubmit}
            >
                <Box
                    bg="gray.100"
                    shadow="base"
                    p={{
                        base: 2,
                        md: 4,
                        lg: 6,
                    }}
                    rounded="base"
                >
                    <Weight weight={weight} setWeight={setWeight} />
                    <Divider borderColor="GrayText" py={2} />
                    <Strength
                        desiredStrength={strength}
                        setDesiredStrength={setStrength}
                    />
                    <Divider borderColor="GrayText" py={2} />
                    <TotalCBD totalCBD={totalCBD} setTotalCBD={setTotalCBD} />
                    <Divider borderColor="GrayText" py={2} />
                    <Volume volume={volume} setVolume={setVolume} />
                </Box>

                <Box
                    mt={6}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Button
                        type="reset"
                        leftIcon={<GrPowerReset />}
                        variant="link"
                        onClick={resetForm}
                    >
                        Reset Form
                    </Button>
                    <Button type="submit" colorScheme="facebook" size="lg">
                        Calculate
                    </Button>
                </Box>

                <Divider borderColor="GrayText" py={4} />
                <Box py={4} w="80%" display="flex" mx="auto">
                    <Button size="lg" isFullWidth>
                        Get This Calculator
                    </Button>
                </Box>
                <Divider borderColor="GrayText" />

                <CopyModal />
            </chakra.form>
        </>
    );
};

export default Calculator;
