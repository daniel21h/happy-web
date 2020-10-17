import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import mapMarkerImg from "../images/map-marker.svg";
import { useHistory, Link } from "react-router-dom";

import "../styles/components/sidebar.css";

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <aside className="sidebar-component">
      <Link to="/">
        <img src={mapMarkerImg} alt="Happy" />
      </Link>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
