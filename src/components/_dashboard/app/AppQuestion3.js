import { useEffect, useState } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//
import { BaseOptionChart } from '../../charts';

import api from '../../../services/api';
// ----------------------------------------------------------------------

export default function AppQuestion3() {
  const [labels, setLabels] = useState();
  const [title, setTitle] = useState();
  const [percents, setPercents] = useState();

  const [labels2, setLabels2] = useState();
  const [title2, setTitle2] = useState();
  const [percents2, setPercents2] = useState();

  const [labels3, setLabels3] = useState();
  const [title3, setTitle3] = useState();
  const [percents3, setPercents3] = useState();

  const CHART_DATA = [
    {
      name: '5º Ano',
      type: 'column',
      data: percents
    },
    {
      name: '9º',
      type: 'column',
      data: percents2
    },
    {
      name: '3º Ano EM',
      type: 'column',
      data: percents3
    }
  ];

  useEffect(() => {
    async function getData() {
      const res = await api.get('/alunos/5');
      const res2 = await api.get('/alunos/9');
      const res3 = await api.get('/alunos/3');
      setLabels(res.data[3].Resultados);
      setLabels2(res2.data[3].Resultados);
      setLabels3(res3.data[3].Resultados);

      setTitle(res.data[3].Indicador);
      setPercents(res.data[3].Porcentagens);
      setPercents2(res2.data[3].Porcentagens);
      setPercents3(res3.data[3].Porcentagens);
    }
    getData();
  }, []);

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: labels || [], // response[0].Resultados.map((obj) => obj.labels),
    // [
    //   '01/01/2003',
    //   '02/01/2003',
    //   '03/01/2003',
    //   '04/01/2003',
    //   '05/01/2003',
    //   '06/01/2003',
    //   '07/01/2003',
    //   '08/01/2003',
    //   '09/01/2003',
    //   '10/01/2003',
    //   '11/01/2003']
    xaxis: { type: 'string' },
    tooltip: {
      shared: true,
      intersect: false,
      y: []
      // y: {
      //   formatter: (y) => {
      //     if (typeof y !== 'undefined') {
      //       return `${y.toFixed(0)} visits`;
      //     }
      //     return y;
      //   }
      // }
    }
  });

  return (
    <>
      {percents && (
        <Card>
          <CardHeader title={title} />
          <Box sx={{ p: 3, pb: 1 }} dir="ltr">
            <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
          </Box>
        </Card>
      )}
    </>
  );
}
