export default function Footer() {
    return (
      <footer className="bg-gray-100 text-center py-6 mt-20 border-t">
        <p className="text-gray-700 mb-2">&copy; {new Date().getFullYear()} Rubaiya Kamal. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-blue-600 text-lg">
          <a
            href="https://github.com/RubaiyaKamal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rubaiya-kamal-0a69622ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    );
  }