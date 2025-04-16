import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Contact Me</h1>

        <div className="text-center">
          <p className="text-gray-600 mb-3 font-bold">Rubaiya Kamal</p>
          <p className="text-gray-600">
            📧 <a href="mailto:rubaiyakamal@example.com" className="text-violet-600 underline">rubaiyakamal0@gmail.com</a>
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <Link href="https://github.com/RubaiyaKamal" target="_blank" className="text-gray-700 hover:text-black">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.4.5 0 5.9 0 12.5c0 5.3 3.4 9.8 8.2 11.3.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.7-.6 2-.9.1-.7.4-1.2.8-1.5-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.4.1-3 0 0 1-.3 3.3 1.2.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.7.1 3 .8.9 1.2 2 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.3.9 1 .9 2.1v3.1c0 .3.2.7.8.6C20.6 22.3 24 17.8 24 12.5 24 5.9 18.6.5 12 .5z"/>
            </svg>
          </Link>

          <Link href="https://www.linkedin.com/in/rubaiya-kamal-0a69622ba/" target="_blank" className="text-blue-700 hover:text-blue-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.45 20.45H16.9V15c0-1.3-.02-3-1.84-3s-2.12 1.43-2.12 2.9v5.55H9.39V9h3.4v1.56h.05c.47-.89 1.63-1.84 3.35-1.84 3.58 0 4.24 2.35 4.24 5.4v6.33zM5.34 7.43c-1.1 0-2-.89-2-1.98s.9-1.98 2-1.98c1.11 0 2 .89 2 1.98 0 1.1-.89 1.98-2 1.98zM6.79 20.45H3.89V9h2.9v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.55C0 23.23.8 24 1.77 24h20.45c.97 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
