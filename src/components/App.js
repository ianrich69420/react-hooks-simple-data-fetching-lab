// create your App component here
import React, { useState, useEffect } from "react";

export default function App() {
  const [image, setImage] = useState(null);

  const API = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setImage(data.message));
  }, []);

  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}