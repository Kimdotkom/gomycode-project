import "./index.css";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import AnnonceList from "./Components/AnnonceList/AnnonceList";
import { Route, Routes } from "react-router-dom";
import AddAnnonce from "./Pages/Add/AddAnnonce";
import EditAnnonce from "./Pages/Edit/EditAnnonce";
import UsersList from "./Components/UsersList/UsersList";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { current } from "./JS/Actions/Actions";
import AnnonceDetails from "./Pages/Annonce/AfficherAnnonce";
import MyAnnonces from "./Components/MyAnnonces/MyAnnonces";
import ErrorPage from "./Pages/Error/ErrorPage";
import Footers from "./Components/Footers/Footers";

function App() {
  const listAnnonces = useSelector(
    (state) => state.annonceReducer.listAnnonces
  );
  console.log(listAnnonces);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const [inputSearch, setInputSearch] = useState("");
  const filtredAnnonces = listAnnonces.filter((annonce) =>
    annonce.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  console.log(filtredAnnonces);

  useEffect(() => {
    if (localStorage.getItem("token", {})) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Navigation inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <Routes>
        <Route path="/" element={<Home filtredAnnonces={filtredAnnonces} />} />

        <Route
          path="/get-annonces"
          element={<AnnonceList filtredAnnonces={filtredAnnonces} />}
        />
        <Route path="/add-annonce" element={<AddAnnonce />} />
        <Route path="/get-one/:_id" element={<AnnonceDetails />} />
        <Route path="/update-annonce/:id" element={<EditAnnonce />} />

        <Route path="/users" element={<UsersList />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuth ? <Route path="/profile" element={<Profile />} /> : null}
        <Route path="/myAnnonces" element={<MyAnnonces />} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;
