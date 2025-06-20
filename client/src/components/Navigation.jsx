import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center p-5 bg-zinc-900 text-white">
      <Link to={'/tasks'}>
        <h1 className="font-bold text-3xl mb-4">Task App</h1>
      </Link>
      <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to={'/tasks-create'}>Create Task</Link>
      </button>
    </div>
  );
}