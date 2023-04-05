import { useNavigate } from "react-router";
import Featured from "../../components/featured/featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/navbar";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:4000/verify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }, []);

  if (isLoggedIn) {
    return (
      <div className="home">
        <Navbar />
        <Featured />
        <List />
        <List />
        <List />
        <List />
      </div>
    );
  } 
};

export default Home;