import React, { useState, useEffect } from "react";
import NewWeddingForm from "./components/NewWeddingForm";
import WeddingList from "./components/WeddingList";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";

const App = () => {
  const [weddings, setWeddings] = useState([]);

  useEffect(() => {
    const fetchWeddings = async () => {
      const response = await axios.get("/api/weddings");
      setWeddings(response.data);
    };

    fetchWeddings();
  }, []);

  const addWedding = async (newWedding) => {
    const response = await axios.post("/api/weddings", newWedding);
    setWeddings([...weddings, response.data]);
  };

  return (
    <div className="app-container">
      <Header />
      <main>
        <NewWeddingForm addWedding={addWedding} />
        <WeddingList weddings={weddings} />
      </main>
    </div>
  );
};


export default App;


