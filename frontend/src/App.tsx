import "./App.css";
import { Slide } from "./components/pages/Slide";
import { TimeLineLinkList } from "./components/pages/TimelineLinkList";
import { Xframe } from "./components/templetes/Xframe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TechStack } from "./components/pages/TechStack";
import { Qr } from "./components/pages/Qr";
import { Architecture } from "./components/pages/Architecture";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Xframe />}>
            <Route path="/" element={<TimeLineLinkList />} />
            <Route path="/slide" element={<Slide />} />
            <Route path="/techStack" element={<TechStack />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/qr" element={<Qr />} />
          </Route>
        </Routes>
        <Xframe />
      </BrowserRouter>
    </>
  );
}

export default App;
