
function Slider() {
  return (
    <div id="homeSlider" className="carousel slide"
      data-bs-ride="carousel" data-bs-interval="3000">

      <div className="carousel-indicators">
        <button data-bs-target="#homeSlider" data-bs-slide-to="0"
          className="active"></button>
        <button data-bs-target="#homeSlider" data-bs-slide-to="1"></button>
        <button data-bs-target="#homeSlider" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400"
            className="d-block w-100 slider-img"
            alt="Technology"
          />
          <div className="carousel-caption">
            <h1>Welcome to My Website</h1>
            <p>Explore our digital world</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400"
            className="d-block w-100 slider-img"
            alt="Teamwork"
          />
          <div className="carousel-caption">
            <h1>Creative Ideas</h1>
            <p>Innovation and Creativity</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400"
            className="d-block w-100 slider-img"
            alt="Workspace"
          />
          <div className="carousel-caption">
            <h1>Discover Our Services</h1>
            <p>Building a Better Future</p>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev"
        type="button" data-bs-target="#homeSlider"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next"
        type="button" data-bs-target="#homeSlider"
        data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Slider;
