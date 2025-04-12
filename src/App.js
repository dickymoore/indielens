// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import FeaturedFilms from './components/FeaturedFilms';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="featured-films">
          <h2>Featured Films</h2>
          <FeaturedFilms />
        </section>
        <section className="feature-placeholders">
          <h2>Upcoming Features</h2>
          <div className="placeholder-grid">
            <div className="placeholder-card">Film Submission System</div>
            <div className="placeholder-card">User Ratings & Reviews</div>
            <div className="placeholder-card">Filmmaker Profiles</div>
            <div className="placeholder-card">Community Discussions</div>
            <div className="placeholder-card">Voting System</div>
            <div className="placeholder-card">Search & Filter</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
