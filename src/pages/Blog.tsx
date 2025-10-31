import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Top 10 Skills Every IT Professional Needs in 2025",
      excerpt: "Discover the most in-demand technical and soft skills that will help you succeed in the rapidly evolving tech industry.",
      date: "January 15, 2025",
      author: "ETLC Team",
      category: "Career Guidance",
    },
    {
      title: "Why Learning Tally is Essential for Accounting Careers",
      excerpt: "Explore how Tally ERP has become an indispensable tool in the accounting and finance industry, and why mastering it can boost your career prospects.",
      date: "January 10, 2025",
      author: "ETLC Team",
      category: "Course Insights",
    },
    {
      title: "Web Designing Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with these emerging web design trends that are shaping the future of digital experiences.",
      date: "January 5, 2025",
      author: "ETLC Team",
      category: "Industry Trends",
    },
    {
      title: "How to Choose the Right Computer Course for Your Career",
      excerpt: "A comprehensive guide to help you select the perfect computer course based on your career goals, interests, and industry demands.",
      date: "December 28, 2024",
      author: "ETLC Team",
      category: "Education Tips",
    },
    {
      title: "Success Stories: From ETLC Student to IT Professional",
      excerpt: "Read inspiring stories of our alumni who transformed their careers after completing courses at Easy Tech Learning Center.",
      date: "December 20, 2024",
      author: "ETLC Team",
      category: "Success Stories",
    },
    {
      title: "The Importance of Practical Training in Computer Education",
      excerpt: "Understanding why hands-on experience is crucial for computer education and how it prepares you for real-world challenges.",
      date: "December 15, 2024",
      author: "ETLC Team",
      category: "Education Tips",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-xl opacity-90">
            Stay updated with the latest in technology, education, and career guidance
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary to-secondary h-48 flex items-center justify-center">
                  <span className="text-primary-foreground text-6xl font-heading font-bold opacity-20">
                    ETLC
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-heading font-bold mb-3 text-foreground hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest articles, tips, and resources delivered to your WhatsApp
            </p>
            <a
              href="https://wa.me/917876814326?text=Hello%20ETLC,%20I%20want%20to%20subscribe%20to%20your%20blog%20updates."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Subscribe via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
