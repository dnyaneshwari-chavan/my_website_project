
const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites using the latest technologies.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating attractive, creative and user-friendly website designs.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600'
  },
  {
    title: 'Digital Solutions',
    description: 'Providing smart and innovative digital solutions for business.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600'
  }
];

function Services() {
  return (
    <>
      {/* Services Header */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Our Services</h1>
          <p className="text-muted">
            We provide the best digital services for your business.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="container py-5">
        <div className="row">

          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>

              <div className="card shadow h-100">

                <img
                  src={service.image}
                  className="card-img-top service-img"
                  alt={service.title}
                />

                <div className="card-body text-center d-flex flex-column">

                  <h3 className="card-title">
                    {service.title}
                  </h3>

                  <p className="card-text">
                    {service.description}
                  </p>

                  <button className="btn btn-outline-primary mt-auto">
                    Read More
                  </button>

                </div>
              </div>

            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default Services;
