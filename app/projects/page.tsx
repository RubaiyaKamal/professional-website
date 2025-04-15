import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <div>
      <Navbar />

<section id="projects" className="mt-20 max-w-6xl mx-auto px-4">
  <h2 className="text-5xl font-bold text-center mb-10">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Project Card 1 */}
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">AI Chatbot</h3>
      <p className="text-gray-600 mb-4">
        A conversational AI chatbot built with Chainlit, Gemini AI, and OAuth login for Google/GitHub.
      </p>
      <a
        href="https://github.com/RubaiyaKamal/AI-chatbot"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>

    {/* Project Card 2 */}
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">Habit Tracker</h3>
      <p className="text-gray-600 mb-4">
        Built with Streamlit and Pandas, this app helps users track and maintain habits interactively.
      </p>
      <a
        href="https://github.com/RubaiyaKamal/habit-tracker"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>

    {/* Project Card 3 */}
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">urdu-voice-chatbot</h3>
      <p className="text-gray-600 mb-4">
      A chatbot built with Streamlit and Python that lets users speak and receive responses in natural spoken Urdu for interactive communication.
      </p>
      <a
        href="https://github.com/RubaiyaKamal/urdu-voice-chatbot"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  </div>
</section>
</div>
  );
}
