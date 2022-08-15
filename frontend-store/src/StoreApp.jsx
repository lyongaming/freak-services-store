import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { SquaresBackground } from "./hocs/SquaresBackground";

import { LandingPage, LoginPage, ServicesPage, InvoicesPage, NotFound } from "./pages";

import "./style.css";

export const StoreApp = () => {
  return (
    <Router>

      <Routes>
        <Route
          path="/"
          element={
            <SquaresBackground>
              <Navbar />
              <LandingPage />
            </SquaresBackground>
          }
        />
        <Route
          path="/login"
          element={
            <SquaresBackground>
              <Navbar />
              <LoginPage />
            </SquaresBackground>
          }
        />
        <Route
          path="/services"
          element={
            <SquaresBackground>
              <Navbar />
              <ServicesPage />
            </SquaresBackground>
          }
        />
        <Route
          path="/invoices"
          element={
            <SquaresBackground>
              <Navbar />
              <InvoicesPage />
            </SquaresBackground>
          }
        />
        <Route
          path="*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </Router>
  );
};
