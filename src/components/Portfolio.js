import React, { useState } from 'react';
import {
  Modal,
  Table,
  Button,
  InputNumber,
  Form,
  Card,
  Row,
  Col,
  Typography,
} from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Portfolio = () => {
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

  //  set table attribute start
const columns = [
  {
    title: "Name",
    dataIndex: ["name"],
    key: ["crypto", "name"],
  },
  {
    title: "Price/Coin",
    dataIndex: "price",
    key: "price",
    render: (text) => <p>${(text ? text.toLocaleString() : "0")}</p>,
    responsive: ["md"],
  },
  {
    title: "Coins",
    dataIndex: "coins",
    key: "coins",
  },
  {
    title: "Total Value",
    dataIndex: "total",
    key: "total",
    render: (text) => <p>${(text ? text.toLocaleString() : "0")}</p>,
    responsive: ["md"],
  },
  {
    title: "Profit/Loss(%)",
    dataIndex: "profit",
    key: "profit",
    render: (text) => (
      <>
        {text > 0 ? (
          <p style={{ color: "green" }}> {text}%</p>
        ) : (
          <p style={{ color: "red" }}> {text}%</p>
        )}
      </>
    ),
  },
 {
      title: "Action",
      key: "id",
      render: (text, record) => (
        <>
        {/* open modal button to update start */}
      <Button type="primary" 
       ghost
       icon={<EditOutlined />}
      onClick={showModal}>
        Update
      </Button>
       {/* open modal button to update end */}
        </>
      ),
    }, 
];
//  set table attribute end

 //  set table columns data start
const data1 = [
  {
    key: '1',
    name: 'Bitcoin',
    price: '300,000.00',
    total: '20000.00',
    coins: '3',
    profit: '0.005',
  },
  {
    key: '2',
    name: 'Cardano',
    price: '320,000.00',
    total: '200500.00',
    coins: '5',
    profit: '0.001',
  },
  {
    key: '3',
    name: 'Ethereum',
    price: '320,000.00',
    total: '200500.00',
    coins: '5',
    profit: '0.001',
  },
];
 //  set table columns data end

    return (
        <div>
    <Title level={3} style={{ margin: "10px 0 15px" }}>
        My Portifolio
      </Title>
      
    <Row align="top">
      
        <Col xs={24} sm={24} >

           {/* card to display total asset price start*/}
        <Card style={{ width: 300, marginBottom: "10px" }}>
            <p><b>Total Price:</b> $90000</p>
          </Card>
          {/* card to display total asset price start*/}
          
           {/* table to display crypto asset data start*/}
          <Table
            columns={columns}
            dataSource={data1}
            bordered
            size="small"
          />
           {/* table to display crypto asset data end */}
        </Col>
       
      </Row>

  {/* modal start */}
<Modal
 title="Update Asset"
 visible={isModalVisible}
  onOk={handleOk} 
  onCancel={handleCancel}

    footer={[
    <Button key="back" onClick={handleCancel}>
      Cancel
    </Button>,
    // update asset button start
    <Button
      key="Submit"
      type="primary"
    >
      Update Asset
    </Button>,
    // update asset button start
  ]}
   >

{/*  update form with 2 inputs Enter number of coins and enter price of any asset start*/}
<Form
name="update"
autoComplete="off"
>
<label style={{ marginRight: "15px" }}>Number of coins:</label>
<InputNumber
  style={{ marginRight: "15px" }}
  min={1}
  value="4" 
/>
<label style={{ marginRight: "15px" }}>Price per coins:</label>
<InputNumber
  min={1}
  value="5"
/>
</Form>
{/*  update form with 2 inputs Enter number of coins and enter price of any asset end*/}
  </Modal>

   {/* modal end */}
    </div>
    );
};
export default Portfolio
