export default function TryForFree() {
  return (
    <section className="bg-gray-950 py-28 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Get Notion free.
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Start for free. Add your team. Use Notion AI. Upgrade as you grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.notion.com/signup"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm"
          >
            Get Notion free
          </a>
          <a
            href="https://www.notion.com/contact-sales"
            className="border border-gray-600 text-white font-semibold px-8 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-800 transition-colors text-sm"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}