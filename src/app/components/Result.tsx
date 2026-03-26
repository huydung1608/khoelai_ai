import { Link, useLocation } from "react-router";
import { Trophy, TrendingUp, Clock, Target, ArrowRight, Star } from "lucide-react";

export function Result() {
  const location = useLocation();
  const { reps = 8, time = 245, accuracy = 85 } = location.state || {};

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getPerformanceLevel = (acc: number) => {
    if (acc >= 90) return { label: "Excellent", color: "text-green-400", emoji: "🌟" };
    if (acc >= 75) return { label: "Good", color: "text-blue-400", emoji: "👍" };
    if (acc >= 60) return { label: "Fair", color: "text-yellow-400", emoji: "💪" };
    return { label: "Keep Practicing", color: "text-orange-400", emoji: "📈" };
  };

  const performance = getPerformanceLevel(accuracy);

  const feedbackPoints = [
    { type: "positive", text: "Great form on the descent phase" },
    { type: "positive", text: "Consistent breathing pattern" },
    { type: "improvement", text: "Try to keep knees aligned with toes" },
    { type: "positive", text: "Good core engagement throughout" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Success Header */}
      <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white pt-12 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/40">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Workout Complete!</h1>
          <p className="text-green-50 text-lg">{performance.emoji} {performance.label} Performance</p>
        </div>
      </div>

      {/* Results Cards */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 pb-8">
        {/* Main Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{reps}</div>
              <div className="text-xs text-gray-500">Reps Completed</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{formatTime(time)}</div>
              <div className="text-xs text-gray-500">Duration</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className={`text-2xl font-bold ${performance.color}`}>{accuracy}%</div>
              <div className="text-xs text-gray-500">Accuracy</div>
            </div>
          </div>

          {/* Accuracy Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Form Accuracy</span>
              <span className="font-semibold text-gray-900">{accuracy}%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-1000"
                style={{ width: `${accuracy}%` }}
              ></div>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 flex items-center gap-3">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">New Personal Best!</p>
              <p className="text-sm text-gray-600">You improved by 12% from last time</p>
            </div>
          </div>
        </div>

        {/* Detailed Feedback */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Detailed Feedback</h2>
          <div className="space-y-3">
            {feedbackPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  point.type === "positive"
                    ? "bg-green-100"
                    : "bg-amber-100"
                }`}>
                  {point.type === "positive" ? (
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  )}
                </div>
                <p className="text-gray-700 flex-1 pt-0.5">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Comparison */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Progress Comparison</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Reps</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  +2 <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-xs text-gray-500">Previous: 6</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <span className="text-xs text-gray-900 font-semibold">Today: {reps}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Accuracy</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  +12% <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-300 rounded-full" style={{ width: "73%" }}></div>
                </div>
                <span className="text-xs text-gray-500">Previous: 73%</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${accuracy}%` }}></div>
                </div>
                <span className="text-xs text-gray-900 font-semibold">Today: {accuracy}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to="/"
            className="block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all"
          >
            Back to Home
          </Link>

          <Link
            to="/dashboard"
            className="block w-full bg-white border-2 border-green-500 text-green-600 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2 hover:bg-green-50 transition-all"
          >
            View Progress Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
