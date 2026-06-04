export default function AddUserPage() {
  return (
    <div className="mx-auto w-full max-w-xl p-4">
      <h1 className="mb-6 text-2xl font-semibold">Add User</h1>

      <div className="space-y-4 rounded-lg border border-gray-200 p-4">
        {/* Username */}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="e.g. john_doe"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label htmlFor="role" className="block text-sm font-medium">
            Role
          </label>
          <select
            id="role"
            name="role"
            defaultValue="admin"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          >
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>

        {/* Add button (UI only) */}
        <div className="pt-2">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

