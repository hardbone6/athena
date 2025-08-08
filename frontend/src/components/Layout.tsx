import { NavLink, Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex">
        <aside className="hidden md:flex md:w-64 md:flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="h-16 flex items-center px-4 text-xl font-semibold">前端示例</div>
          <nav className="px-2 pb-4 space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`
              }
            >
              仪表盘
            </NavLink>
            <NavLink
              to="/form"
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`
              }
            >
              表单示例
            </NavLink>
          </nav>
        </aside>

        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex items-center justify-between px-4">
            <div className="md:hidden text-lg font-semibold">前端示例</div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </header>

          <main className="p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}