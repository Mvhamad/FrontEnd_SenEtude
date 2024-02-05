import { Routes, Route } from "react-router-dom";
import ListEtablissement from "./ListEtabissement/ListEtablissement";
import HomeUser from "./accueil/accueil";
import studentProfile from './profil/studentProfile';
import PrivateRoutes from "../../components/Private/PrivateRoutes";

const Student = () => {
  return (
    <div className="student">
      <Routes>
        <Route element= {< PrivateRoutes/>} >
          <Route path="/home" element={<HomeUser />} />
          <Route path="/choice-uni" element={<ListEtablissement />} />
          <Route path="/profile" element={<studentProfile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Student;
