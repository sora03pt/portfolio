import Image from 'next/image';

export default function Contact() {
  return (
  <section className="max-w-4xl mx-auto px-6 py-20 text-center">
    <h2 className="text-2xl font-semibold mb-6">Contact</h2>
    <div className="flex justify-center gap-16 text-gray-700">
      <a href='https://github.com/sora03pt' target='_blank' className="flex flex-col items-center cursor-pointer">
        <span className="text-3xl">
          <Image src="/portfolio/image/icon/github.svg" alt="GitHub" width={24} height={24} />
        </span>
        <p className="mt-2 text-sm">GitHub</p>
      </a>
      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          window.location.href = 'mailto:sora0223pt-abcd@yahoo.co.jp';
        }}
      >
        <span className="text-3xl">
          <Image src="/portfolio/image/icon/mail.svg" alt="Email" width={24} height={24} />
        </span>
        <p className="mt-2 text-sm">Email</p>
      </button>
    </div>
  </section>
  );
}
