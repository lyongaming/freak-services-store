import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SquaresBackground } from "./hocs/SquaresBackground";

import { LandingPage, LoginPage, ServicesPage, NotFound } from "./pages";

import "./style.css";

export const StoreApp = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SquaresBackground>
              <LandingPage />
            </SquaresBackground>
          }
        />
        <Route
          path="/login"
          element={
            <SquaresBackground>
              <LoginPage />
            </SquaresBackground>
          }
        />
        <Route
          path="/services"
          element={
            <SquaresBackground>
              <ServicesPage />
            </SquaresBackground>
          }
        />
        <Route
          path="*"
          element={
            <SquaresBackground>
              <NotFound />
            </SquaresBackground>
          }
        />
      </Routes>
    </Router>
  );
};
