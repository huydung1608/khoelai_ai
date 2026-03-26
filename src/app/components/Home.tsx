import { Link } from "react-router";
import { Activity, TrendingUp, Clock, Award } from "lucide-react";

const exerciseCategories = [
  {
    id: "neck",
    name: "Neck Relief",
    description: "Exercises for neck pain",
    icon: "🧘‍♀️",
    exercises: 8,
    color: "from-blue-400 to-blue-500"
  },
  {
    id: "back",
    name: "Back Strengthening",
    description: "Core and back support",
    icon: "💪",
    exercises: 12,
    color: "from-green-400 to-green-500"
  },
  {
    id: "knee",
    name: "Knee Recovery",
    description: "Gentle knee rehabilitation",
    icon: "🦵",
    exercises: 10,
    color: "from-purple-400 to-purple-500"
  },
  {
    id: "rehab",
    name: "Full Rehab",
    description: "Complete recovery program",
    icon: "❤️",
    exercises: 15,
    color: "from-pink-400 to-pink-500"
  }
];

const suggestedExercises = [
  {
    id: "squat",
    name: "Basic Squat",
    duration: "5 min",
    difficulty: "Beginner",
    category: "rehab"
  },
  {
    id: "neck-stretch",
    name: "Neck Stretch",
    duration: "3 min",
    difficulty: "Beginner",
    category: "neck"
  },
  {
    id: "wall-sit",
    name: "Wall Sit",
    duration: "4 min",
    difficulty: "Intermediate",
    category: "knee"
  }
];

const stats = [
  { label: "Total Workouts", value: "24", icon: Activity },
  { label: "This Week", value: "5", icon: TrendingUp },
  { label: "Total Time", value: "3.2h", icon: Clock },
  { label: "Avg Accuracy", value: "87%", icon: Award }
];

export function Home() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white pt-12 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">KhoeLai</h1>
          <p className="text-green-50 text-lg">Tập đúng, khoẻ lại nhanh</p>

          {/* Welcome Card */}
          <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-white/90 text-sm mb-4">Good morning! Ready to start your day?</p>
            <Link
              to="/exercise/squat"
              className="block w-full bg-white text-green-600 py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all"
            >
              Start Exercise
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-4xl mx-auto px-6 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl p-4 shadow-md">
                <Icon className="w-5 h-5 text-green-600 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Suggested Exercises */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Suggested for You</h2>
          <div className="space-y-3">
            {suggestedExercises.map((exercise) => (
              <Link
                key={exercise.id}
                to={`/exercise/${exercise.id}`}
                className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{exercise.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-500">{exercise.duration}</span>
                      <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                        {exercise.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Exercise Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Categories</h2>
            <Link to="/dashboard" className="text-sm text-green-600 font-semibold">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {exerciseCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-2xl mb-3`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{category.description}</p>
                <p className="text-xs text-gray-400">{category.exercises} exercises</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-around">
          <Link to="/" className="flex flex-col items-center gap-1 text-green-600">
            <Activity className="w-6 h-6" />
            <span className="text-xs font-semibold">Home</span>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center gap-1 text-gray-400">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <Award className="w-6 h-6" />
            <span className="text-xs">Awards</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <Clock className="w-6 h-6" />
            <span className="text-xs">History</span>
          </div>
        </div>
      </div>
    </div>
  );
}
