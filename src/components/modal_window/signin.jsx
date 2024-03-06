import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useState } from 'react';
import { useUserData } from '../../context/getUserData';

export default function Authorization({ setLogin, signin, setSign }) {
    const [values, setValues] = useState({ email: "", password: "" })
    let email = values.email.length < 2 || values.email.includes("@")
    let { handleUserGoogle, handleUserFacebook } = useUserData()
    async function signIn(obj) {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error.code);
            });
    }
    const signins = () => {
        let obj = { email: values.email, password: values.password }
        if (!values.email.length < 2 && values.email.includes("@")) {
            signIn(obj)
        } else {
            return
        }
    }

    return (
        <div className="AuthConteiner" style={{
            display: signin ? "block" : "none"
        }}>
            <div className="Authorization" onClick={() => setSign(false)}>
                <div className="Authorization_content" onClick={(e) => e.stopPropagation()}>
                    <center><h1>Войти</h1></center>
                    <Box>
                        <TextField
                            label="Email"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            value={values.email}
                            error={!email}
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            value={values.password}
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                        />
                        <Link onClick={() => setLogin(true)} underline="hover">
                            {' еще не зарегистрирован'}
                        </Link>
                        <Button onClick={signins} variant="contained" disableElevation>
                            Войти
                        </Button>
                    </Box>
                    <div className="auth_platforms">
                        <img onClick={handleUserGoogle} src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" alt="google" />
                        <img onClick={handleUserFacebook} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="facebook" />
                    </div>
                </div>
            </div>
        </div>
    )
}
