export default function Works() {
const projects = [
	{
		title: "Project One",
		desc: "It doesclit we nurla and",
		github: "https://github.com/example/project-one",
		demo: "https://example.com/project-one"
	},
	{
		title: "Project Two",
		desc: "insore adan canarst",
		github: "https://github.com/example/project-two",
		demo: "https://example.com/project-two"
	},
	{
		title: "Project Three",
		desc: "Madhedwclleedine",
		github: "https://github.com/example/project-three",
		demo: "https://example.com/project-three"
	},
];
return (
<section id="works" className="max-w-6xl mx-auto px-6 py-20">
<h2 className="text-2xl font-semibold mb-8">Works</h2>
<div className="grid md:grid-cols-3 gap-6">
{projects.map((p, i) => (
<div
key={i}
className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
>
<div className="h-32 bg-gray-100 rounded-xl mb-4"></div>
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
</section>
);
}
