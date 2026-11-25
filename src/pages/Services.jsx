

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and modern websites.'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating attractive and user-friendly designs.'
    },
    {
      title: 'Digital Solutions',
      description: 'Providing smart digital solutions for business.'
    }
  ];

  return (
    <section className="container py-5">
      <h1 className="text-center mb-4">Our Services</h1>

      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100 p-4 text-center">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="btn btn-outline-primary mt-auto">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
