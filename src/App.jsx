import { Box } from "@mui/material"
import CalculatorContainer from "./components/CalculatorContainer"

const App = () => {
    return (
        <Box 
            height="100vh"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            display="flex"
            sx={{background: "#f0f0f0"}}
        >
            <CalculatorContainer />
        </Box>
    );
};

export default App;