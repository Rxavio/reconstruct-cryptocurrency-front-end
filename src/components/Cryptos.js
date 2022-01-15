import React, { useState } from 'react';
import {
  Modal,
  Table,
  Button,
  Select,
  Typography
} from "antd";
import { HeartTwoTone } from "@ant-design/icons";

const { Option } = Select;
const { Title } = Typography;

const Cryptocurrencies = () => {
  //set modal start
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    //set modal end

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

//click more button to display crypto information
 {
      title: "Action",
      key: "id",
      render: (text, record) => (
        <>
        {/* onclick showModal to open modal */}
     <Button type="primary" onClick={showModal}>
        More
      </Button>
        </>
      ),
    },
    //click Add to watch list button
    {
      title: "Watch List",
      key: "watchlist",
      render: (text, record) => (
        <>
        {/* <Button disabled
        icon={<HeartTwoTone twoToneColor="red" style={{ fontSize: "18px" }} />}
        key="watchlist"
        >
        Added to Watch List
      </Button>   */}

      <Button
       //heart icon 
      icon={<HeartTwoTone style={{ fontSize: "18px" }} />}
       key="watchlist"     
       >
      Add to Watch List
      </Button>

        </>
      ),
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
        {/* Select to switch from one currency to another */}
        <Select
          defaultValue="USD"
          style={{ width: 120 }}
        >
          <Option value="1">USD</Option>
          <Option value="0.89">EURO</Option>
          <Option value="1015">RWF</Option>
        </Select>
      </div>

  {/* table to display crypto asset data */}
      <Table
          columns={columns}
          dataSource={data}
          bordered
          size="small"
      />
       {/* modal that will display more info about cryptocurrency start*/}
      <Modal
    title="Bitcoin" 
    visible={isModalVisible}
      onOk={handleOk} 
      onCancel={handleCancel}
    footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            //  Add to portifolio button start
              <Button
              key="Submit"
              type="primary"
            >
              Add to portifolio
            </Button>,
             //  Add to portifolio button end
          ]}
        >

 

  

      </Modal>
 {/* modal that will display more info about cryptocurrency end*/}
      </div>
    )
}
export default Cryptocurrencies
