// src/components/FilmSubmission.js
import React, { useState, useContext } from "react";
import { FirebaseContext } from "../contexts/FirebaseContext";
import { collection, addDoc } from "firebase/firestore";

const FilmSubmission = () => {
  const { db } = useContext(FirebaseContext);
  const [filmData, setFilmData] = useState({
    title: "",
    description: "",
    tags: "",
    credits: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "films"), filmData);
      alert("Film submitted successfully!");
    } catch (error) {
      console.error("Error adding film: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Film Title"
        value={filmData.title}
        onChange={(e) =>
          setFilmData({ ...filmData, title: e.target.value })
        }
      />
      {/* Additional fields for description, tags, etc. */}
      <button type="submit">Submit Film</button>
    </form>
  );
};

export default FilmSubmission;
