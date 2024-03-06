import { Box, TextField } from '@mui/material'
import React from 'react'

export default function Login() {
    return (
        <div className='Login'>
            <div className="Login_content">
                <center><h2>Зарегистрироватся</h2></center>
                <Box>
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <TextField id="standard-basic" label="Standard" variant="standard" />

                </Box>
            </div>
        </div>
    )
}
