import { Architecture } from "@mui/icons-material";
import "./App.css";
import { Slide } from "./components/pages/Slide";
import { TimeLineLinkList } from "./components/pages/TimelineLinkList";
import { Xframe } from "./components/templetes/Xframe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TechStack } from "./components/pages/TechStack";
import { Qr } from "./components/pages/Qr";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Xframe />}>
            <Route path="/" element={<TimeLineLinkList />} />
            <Route path="/" element={<Slide />} />
            <Route path="/" element={<TechStack />} />
            <Route path="/" element={<Architecture />} />
            <Route path="/" element={<Qr />} />
          </Route>
        </Routes>
        <Xframe />
      </BrowserRouter>
    </>
  );
}

export default App;
