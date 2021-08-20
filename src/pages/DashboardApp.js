// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppAnosFinais,
  AppEnsinoMedio,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates,
  AppPort5EF,
  AppMath3EM,
  AppMath5EF,
  AppMath9EF,
  AppPort3EM,
  AppPort9EF
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Aprendizado Adequado em 2019</Typography>
        </Box>
        <Grid container spacing={3} style={{ marginBottom: 40 }}>
          <Grid item xs={12} sm={6} md={4}>
            <AppPort5EF />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppMath5EF />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppPort9EF />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppMath9EF />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppPort3EM />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AppMath3EM />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppWebsiteVisits />
        </Grid>

        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Taxa de Rendimento</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppAnosFinais />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppEnsinoMedio />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
