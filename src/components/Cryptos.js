import React from 'react';
import {
  Typography
} from "antd";
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

    
      </div>


     
      </div>
    )
}
export default Cryptocurrencies
