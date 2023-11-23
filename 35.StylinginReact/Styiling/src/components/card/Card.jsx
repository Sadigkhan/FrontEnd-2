import React from "react";
import { Card } from "antd";

export default function MyCard() {
  return (
    <Card
     className="bg-red-900"
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <h1 className="text-[5px]">Salam burda sizin icounuz ola bilerdi</h1>
      ]}
    ></Card>
  );
}
