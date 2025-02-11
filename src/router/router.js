import React from "react";
import { HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Counter from "@/views/Counter/Counter";
import About from "@/views/About/About";
import Index from "@/views/Index/Index";
import Dashboard from "@/views/Dashboard/Dashboard";
import Profile from "@/views/Dashboard/Profile";
import Settings from "@/views/Dashboard/Settings";
import User from "@/views/User/User";

const NotFound = () => {
  return <h2>404 Page Not Found</h2>;
};

export default function Router() {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/index">Index</Link>
          </li>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="index" element={<Index />} />
        <Route path="counter" element={<Counter />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route
            path="profile"
            element={<Profile name="Alice" age={25} location="New York" />}
          />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/user/:userId" element={<User />} />
        {/* 重定向到首页 */}
        <Route path="/" element={<Navigate to="index" />} />
        {/* 或者跳转到 NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
