import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Course {
  name: string;
  description: string;
  duration: string;
  price: string;
  discount?: string;
  details: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleEnquire = () => {
    const message = `Hello Easy Tech Learning Center, I am interested in ${course.name}. Please share details about fees and admission. Thank you! - from website`;
    const whatsappUrl = `https://wa.me/918894066639?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="bg-gradient-to-r from-primary to-secondary p-6">
          <h3 className="text-2xl font-heading font-bold text-primary-foreground">
            {course.name}
          </h3>
        </div>
        <div className="p-6">
          <p className="text-muted-foreground mb-4">{course.description}</p>
          <div className="space-y-2 mb-4">
            <p className="text-sm">
              <span className="font-semibold">Duration:</span> {course.duration}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">{course.price}</span>
              {course.discount && (
                <Badge variant="destructive">{course.discount}</Badge>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => setShowDetails(true)}
              variant="outline"
              className="flex-1"
            >
              View Details
            </Button>
            <Button onClick={handleEnquire} className="flex-1">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold text-primary">
              {course.name}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">{course.description}</p>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Duration:</span> {course.duration}
              </p>
              <p>
                <span className="font-semibold">Fee:</span> {course.price}
              </p>
            </div>
            <div className="prose prose-sm">
              <div dangerouslySetInnerHTML={{ __html: course.details }} />
            </div>
            <Button onClick={handleEnquire} className="w-full">
              Enquire About This Course
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CourseCard;
