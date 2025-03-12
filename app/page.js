// app/page.js
// Julius Henriques
// henriq94
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 text-[#eaecd7] text-2xl font-bold font-['Inknut_Antiqua']">
        <div>Home</div>
        <div className="hidden md:flex space-x-6">
          <span>About</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
        {/* Text Section */}
        <div className="space-y-8 text-[#eaecd7] max-w-lg">
          <h1 className="text-[4rem] md:text-[6rem] font-black font-['Inknut_Antiqua'] leading-tight">
            Welcome to My Portfolio
          </h1>
          <p className="text-2xl md:text-4xl font-semibold font-['Inknut_Antiqua'] leading-snug">
            Showcasing my best work and skills
          </p>
          <button className="bg-[#eaecd7] text-[#db4439] px-6 py-3 rounded-full text-base font-black font-['Inknut_Antiqua'] hover:bg-opacity-90">
            Get in Touch
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-12 md:mt-0 transform -rotate-[8.64deg] w-full md:w-[40%]">
          <div className="bg-[#d9d9d9] p-2">
            <img
              className="w-full h-auto object-cover"
              src="/deer.jpeg"
              alt="Portfolio showcase"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 px-8 flex flex-wrap justify-between text-[#db4439] text-2xl font-black font-['Inknut_Antiqua']">
        <span className="mb-4 md:mb-0">Projects</span>
        <span className="mb-4 md:mb-0">Skills</span>
        <span className="mb-4 md:mb-0">About Me</span>
        <span className="mb-4 md:mb-0">Contact</span>
        <span className="mb-4 md:mb-0">Resume</span>
      </footer>
    </div>
  );
}