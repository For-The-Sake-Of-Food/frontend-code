"use client";
import Footer from "@/components/Footer";

const Nutribot = () => {
  return (
    <div>
      <iframe
        src="https://api.chefgpt.xyz/embed/SrWIbhA1Wq4RTfjIOpBh/Kr8Eq5Ug4ZKnprNY5heY"
        width="100%"
       
        style={{ height: "100%", minHeight: "500px", marginLeft: "20px" }}
      ></iframe>
   <div className="bg-[#E7F9FD] w-full">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutribot;
