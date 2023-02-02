import { Container, Grid, Typography } from '@mui/material'

function ComponentGrid() {

    return (
        <Container>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(9)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}  >
                        <div className='control-component'>
                            <Typography color="#000"> comp </Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ComponentGrid