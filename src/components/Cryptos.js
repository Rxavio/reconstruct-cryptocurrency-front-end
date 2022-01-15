import React from 'react';
import {
  Select,
  Typography
} from "antd";

const { Option } = Select;
const { Title } = Typography;

const Cryptocurrencies = () => {
  
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
      </div>
    )
}
export default Cryptocurrencies
