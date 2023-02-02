import { Grid, AppBar, Link, Toolbar, Button } from '@mui/material';

function Header() {

    return (
        <AppBar
            position="fixed"
            sx={{
                background: "#101010",
                boxShadow: 0,
                paddingTop: "0.5em",
            }}
        >
            <Toolbar>
                <Grid container display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Grid
                        container
                        justifyContent="flex-start"
                        sx={{ padding: "1em 0 0 1em" }}
                    >
                        <Grid item>
                            <Button
                                sx={{
                                    transition: "none",
                                    color: "transparent",
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                        textTransform: "capitalize",
                                        fontFamily: "ChakraPetch Regular"
                                    },
                                    "&:hover": {
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                <Link sx={{ color: "#fff" }} href="/" underline="none">
                                    Control Panel
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;