// src/components/FeaturedFilms.js
import React from 'react';

function FeaturedFilms() {
  // Static placeholders. Later, replace with Firestore-driven dynamic content.
  return (
    <div className="featured-films-list">
      <div className="film-card">
        <h3>Film Title 1</h3>
        <p>Short description of Film 1.</p>
      </div>
      <div className="film-card">
        <h3>Film Title 2</h3>
        <p>Short description of Film 2.</p>
      </div>
      <div className="film-card">
        <h3>Film Title 3</h3>
        <p>Short description of Film 3.</p>
      </div>
    </div>
  );
}

export default FeaturedFilms;
