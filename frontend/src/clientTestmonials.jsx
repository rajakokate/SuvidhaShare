import React from "react";
import { motion } from "framer-motion";

export default function ClientTestimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-300 to-yellow-200 flex justify-center">
      <div className="max-w-6xl text-center">
        <motion.h2 
          className="text-gray-800 text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { quote: "Vibrant and encouraging enthusiasm", text: "Absolutely fulfilling project collaboration. Rio turned all of our ideas into beautiful visual tools – all while maintaining a vibrant and encouraging enthusiasm.", name: "Crowd Zero, Shopping Platform" },
            { quote: "A truly inspiring designer", text: "Rio’s grasp of digital art is truly inspiring. You’ll surely learn a lot of amazing stuff during the project process with Rio.", name: "Sari Purdue, Social Media Influencer" },
            { quote: "Add a one-liner testimonial", text: "Boost your product and service’s credibility by adding testimonials from your clients. People love recommendations so feedback from others who’ve tried it is invaluable.", name: "Viggo Cimmaron, Online Store Owner" }
          ].map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-green-700 italic font-medium">"{testimonial.quote}"</p>
              <hr className="my-4 border-t-2 border-yellow-400 w-16 mx-auto" />
              <p className="text-gray-700">{testimonial.text}</p>
              <p className="mt-4 font-semibold text-gray-900">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}