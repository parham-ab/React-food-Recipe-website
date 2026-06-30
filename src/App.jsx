import { Navigate, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/foods" element={<SearchBar />} />
      <Route path="/foods/:id" element={<DetailsPage />} />
      <Route path="/*" element={<Navigate to="/foods" />} />
    </Routes>
  );
};

export default App;
