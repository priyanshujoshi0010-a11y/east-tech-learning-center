import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const PopupEnquiry = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
  });

  useEffect(() => {
    const hasShown = sessionStorage.getItem("popupShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("popupShown", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in name and phone number");
      return;
    }

    const message = `Hello Easy Tech Learning Center, my name is ${formData.name}. I am interested in ${formData.course || "your courses"}. Phone: ${formData.phone} - from website popup`;
    const whatsappUrl = `https://wa.me/917876814326?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
    toast.success("Opening WhatsApp...");
  };

  const handleEmail = () => {
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in name and phone number");
      return;
    }

    const subject = `Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nCourse Interested: ${formData.course || "Not specified"}\n\nPlease share details about fees and admission.`;
    const mailtoUrl = `mailto:priyanshujoshi0010@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    setIsOpen(false);
    toast.success("Opening email client...");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold text-primary">
            Get Course Details!
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Input
            placeholder="Your Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Input
            placeholder="Course Interested In"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handleWhatsApp} className="flex-1">
              Send via WhatsApp
            </Button>
            <Button onClick={handleEmail} variant="secondary" className="flex-1">
              Send Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupEnquiry;
