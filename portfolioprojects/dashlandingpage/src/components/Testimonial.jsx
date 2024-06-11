const DUMMY_TESTIMONIES = [
  {
    img: "path/to/image1.jpg",
    title: "Amazing Service!",
    words:
      "This service has significantly improved our productivity and efficiency. Highly recommend it to everyone!",
    name: "John Doe",
    position: "CEO, Company A",
  },
  {
    img: "path/to/image2.jpg",
    title: "Fantastic Support!",
    words:
      "The support team was very responsive and helped us resolve all issues quickly. Great experience!",
    name: "Jane Smith",
    position: "CTO, Company B",
  },
  {
    img: "path/to/image3.jpg",
    title: "Great Value!",
    words:
      "The templates are versatile and easy to customize. We saved a lot of time and resources using this service.",
    name: "Michael Johnson",
    position: "Product Manager, Company C",
  },
];

const Testimonial = () => {
  return (
    <main className="bg-slate-100 p-6 max-w-large  m-auto rounded-lg">
      <h2 className="text-2xl font-semibold  mt-8 text-center mb-8">
        What Our Clients Say
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_TESTIMONIES.map((testimony, index) => (
          <article key={index} className="bg-white p-4 shadow-lg rounded-lg">
            <img
              src={testimony.img}
              alt={testimony.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg text-center font-bold mb-2">
              {testimony.title}
            </h3>
            <p className="italic mb-4">{testimony.words}</p>
            <div className=" text-center">
              <p className="font-semibold">{testimony.name}</p>
              <p className="text-sm text-gray-600">{testimony.position}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Testimonial;
