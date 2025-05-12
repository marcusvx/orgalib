export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Orgalib</h1>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4">{children}</main>

      <footer className="bg-gray-200 text-gray-600 p-4">
        <div className="container mx-auto">
          <p>&copy; 2025 Orgalib</p>
        </div>
      </footer>
    </div>
  );
}
