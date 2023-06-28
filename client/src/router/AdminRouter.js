import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts";
import {
  Engineers,
  Dashboard,
  Newsletter,
  Reports,
  Country,
  Blog,
  TechnicianSignup,
  LoginCT,
  CompanySignup,
  Signup,
  Tickets,
  Services,
  Clients,
  EditEngineer,
  ViewEnginner,
  EditClient,
  ViewCompany,
} from "../pages/admin";
import { useAuth } from "../hooks";

export function AdminRouter() {
  const { user } = useAuth();

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    // Se realiza un condicional para verificar que el usuario se encuentra logueado antes de cargar paginas de admin
    // Para utilizar un mismo componente en diferentes rutas, empleamos un arreglo y map
    <Routes>
      {!user ? (
        <>
          <Route path="/login" element={<LoginCT />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company-signup" element={<CompanySignup />} />
          <Route path="/technician-signup" element={<TechnicianSignup />} />
        </>
      ) : (
        <>
          {["/admin", "/admin/dashboard"].map((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Dashboard)}
            />
          ))}

          <Route
            path="/admin/engineers"
            element={loadLayout(AdminLayout, Engineers)}
          />
          <Route
            path="/admin/engineers/edit/:contactId"
            element={loadLayout(AdminLayout, EditEngineer)}
          />
          <Route
            path="/admin/engineers/view/:contactId"
            element={loadLayout(AdminLayout, ViewEnginner)}
          />
          <Route
            path="/admin/countries"
            element={loadLayout(AdminLayout, Country)}
          />
          <Route
            path="/admin/newsletter"
            element={loadLayout(AdminLayout, Newsletter)}
          />
          <Route
            path="/admin/tickets"
            element={loadLayout(AdminLayout, Tickets)}
          />
          <Route
            path="/admin/services"
            element={loadLayout(AdminLayout, Services)}
          />
          <Route
            path="/admin/clients"
            element={loadLayout(AdminLayout, Clients)}
          />
          <Route
            path="/admin/clients/edit/:Id"
            element={loadLayout(AdminLayout, EditClient)}
          />
          <Route
            path="/admin/clients/view/:contactId"
            element={loadLayout(AdminLayout, ViewCompany)}
          />
          <Route
            path="/admin/reports"
            element={loadLayout(AdminLayout, Reports)}
          />
          <Route path="/admin/blog" element={loadLayout(AdminLayout, Blog)} />

          <Route path="/admin">
            <Route index element={loadLayout(AdminLayout, Dashboard)} />
            <Route
              path="/admin/engineers"
              element={loadLayout(AdminLayout, Engineers)}
            />
          </Route>
        </>
      )}
    </Routes>
  );
}
