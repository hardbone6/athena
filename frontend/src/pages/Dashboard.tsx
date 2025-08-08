export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">仪表盘</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">今日访问</div>
          <div className="mt-2 text-3xl font-bold">12,345</div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">新注册</div>
          <div className="mt-2 text-3xl font-bold">128</div>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">活跃会话</div>
          <div className="mt-2 text-3xl font-bold">2,041</div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
        <h2 className="text-lg font-medium mb-4">最近活动</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-between">
            <span>用户 A 注册</span>
            <span className="text-gray-500">10:21</span>
          </li>
          <li className="flex items-center justify-between">
            <span>订单 #1024 已支付</span>
            <span className="text-gray-500">09:58</span>
          </li>
          <li className="flex items-center justify-between">
            <span>导出报表完成</span>
            <span className="text-gray-500">09:45</span>
          </li>
        </ul>
      </div>
    </div>
  )
}