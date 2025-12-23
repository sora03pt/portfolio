export default function About() {
return (
  <section id="About" className="max-w-6xl mx-auto px-6 py-20">
    <div className="relative md:flex items-center gap-10 bg-gray-50 rounded-2xl shadow-sm border border-gray-600 max-w-6xl mx-auto px-6 py-10">
      <div className="flex-1 relative z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
          <span className="inline-block w-2 h-6 bg-gray-400 rounded-full mr-2"></span>
          About
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
          <span className="text-gray-500">美術系大学卒。Webデザイナーとして2年間経験を積んだ後、フロントエンド開発へと領域を広げました。<br/>
            デザインと実装の両視点から、ユーザビリティとアクセシビリティを重視したWeb制作を行っています。<br/>
            Lighthouseを活用したパフォーマンス改善やSEO対策も得意とし、UI/UXデザインの知識を深めながら、より良いWeb体験づくりを目指しています。</span>
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
    </div>
  </section>
);
}
