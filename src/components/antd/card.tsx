import React from 'react';
import { Card, Space } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 600 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);

export default App;
