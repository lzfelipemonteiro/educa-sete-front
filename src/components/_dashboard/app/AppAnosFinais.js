import React, { useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';
import api from '../../../services/api';

//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [4344, 5435, 1443, 4443];

export default function AppCurrentVisits() {
  const theme = useTheme();

  const [dataAPI, setDataAPI] = useState();
  const [title, setTitle] = useState();
  const [chartData, setChartData] = useState();
  const [labels, setLabels] = useState();

  useEffect(() => {
    async function getData() {
      const response = await api.get('/taxa-rendimento');
      // console.log(response.data[0]);
      setDataAPI(response.data[0]);
      // console.log(response.data[0].dataTable[1].stepSchool);
      // console.log(response.data[0].headerTable.splice(1, 3));
      setLabels(response.data[0].headerTable.splice(1, 3));
      setTitle(response.data[0].dataTable[1].stepSchool);

      const numberData = [];

      // console.log(response.data[0].dataTable[1].items);
      response.data[0].dataTable[1].items.forEach((item) => {
        const number = Number(item.text.split(' ')[0].replace(/\./g, ''));
        // console.log(number);
        numberData.push(number);
      });
      // console.log(numberData);

      setChartData(numberData);
    }

    getData();
  }, []);

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main
    ],
    labels: labels || [],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }
    }
  });

  return (
    <Card>
      <CardHeader title={title} />
      <ChartWrapperStyle dir="ltr">
        {chartData && (
          <ReactApexChart type="donut" series={chartData} options={chartOptions} height={280} />
        )}
      </ChartWrapperStyle>
    </Card>
  );
}
