import "./App.css";
import { TimeLineLinkList } from "./components/pages/TimelineLinkList";
import { Xframe } from "./components/templetes/Xframe";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Xframe />}>
            <Route path="/" element={<TimeLineLinkList />} />
          </Route>
        </Routes>
        <Xframe />
      </BrowserRouter>
    </>
  );
}

export default App;
