import { Container, Grid } from "@mui/material";

const Test = (): JSX.Element => {
  return (
    <Container style={{ backgroundColor: "@022fff" }}>
      <Grid container style={{ backgroundColor: "#ff2fff" }}>
        <Grid item xs={12} md={6}>
          xs-12
        </Grid>
        <Grid item xs={12} md={6}>
          xs-12
        </Grid>
      </Grid>
      <Grid container style={{ backgroundColor: "#ff9fff" }}>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
        <Grid item xs={6} md={3} style={{ backgroundColor: "#ffff2f" }}>
          xs-6
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;
