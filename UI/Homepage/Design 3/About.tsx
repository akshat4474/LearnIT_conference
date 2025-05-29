'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full bg-[#FFFDF6] py-20 px-6 md:px-16 lg:px-32 space-y-24">
      {/* Manipal University Jaipur Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Manipal University Jaipur
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Manipal University Jaipur (MUJ), established in 2011, is a part of the renowned Manipal Education and Health Group,
            which has been a leader in education, research, and healthcare for over 60 years. Located on a scenic 122-acre campus
            in Dehmi Kalan near Jaipur, MUJ is known for its world-class facilities, innovative teaching methods, and vibrant
            student life.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            The campus boasts smart classrooms, modern labs, spacious hostels, and excellent sports and recreational facilities,
            making it an ideal place to learn and grow. Offering programs in engineering, management, design, law, journalism,
            sciences, and more, MUJ focuses on real-world learning and industry readiness.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            MUJ has earned an A+ grade from NAAC with a score of 3.28 and is NBA-accredited for several key programs, including
            Information Technology. With a strong culture of innovation and academic rigor, MUJ helps students build meaningful
            futures.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/MUJ_Illustration.webp"
            alt="Manipal University Illustration"
            width={640}
            height={640}
            className="object-contain"
          />
        </div>
      </div>

      {/* Jaipur Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Jaipur
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Jaipur, the capital of Rajasthan, is famously known as the Pink City for its distinct rose-colored buildings.
            Founded in 1727 by Maharaja Sawai Jai Singh II, it holds the honor of being India’s first planned city, designed
            with remarkable foresight and precision.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            As part of India’s Golden Triangle of tourism, along with Delhi and Agra, Jaipur offers a rich blend of culture,
            history, and modernity. The city’s architecture showcases a unique fusion of Rajputana splendor with Mughal and
            Iranian influences, visible in its majestic forts, domed palaces, arched gateways, and intricate jali work.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            Today, Jaipur is not just a cultural treasure, but also one of India’s fastest-growing cities, making it an ideal
            setting for a future-forward institution like MUJ.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/jaipur_city.webp"
            alt="Jaipur City Illustration"
            width={640}
            height={640}
            className="object-contain"
          />
        </div>
      </div>

      {/* Places to Visit & Attractions Section */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Places to Visit in Jaipur</h2>
        <ul className="text-lg text-gray-800 space-y-2 text-left sm:text-center sm:columns-2 sm:gap-x-16">
          <li> Amber Fort – majestic hilltop fortress with panoramic views</li>
          <li> City Palace – historic royal residence with museums and courtyards</li>
          <li> Hawa Mahal – iconic facade with 953 windows</li>
          <li> Jantar Mantar – ancient astronomical observatory</li>
          <li> Birla Mandir – peaceful marble temple</li>
          <li> Govind Dev Ji Temple – vibrant spiritual energy</li>
          <li> Nahargarh Fort – scenic fort with sunset views</li>
          <li> Albert Hall Museum – Indo-Saracenic art collections</li>
        </ul>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-16 mb-6">Key Attractions & Experiences</h2>
        <ul className="text-lg text-gray-800 space-y-2 text-left sm:text-center sm:columns-2 sm:gap-x-16">
          <li> Explore Johari & Bapu Bazaar for jewelry, textiles, and crafts</li>
          <li> Enjoy Rajasthani dishes like dal bati churma, laal maas, ghewar</li>
          <li> Attend the Jaipur Literature Festival</li>
          <li> Try hot air balloon rides over the Aravallis</li>
        </ul>
      </div>
    </section>
  );
}
