import Icon, { LaptopOutlined, BarChartOutlined } from "@ant-design/icons";

import { Layout, Menu, theme, Typography } from "antd";
import React from "react";
const { Header, Content, Sider } = Layout;

const { Link, Text } = Typography;

const items = [
  {
    key: `test`,
    icon: React.createElement(BarChartOutlined),
    label: `Test`,
    children: [
      {
        key: "handTest",
        label: `Hand Test`,
      },
    ],
  },
];

const PageContainer = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            float: "left",
            width: "120px",
            height: "31px",
            margin: "16px 24px 16px 0px",
          }}
        >
          <Icon
            component={LaptopOutlined}
            style={{ fontSize: "32px", color: "white" }}
          />
          <Text level={2} style={{ margin: "0 12px", color: "#1677ff" }}>
            TAS Test
          </Text>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[{ key: "login", label: "Login" }]}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["handTest"]}
            defaultOpenKeys={["test"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageContainer;
