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

        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
  );
};

export default LightBox;
