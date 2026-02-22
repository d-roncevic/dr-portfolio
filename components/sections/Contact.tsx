export default function Contact({
  onEmailClick,
}: {
  onEmailClick: () => void;
}) {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto md:px-6 py-16 md:py-32 space-y-10 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
        Let&apos;s Work Together
      </h2>

      <p className="text-neutral-600 max-w-2xl mx-auto">
        I&apos;m currently open to frontend opportunities and freelance
        projects. Feel free to reach out.
      </p>

      <div className="flex justify-center gap-6 pt-6 flex-wrap">
        <button
          onClick={onEmailClick}
          className="text-neutral-600 bg-white px-6 py-3 rounded-xl shadow-lg hover:opacity-70 transition hover:cursor-pointer"
        >
          Email
        </button>

        <a
          href="https://wa.me/385958669679"
          target="_blank"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-400 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}
