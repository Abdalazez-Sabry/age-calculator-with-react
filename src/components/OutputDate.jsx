import { Typography, Stack } from "@mui/material"
import { useEffect, useState } from "react"

const OutputDate = ({day, month, year, isValidDate}) => {
    const [ageYear, setAgeYear] = useState("")
    const [ageMonth, setAgeMonth] = useState("")
    const [ageDay, setAgeDay] = useState("")
    useEffect (() => {
        if (!isValidDate) {
            setAgeDay("- -");
            setAgeYear("- -")
            setAgeMonth("- -")
            
        }else {
            console.log(day, month, year)
            const currentDate = new Date();
            const birthDateObj = new Date(`${year}-${month}-${day}`);
            
            const timeDiff = Math.abs(currentDate.getTime() - birthDateObj.getTime());
            const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            
            const years = Math.floor(totalDays / 365);
            const months = Math.floor((totalDays % 365) / 30);
            const days = Math.floor((totalDays % 365) % 30);
            
            
            setAgeYear(years);
            setAgeMonth(months);
            setAgeDay(days);
        }
  
    }, [day, month, year, isValidDate])
    const OutputDateLine = ({name, value}) => {
        if (!isValidDate) {
            value = "- -"
        }
        return (
            <Stack direction="row" spacing={2}>
                <Typography variant="h1" fontWeight="900" fontStyle="italic" color="#854FF3">{value} </Typography>
                <Typography variant="h1" fontWeight="900" fontStyle="italic" color="black" fontFamily="Poppins"> {name} </Typography>
            </Stack>
        )
    }

    return (
        <Stack direction="column">
            <OutputDateLine name="years" value={ageYear} /> 
            <OutputDateLine name="months" value={ageMonth} /> 
            <OutputDateLine name="days" value={ageDay} /> 
        </Stack>
    )
}

export default OutputDate