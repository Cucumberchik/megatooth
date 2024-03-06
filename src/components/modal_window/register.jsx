import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

export default function Authorization({ signin, setSign }) {
    return (
        <div className="Authorization" style={{
            display: signin ? "flex" : "none"
        }} onClick={() => setSign(false)}>
            <div className="Authorization_content" onClick={(e) => e.stopPropagation()}>
                <center><h1>Войти</h1></center>
                <Box>
                    <TextField label="Email" />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <Link href="#" underline="hover">
                        {'еще не зарегистрирован'}
                    </Link>
                    <Button variant="contained" disableElevation>
                        Войти
                    </Button>
                </Box>
                <div className="auth_platforms">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" alt="google" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="facebook" />
                </div>
            </div>
        </div>
    )
}
