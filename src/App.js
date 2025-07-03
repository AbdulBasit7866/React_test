import { Route, Routes } from "react-router-dom";
// import "./App.css";
import { InputData } from "./component/Input";
import { Counter } from "./component/Counter";
import { List } from "./component/List";
import { useNavigate } from "react-router-dom";

// function App() {
//   return (
// <>
//   <List />
//   {/* <Routes>
//     {false ? (
//       <Route path="/Input" element={<InputData />} />
//     ) : (
//       <Route path="/Input" element={<Counter />} />
//     )}
//     <Route path="*" element={<h1>Route not found</h1>} />
//   </Routes> */}
// </>
//   );
// }

// export default App;
import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon), //<UserOutlined/>
      label: `subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const App = () => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={[
            { key: "xyz", label: "ABC" },
            { key: "xyzz", label: "ABC", onClick: () => navigate("/list") },
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <>
              <Routes>
                <Route path="/Input" element={<InputData />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/list" element={<List />} />
                <Route path="*" element={<h1>Route not found</h1>} />
              </Routes>
            </>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
