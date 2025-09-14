import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import map from "../assets/map.png";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://balrakshabharat.org/wp-content/uploads/2025/08/Hero-banner-Mobile-1.png",
      title: "UTTARKASHI FLASH FLOODS EMERGENCY",
      subtitle: "HELP US REACH FAMILIES IN CRISES",
      buttonText: "Donate Now",
      buttonColor: "bg-white text-gray-800",
      backgroundColor: "bg-gradient-to-r from-teal-400 to-teal-500",
      imageSource: "Image Source: Times of India"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=400&fit=crop",
      title: "EMPOWERING COMMUNITIES:",
      subtitle: "CELEBRATING THREE YEARS OF IMPACTFUL CHANGE (2020-2023)",
      buttonText: "Read Now",
      buttonColor: "bg-white text-gray-800",
      backgroundColor: "bg-gradient-to-r from-yellow-400 to-orange-400"
    },
    {
      id: 3,
      image: "https://balrakshabharat.org/wp-content/uploads/2024/09/HB1_Sept.webp",
      title: "IN CLOSE COORDINATION:",
      subtitle: "WORKING AND ENGAGING WITH THE GOVERNMENT TO DRIVE CHANGE",
      buttonText: "Learn More",
      buttonColor: "bg-white text-gray-800",
      backgroundColor: "bg-gradient-to-r from-purple-400 to-pink-400"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  const fields = [
    {
      label: "Education",
      icon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/education.webp",
      img: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/shiksha-tab.webp",
      heading: "Shiksha ki Raksha, Bhavishya ki Raksha!",
      desc: "From early childhood to adolescence, quality education unlocks human potential. We champion inclusive learning, safe classrooms and digital access to remove barriers across communities.",
    },
    {
      label: "Health",
      icon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/health.webp",
      img: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/healthtab.webp",
      heading: "Arogya ki Raksha, Bhavishya ki Raksha!",
      desc: "Ensuring health, nutrition, and well-being for children across India through awareness drives, healthcare access and community collaboration.",
    },
    {
      label: "Resilience",
      icon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/resilience.webp",
      img: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/reslietab.webp",
      heading: "TANAAV SE RAKSHA,BHAVISHYA ki RAKSHA!",
      desc: "Build their resilience through community-centred adaptation - from strengthening local governance and schools to providing green livelihoods and building technologies like early warning systems for communities.",
    },
    {
      label: "Livelihood",
      icon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/nutrition.webp",
      img: "	https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/nutritab.webp",
      heading: "POSHAN ki RAKSHA,BHAVISHYA RAKSHA!",
      desc: "Bharat has championed pertinent ways to upskilling women and girls and boosting the incomes of vulnerable families from rural communities. Bridging skill gaps that accelerate advancement, our programmes offer digital literacy, vocational training, and access to government schemes.",
    },
    {
      label: "Protection",
      icon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/protection.webp",
      img: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/protectiontab.webp",
      heading: "SHOSHAN SE RAKSHA,BHAVISHYA ki RAKSHA!",
      desc: "As front-runners to safeguarding India's children from exploitation, Bal Raksha Bharat tirelessly fights trafficking, child labour, early marriage and more. From cementing legislation to system reforms, our interventions span awareness drives, psychosocial support, online safety training and beyond.",
    },
    {
      label: "Humanitarian",
      icon: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/inclusion.webp",
      img: "https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/inclutab.webp",
      heading: "SAMAANTA KI RAKSHA,BHAVISHYA ki RAKSHA!",
      desc: "Since 2004, Bal Raksha Bharat has tirelessly worked to aid over 600,000 across 40+ emergencies as early responders- being the first to reach and last to leave. From cyclones to floods, our response includes providing supplies, rebuilding efforts and creating child-friendly spaces - ensuring education, protection and care with children at the centre of all our response work.",
    },
  ];

  const [selectedField, setSelectedField] = useState(fields[0]);
  return (
    <div className="space-y-16">
      <div className="relative w-full h-screen overflow-hidden">
      {/* Main Content */}
      <div className="flex h-full">
        {/* Left Image Section */}
        <div className="relative w-3/4 h-full">
          <img
            src={currentSlideData.image}
            alt="Slide image"
            className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          />
          
          {/* Image Source Attribution */}
          {currentSlideData.imageSource && (
            <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              {currentSlideData.imageSource}
            </div>
          )}
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Right Content Section */}
        <div className={`w-1/4 h-full flex flex-col justify-center items-start p-8 transition-all duration-500 ease-in-out ${currentSlideData.backgroundColor}`}>
          <div className="text-white">
            <h1 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h1>
            <h2 className="text-xl lg:text-2xl font-bold mb-8 leading-tight">
              {currentSlideData.subtitle}
            </h2>
            
            <button className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 ${currentSlideData.buttonColor}`}>
              {currentSlideData.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 text-white py-4">
        <div className="flex justify-between items-center px-8">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">ANNUAL REPORT 2025</span>
            <span className="text-sm">Unlocking Potentials</span>
          </div>
          <button className="text-gray-300 hover:text-white transition-colors">
            Read Now
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
      {/* Fields of Work */}
      <section className="bg-gradient-to-b from-red-50 to-white py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold uppercase text-red-600 tracking-wide">
              Our Fields of Work
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-4">
            {fields.map((f, i) => (
              <button
                key={i}
                onClick={() => setSelectedField(f)}
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="bg-white rounded-full shadow-lg p-4 mb-2 transition-transform duration-200 group-hover:scale-110">
                  <img src={f.icon} alt={f.label} className="h-12 w-12" />
                </div>
                <span
                  className={`text-sm font-semibold ${
                    selectedField.label === f.label
                      ? "text-red-600"
                      : "text-gray-700"
                  } group-hover:text-red-600 transition-colors`}
                >
                  {f.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Field Details */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src={selectedField.img}
              alt={selectedField.label}
              className="w-full h-[220px] md:h-[300px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 w-full space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold text-red-700">
              {selectedField.heading}
            </h3>
            <p className="text-gray-700 text-lg">{selectedField.desc}</p>
            <Link
              to="/about"
              className="inline-block bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-500 hover:to-red-600 text-white px-6 py-2 rounded-full font-semibold shadow transition-all"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-8">SUCCESS STORIES</h2>
        
        <p className="text-gray-700 text-center mb-12 max-w-6xl mx-auto leading-relaxed">
          Bal Raksha Bharat's interventions have empowered countless marginalised children to transform their own lives. From the slums of Delhi to remote rural reaches, we have 
          witnessed stories of triumph in the face of child marriage, poverty, health struggles and more. The organisation's investment in instilling skills, mindsets, and values is fuelling 
          journeys to education, financial independence and advocacy roles within communities. Be it defeating poverty or combating chronic diseases, success stories speak of incredible 
          resilience and change catalysed in the most vulnerable communities. These tales of determination showcase how with the right support, the most vulnerable can build futures 
          of security, self-reliance, and dignity. Bal Raksha Bharat continues to kindle their indomitable spirit, seeding systemic transformation - one child at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Story 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="	https://balrakshabharat.org/wp-content/uploads/2025/09/IMG_7911.png" 
              alt="Group photo of community members" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-red-600 font-bold text-lg mb-2">Breaking Barriers In Learning: The Story Of Ramya Madam</h3>
              <p className="text-gray-600 text-sm">
                At PMSHRI GHPS Channamanahalli, Ramanagara (Karnataka), TGT Teacher Ramya Paul is redefining the way children learn. As part of the Bosch Bridge Foundation Program, she embraced innovative teaching...
              </p>
              <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Read More</button>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="	https://balrakshabharat.org/wp-content/uploads/2025/05/Thumbnail.png" 
              alt="Young girl with educational materials" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-red-600 font-bold text-lg mb-2">Hinal - A Youth Champion Transforming Her Community</h3>
              <p className="text-gray-600 text-sm">
                Hinal's Voice is breaking the numbing silence around Periods' In the tribal heartland of Dungarpur, Rajasthan, a quiet revolution is being led by a spirited young girl —Hinal, a passionate...
              </p>
              <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Read More</button>
            </div>
          </div>

          {/* Story 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="	https://balrakshabharat.org/wp-content/uploads/2025/04/story-4.png" 
              alt="Young person in classroom setting" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-red-600 font-bold text-lg mb-2">Rising Beyond Challenges: Ayan's Journey From Struggle To Leadership</h3>
              <p className="text-gray-600 text-sm">
                "When you empower yourself, you empower the community," mentioned by young Ayan. Seventeen-year-old Mohamad Ayan, a student of Government Pre-University College, Rajajinagar, Bengaluru,...
              </p>
              <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Read More</button>
            </div>
          </div>

          {/* Story 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://balrakshabharat.org/wp-content/uploads/2025/04/story-3.png" 
              alt="Mother and child in rural setting" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-red-600 font-bold text-lg mb-2">A Mother's Fight For Her Child's Health</h3>
              <p className="text-gray-600 text-sm">
                Introduction: A Mother's Struggle for Survival In the quiet village of Chiriya, nestled within Jamunaha Block of Shravasti district, Kanchan welcomed her son, Ganesh (name changed), into the...
              </p>
              <button className="mt-4 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Campaigns Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">ONGOING CAMPAIGNS WHICH NEED YOUR SUPPORT</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Campaign 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Children with school bags walking" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Every child deserves to learn. Help them thrive.</h3>
                <p className="text-gray-600 mb-4">
                  Education empowers every future. Donate to Bal Raksha Bharat India and support quality learning for children everywhere.
                </p>
                <p className="text-gray-600 mb-6">Together, let's ensure no child is left behind.</p>
                <button className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>

            {/* Campaign 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Adult helping children in outdoor setting" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Join us in making a difference.</h3>
                <p className="text-gray-600 mb-6">
                  Since 2004, we have partnered with the Government of India to empower over 10 million children. Your support allows us to reach even more children and ensure they can access a safe and nurturing environment.
                </p>
                <button className="w-full bg-pink-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-500 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>

            {/* Campaign 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="	https://balrakshabharat.org/wp-content/themes/ngo/images/nwhmpg/edu-camp.webp" 
                alt="Children in modern classroom with technology" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's use technology to ignite young minds.</h3>
                <p className="text-gray-600 mb-6">
                  Join us in creating vibrant learning hubs for children nationwide. Donate to the "Making Schools Smart" project and equip 50 schools with STEM labs and smart classrooms, fostering scientific thinking and empowering future generations.
                </p>
                <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* India Map + Hover States */}
      <section className="py-14 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold uppercase text-red-600">
            Programmes across India
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We implement our programmes in many states across India, targeting
            health, education, child protection, disaster resilience, and more.
          </p>

          <div className="relative w-full max-w-lg mx-auto">
            <img
              src={map}
              className="mx-auto w-full rounded-xl shadow-lg"
              alt="India Map"
            />

            {/* Jammu & Kashmir */}
            <div className="absolute top-[10%] left-[33%] w-5 h-5 bg-red-600 opacity-40 rounded-full cursor-pointer group">
              <span className="absolute left-8 top-0 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Jammu & Kashmir
              </span>
            </div>

            {/* Himachal Pradesh */}
            <div className="absolute top-[13%] left-[24%] w-5 h-5 bg-red-600 opacity-40 rounded-full cursor-pointer group">
              <span className="absolute left-8 top-0 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Himachal Pradesh
              </span>
            </div>

            {/* Punjab */}
            <div className="absolute top-[19%] left-[33%] w-5 h-5 bg-red-600 opacity-40 rounded-full cursor-pointer group">
              <span className="absolute left-8 top-0 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Punjab
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
