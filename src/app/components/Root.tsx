import { Outlet } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Outlet />
    </div>
  );
}
