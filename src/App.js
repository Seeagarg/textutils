// import logo from "./logo.svg";
import React, { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import About from "./components/About";
// import Footer from "./components/Footer";
// import Alert from "./components/Alert";
// import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [darkText, setDarkText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(false);

  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type,
    });
  };

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setDarkText("disable dark mode");
      showAlert("dark mode has been enabled", "sucess");
    } else {
      setMode("light");
      setDarkText("Enable dark mode");
      document.body.style.backgroundColor = " oldlace";
      showAlert("light mode has been enabled", "sucess");
    }
  };

  return (
    <>
      <Router>
    
        <div className="my_app">
        <Header
          title="textutils "
          about="about text"
          mode={mode}
          darkMode={darkMode}
          darkText={darkText}
          alert={alert}
        />
        {/* <Alert alert= {alert}/> */}
       
        <div className="container my-3">
       
        <Switch>
              <Route exact path="/">
                <Form heading="Enter the text to analyse" />
              </Route>

              <Route exact path="/about">
             
                <About className="about" />
                
              </Route>
            </Switch>

            {/* <About /> */}
            {/* <Footer/> */}
            {/* </div> */}
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
