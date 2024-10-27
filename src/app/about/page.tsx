import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-black">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
            <p className="text-lg">
              Welcome to Web Development Skills We are a team of passionate developers designers and strategists dedicated to building modern user-friendly and highly functional websites and web applications. Our mission is to empower businesses and individuals with cutting-edge digital solutions that drive growth and deliver seamless online experiences. Whether you &apos; sre a startup a growing business or an established enterprise we are here to transform your vision into a reality.
            </p>
          </div>
          <div>
            <Image
              src="/about.jpg"
              alt="Web Development Skills"
              className="flex-1 object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">SKILLS</h2>
          <p className="text-lg text-black mb-4">
            Our team excels in a variety of skills including
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-pink-500 text-white font-semibold rounded-full px-6 py-3 cursor-pointer transition-transform transform hover:scale-105">
              Web Development
            </span>
            <span className="bg-pink-500 text-white font-semibold rounded-full px-6 py-3 cursor-pointer transition-transform transform hover:scale-105">
              UI/UX Design
            </span>
            <span className="bg-pink-500 text-white font-semibold rounded-full px-6 py-3 cursor-pointer transition-transform transform hover:scale-105">
              Project Management
            </span>
            <span className="bg-pink-500 text-white font-semibold rounded-full px-6 py-3 cursor-pointer transition-transform transform hover:scale-105">
              SEO Optimization
            </span>
            <span className="bg-pink-500 text-white font-semibold rounded-full px-6 py-3 cursor-pointer transition-transform transform hover:scale-105">
              Digital Marketing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
