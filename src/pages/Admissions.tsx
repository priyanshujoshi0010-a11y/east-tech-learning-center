import { useState } from "react";
import { CheckCircle2, CreditCard, FileText } from "lucide-react";

const Admissions = () => {
  const steps = [
    { icon: <FileText size={40} />, title: "Fill Application Form", description: "Complete the online or offline admission form with your personal and educational details." },
    { icon: <FileText size={40} />, title: "Submit Documents", description: "Provide copies of required documents including educational certificates and ID proof." },
    { icon: <CreditCard size={40} />, title: "Pay Fees", description: "Pay the course fees through cash, card, UPI, or online transfer." },
    { icon: <CheckCircle2 size={40} />, title: "Confirmation", description: "Receive admission confirmation and course commencement details." },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    email: "",
    phone: "",
    course: "",
    previousQualification: "",
    schoolName: "",
    board: "",
    passingYear: "",
    percentage: "",
    additionalInfo: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxXArMBa4Sd04tNm0dF6-tNlvMUIk630Lj0CfzzglXEH2nhoamEooobZRAwSNTBdW0/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setStatus("✅ Form submitted successfully!");
      setFormData({
        fullName: "",
        fatherName: "",
        motherName: "",
        dob: "",
        gender: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        email: "",
        phone: "",
        course: "",
        previousQualification: "",
        schoolName: "",
        board: "",
        passingYear: "",
        percentage: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Error submitting form.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12 sm:py-16 text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
          Admissions
        </h1>
        <p className="text-base sm:text-lg opacity-90">
          Start your journey to a successful tech career today
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-3 sm:px-0">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary py-4 sm:py-6 text-center text-white px-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
                Complete Admission Form
              </h2>
              <p className="opacity-90 mt-1 sm:mt-2 text-xs sm:text-sm">
                Please fill all details carefully
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {Object.keys(formData).map((key) =>
                key === "additionalInfo" ? (
                  <div key={key} className="col-span-1 sm:col-span-2">
                    <label className="block mb-1 text-sm font-semibold text-gray-700">
                      Additional Info / Queries
                    </label>
                    <textarea
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      placeholder="Enter your queries or other info..."
                      className="w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 transition p-3 rounded-lg resize-none text-sm sm:text-base"
                      rows={4}
                    />
                  </div>
                ) : (
                  <div key={key}>
                    <label className="block mb-1 text-sm font-semibold text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type={key === "dob" ? "date" : "text"}
                      name={key}
                      placeholder={`Enter your ${key.replace(/([A-Z])/g, " $1")}`}
                      required
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 transition p-3 rounded-lg text-sm sm:text-base"
                    />
                  </div>
                )
              )}

              <button
                type="submit"
                className="col-span-1 sm:col-span-2 mt-3 sm:mt-4 bg-primary text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-200 w-full"
              >
                Submit Application
              </button>
              {status && (
                <p className="col-span-1 sm:col-span-2 text-center mt-3 sm:mt-4 text-primary font-medium animate-pulse text-sm sm:text-base">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
