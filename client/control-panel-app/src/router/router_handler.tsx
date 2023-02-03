import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
            path="*"
            element={
              <main
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                  color: "#fff",
                }}
              >Oops! <br></br>There's nothing here.</main>
            }
          />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
