import Image from 'next/image';
import Profile from '../image/profile.jpg';

export default function About() {
return (
  <section className="relative max-w-6xl px-6 md:flex items-center gap-10 py-20 mx-5 bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
    <div className="flex-1 relative z-10">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
        <span className="inline-block w-2 h-6 bg-gray-400 rounded-full mr-2"></span>
        About
      </h2>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
        <span className="text-gray-500">フロントエンド開発を中心に、見た目だけでなく使いやすさにもこだわった実装を行っています。<br />
        現在はデザイン面からもアプローチできるよう、UI/UXデザインを学んでいます。</span>
      </p>
      <div className="flex flex-wrap gap-3 mt-4">
        {["HTML", "CSS", "JS", "TS", "React", "Next.js", "Vue.js", "Photoshop"].map((skill) => (
          <span key={skill} className="px-4 py-1 bg-gray-100 text-gray-700 border border-gray-300 rounded-full text-sm font-semibold shadow hover:bg-gray-200 transition">
            {skill}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-12 md:mt-0 flex justify-center items-center relative z-10">
      <div className="w-50 h-50 rounded-full overflow-hidden shadow-lg border-4 border-white">
        <Image
          src={Profile}
          alt="Profile"
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </section>
);
}
