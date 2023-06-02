import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Businesses,
  Blog,
  Technicians,
  Contact,
  Post,
} from "../pages/web";
import { ClientLayout } from "../layouts";

export function WebRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route exact path="/" element={loadLayout(ClientLayout, Home)} />
      <Route
        path="/how-it-works-for-technicians"
        element={loadLayout(ClientLayout, Technicians)}
      />
      <Route path="/contact" element={loadLayout(ClientLayout, Contact)} />
      <Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
      <Route path="/blog/:path" element={loadLayout(ClientLayout, Post)} />
      <Route
        path="how-it-works-for-businesses"
        element={loadLayout(ClientLayout, Businesses)}
      />
    </Routes>
  );
}
