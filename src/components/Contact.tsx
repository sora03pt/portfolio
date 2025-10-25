export default function Contact() {
  return (
  <section className="max-w-4xl mx-auto px-6 py-20 text-center">
    <h2 className="text-2xl font-semibold mb-6">Contact</h2>
    <div className="flex justify-center gap-16 text-gray-700">
      <div className="flex flex-col items-center">
        <span className="text-3xl">🐙</span>
        <p className="mt-2 text-sm">GitHub</p>
    </div>
    <div className="flex flex-col items-center">
        <span className="text-3xl">𝕏</span>
        <p className="mt-2 text-sm">Xnam</p>
    </div>
    <div className="flex flex-col items-center">
        <span className="text-3xl">✉️</span>
        <p className="mt-2 text-sm">Email</p>
      </div>
    </div>
  </section>
  );
}
