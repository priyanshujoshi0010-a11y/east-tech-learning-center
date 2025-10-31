import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    const message = `Hello Easy Tech Learning Center, my name is ${formData.name}. I am interested in ${formData.course || "your courses"}. Please share details about fees and admission. Email: ${formData.email}, Phone: ${formData.phone} - from website`;
    const whatsappUrl = `https://wa.me/918894066639?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
    
    setFormData({ name: "", course: "", email: "", phone: "" });
  };

  return (
    <div className="bg-card shadow-lg rounded-lg p-6 max-w-2xl mx-auto -mt-16 relative z-10">
      <h3 className="text-2xl font-heading font-bold text-center mb-4 text-primary">
        Quick Enquiry
      </h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Your Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <Input
          placeholder="Course Interested In"
          value={formData.course}
          onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="tel"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <div className="md:col-span-2">
          <Button type="submit" className="w-full" size="lg">
            Send Enquiry
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
