'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full bg-[#FFFDF6] py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Manipal About Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Manipal University Jaipur
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            The Manipal Education Group, with its heritage of excellence in higher education for over 60 years,
            launched Manipal University Jaipur (MUJ) in 2011. The permanent campus MUJ is set up on 122 acres of
            land at Dehmi Kalan village near Jaipur and is by far one of the best campuses in the region.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
            MUJ has a world-class infrastructure, including state-of-the-art education and research facilities. In
            line with Manipal University's legacy of providing quality education, MUJ offers the latest and
            innovative methods and technology to impart education.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            The Manipal Education Group has been a pioneer in the fields of education, research, and health care for
            over six decades. MUJ is the first state-private university in Rajasthan to receive A+ Grade with a 3.28
            score accredited by NAAC, and is accredited by NBA for five programs including Information Technology.
          </p>
        </div>

        {/* Graphic Section */}
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Jaipur About Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About Jaipur
          </h2>
          <p className="text-gray-800 leading-relaxed text-lg mb-4">
           Jaipur is the largest city in Rajasthan and is known as the Pink City. 
           Jaipur is a major tourist attraction in India and belongs to the tourist Golden Triangle of Delhi, Jaipur and Agra.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            It hosts several attractions like the City Palace, Govind Dev ji Temple, Vidhan Sabha, Birla Temple, 
            several massive Rajput forts and so on.
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            Jaipur architectural planning may have been ancient, but its execution was definitely modern.
          </p>
        </div>

        {/* Graphic Section */}
        <div className="flex justify-center">
          <Image
            src="/Jaipur_Illustration.webp"
            alt="Manipal University Illustration"
            width={640}
            height={640}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
