
import Slider from '../components/Slider';

function Home() {
  return (
    <>
      <Slider />

      <section className="container text-center py-5">
        <h1>Welcome to My Website</h1>
        <p className="lead">
          We provide creative and modern digital solutions.
        </p>

        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <div className="card p-4 shadow-sm h-100">
              <h3>Quality</h3>
              <p>We focus on quality and customer satisfaction.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 shadow-sm h-100">
              <h3>Innovation</h3>
              <p>We believe in new ideas and creativity.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 shadow-sm h-100">
              <h3>Support</h3>
              <p>We provide reliable customer support.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
