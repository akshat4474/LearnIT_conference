'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const manipalImages = [
  {
    url: "https://www.highereducationdigest.com/wp-content/uploads/2020/03/Pic-1.jpg",
    alt: "Manipal University Jaipur Campus"
  },
  {
    url: "https://manipalblog.com/wp-content/smush-webp/2015/06/MUJ-Jaipur-Campus.jpg.webp",
    alt: "Manipal University Logo"
  },
  {
    url: "https://cdn.hercampus.com/SH6M70M3/as/x5mt6pmw4brgctfw2pv32t/mujjpegjpg_by_Vikram_Talepa?width=698&height=466&fit=crop&auto=webp&dpr=4",
    alt: "Manipal University Aerial View"
  }
] as const;

const facilities = [
  "Modern Auditorium",
  "High-speed WiFi",
  "Conference Rooms",
  "Dining Area",
  "Parking Space",
  "Technical Support"
] as const;

const attractions = [
  {
    name: "Hawa Mahal",
    description: "The iconic Palace of Winds, featuring 953 windows and intricate architecture",
    image: "https://theheritageart.com/wp-content/uploads/2022/11/hawa-mahal.jpg"
  },
  {
    name: "City Palace",
    description: "A stunning blend of Rajasthani and Mughal architecture in the heart of Jaipur",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jaipur_03-2016_22_City_Palace_complex.jpg/960px-Jaipur_03-2016_22_City_Palace_complex.jpg"
  },
  {
    name: "Amber Fort",
    description: "Majestic fort complex showcasing the grandeur of Rajput architecture",
    image: "https://treeofliferesorts.com/wp-content/uploads/2022/09/beautifoul-amber-fort-near-jaipur-city-india-rajasthan_431724-2850.jpg"
  }
] as const;

const transportModes = [
  {
    mode: "By Air",
    icon: "✈️",
    details: "Jaipur International Airport (JAI) is well-connected to major cities. Regular flights from Delhi, Mumbai, and Bangalore."
  },
  {
    mode: "By Train",
    icon: "🚂",
    details: "Jaipur Junction Railway Station is a major railway hub with excellent connectivity across India."
  },
  {
    mode: "By Road",
    icon: "🚗",
    details: "Well-connected by highways. Regular bus services and convenient taxi services available throughout the city."
  }
] as const;

const heritageSites = [
  {
    name: "Amber Fort",
    period: "16th Century",
    description: "Built in 1592 by Raja Man Singh I, Amber Fort is known for its artistic Hindu style elements with intricate mirror work, elaborate frescoes, and the stunning Sheesh Mahal. The fort&apos;s architecture showcases a perfect blend of Rajput and Mughal styles.",
    highlights: ["Sheesh Mahal (Palace of Mirrors)", "Diwan-i-Aam", "Sukh Niwas"],
    image: "https://treeofliferesorts.com/wp-content/uploads/2022/09/beautifoul-amber-fort-near-jaipur-city-india-rajasthan_431724-2850.jpg"
  },
  {
    name: "Hawa Mahal",
    period: "18th Century",
    description: "Constructed in 1799 by Maharaja Sawai Pratap Singh, this five-story palace is made of red and pink sandstone. The 953 small windows (jharokhas) were designed to allow royal ladies to observe street festivals while remaining unseen.",
    highlights: ["Unique Architecture", "953 Jharokhas", "Natural Air Conditioning"],
    image: "https://theheritageart.com/wp-content/uploads/2022/11/hawa-mahal.jpg"
  },
  {
    name: "City Palace",
    period: "Early 18th Century",
    description: "Built between 1729 and 1732 by Sawai Jai Singh II, the City Palace complex includes the Chandra Mahal and Mubarak Mahal. It represents the finest blend of Rajasthani and Mughal architecture, showcasing the grandeur of Jaipur&apos;s royal family.",
    highlights: ["Chandra Mahal", "Mubarak Mahal", "Diwan-i-Khas"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jaipur_03-2016_22_City_Palace_complex.jpg/960px-Jaipur_03-2016_22_City_Palace_complex.jpg"
  },
  {
    name: "Jantar Mantar",
    period: "18th Century",
    description: "Built in 1734 by Maharaja Sawai Jai Singh II, Jantar Mantar is a UNESCO World Heritage site featuring the world&apos;s largest stone sundial. This astronomical observatory complex houses 19 architectural astronomical instruments.",
    highlights: ["Samrat Yantra (The Supreme Instrument)", "Rashivalaya Yantra", "Jai Prakash Yantra"],
    image: "https://www.trawell.in/admin/images/upload/151648398Jaipur_Jantar_Mantar_Main.jpg"
  },
  {
    name: "Albert Hall Museum",
    period: "19th Century",
    description: "Built in 1876, this oldest museum in Rajasthan showcases a rare collection of artifacts including paintings, jewelry, carpets, ivory items, crystal works, and metal sculptures. Its Indo-Saracenic architecture is a remarkable example of colonial design.",
    highlights: ["Egyptian Mummy", "Persian Golden Carpet", "Ethnic Collections"],
    image: "https://yometro.com/images/places/albert-hall-museum.jpg"
  },
  {
    name: "Galtaji Temple",
    period: "18th Century",
    description: "Also known as the Monkey Temple, this ancient pilgrimage site features a series of temples built within a narrow crevice in the Aravalli Hills. The complex includes natural springs and seven holy water tanks.",
    highlights: ["Natural Springs", "Ancient Sanskrit Texts", "Temple Architecture"],
    image: "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1031572588_20200219165610_20200219165630.jpg"
  }
] as const;

export default function VenuePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % manipalImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? manipalImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf7]">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center">
        <Image
          src="https://plus.unsplash.com/premium_photo-1661962404003-e0ca40da40ef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFpcHVyfGVufDB8fDB8fHww"
          alt="Jaipur City"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl space-y-8"
          >
            <span className="inline-block text-pink-400 text-lg font-medium tracking-wider">
              CONFERENCE LOCATION
            </span>
            <h1 className="text-7xl md:text-8xl font-bold text-white">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                Jaipur
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Where ancient heritage meets modern innovation, in the heart of Rajasthan&apos;s majestic Pink City.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-pink-400 font-semibold mb-2">Conference Dates</h3>
                <p className="text-white text-lg">September 15-17, 2025</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-pink-400 font-semibold mb-2">Venue</h3>
                <p className="text-white text-lg">Manipal University Jaipur</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 pt-8"
            >
              <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium transition-colors">
                View Schedule
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium backdrop-blur-md transition-colors border border-white/20">
                Explore Venue
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <div className="animate-bounce flex flex-col items-center text-white/80">
                <span className="text-sm mb-2">Scroll to explore</span>
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Conference Venue Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Venue</h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {manipalImages.map((image, index) => {
                const isActive = currentImageIndex === index;
                return (
                  <motion.div
                    key={image.url}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0,
                      transition: { duration: 0.7 }
                    }}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>
                );
              })}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                {manipalImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${currentImageIndex === index 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/75'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-900">Manipal University Jaipur</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Set against the backdrop of the Aravalli hills, Manipal University Jaipur offers a perfect blend 
                of modern infrastructure and traditional architecture. Our state-of-the-art facilities ensure 
                a seamless conference experience.
              </p>              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-3">Location</h4>
                    <p className="text-gray-600">Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-3">Distance</h4>
                    <p className="text-gray-600">25 mins from Airport<br/>30 mins from City Center</p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://maps.google.com/?q=Manipal+University+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors group"
                  >
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:scale-110" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Open in Google Maps
                  </a>
                  
                  <a 
                    href="https://maps.google.com/?daddr=Manipal+University+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-pink-600 border-2 border-pink-600 rounded-lg hover:bg-pink-50 transition-colors group"
                  >
                    <svg 
                      className="w-5 h-5 transition-transform group-hover:scale-110" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Facilities</h4>
                <ul className="grid grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-600">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                      </svg>
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Jaipur</h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the rich heritage and architectural marvels of the Pink City during your visit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-semibold text-white">{attraction.name}</h3>
                      <p className="text-white/80 mt-2">{attraction.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Sites Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fff9f5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Royal Heritage of Jaipur</h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              Explore the magnificent historical monuments that have earned Jaipur its UNESCO World Heritage Site status
            </p>
          </motion.div>

          <div className="space-y-16">
            {heritageSites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="inline-block px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
                    {site.period}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{site.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {site.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {site.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center space-x-2 text-gray-600">
                          <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Getting There</h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {transportModes.map((transport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{transport.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{transport.mode}</h3>
                <p className="text-gray-600">{transport.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}




