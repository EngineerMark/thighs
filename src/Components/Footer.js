import { AppBar, Container, Paper, Toolbar, Typography } from "@mui/material";
import Config from "Config";

function Footer(props) {
    return (
        <AppBar position="static" component={Paper} sx={{mt:1}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography>&copy; Amayakase 2023</Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer;