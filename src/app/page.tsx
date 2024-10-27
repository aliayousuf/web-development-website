import Image from "next/image";

export default function Home() {
    return (
      <main>
        {/* Image Section */}
        <div className="relative h-auto">
          <Image
            className="w-full animate-pulse hidden md:block"
            src="/m1.jpeg"
            alt="Website Development Process"
            width={500}
            height={500}
          />
          <Image
            className="w-full md:hidden"
            src="/main.jpg"
            alt="Website Development Process"
            width={500}
            height={500}
          />
          {/* Overlay Text */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/3 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Web Development skills</h2>
            <p className="text-base md:text-lg max-w-xs">
              Our web design services focus on creating visually stunning and user-friendly websites that enhance your online presence and engage your audience.
            </p>
          </div>
        </div>
  
        {/* Student Section */}
        <div className="h-auto w-full flex flex-wrap flex-col items-center text-center p-10 bg-gradient-to-b from-blue-400 to-blue-200">
          <div className="w-full h-auto flex flex-wrap flex-col items-center">
            <p className="text-pink-500 font-bold text-3xl md:text-4xl text-center">
              "Pure Hardwork, No Shortcut!"
            </p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
          </div>
          <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-46 flex flex-col items-center mb-12">
              <Image
                
                src="/books.png"
                alt="book"
                width={200}
                height={200}
              />
              <p className="text-3xl font-bold text-white">600+</p>
              <p className="text-3xl font-bold text-gray-500">Different Courses</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
              <Image
                className="w-44 h-44"
                src="/student.png"
                alt="student"
                width={150}
                height={150}
              />
              <p className="text-3xl font-bold text-white">700,000+</p>
              <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
              <Image
                className="w-44 h-44"
                src="/card.png"
                alt="credit card"
                width={150}
                height={150}
              />
              <p className="text-3xl font-bold text-white">10,000+</p>
              <p className="text-3xl font-bold text-gray-500">Successful Transition</p>
            </div>
          </div>
        </div>
  
        {/* Product Section */}
        <div className="w-full h-auto flex flex-wrap flex-col items-center text-center p-10 bg-gradient-to-b from-blue-400 to-blue-200">
          <div className="w-full h-auto flex flex-wrap flex-col items-center">
            <p className="text-pink-500 font-bold text-3xl md:text-4xl text-center">Our Product</p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
          </div>
          <div className="w-[90%] h-auto flex flex-wrap justify-around">
            <div className="w-64 flex flex-col items-center mb-12 border-white border-2 rounded-2xl p-2">
              <Image
                src="/lab.png"
                alt="lab"
                width={200}
                height={200}
              />
              <p className="text-white font-bold text-3xl">WD Skills Lab</p>
              <p className="text-gray-500 font-bold text-xl">
                Supercharge your project development with our robust lab.
              </p>
            </div>
            <div className="w-64 flex flex-col items-center mb-12 p-2">
              <Image
                src="/cv.webp"
                alt="cv"
                width={200}
                height={200}
              />
              <p className="text-white font-bold text-3xl">Job Portal</p>
              <p className="text-gray-500 font-bold text-xl">
                Use exceptional templates for a stand-out resume minus the sign up process.
              </p>
            </div>
            <div className="w-64 flex flex-col items-center mb-12 p-2">
              <Image
                src="/exportal.png"
                alt="exprience portal"
                width={200}
                height={200}
              />
              <p className="text-white font-bold text-3xl">Experience Portal</p>
              <p className="text-gray-500 font-bold text-xl">
                Self-paced experience portal hands-on training with internship projects.
              </p>
            </div>
            <div className="w-64 flex flex-col items-center mb-12 p-2">
              <Image
                src="/fame.png"
                alt="hall of fame"
                width={200}
                height={200}
              />
              <p className="text-white font-bold text-3xl">Hall Of Fame</p>
              <p className="text-gray-500 font-bold text-xl">
                Our students placement and career transition speak volumes about our courses.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
}
