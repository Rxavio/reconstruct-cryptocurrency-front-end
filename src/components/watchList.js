import React from 'react'
import { Table } from "antd";

const WatchList = () => {

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
}
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
    name: 'Ethereum',
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
            <h1>Watch List</h1>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                size="small"
            />
        </div>
    )
}
export default WatchList
