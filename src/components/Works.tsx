import Image from 'next/image';

export default function Works() {
const projects = [
	{
		title: "文章作成支援ツール(SP向け)",
		desc: "v0を使って実装",
		github: "https://github.com/sora03pt/cosplay-recruitment",
		demo: "https://sora03pt.github.io/cosplay-recruitment/",
        image: '/image/works/01.jpg',
	},
	{
		title: "Project Two",
		desc: "insore adan canarst",
		github: "https://github.com/example/project-two",
		demo: "https://example.com/project-two",
        image: '/image/works/02.jpg',
	},
	{
		title: "Project Three",
		desc: "Madhedwclleedine",
		github: "https://github.com/example/project-three",
		demo: "https://example.com/project-three",
        image: '/image/works/03.jpg',
	},
];

const photos = [
	{
		image: '/image/works/photo/01.jpg',
		alt: '',
	},
	{
		image: '/image/works/photo/02.jpg',
		alt: '',
	},
	{
		image: '/image/works/photo/03.jpg',
		alt: '',
	},
	{
		image: '/image/works/photo/05.jpg',
		alt: '',
	},
];

return (
<section id="works" className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-2xl font-semibold mb-8">Works</h2>
    <h3 className="text-1xl font-semibold mb-4">Web</h3>
    <div className="grid md:grid-cols-3 gap-6 mb-16">
        {projects.map((p, i) => (
        <div
            key={i}
            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
            >
            <div className="h-32 rounded-xl mb-4">
                <Image
                    src={p.image}
                    alt="Project Image"
                    width={128}
                    height={128}
                    className="object-contain w-full h-full rounded-xl"
                />
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
            <div className="flex gap-2 mt-4">
                <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                    GitHub
                </a>
                <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                >
                    Demo
                </a>
            </div>
        </div>
        ))}
    </div>
		<h3 className="text-1xl font-semibold mb-4">Photo</h3>
		<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex center flex-wrap gap-7">
		{photos.map((photo, i) => (
				<Image
					key={i}
					src={photo.image}
					alt={photo.alt}
					width={240}
					height={160}
					className="object-contain rounded-xl"
				/>
			))}
		</div>
</section>
);
}