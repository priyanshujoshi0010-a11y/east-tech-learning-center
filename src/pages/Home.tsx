import HeroSlider from "@/components/HeroSlider";
import EnquiryForm from "@/components/EnquiryForm";
import LogoCarousel from "@/components/LogoCarousel";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <GraduationCap size={48} />,
      title: "Expert Faculty",
      description: "Learn from experienced professionals with industry knowledge",
    },
    {
      icon: <BookOpen size={48} />,
      title: "Practical Training",
      description: "Hands-on experience with real-world projects and case studies",
    },
    {
      icon: <Award size={48} />,
      title: "Recognized Certificates",
      description: "University-affiliated programs with valid certifications",
    },
    {
      icon: <Users size={48} />,
      title: "Job Assistance",
      description: "Career guidance and placement support for students",
    },
  ];

  return (
    <div>
      <HeroSlider />
      <div className="container mx-auto px-4 pb-16">
        <EnquiryForm />
      </div>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-primary">
            Why Choose Easy Tech Learning Center?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of students who have transformed their careers with us
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/courses"
              className="inline-block bg-card text-primary px-8 py-3 rounded-lg font-semibold hover:bg-card/90 transition-colors"
            >
              View All Courses
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
