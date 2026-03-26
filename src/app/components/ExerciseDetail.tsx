import { Link, useParams } from "react-router";
import { ArrowLeft, Play, Clock, Target, TrendingUp } from "lucide-react";

const exerciseData: Record<string, any> = {
  "squat": {
    name: "Basic Squat",
    category: "Full Rehab",
    duration: "5 min",
    difficulty: "Beginner",
    calories: "25 kcal",
    reps: "3 sets × 10 reps",
    description: "A fundamental lower body exercise that strengthens your legs, glutes, and core. Perfect for rehabilitation and building foundational strength.",
    benefits: [
      "Strengthens quadriceps and glutes",
      "Improves hip mobility",
      "Enhances core stability",
      "Builds functional strength"
    ],
    instructions: [
      "Stand with feet shoulder-width apart",
      "Keep your back straight and chest up",
      "Lower your body by bending knees and hips",
      "Go down until thighs are parallel to ground",
      "Push through heels to return to start",
      "Keep knees aligned with toes throughout"
    ],
    keyPoints: [
      "Keep your back straight",
      "Don't let knees pass toes",
      "Lower your body slowly",
      "Engage your core"
    ]
  },
  "neck-stretch": {
    name: "Neck Stretch",
    category: "Neck Relief",
    duration: "3 min",
    difficulty: "Beginner",
    calories: "10 kcal",
    reps: "Hold 30s each side",
    description: "Gentle neck stretches to relieve tension and improve flexibility. Ideal for office workers experiencing neck stiffness.",
    benefits: [
      "Reduces neck tension",
      "Improves range of motion",
      "Relieves headaches",
      "Prevents stiffness"
    ],
    instructions: [
      "Sit or stand with good posture",
      "Gently tilt head to right side",
      "Hold stretch for 30 seconds",
      "Return to center slowly",
      "Repeat on left side",
      "Move slowly and controlled"
    ],
    keyPoints: [
      "Move gently, never force",
      "Breathe deeply",
      "Keep shoulders relaxed",
      "Stop if you feel pain"
    ]
  },
  "wall-sit": {
    name: "Wall Sit",
    category: "Knee Recovery",
    duration: "4 min",
    difficulty: "Intermediate",
    calories: "30 kcal",
    reps: "3 sets × 45s hold",
    description: "An isometric exercise that builds leg strength and endurance while being gentle on the knees.",
    benefits: [
      "Builds leg endurance",
      "Strengthens quadriceps",
      "Low impact on knees",
      "Improves mental toughness"
    ],
    instructions: [
      "Stand with back against wall",
      "Slide down until knees at 90 degrees",
      "Keep back flat against wall",
      "Hold position for target time",
      "Push through heels to stand up",
      "Rest between sets"
    ],
    keyPoints: [
      "Keep knees at 90°",
      "Back flat on wall",
      "Breathe steadily",
      "Don't let knees cave in"
    ]
  }
};

export function ExerciseDetail() {
  const { id } = useParams();
  const exercise = exerciseData[id || "squat"] || exerciseData["squat"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-blue-600 text-white pt-6 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>

          <h1 className="text-3xl font-bold mb-2">{exercise.name}</h1>
          <p className="text-green-50">{exercise.category}</p>
        </div>
      </div>

      {/* Demo Video Area */}
      <div className="max-w-4xl mx-auto px-6 -mt-24 mb-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl aspect-video flex items-center justify-center relative">
          {/* Simulated pose skeleton */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-32 h-48">
              {/* Head */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-green-400"></div>
              {/* Body */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-green-400"></div>
              {/* Arms */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-green-400"></div>
              {/* Legs */}
              <div className="absolute top-24 left-8 w-0.5 h-16 bg-green-400 rotate-12"></div>
              <div className="absolute top-24 right-8 w-0.5 h-16 bg-green-400 -rotate-12"></div>
              {/* Joints */}
              <div className="absolute top-12 left-2 w-2 h-2 rounded-full bg-green-400"></div>
              <div className="absolute top-12 right-2 w-2 h-2 rounded-full bg-green-400"></div>
              <div className="absolute top-24 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-400"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 rounded-full text-xs font-semibold">
            Demo Video
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
            <div className="text-sm font-semibold text-gray-900">{exercise.duration}</div>
            <div className="text-xs text-gray-500">Duration</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <Target className="w-5 h-5 text-green-600 mx-auto mb-1" />
            <div className="text-sm font-semibold text-gray-900">{exercise.reps}</div>
            <div className="text-xs text-gray-500">Target</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <TrendingUp className="w-5 h-5 text-purple-600 mx-auto mb-1" />
            <div className="text-sm font-semibold text-gray-900">{exercise.difficulty}</div>
            <div className="text-xs text-gray-500">Level</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-32">
        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">About This Exercise</h2>
          <p className="text-gray-600 leading-relaxed">{exercise.description}</p>
        </div>

        {/* Benefits */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Benefits</h2>
          <div className="space-y-2">
            {exercise.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-700 flex-1">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Step-by-Step Instructions</h2>
          <div className="space-y-3">
            {exercise.instructions.map((instruction: string, index: number) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center flex-shrink-0 text-white text-sm font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-700 flex-1 pt-1">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-lg">⚠️</span>
            Key Points to Remember
          </h3>
          <div className="space-y-2">
            {exercise.keyPoints.map((point: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                <p className="text-sm text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/live/${id}`}
            className="block w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Start Exercise
          </Link>
        </div>
      </div>
    </div>
  );
}
