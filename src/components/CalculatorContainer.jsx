import { Box } from "@mui/material"
import InputDate from "./InputDate"
import OutputDate from "./OutputDate"
import ResultDivider from "./ResultDivider"
import { useState } from "react"

const CalculatorContainer = () => {
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [isValidDate, setIsValidDate] = useState(true)

    return (
        <Box
            sx={{
                height: "70%", 
                minWidth:  "42%",
                background: "white",
                borderRadius: "35px 35px 200px 35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box 
                sx={{
                    width: "80%",
                    height: "80%",
                }}
                >
                    <InputDate day={day} month={month} year={year} setYear={setYear} setMonth={setMonth} setDay={setDay} isValidDate={isValidDate} setIsValidDate={setIsValidDate} />
                    <ResultDivider />
                    <OutputDate day={day} month={month} year={year} isValidDate={isValidDate}/>
            </Box>
        </Box>
    )
} 

export default CalculatorContainer