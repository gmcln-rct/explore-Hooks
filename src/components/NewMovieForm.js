import React, { useContext, useState } from "react";
import { movieContext } from "../contexts/movieContext";

const NewmovieForm = () => {
    const { addmovie } = useContext(movieContext);
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addmovie(title, director, year);
        setTitle("");
        setDirector("");
        setYear("");
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="movie Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Director Name"
        value={director}
        onChange={e => setDirector(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
      />
      <input type="submit" value="Add movie" />
    </form>
  );
};

export default NewmovieForm;