import { Divider, Stack, Box} from "@mui/material"

const ResultDivider = () => {
    return (
        <Box display="flex" alignItems="center">
            <Box sx={{width: "90%"}}> 
                <Divider></Divider>
            </Box>
            <Box 
                sx={{background: "#854FF3", borderRadius: "50%", padding: "20px"}}
            >
                <img src={require('../assets/images/icon-arrow.svg').default}></img>
            </Box>
        </Box>
    )
}

export default ResultDivider