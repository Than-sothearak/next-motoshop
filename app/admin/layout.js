export default function AdminLayout({ children }) {
    return (
      <div className="flex">
        <aside className="w-64 p-4 bg-gray-800 text-white">
          <ul>
            <li><a href="/admin">Dashboard</a></li>
            <li><a href="/admin/users">Manage Users</a></li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    );
  }