
function About() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
            className="img-fluid rounded shadow"
            alt="Our team"
          />
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <h1>About Us</h1>
          <p>
            Welcome to My Website. We are passionate about
            providing modern and creative digital solutions.
          </p>
          <p>
            Our goal is to deliver quality services and
            create a better experience for our customers.
          </p>
          <button className="btn btn-primary">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;
