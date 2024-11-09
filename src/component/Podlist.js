import React from "react";
import ReactPlayer from "react-player";
import "./podlist.css";
import { cardActionAreaClasses } from "@mui/material";
import AudioPlayer from "./Audio";

const podcast = [
  {
    id: 1,
    name: "Poscast 1",
    genre: "Comedy",
  },
  {
    id: 2,
    name: "Poscast 2",
    genre: "Horror",
  },
  {
    id: 3,
    name: "Poscast 3",
    genre: "sci",
  },
  {
    id: 4,
    name: "Poscast 4",
    genre: "Comedy",
  },
  {
    id: 5,
    name: "Poscast 5",
    genre: "Horror",
  },
];

const Podlist = () => {
  return (
    <div>
      <div className="podcast-page">
        <h1 className="page-title">Podcast List</h1>
        <div className="podcast-list">
          {podcast.map((podcast, index) => (
            <div key={index} className="podcast-card">
              <h2 className="podcast-id">{podcast.id}{<AudioPlayer />}</h2>
              <p className="podcast-genre">{podcast.genre}</p>
              <p className="podcast-name">{podcast.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podlist;
