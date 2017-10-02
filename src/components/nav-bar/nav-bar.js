import React from 'react';
import '../../App.css';

const NavBar = () => (
  <div id="NavBar">
    <div id="Title">
      <div className="MenuItem">
        Daniel&apos;s Imgur
      </div>
    </div>
    <div className="NavLinks">
      <a href="https://github.com/danielmarcgardner/imgur-photo-viewer">
        <div className="MenuItem">
        GitHub Code
        </div>
      </a>
    </div>
  </div>
);

export default NavBar;
