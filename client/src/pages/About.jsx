import React from "react";
import { FaTrophy, FaHandshake, FaBullhorn, FaLightbulb } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh]">
        <img
          src="	https://balrakshabharat.org/wp-content/uploads/2024/06/Creating-Irreversible-positive-1.webp" // Replace with your image path
          alt="Children"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white bg-red-600 px-4 py-2">
            CREATING IRREVERSIBLE POSITIVE CHANGE WITH AND FOR CHILDREN
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-10">
          BAL RAKSHA BHARAT OVERVIEW
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At Bal Raksha Bharat (also known as Save the Children), nurturing children is nurturing
            the promise of India. Since 2004, we have made it our mission to transform childhood
            landscapes nationwide through compassion, care and relentless efforts. We are steadfast
            in our resolve to help the children of India build a Secure Childhood and thus a Secure
            Future.
          </p>
          <p>
            Our approach at Bal Raksha Bharat is HOLISTIC as we address numerous aspects of
            childhood: access to health and nutrition, quality education, protection from harm,
            supporting with psychosocial needs and driving a well-rounded development of children.
            Protection from exploitation and access to equal opportunities help children thrive as
            architects of the nation’s future.
          </p>
          <p>
            We, at Bal Raksha Bharat, pledge to make every impact holistic for India’s children –
            but we cannot walk alone, because shaping young lives cannot happen in isolation. It
            calls for unified effort from communities, government and supporters. Collaborating with
            on-ground workers, policymakers and donors, we build an ecosystem where children can
            flourish.
          </p>
          <p>
            In 15 years, we have touched lives of over 1 crore young children through our outreach
            programmes. Between April 2022 and March 2023, we provided 13.8 lakh children across 15
            states with resources, support and opportunities to build a childhood they can cherish.
            Right from the inception of our work, we have been working right in the middle of
            communities, understanding ground realities, and engineering every initiative based on
            their unique needs. Be it facilitating access to healthcare, bridging gaps in education
            or providing crucial humanitarian aid during emergencies – we cater to every aspect of
            child welfare. Beyond short-term relief, we also empower families and communities to be
            more resilient in the face of adversities.
          </p>
          <p>
            In 2022-23, our education programs assisted over 3.3 lakh children. Healthcare support
            was provided to 3.4 lakh children. Our humanitarian drives reached over 6.2 lakh
            children in disaster-hit zones with urgent aid and long-term rehabilitation. We aided
            communities during COVID-19, cyclones, provided relief to migrant workers and
            facilitated vaccination access. Each milestone fuels our conviction that we can
            transform childhood with compassion, care and unity.
          </p>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 text-center mb-12">
          OUR THEORY OF CHANGE
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          The work we do for the children of India revolves around the Theory of Change. Our set of
          interventions are planned with the vision that their outcomes should lead to specific
          developments and change at the ground level.
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-yellow-400 p-6 rounded-lg text-white text-center shadow-md">
            <FaTrophy className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">ACHIEVE RESULTS AT SCALE</h3>
            <p>
              Establish credibility of our models through evidence-based, integrated and sustainable
              programming to ensure positive and scalable impact on marginalised children
            </p>
          </div>
          <div className="bg-orange-500 p-6 rounded-lg text-white text-center shadow-md">
            <FaHandshake className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">BUILD STRATEGIC PARTNERSHIPS</h3>
            <p>
              Strategic alliances with children, communities, government, donors and peers to expand
              and amplify our expertise on child rights
            </p>
          </div>
          <div className="bg-teal-500 p-6 rounded-lg text-white text-center shadow-md">
            <FaBullhorn className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">BE A CONVENOR OF VOICES</h3>
            <p>
              Being a convenor of voices of and for children through evidence-based advocacy and
              campaigns to inspire collective action that drives change
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg text-gray-800 text-center shadow-md">
            <FaLightbulb className="text-5xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">BE AN INNOVATOR</h3>
            <p>
              Be the catalyst to drive new ideas that deliver positive impact at scale for children,
              focused on the intersection of our ambitions for children and their most pressing
              problems
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-12">OUR JOURNEY IN THE LAST 15 YEARS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education Card */}
          <div className="relative group h-96 rounded-lg overflow-hidden cursor-pointer">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://balrakshabharat.org/wp-content/uploads/2023/12/edu-o.webp')`
              }}
            >
              <div className="absolute inset-0 bg-opacity-30"></div>
            </div>
            
            {/* Default Label */}
            <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
              <div className="bg-white px-6 py-3 rounded">
                <h3 className="text-xl font-bold text-gray-800">EDUCATION</h3>
              </div>
            </div>
            
            {/* Hover Content */}
            <div className="absolute inset-0 bg-teal-500 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-8">
              <div className="bg-white px-6 py-3 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-800">EDUCATION</h3>
              </div>
              
              <p className="text-center text-white mb-6 leading-relaxed">
                We help educate and empower children. We ensure their enrollment and retention in school through our holistic approach and help create better learning environments.
              </p>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">17,62,321</div>
                <p className="text-sm">children have been provided Education support in the last 15 years</p>
              </div>
              
              <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors">
                READ MORE
              </button>
            </div>
          </div>

          {/* Child Protection Card */}
          <div className="relative group h-96 rounded-lg overflow-hidden cursor-pointer">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`
              }}
            >
              <div className="absolute inset-0 bg-opacity-30"></div>
            </div>
            
            {/* Default Label */}
            <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
              <div className="bg-white px-6 py-3 rounded">
                <h3 className="text-xl font-bold text-gray-800">CHILD PROTECTION</h3>
              </div>
            </div>
            
            {/* Hover Content */}
            <div className="absolute inset-0 bg-orange-500 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-8">
              <div className="bg-white px-6 py-3 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-800">CHILD PROTECTION</h3>
              </div>
              
              <p className="text-center text-white mb-6 leading-relaxed">
                We work to protect children from different forms of abuse and exploitation such as child labour, child marriage, neglect and violence.
              </p>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">22,49,797</div>
                <p className="text-sm">children have been given a shield of protection by our efforts in the last 15 years</p>
              </div>
              
              <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors">
                READ MORE
              </button>
            </div>
          </div>

          {/* Health */}
          <div className="relative group h-96 rounded-lg overflow-hidden cursor-pointer">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://balrakshabharat.org/wp-content/uploads/2023/12/health-o.webp')`
              }}
            >
              <div className="absolute inset-0 bg-opacity-30"></div>
            </div>
            
            {/* Default Label */}
            <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
              <div className="bg-white px-6 py-3 rounded">
                <h3 className="text-xl font-bold text-gray-800">HEALTH AND NUTRITION</h3>
              </div>
            </div>
            
            {/* Hover Content */}
            <div className="absolute inset-0 bg-pink-300 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-8">
              <div className="bg-white px-6 py-3 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-800">HEALTH AND NUTRITION</h3>
              </div>
              
              <p className="text-center text-white mb-6 leading-relaxed">
                We provide crucial healthcare support to children, which include newborn babies, infants, young children, and adolescents.
              </p>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">28,23,051</div>
                <p className="text-sm">children have benefitted from projects on healthcare & nutrition in the last 15 years</p>
              </div>
              
              <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors">
                READ MORE
              </button>
            </div>
          </div>

          {/* HUMANITARIAN */}
          <div className="relative group h-96 rounded-lg overflow-hidden cursor-pointer">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://balrakshabharat.org/wp-content/uploads/2022/07/over-6.webp')`
              }}
            >
              <div className="absolute inset-0 bg-opacity-30"></div>
            </div>
            
            {/* Default Label */}
            <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity duration-300">
              <div className="bg-white px-6 py-3 rounded">
                <h3 className="text-xl font-bold text-gray-800">HUMANITARIAN</h3>
              </div>
            </div>
            
            {/* Hover Content */}
            <div className="absolute inset-0 bg-teal-400 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-8">
              <div className="bg-white px-6 py-3 rounded mb-6">
                <h3 className="text-xl font-bold text-gray-800">HUMANITARIAN</h3>
              </div>
              
              <p className="text-center text-white mb-6 leading-relaxed">
                We provide life-saving relief and rehabilitation support to vulnerable children and their communities during emergencies and disasters
              </p>
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">4,19,841</div>
                <p className="text-sm">children have been provided humanitarian support</p>
              </div>
              
              <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
