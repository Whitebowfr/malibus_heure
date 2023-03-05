import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Main from "./Main";
import React from "react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
})

const updateTime = () => {
    let today = new Date()
    if ([1,2,3,4,5].includes(today.getDay())) {
        let todayB = new Date(today)
        today.setHours(18, 45)
        if (today.getDay() === 5 && today.getTime() < todayB.getTime()) {
            return "12h15"
        }
        return "18h45"
    } else {
        if (today.getDay() === 0) {
            let todayB = new Date(today)
            today.setHours(12, 15)
            if (today.getTime() < todayB.getTime()) {
                return "18h45"
            }
        }
        return "12h15"
    }
}

export default function App() {
    const [Time, setTime] = React.useState("...")

    

    React.useEffect(() => {
        window.setInterval(() => {
            setTime(updateTime(), 1000)
        })
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Main Time={Time}/>
        </ThemeProvider>
    )
}