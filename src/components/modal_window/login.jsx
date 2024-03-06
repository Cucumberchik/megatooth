import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../typeForRedux/type';
import { useUserData } from '../../context/getUserData';



export default function Login({ login, setLogin }) {
    let dispath = useDispatch()
    let { user, handleUserGoogle, handleUserFacebook } = useUserData()
    let [password, setPassword] = useState({
        onePass: "",
        twoPass: ""
    });
    let [values, setValues] = useState({
        name: "",
        surnmane: "",
        email: "",
    });
    let email = values.email.length < 2 || values.email.includes("@")
    let pass = password.onePass !== password.twoPass
    function handleUser() {
        if (!pass) {
            let obj = {
                password: password.onePass,
                email: values.email,
                name: values.name,
                surnmane: values.surnmane
            }
            dispath({ type: types.login, payload: obj })
        } else {
            return
        }
    }
    return (
        <div className='Login' onClick={() => setLogin(false)} style={{
            display: login ? "flex" : "none"
        }}>
            <div className="Login_content" onClick={(e) => e.stopPropagation()}>
                <center><h2>Зарегистрироватся</h2></center>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <TextField sx={{
                        width: "350px"
                    }} onChange={(e) => setValues({ ...values, name: e.target.value })} id="standard-basic" label="Имя" variant="standard" />
                    <TextField sx={{
                        width: "350px"
                    }} onChange={(e) => setValues({ ...values, surname: e.target.value })} id="standard-basic" label="Фамилия (необязательно)" variant="standard" />
                    <TextField sx={{
                        width: "350px"
                    }} error={!email} onChange={(e) => setValues({ ...values, email: e.target.value })} id="standard-basic" helperText="Здесь должна быть почта (email@mail.com)" type='email' label="Почта" variant="standard" />
                    <TextField sx={{
                        width: "350px"
                    }} value={password.onePass} onChange={(e) => setPassword({ ...password, onePass: e.target.value })} id="standard-basic" type="password" label="Пароль" variant="standard" />
                    <TextField sx={{
                        width: "350px"
                    }} error={pass} value={password.twoPass} onChange={(e) => setPassword({ ...password, twoPass: e.target.value })} id="standard-basic" type="password" label="Подвердите пароль" variant="standard" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker sx={{ width: "200px" }} />
                    </LocalizationProvider>
                    <Button onClick={handleUser} variant="contained">Далее</Button>
                </Box>
                <Box sx={{
                    display: "flex"
                }}>
                    <Button variant="contained" onClick={handleUserGoogle}><GoogleIcon /></Button>
                    <Button variant="contained" onClick={handleUserFacebook}><FacebookIcon /></Button>
                </Box>
            </div>
        </div>
    );
}
