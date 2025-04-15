import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div>
         <Navbar />
      <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
       {/* Intro / Hero Section */}
<section className="text-center">
  <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-7">Rubaiya Kamal</h1>
  <p className="text-xl md:text-2xl text-gray-600 mb-4">
    AI Engineer | Python Developer | Agentic AI Learner
  </p>
  <p className="text-md text-gray-500 mb-6">
    Passionate about building intelligent agents, chatbots, and data-driven tools using modern AI technologies.
  </p>
  
  {/* Contact Info */}
  <div className="text-lg text-gray-700">
    <p className="mb-2">📞 Contact Number: <a href="tel:+1234567890" className="text-violet-700">0331-3494999</a></p>
    <p>Email: <a href="mailto:rubaiya.kamal@example.com" className="text-violet-700">rubaiyakamal0@gamil.com</a></p>
  </div>
</section>

  
       {/* About Me Section */}
<section className="mt-20 max-w-3xl mx-auto text-center">
  <h2 className="text-3xl font-semibold mb-4">About Me</h2>
  
  <p className="text-gray-700 leading-relaxed mb-4">
    I am an AI enthusiast and Python developer currently learning Agentic AI at PIAIC. I specialize in OpenAI Agents SDK, FastAPI, Docker, Azure, and LLMs. I have built projects like chatbots, multi-agent workflows, and AI tools using Google Colab, Jupyter Notebook, and Streamlit. With clean UV virtual environments and a passion for automation, I aim to build intelligent, scalable AI systems for real-world impact.
  </p>

  <div className="space-y-4 text-left text-lg mt-9">
    <h3 className="text-2xl font-semibold text-violet-700 underline">Skills & Expertise:</h3>
    <ul className="list-disc pl-6">
      <li>AI Enthusiast & Python Developer</li>
      <li>Learning Agentic AI at PIAIC</li>
      <li>Specialization in OpenAI Agents SDK, FastAPI, Docker, Azure, and LLMs</li>
      <li>Experience in building chatbots, multi-agent workflows, and AI tools</li>
      <li>Proficient in Google Colab, Jupyter Notebook, and Streamlit</li>
      <li>Focus on clean UV virtual environments for reproducibility</li>
      <li>Passionate about building intelligent, scalable AI systems</li>
    </ul>
  </div>
</section>

      </main>
      </div>
    );
  }
  