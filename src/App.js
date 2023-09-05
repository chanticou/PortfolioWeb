import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/index";
import { Yo } from "./components/Yo/index";
import { Form } from "./components/Form/index";
import { Landing } from "./components/Landing/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route
          path="/Home"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/yo"
          element={
            <>
              <Yo />
            </>
          }
        />
        <Route
          path="/contact-form"
          element={
            <>
              <Form />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
