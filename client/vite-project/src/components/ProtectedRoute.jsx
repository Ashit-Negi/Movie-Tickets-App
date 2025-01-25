import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/LoadersSlice";
import { getCurrentUser } from "../apicalls/userCall";
import { setUser } from "../redux/UserSlice";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "../index.css";
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  console.log("stateUser", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      label: `${user ? user.name : " "}`,
      icon: <UserOutlined />,

      // nested object
      children: [
        {
          label: "Profile",
          icon: <ProfileOutlined />,
        },
        {
          label: (
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>
              Log Out
            </Link>
          ),
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];

  const getValidUser = async () => {
    try {
      dispatch(showLoading);
      const response = await getCurrentUser();
      dispatch(setUser(response.data));
      dispatch(hideLoading);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getValidUser();
    } else {
      navigate("./login");
    }
  });

  return (
    user && (
      <Layout>
        <Header className="custom-header">
          <h3 className="header-title">Book My Show</h3>
          <Menu
            theme="dark"
            mode="horizontal"
            items={navItems}
            className="header-menu"
          />
        </Header>

        <div style={{ padding: 30, minHeight: 380, background: "#d3d3d3" }}>
          {children}
        </div>
      </Layout>
    )
  );
}

export default ProtectedRoute;

// work of the protected route is only one thing when token has been verified then only it will take us to the home page
