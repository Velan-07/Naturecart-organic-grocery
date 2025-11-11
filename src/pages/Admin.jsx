import React from 'react';

export default function Admin(){
  return (
    <div className="page-admin max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <p className="text-slate-600">This is a lightweight admin placeholder. For security, full admin features should be implemented on server side.</p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">Products management (placeholder)</div>
        <div className="p-4 bg-white rounded shadow">Orders & users (placeholder)</div>
      </div>
    </div>
  )
}
