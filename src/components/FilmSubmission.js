import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';
import { collection, addDoc } from 'firebase/firestore';

const FilmSubmission = () => {
  const { db } = useContext(FirebaseContext);
  const [filmData, setFilmData] = useState({
    title: "",
    description: "",
    rating: "", // New field: rating out of 10
    review: "", // New field: review text
    tags: "",
    credits: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate the rating is a number between 0 and 10.
      const ratingNum = parseFloat(filmData.rating);
      if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 10) {
        alert("Rating must be a number between 0 and 10");
        return;
      }
      await addDoc(collection(db, "films"), {
        title: filmData.title,
        description: filmData.description,
        rating: ratingNum,
        review: filmData.review,
        tags: filmData.tags,
        credits: filmData.credits,
        createdAt: new Date(),
      });
      alert("Film submitted successfully!");
      // Reset the form.
      setFilmData({
        title: "",
        description: "",
        rating: "",
        review: "",
        tags: "",
        credits: "",
      });
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
        onChange={(e) => setFilmData({ ...filmData, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Film Description"
        value={filmData.description}
        onChange={(e) => setFilmData({ ...filmData, description: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Rating (0-10)"
        value={filmData.rating}
        onChange={(e) => setFilmData({ ...filmData, rating: e.target.value })}
        required
      />
      <textarea
        placeholder="Review"
        value={filmData.review}
        onChange={(e) => setFilmData({ ...filmData, review: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={filmData.tags}
        onChange={(e) => setFilmData({ ...filmData, tags: e.target.value })}
      />
      <input
        type="text"
        placeholder="Credits"
        value={filmData.credits}
        onChange={(e) => setFilmData({ ...filmData, credits: e.target.value })}
      />
      <button type="submit">Submit Film</button>
    </form>
  );
};

export default FilmSubmission;
