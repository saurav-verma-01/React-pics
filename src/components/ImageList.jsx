import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  return (
    <div className="bg-blue-100 h-full mb-1 py-8">
      <div className="max-w-7xl p-8 mx-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageShow key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
