import Image from 'next/image';

export default function About() {
return (
  <section className="relative max-w-5xl mx-auto px-6 md:flex items-center gap-16 py-20 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
    <div className="flex-1 relative z-10">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-gray-400 rounded-full mr-2"></span>
        About
      </h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
        <span className="font-semibold text-gray-800">Web coding</span> is my forte, and I specialize in <span className="font-semibold text-gray-600">simple and readable UI implementation</span>.<br />
        Currently, I’m studying <span className="font-semibold text-gray-600">modern frontend (React, TypeScript)</span>.
      </p>
      <div className="flex flex-wrap gap-3 mt-4">
        {["HTML", "CSS", "JS", "TS", "React", "Next.js", "Vue.js"].map((skill) => (
          <span key={skill} className="px-4 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-full text-sm font-semibold shadow hover:bg-gray-200 transition">
            {skill}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-12 md:mt-0 flex justify-center items-center relative z-10">
      <div className="w-52 h-52 bg-gray-100 rounded-full flex items-center justify-center shadow-xl border-8 border-white ring-2 ring-gray-200">
        <Image
          src="##"
          alt="Profile"
          width={140}
          height={140}
          className="rounded-full shadow-lg border-4 border-white object-cover"
        />
      </div>
    </div>
  </section>
);
}
