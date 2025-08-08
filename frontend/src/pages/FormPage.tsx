import { useState } from 'react'
import type { FormEvent } from 'react'

export default function FormPage() {
  const [submitting, setSubmitting] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 800)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">表单示例</h1>

      <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="block text-sm font-medium mb-1" htmlFor="name">姓名</label>
          <input id="name" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="请输入姓名" />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium mb-1" htmlFor="email">邮箱</label>
          <input id="email" type="email" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="name@example.com" />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium mb-1" htmlFor="role">角色</label>
          <select id="role" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
            <option>管理员</option>
            <option>运营</option>
            <option>访客</option>
          </select>
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium mb-1" htmlFor="city">城市</label>
          <input id="city" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="请输入城市" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1" htmlFor="note">备注</label>
          <textarea id="note" rows={4} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="填写备注..." />
        </div>
        <div className="md:col-span-2 flex items-center gap-2">
          <input id="agree" type="checkbox" className="size-4 rounded border-gray-300 dark:border-gray-700" />
          <label htmlFor="agree" className="text-sm">我已阅读并同意相关条款</label>
        </div>
        <div className="md:col-span-2">
          <button type="submit" disabled={submitting} className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-500 disabled:opacity-60">
            {submitting ? '提交中...' : '提交'}
          </button>
        </div>
      </form>
    </div>
  )
}