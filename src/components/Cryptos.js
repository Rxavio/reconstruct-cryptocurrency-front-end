import React from 'react';
import {
  Table,
  Select,
  Typography
} from "antd";

const { Option } = Select;
const { Title } = Typography;

const Cryptocurrencies = () => {

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    align: 'right',
  },
  {
    title: 'Price per coin(USD)',
    dataIndex: 'money',
    className: 'column-money',
  },
  {
    title: "Coins",
    dataIndex: "coins",
    key: "coins",
},

];


const data = [
  {
    key: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    money: '$300,000.00',
    coins: '3',
  },
  {
    key: '2',
    name: 'Ethereum	',
    symbol: 'ETH',
    money: '$1,256,000.00',
    coins: '3',
  },
  {
    key: '3',
    name: 'Cardano',
    symbol: 'ADA',
    money: '$120,000.00',
    coins: '2',
  },
];

    return (
        <div>

        <div
          style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "15px 0",
          width: "100%",
        }}
      >

        <Title level={4}>
          Latest cryptocurrencies
        </Title>

        <Select
          defaultValue="USD"
          style={{ width: 120 }}
        >
          <Option value="1">USD</Option>
          <Option value="0.89">EURO</Option>
          <Option value="1015">RWF</Option>
        </Select>
      </div>


      <Table
          columns={columns}
          dataSource={data}
          bordered
          size="small"
      />

      </div>
    )
}
export default Cryptocurrencies
