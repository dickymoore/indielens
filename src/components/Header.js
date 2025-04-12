import React from 'react';

function Header({ onNav }) {
  return (
    <header className="site-header">
      <h1>IndieLens</h1>
      <nav className="main-nav">
        <ul>
          <li onClick={() => onNav("home")}>Home</li>
          <li onClick={() => onNav("films")}>Films</li>  {/* Reserved for listing all films */}
          <li onClick={() => onNav("submit")}>Submit Film</li>
          <li onClick={() => onNav("profile")}>Profile</li>
          <li onClick={() => onNav("signin")}>Sign In</li>
          <li onClick={() => onNav("signup")}>Sign Up</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
