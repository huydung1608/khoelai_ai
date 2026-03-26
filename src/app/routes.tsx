import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { AreaSelectionPage } from "./pages/AreaSelectionPage";
import { ExerciseListPage } from "./pages/ExerciseListPage";
import { ExerciseDetailPage } from "./pages/ExerciseDetailPage";
import { LiveExercisePage } from "./pages/LiveExercisePage";
import { DashboardPage } from "./pages/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/chon-vung",
    element: <AreaSelectionPage />,
  },
  {
    path: "/bai-tap/:area",
    element: <ExerciseListPage />,
  },
  {
    path: "/chi-tiet/:exerciseId",
    element: <ExerciseDetailPage />,
  },
  {
    path: "/tap-luyen/:exerciseId",
    element: <LiveExercisePage />,
  },
  {
    path: "/lich-su",
    element: <DashboardPage />,
  },
]);
