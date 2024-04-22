import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSeach = async (term) => {
    // console.log(`Are you sure you want to search images for ${term}`);
    const results = await searchImages(term);
    setImages(results);
  };

  console.log(images);

  return (
    <div>
      <SearchBar onSearch={handleSeach} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
