'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const themeColor = '#D1548B';

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
    url: "https://www.searchurcollege.com/exam/admin/search/gallery/college/col_913.jpg",
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

const heritageSites = [
  {
    name: "Amber Fort",
    period: "16th Century",
    description: "Built in 1592 by Raja Man Singh I, Amber Fort is known for its artistic Hindu style elements with intricate mirror work, elaborate frescoes, and the stunning Sheesh Mahal. The fort's architecture showcases a perfect blend of Rajput and Mughal styles.",
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
    description: "Built between 1729 and 1732 by Sawai Jai Singh II, the City Palace complex includes the Chandra Mahal and Mubarak Mahal. It represents the finest blend of Rajasthani and Mughal architecture, showcasing the grandeur of Jaipur's royal family.",
    highlights: ["Chandra Mahal", "Mubarak Mahal", "Diwan-i-Khas"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Jaipur_03-2016_22_City_Palace_complex.jpg/960px-Jaipur_03-2016_22_City_Palace_complex.jpg"
  },
  {
    name: "Jantar Mantar",
    period: "18th Century",
    description: "Built in 1734 by Maharaja Sawai Jai Singh II, Jantar Mantar is a UNESCO World Heritage site featuring the world's largest stone sundial. This astronomical observatory complex houses 19 architectural astronomical instruments.",
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

export {
  themeColor,
  fadeInUp,
  manipalImages,
  facilities,
  attractions,
  heritageSites
};

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
    <div className="min-h-screen overflow-x-hidden bg-[#fdfbf7]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
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

            <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                Jaipur
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
              Where ancient heritage meets modern innovation, in the heart of Rajasthan's majestic Pink City.
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
              <button className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium transition-transform hover:scale-105 shadow-lg">
                View Schedule
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium backdrop-blur-md transition-transform hover:scale-105 border border-white/20">
                Explore Venue
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
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
      <section className="py-24 bg-[#fdfbf7]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Venue</h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D1548B' }} />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Carousel */}
            <motion.div
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
                    className="absolute inset-0 transition-opacity duration-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
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

              {/* Dots */}
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

              {/* Arrows */}
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Text Content */}
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
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 text-sm">Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Expressway</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-gray-900 mb-2">Distance</h4>
                  <p className="text-gray-600 text-sm">25 mins from Airport<br />30 mins from City Center</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?daddr=Manipal+University+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors text-sm font-medium shadow"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                </svg>
                Get Directions
              </a>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Facilities</h4>
                <ul className="grid grid-cols-2 gap-3">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-sm space-x-2">
                      <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
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
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#D1548B' }} />
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
              Explore the magnificent historical monuments that have earned Jaipur its UNESCO World Heritage Site status.
            </p>
          </motion.div>

          <div className="space-y-20">
            {heritageSites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative h-[250px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6 w-full">
                  <div className="inline-block px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium">
                    {site.period}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{site.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{site.description}</p>

                  {/* Highlights */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {site.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center space-x-2 text-gray-600 text-sm">
                            <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <a
                      href={`https://maps.google.com/?daddr=${encodeURIComponent(site.name + ' Jaipur')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all text-sm font-medium shadow-md"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Getting There */}
      <section className="py-24 bg-gradient-to-b from-[#fdfbf7] via-[#fff3e6] to-[#ffe4e4]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#D1548B] font-medium text-sm uppercase tracking-wider">Travel Information</span>
            <h2 className="text-4xl font-bold text-[#2D3047] mt-2 mb-4">Getting to the Conference</h2>
            <div className="w-24 h-1 bg-[#D1548B] mx-auto"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              Multiple convenient transportation options are available to reach Manipal University Jaipur
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                mode: "By Air",
                icon: (
                  <svg className="w-10 h-10 text-[#D1548B]" viewBox="0 0 122.88 122.88" fill="currentColor">
                    <path d="M16.63,105.75c0.01-4.03,2.3-7.97,6.03-12.38L1.09,79.73c-1.36-0.59-1.33-1.42-0.54-2.4l4.57-3.9
                      c0.83-0.51,1.71-0.73,2.66-0.47l26.62,4.5l22.18-24.02L4.8,18.41c-1.31-0.77-1.42-1.64-0.07-2.65l7.47-5.96l67.5,18.97L99.64,7.45
                      c6.69-5.79,13.19-8.38,18.18-7.15c2.75,0.68,3.72,1.5,4.57,4.08c1.65,5.06-0.91,11.86-6.96,18.86L94.11,43.18l18.97,67.5
                      l-5.96,7.47c-1.01,1.34-1.88,1.23-2.65-0.07L69.43,66.31L45.41,88.48l4.5,26.62c0.26,0.94,0.05,1.82-0.47,2.66l-3.9,4.57
                      c-0.97,0.79-1.81,0.82-2.4-0.54l-13.64-21.57c-4.43,3.74-8.37,6.03-12.42,6.03C16.71,106.24,16.63,106.11,16.63,105.75z"/>
                  </svg>
                ),
                details: "Jaipur International Airport (JAI) is well-connected to major cities",
                distance: "25 mins from venue",
                tips: ["Direct flights from Delhi, Mumbai, Bangalore", "Taxi services available at airport", "Pre-book airport transfers"],
                mapsLink: "https://maps.google.com/?daddr=Jaipur+International+Airport",
                accent: "from-[#FFE4E4]",
                border: "border-l-[#D1548B]"
              },
              {
                mode: "By Train",
                icon: (
                  <svg className="w-10 h-10 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4c-3.86 0-7 .11-7 2.67v8.66C5 17.89 8.14 18 12 18s7-.11 7-2.67V6.67C19 4.11 15.86 4 12 4zm0 11.33c-1.84 0-3.33-1.49-3.33-3.33S10.16 8.67 12 8.67s3.33 1.49 3.33 3.33-1.49 3.33-3.33 3.33zm0-4.66c-.74 0-1.33.59-1.33 1.33s.59 1.33 1.33 1.33 1.33-.59 1.33-1.33-.59-1.33-1.33-1.33zM6 6.67c0-.44 2.06-1.33 6-1.33s6 .89 6 1.33v1.33H6V6.67z"/>
                    <path d="M17 20H7l-2 2h14z"/>
                  </svg>
                ),
                details: "Jaipur Junction Railway Station is a major railway hub",
                distance: "30 mins from venue",
                tips: ["Regular trains from major cities", "Station code: JP", "Auto & taxi stands available"],
                mapsLink: "https://maps.google.com/?daddr=Jaipur+Junction+Railway+Station",
                accent: "from-[#FFE4D6]",
                border: "border-l-[#FF6B35]"
              },
              {
                mode: "By Road",
                icon: (
                  <svg className="w-10 h-10 text-[#004E89]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
                    <circle cx="7.5" cy="14.5" r="1.5"/>
                    <circle cx="16.5" cy="14.5" r="1.5"/>
                  </svg>
                ),
                details: "Well-connected by highways and expressways",
                distance: "Located on Jaipur-Ajmer Highway",
                tips: ["Regular bus services", "Ample parking at venue", "Major highways: NH 48, NH 21"],
                mapsLink: "https://maps.google.com/?daddr=Manipal+University+Jaipur",
                accent: "from-[#E4EFFF]",
                border: "border-l-[#004E89]"
              }
            ].map((transport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${transport.accent} rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group border-l-4 ${transport.border}`}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{transport.icon}</div>
                  <h3 className="text-xl font-semibold text-[#2D3047] mb-2">{transport.mode}</h3>
                  <p className="text-gray-600 mb-3">{transport.details}</p>
                  <div className="inline-block px-3 py-1 bg-white/50 backdrop-blur-sm text-[#2D3047] rounded-full text-sm font-medium mb-4 border border-current/10">
                    {transport.distance}
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {transport.tips.map((tip, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 mt-1 text-current flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={transport.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium shadow"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>
                    </svg>
                    View on Maps
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}