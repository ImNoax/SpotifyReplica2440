import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Player from "./Player";

export default function Footer() {
  function loadPlayer(pathname) {
    if (pathname.startsWith("/playlist")) {
      return <Player />;
    } else {
      return (
        <div>
          <p>
            Choisir une playlist à travers la
            <NavLink to="/index">Bibliothèque</NavLink> pour la faire jouer
          </p>
        </div>
      );
    }
  }
  return (
    <footer id="playing-bar">
      {loadPlayer(useLocation().pathname)}
      <div id="creators">
        <p>2151371</p>
        <p>2183714</p>
      </div>
    </footer>
  );
}
