import { Link } from "react-router";
import { ArrowLeft, TrendingUp, Calendar, Target, Award } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const accuracyData = [
  { date: "Mon", accuracy: 72 },
  { date: "Tue", accuracy: 75 },
  { date: "Wed", accuracy: 78 },
  { date: "Thu", accuracy: 82 },
  { date: "Fri", accuracy: 85 },
  { date: "Sat", accuracy: 87 },
  { date: "Sun", accuracy: 85 }
];

const workoutData = [
  { date: "Mon", reps: 6 },
  { date: "Tue", reps: 7 },
  { date: "Wed", reps: 8 },
  { date: "Thu", reps: 7 },
  { date: "Fri", reps: 9 },
  { date: "Sat", reps: 8 },
  { date: "Sun", reps: 8 }
];

const recentWorkouts = [
  {
    id: 1,
    name: "Basic Squat",
    date: "Today, 10:30 AM",
    reps: 8,
    accuracy: 85,
    duration: "4m 5s",
    category: "Full Rehab"
  },
  {
    id: 2,
    name: "Neck Stretch",
    date: "Yesterday, 2:15 PM",
    reps: 12,
    accuracy: 92,
    duration: "3m 20s",
    category: "Neck Relief"
  },
  {
    id: 3,
    name: "Wall Sit",
    date: "2 days ago, 9:00 AM",
    reps: 6,
    accuracy: 78,
    duration: "5m 10s",
    category: "Knee Recovery"
  },
  {
    id: 4,
    name: "Basic Squat",
    date: "3 days ago, 10:45 AM",
    reps: 7,
    accuracy: 80,
    duration: "3m 45s",
    category: "Full Rehab"
  }
];

const achievements = [
  { id: 1, name: "First Workout", icon: "🎯", unlocked: true },
  { id: 2, name: "7-Day Streak", icon: "🔥", unlocked: true },
  { id: 3, name: "Perfect Form", icon: "⭐", unlocked: true },
  { id: 4, name: "50 Workouts", icon: "💪", unlocked: false }
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white pt-6 pb-8 px-6 sticky top-0 z-10 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>

          <h1 className="text-3xl font-bold mb-1">Your Progress</h1>
          <p className="text-green-50">Track your fitness journey</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">7</div>
                <div className="text-xs text-gray-500">Day Streak</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
              <TrendingUp className="w-4 h-4" />
              Keep it up!
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24</div>
                <div className="text-xs text-gray-500">Total Workouts</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-blue-600 text-xs font-semibold">
              <TrendingUp className="w-4 h-4" />
              +3 this week
            </div>
          </div>
        </div>

        {/* Accuracy Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Accuracy Trend</h2>
            <span className="text-sm text-gray-500">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                stroke="#999"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#999"
                style={{ fontSize: '12px' }}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600">Form Accuracy (%)</span>
            </div>
          </div>
        </div>

        {/* Workout Volume Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Workout Volume</h2>
            <span className="text-sm text-gray-500">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={workoutData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="date"
                stroke="#999"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#999"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar
                dataKey="reps"
                fill="url(#colorGradient)"
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-blue-500 to-green-500"></div>
              <span className="text-gray-600">Reps Completed</span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-gray-900" />
            <h2 className="text-lg font-bold text-gray-900">Achievements</h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`text-center ${
                  achievement.unlocked ? "" : "opacity-40"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-2 mx-auto ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400"
                    : "bg-gray-100 border-2 border-gray-300"
                }`}>
                  {achievement.icon}
                </div>
                <p className="text-xs font-medium text-gray-700 leading-tight">
                  {achievement.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Workouts */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Workouts</h2>
          <div className="space-y-3">
            {recentWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="border border-gray-200 rounded-xl p-4 hover:border-green-300 hover:bg-green-50/30 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{workout.name}</h3>
                    <p className="text-xs text-gray-500">{workout.date}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                    workout.accuracy >= 90
                      ? "bg-green-100 text-green-700"
                      : workout.accuracy >= 75
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {workout.accuracy}%
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Target className="w-4 h-4" />
                    <span>{workout.reps} reps</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{workout.duration}</span>
                  </div>
                </div>

                <div className="mt-3 w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-blue-600 rounded-full"
                    style={{ width: `${workout.accuracy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
