import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { Typography, Stack, TextField } from "@mui/material"


const DateField = ({name, boundaries, value, setValue, setIsValidDate, isValidDate}) => {
    const [errorMessage, setErrorMessage] = useState("")
    const dateHolder = {
        "DAY": "DD",
        "MONTH": "MM",
        "YEAR": "YYYY"
    }

    useEffect(() => {  
        if (isValidDate) {
                setErrorMessage("");
            return;
        }
        if (errorMessage == "") {
            setErrorMessage(" ");
            if (name == "DAY") {
                setErrorMessage("Date must be valid")
            }
        }
    }, [isValidDate])


    const checkBoundries = (name, value) => {
        if (value == "") {
            setIsValidDate(false)
            return `${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()} is required`;
        }
        if (name == "YEAR" && value > boundaries.maximum) {
            setIsValidDate(false)
            return "Must be in the past"
        }
        if (value < boundaries.minimum || value > boundaries.maximum) {
            setIsValidDate(false)
            return `Must be a valid ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`
        }
        return "";
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        const name = e.target.name

        if (newValue.length > 0 && (isNaN(newValue) || newValue.includes(".") || newValue.includes("-") || newValue.trim() != newValue)) {
            return;
        }

        setValue(newValue)
        let error = checkBoundries(name, newValue)
        setErrorMessage(error);
        
    }

    return (
        <Stack direction="column" spacing={2}>
            <Typography variant="paragraph" fontWeight="bold" letterSpacing="5px" color={errorMessage!="" ? "#FD555A" : "black"}>{name}</Typography>
            <TextField 
                variant="outlined" 
                minRows="2"
                size="medium"
                inputProps={{sx: {height: "40px", width:"150px", inputMode: 'numeric', pattern: '/^-?\d+(?:\.\d+)?$/g'}}}
                InputProps={{sx: {borderRadius: "10px", fontSize: "32px", fontWeight: "bold"}}}
                placeholder= {dateHolder[name]}
                autoFocus
                value={value}
                onChange={handleChange}
                name={name}
                error={errorMessage!=""}
            />
            <Typography variant="body1" color="#FD555A" minHeight="25px">{errorMessage}</Typography>
        </Stack>
    )
}

const InputDate = ({day, month, year, setDay, setYear, setMonth, isValidDate, setIsValidDate}) => {
    


        useEffect(() => {
            if (day && month && year) {
                
                const date = new Date(year, month - 1, day);
                
                const isYearValid = date.getFullYear() == year;
                const isMonthValid = date.getMonth() == month - 1;
                const isDayValid = date.getDate() == day;
                
                const isValid = isYearValid && isMonthValid && isDayValid && day <= new Date(year, month, 0).getDate();
                setIsValidDate(isValid)
                // console.log(isValid)
            }
        }, [day, month, year])

    return (
        <Stack direction="row" spacing={5}>
            <DateField name="DAY"  value={day} setValue={setDay}  isValidDate={isValidDate} setIsValidDate={setIsValidDate} boundaries={{minimum: 1, maximum: 31}}  />
            <DateField name="MONTH" value={month} setValue={setMonth}  isValidDate={isValidDate} setIsValidDate={setIsValidDate} boundaries={{minimum: 1, maximum: 12}}/>
            <DateField name="YEAR" value={year} setValue={setYear}  isValidDate={isValidDate} setIsValidDate={setIsValidDate} boundaries={{minimum: 1, maximum: new Date().getFullYear()}}/>
        </Stack>
    )
}

export default InputDate