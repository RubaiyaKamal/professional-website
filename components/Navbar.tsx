import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-violet-600">Rubaiya Kamal</h1>
        <ul className="flex space-x-6 text-gray-900 font-medium">
          <li>
            <Link href="/" className="hover:text-violet-600 hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-violet-600 hover:underline">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-violet-600 hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}