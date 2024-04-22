const ImageShow = ({ image }) => {
  console.log(image);
  const { alt_description, color, urls } = image;
  const { regular } = urls;

  return (
    <div className={` p-4 bg-transparent shadow-md`}>
      <img
        src={regular}
        alt={alt_description}
        className="w-full h-full object-cover aspect-square rounded-lg hover:scale-110 transition-all duration-500"
      />
    </div>
  );
};

export default ImageShow;
