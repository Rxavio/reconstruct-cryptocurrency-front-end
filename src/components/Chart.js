import React from 'react';
import { Pie } from '@ant-design/plots';

const Chart = () => {
  const data = [
    {
      type: 'Bitcoin',
      value: 27,
    },
    {
      type: 'Etherium',
      value: 25,
    },
    {
      type: 'Cardano',
      value: 10,
    }
    
  ];
 
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <div>
    <Pie {...config} />
    </div>
  );
};
export default Chart;
