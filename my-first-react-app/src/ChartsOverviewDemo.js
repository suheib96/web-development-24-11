import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
    const [zahl,setZahl] = React.useState(0)
  return (
    <>
    <button onClick={() => setZahl(zahl + 10)}>Klick mich</button>
    <BarChart
      series={[
        { data: [zahl, 1, 1, 1] },
        { data: [1, 1, 1, 1] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </>
  );
}