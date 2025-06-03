'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full bg-[#FFFDF6] py-20 px-6 md:px-16 lg:px-32 space-y-24">
      {/* Manipal University Jaipur Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Manipal University Jaipur (MUJ)
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Manipal University Jaipur (MUJ), established in 2011, is a part of the renowned Manipal Education and Health Group, which has been a leader in education, research, and healthcare for over 60 years. Located on a scenic 122-acre campus in Dehmi Kalan near Jaipur, MUJ is known for its world-class facilities, innovative teaching methods, and vibrant student life.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            The campus boasts smart classrooms, modern labs, spacious hostels, and excellent sports and recreational facilities, making it an ideal place to learn and grow. Offering programs in engineering, management, design, law, journalism, sciences, and more, MUJ focuses on real-world learning and industry readiness.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            It has earned an A+ grade from NAAC with a score of 3.28 and is NBA-accredited for several key programs, including Information Technology. With a strong culture of innovation and academic rigor, MUJ helps students build meaningful futures.
          </p>
        </div>

        {/* MUJ Illustration */}
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


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
        {/* Jaipur About Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Jaipur
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            Jaipur, the capital of Rajasthan, is famously known as the Pink City for its distinct rose-colored buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, it holds the honor of being India’s first planned city, designed with remarkable foresight and precision.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            As part of India’s Golden Triangle of tourism, along with Delhi and Agra, Jaipur offers a rich blend of culture, history, and modernity. The city’s architecture showcases a unique fusion of Rajputana splendor with Mughal and Iranian influences.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            From the grandeur of Amber Fort and Hawa Mahal to the scientific marvel of Jantar Mantar, Jaipur is a living museum of heritage and innovation. Today, it’s not just a cultural treasure, but also one of India’s fastest-growing cities, making it an ideal setting for a future-forward institution like MUJ.
          </p>
        </div>

        {/* Jaipur Illustration */}
        <div className="flex justify-center">
          <Image
            src="/Jaipur_illustration2.webp"
            alt="Jaipur Illustration"
            width={640}
            height={640}
            className="object-contain"
          />
        </div>
      </div>
      {/* Places & Experiences Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Places to Visit in Jaipur
        </h3>
        <ul className="list-disc list-inside text-gray-800 text-lg space-y-1 mb-12">
          <li><strong>Amber Fort</strong> – Majestic hilltop fortress with panoramic views and royal courtyards</li>
          <li><strong>City Palace</strong> – Historic royal residence with museums and courtyards</li>
          <li><strong>Hawa Mahal</strong> – Iconic façade with 953 windows, known as the Palace of Winds</li>
          <li><strong>Jantar Mantar</strong> – UNESCO heritage site and ancient astronomical observatory</li>
          <li><strong>Birla Mandir</strong> – Peaceful marble temple dedicated to Lord Vishnu and Goddess Lakshmi</li>
          <li><strong>Govind Dev Ji Temple</strong> – An important Krishna temple with vibrant spiritual energy</li>
          <li><strong>Nahargarh Fort</strong> – Scenic fort offering sunset views over the city</li>
          <li><strong>Albert Hall Museum</strong> – Indo-Saracenic architecture and rich art collections</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Attractions & Experiences
        </h3>
        <ul className="list-disc list-inside text-gray-800 text-lg space-y-1">
          <li>Exploring local markets like Johari Bazaar and Bapu Bazaar for jewelry, textiles, and crafts</li>
          <li>Enjoying traditional Rajasthani dishes like <em>dal bati churma</em>, <em>laal maas</em>, and <em>ghewar</em></li>
          <li>Experiencing the Jaipur Literature Festival for culture and global ideas</li>
          <li>Hot air balloon rides for aerial views of forts and the Aravallis</li>
        </ul>
      </div>
    </section>
  );
}
