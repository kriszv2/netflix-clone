import { useNavigate } from "react-router";
import Featured from "../../components/featured/featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/navbar";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:4000/verify", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsLoggedIn(true);
          axios
            .get("http://localhost:4000/user", {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
              setUser(res.data.user);
              setLoading(false);
            })
            .catch((e) => {
              console.log(e);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isLoggedIn) {
    return (
      <div className="home">
        <Navbar user={user} />
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