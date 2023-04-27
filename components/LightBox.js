const LightBox = ({ clickedImg, setClickedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg.imageUrl} alt="bigger pic" />
        <p className="bg-gray-300 p-2 ">{clickedImg.description}</p>

        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
};

export default LightBox;
