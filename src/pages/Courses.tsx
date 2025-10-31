import CourseCard from "@/components/CourseCard";

const Courses = () => {
  const courses = [
    {
      name: "PGDCA - Post Graduate Diploma in Computer Applications",
      description: "Comprehensive program covering advanced computer applications, programming, and software development.",
      duration: "1 Year",
      price: "₹25,000",
      discount: "10% OFF",
      details: `
        <h4 class="font-semibold mb-2">Course Overview:</h4>
        <p class="mb-4">The PGDCA program is designed for graduates who want to enhance their computer skills and knowledge. This course covers a wide range of topics including programming languages, database management, web technologies, and software engineering.</p>
        
        <h4 class="font-semibold mb-2">What You'll Learn:</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>Programming in C, C++, Java</li>
          <li>Database Management Systems (SQL, Oracle)</li>
          <li>Web Development (HTML, CSS, JavaScript)</li>
          <li>Operating Systems and Computer Networks</li>
          <li>Software Engineering and Project Management</li>
        </ul>
        
        <h4 class="font-semibold mb-2">Eligibility:</h4>
        <p>Graduation in any discipline</p>
      `,
    },
    {
      name: "DCA - Diploma in Computer Applications",
      description: "Fundamental computer course covering basics of computing, office automation, and internet applications.",
      duration: "6 Months",
      price: "₹15,000",
      details: `
        <h4 class="font-semibold mb-2">Course Overview:</h4>
        <p class="mb-4">DCA is a foundational course perfect for beginners who want to build a career in computers. This course provides essential computer skills required in today's digital workplace.</p>
        
        <h4 class="font-semibold mb-2">What You'll Learn:</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>Computer Fundamentals and MS Office</li>
          <li>Internet and Email Management</li>
          <li>Basic Programming Concepts</li>
          <li>Typing Skills (English and Hindi)</li>
          <li>Digital Documentation</li>
        </ul>
        
        <h4 class="font-semibold mb-2">Eligibility:</h4>
        <p>10+2 or equivalent</p>
      `,
    },
    {
      name: "Web Designing",
      description: "Learn to create stunning, responsive websites using modern web technologies and design principles.",
      duration: "4 Months",
      price: "₹18,000",
      discount: "Early Bird 15% OFF",
      details: `
        <h4 class="font-semibold mb-2">Course Overview:</h4>
        <p class="mb-4">Master the art of creating beautiful, functional websites. This course covers everything from design principles to coding modern, responsive web pages.</p>
        
        <h4 class="font-semibold mb-2">What You'll Learn:</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>HTML5 and CSS3</li>
          <li>JavaScript and jQuery</li>
          <li>Responsive Design with Bootstrap</li>
          <li>WordPress CMS</li>
          <li>UI/UX Design Principles</li>
          <li>Portfolio Project Development</li>
        </ul>
        
        <h4 class="font-semibold mb-2">Career Opportunities:</h4>
        <p>Web Designer, Frontend Developer, Freelance Designer</p>
      `,
    },
    {
      name: "Certificate in Computer Applications",
      description: "Short-term certificate program for quick skill development in essential computer applications.",
      duration: "3 Months",
      price: "₹10,000",
      details: `
        <h4 class="font-semibold mb-2">Course Overview:</h4>
        <p class="mb-4">A compact course designed to quickly build essential computer skills for personal and professional use.</p>
        
        <h4 class="font-semibold mb-2">What You'll Learn:</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>MS Word, Excel, PowerPoint</li>
          <li>Email and Internet Basics</li>
          <li>File Management</li>
          <li>Basic Typing Skills</li>
          <li>Computer Hardware Basics</li>
        </ul>
      `,
    },
    {
      name: "Tally ERP 9 with GST",
      description: "Complete accounting software training with GST implementation for finance and accounting professionals.",
      duration: "2 Months",
      price: "₹12,000",
      details: `
        <h4 class="font-semibold mb-2">Course Overview:</h4>
        <p class="mb-4">Become proficient in Tally ERP 9, the most popular accounting software in India, with special focus on GST compliance.</p>
        
        <h4 class="font-semibold mb-2">What You'll Learn:</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>Company Creation and Configuration</li>
          <li>Accounting Vouchers and Entries</li>
          <li>Inventory Management</li>
          <li>GST Implementation and Returns</li>
          <li>Banking and Reconciliation</li>
          <li>Financial Statements and Reports</li>
        </ul>
        
        <h4 class="font-semibold mb-2">Career Opportunities:</h4>
        <p>Accountant, Accounts Executive, Tally Operator, Finance Assistant</p>
      `,
    },
    {
      name: "DTP - Desktop Publishing",
      description: "Learn professional document design and publishing using industry-standard software.",
      duration: "3 Months",
      price: "₹14,000",
      details: `
        <h4 class="font-semibold mb-2">Course Overview:</h4>
        <p class="mb-4">Master desktop publishing tools to create professional documents, brochures, and publications.</p>
        
        <h4 class="font-semibold mb-2">What You'll Learn:</h4>
        <ul class="list-disc pl-5 mb-4">
          <li>Adobe Photoshop</li>
          <li>CorelDRAW</li>
          <li>Adobe InDesign</li>
          <li>PageMaker</li>
          <li>Logo and Banner Design</li>
          <li>Print and Digital Publishing</li>
        </ul>
        
        <h4 class="font-semibold mb-2">Career Opportunities:</h4>
        <p>Graphic Designer, DTP Operator, Print Designer</p>
      `,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Courses
          </h1>
          <p className="text-xl opacity-90">
            Choose from our wide range of professional computer education programs
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
            Still Confused About Which Course to Choose?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Talk to our counselors and get personalized course recommendations
          </p>
          <a
            href="https://wa.me/917876814326?text=Hello%20Easy%20Tech%20Learning%20Center,%20I%20need%20help%20choosing%20the%20right%20course."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Free Counseling
          </a>
        </div>
      </section>
    </div>
  );
};

export default Courses;
