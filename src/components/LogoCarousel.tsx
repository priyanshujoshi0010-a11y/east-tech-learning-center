const logos = [
  "Gashwa_CorelDraw.png",
  "Gashwa_css.png",
  "Gashwa_figma.png",
  "Gashwa_html.png",
  "Gashwa_js.png",
  "gashwa_node_js.png",
  "Gashwa_photoshop.png",
  "Gashwa_php.png",
  "Gashwa_sopify.png",
  "Gashwa_wordpress.png",
];

const LogoCarousel = () => {
  return (
    <section className="py-12 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-3xl font-heading font-bold text-center text-primary">
          Our Industry Partners
        </h2>
      </div>
      <div className="relative">
        <div className="flex logo-carousel">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 h-32 mx-4 bg-card rounded-lg shadow-md flex items-center justify-center"
            >
              <img
                src={`/logos/${logo}`}
                alt={logo.replace(".png", "")}
                className="object-contain h-24 w-auto" // increased height
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
