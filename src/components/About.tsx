import Image from 'next/image';

export default function About() {
return (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <div className="relative md:flex items-center gap-10 bg-gray-50 rounded-2xl shadow-sm border border-gray-600 max-w-6xl mx-auto px-6 py-20">
      <div className="flex-1 relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-gray-400 rounded-full mr-2"></span>
          About
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
          <span className="text-gray-500">2017年 美術系大学を卒業し、2年間Webデザインを担当していました。現在はフロントエンド開発を中心に担当しています。<br />
            見た目だけでなく、ユーザビリティにこだわった実装を得意とし、Lighthouseを活用したSEO対策や、アクセシビリティに配慮したコーディングを心がけています。<br />
            今後はデザイン面からもアプローチするため、UI/UXデザインを深く学び、スキルアップに努めています。</span>
        </p>
        <h3 className="text-2xl font-semibold mt-10">Skills</h3>
        <div className="flex flex-wrap gap-3 mt-4">
          {["HTML", "CSS", "JS", "TS", "React", "Next.js", "Vue.js", "Photoshop", "Canva", "a11y", "Lighthouse"].map((skill) => (
            <span key={skill} className="px-4 py-1 bg-gray-100 text-gray-700 border border-gray-400 rounded-full text-sm font-semibold shadow">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12 md:mt-0 flex justify-center items-center relative z-10">
        <div className="w-100 h-100 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <Image
            src="/portfolio/image/profile.jpg"
            alt="Profile"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </section>
);
}
