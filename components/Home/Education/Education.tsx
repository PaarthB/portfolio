import React from "react";

export default function Education() {
  return (
    <div id="educationSection" data-aos="fade-up" className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary">
      <section className="flex flex-row items-center">
        <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 02.</span>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">Education</span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      <section className="max-w-6xl w-full text-gray-300 text-sm sm:text-base leading-7 px-4 md:px-0">
          {/* Surf Life Saving */}
          <div className="flex items-center justify-end space-y-8">
            <a href="https://www.surflifesaving.com.au/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end">
              <img src="/img/sls-nsw.png" alt="SLS" className="bg-[#ffffff] w-16 h-16 mr-8 flex-shrink-0" />
            </a>
            <div className="md:max-w-lg">
              <div className="mb-4">
                <p className="text-AAsecondary font-mono text-xs uppercase tracking-widest">SLSA, NSW (Sydney, 2025 - Present)</p>
                <p className="text-white font-semibold text-lg sm:text-xl">Bronze Medallion + Certificate II in Public Safety</p>
                <p className="text-gray-400 text-sm mt-1">SLSA Bronze Medallion and Certificate II Public Safety (Aquatic Rescue) skills and knowledge related to workplace safety, radio operations, surf awareness, aquatic rescue operations, resuscitation, emergency care, communication, teamwork, spinal management and patrol operations.</p>
              </div>
            </div>
          </div>

        <div className="space-y-8">
          {/* Masters Section */}
          <div className="flex items-center">
            <a href="https://www.unsw.edu.au/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end">
                <img src="/img/unsw-logo.png" alt="UNSW" className="bg-[#ffffff] w-16 h-16 mr-8 flex-shrink-0" />
            </a>
            <div className="md:max-w-lg">
              <div className="mb-4">
                <p className="text-AAsecondary font-mono text-xs uppercase tracking-widest">Masters - University of NSW (Sydney, 2019 - 2022)</p>
                <p className="text-white font-semibold text-lg sm:text-xl">Master of Computer Engineering</p>
                <p className="text-gray-400 text-sm mt-1">Advanced coursework in software engineering, data systems, networks, machine learning and security.</p>
              </div>
            </div>
          </div>

          {/* Bachelors Section */}
          <div className="flex items-center justify-end">
            <a href="https://www.monash.edu/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end">
              <img src="/img/monash-university.png" alt="Monash" className="bg-[#ffffff] w-16 h-16 mr-8 flex-shrink-0" />
            </a>
            <div className="md:max-w-lg">
              <div className="mb-4">
                <p className="text-AAsecondary font-mono text-xs uppercase tracking-widest">Bachelors - Monash University (Melbourne, 2014 - 2018)</p>
                <p className="text-white font-semibold text-lg sm:text-xl">Bachelor of Engineering (Software)</p>
                <p className="text-gray-400 text-sm mt-1">Foundational study in algorithms, software development, and system architecture.</p>
              </div>
            </div>
          </div>

          {/* TAFE Section */}
          <div className="flex items-center">
            <a href="https://www.everest.edu.au/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-end">
                <img src="/img/tafe.png" alt="UNSW" className="bg-[#ffffff] w-16 h-16 mr-8 flex-shrink-0" />
            </a>
            <div className="md:max-w-lg">
              <div className="mb-4">
                <p className="text-AAsecondary font-mono text-xs uppercase tracking-widest">TAFE - Everest Institute Lalor (2015 - 2016)</p>
                <p className="text-white font-semibold text-lg sm:text-xl">Certificate III in Commercial Cookery</p>
                <p className="text-gray-400 text-sm mt-1">Training as a commercial cook, to use a wide range of cookery skills. Practical training in the preparation and safe-handling of a variety of food types, including meat, seafood, poultry, dairy, and other common allergens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
