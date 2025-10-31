import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "10+", label: "Years Experience" },
    { number: "15+", label: "Courses Offered" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Easy Tech Learning Center
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Empowering students with quality computer education in Rampur Bushahr, Himachal Pradesh
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-8 text-primary">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Easy Tech Learning Center (ETLC) was established with a vision to provide quality computer education to students in Rampur Bushahr and surrounding areas. Over the years, we have grown from a small training center to a recognized institution for computer education in Himachal Pradesh.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our commitment to excellence and student success has made us the preferred choice for computer education. We offer university-affiliated diploma programs and professional certificate courses that combine theoretical knowledge with practical skills.
              </p>
              <p className="text-lg text-muted-foreground">
                With experienced faculty, modern infrastructure, and a student-centric approach, we have successfully trained hundreds of students who are now working in various IT companies and organizations across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-lg p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To provide accessible, affordable, and quality computer education that equips students with industry-relevant skills and knowledge. We aim to bridge the gap between academic learning and industry requirements, enabling our students to excel in their chosen careers.
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-lg p-8">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Eye className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To be the leading computer education center in Himachal Pradesh, recognized for excellence in teaching, innovative curriculum, and outstanding student outcomes. We envision creating a tech-savvy generation that contributes to India's digital growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary">
            Why Choose ETLC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Award className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-heading font-semibold mb-2">
                University Affiliated
              </h3>
              <p className="text-muted-foreground">
                Our diploma programs are affiliated with recognized universities, ensuring valid and recognized certifications.
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Users className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Expert Faculty
              </h3>
              <p className="text-muted-foreground">
                Learn from experienced professionals who bring real-world industry knowledge to the classroom.
              </p>
            </div>
            <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Target className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Practical Training
              </h3>
              <p className="text-muted-foreground">
                Hands-on experience with real projects, ensuring you're job-ready from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Join Our Community of Successful Students
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards a rewarding tech career
          </p>
          <a
            href="/contact"
            className="inline-block bg-card text-primary px-8 py-3 rounded-lg font-semibold hover:bg-card/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
