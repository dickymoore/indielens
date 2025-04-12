import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FeaturedFilms from './components/FeaturedFilms';
import FilmSubmission from './components/FilmSubmission';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';

function App() {
  // You can switch pages by updating this state.
  const [page, setPage] = useState("home"); 
  // Valid values: "home", "films", "submit", "profile", "signup", "signin"

  const renderPage = () => {
    switch (page) {
      case "home":
        return (
          <>
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
          </>
        );
      case "submit":
        return <FilmSubmission />;
      case "profile":
        return <UserProfile />;
      case "signup":
        return <SignUp />;
      case "signin":
        return <SignIn />;
      default:
        return <p>Page not found</p>;
    }
  };

  return (
    <div className="App">
      {/* Pass the setPage callback so Header can change pages */}
      <Header onNav={setPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
