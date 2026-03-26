import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { X, Camera, AlertCircle, CheckCircle2, Pause, Play } from "lucide-react";

export function LiveExercise() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const [reps, setReps] = useState(0);
  const [time, setTime] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"correct" | "incorrect">("correct");
  const [highlightedPart, setHighlightedPart] = useState<string | null>(null);

  // Simulated pose feedback
  const feedbackMessages = {
    correct: [
      "Perfect form! 👏",
      "Great job! Keep it up!",
      "Excellent posture!",
      "Well done!"
    ],
    incorrect: [
      { message: "Keep your back straight", part: "back" },
      { message: "Lower your knees more", part: "knees" },
      { message: "Align your shoulders", part: "shoulders" },
      { message: "Don't lean forward", part: "torso" }
    ]
  };

  // Simulate real-time feedback
  useEffect(() => {
    if (isPaused) return;

    const feedbackInterval = setInterval(() => {
      const isCorrect = Math.random() > 0.3;
      setFeedbackType(isCorrect ? "correct" : "incorrect");

      if (isCorrect) {
        const msg = feedbackMessages.correct[Math.floor(Math.random() * feedbackMessages.correct.length)];
        setCurrentFeedback(msg);
        setHighlightedPart(null);

        // Increment reps occasionally
        if (Math.random() > 0.7) {
          setReps(prev => prev + 1);
          setAccuracy(prev => Math.min(100, prev + Math.floor(Math.random() * 5)));
        }
      } else {
        const feedback = feedbackMessages.incorrect[Math.floor(Math.random() * feedbackMessages.incorrect.length)];
        setCurrentFeedback(feedback.message);
        setHighlightedPart(feedback.part);
      }
    }, 2500);

    const timerInterval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(feedbackInterval);
      clearInterval(timerInterval);
    };
  }, [isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFinish = () => {
    navigate("/result", {
      state: { reps, time, accuracy: accuracy || 75 }
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <X className="w-6 h-6" />
          </Link>
          <div className="text-center">
            <div className="text-sm text-white/80">Basic Squat</div>
            <div className="text-xs text-white/60">Full Rehab</div>
          </div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center"
          >
            {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Camera View with Pose Skeleton */}
      <div className="relative h-[60vh] bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Simulated camera feed */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/20 flex flex-col items-center gap-2">
            <Camera className="w-16 h-16" />
            <p className="text-sm">Camera Feed</p>
          </div>
        </div>

        {/* Pose Skeleton Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-64">
            {/* Head */}
            <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-3 ${
              highlightedPart === "head" ? "border-red-400 shadow-lg shadow-red-400/50" : "border-green-400"
            } transition-all`}></div>

            {/* Shoulders */}
            <div className={`absolute top-14 left-6 w-3 h-3 rounded-full ${
              highlightedPart === "shoulders" ? "bg-red-400 shadow-lg shadow-red-400/50" : "bg-green-400"
            } transition-all`}></div>
            <div className={`absolute top-14 right-6 w-3 h-3 rounded-full ${
              highlightedPart === "shoulders" ? "bg-red-400 shadow-lg shadow-red-400/50" : "bg-green-400"
            } transition-all`}></div>

            {/* Torso/Back */}
            <div className={`absolute top-14 left-1/2 -translate-x-1/2 w-1 h-24 ${
              highlightedPart === "back" || highlightedPart === "torso"
                ? "bg-red-400 shadow-lg shadow-red-400/50"
                : "bg-green-400"
            } transition-all`}></div>

            {/* Arms */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-28 h-1 bg-green-400"></div>
            <div className="absolute top-16 left-6 w-1 h-16 bg-green-400 rotate-12"></div>
            <div className="absolute top-16 right-6 w-1 h-16 bg-green-400 -rotate-12"></div>

            {/* Hips */}
            <div className="absolute top-38 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-400"></div>

            {/* Knees */}
            <div className={`absolute top-48 left-12 w-3 h-3 rounded-full ${
              highlightedPart === "knees" ? "bg-red-400 shadow-lg shadow-red-400/50" : "bg-green-400"
            } transition-all`}></div>
            <div className={`absolute top-48 right-12 w-3 h-3 rounded-full ${
              highlightedPart === "knees" ? "bg-red-400 shadow-lg shadow-red-400/50" : "bg-green-400"
            } transition-all`}></div>

            {/* Legs */}
            <div className="absolute top-38 left-12 w-1 h-24 bg-green-400 rotate-6"></div>
            <div className="absolute top-38 right-12 w-1 h-24 bg-green-400 -rotate-6"></div>
          </div>
        </div>

        {/* Camera Permission Indicator */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-green-500 rounded-full text-xs font-semibold flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          Camera Active
        </div>
      </div>

      {/* Stats Panel */}
      <div className="bg-gray-900 px-6 py-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{reps}</div>
            <div className="text-xs text-gray-400 mt-1">Reps</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{formatTime(time)}</div>
            <div className="text-xs text-gray-400 mt-1">Time</div>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">{accuracy}%</div>
            <div className="text-xs text-gray-400 mt-1">Accuracy</div>
          </div>
        </div>
      </div>

      {/* Real-time Feedback Panel */}
      <div className="px-6 py-6 space-y-3">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Real-time Feedback</h3>

        {currentFeedback && (
          <div className={`rounded-xl p-4 flex items-start gap-3 animate-in slide-in-from-bottom ${
            feedbackType === "correct"
              ? "bg-green-500/20 border border-green-500/30"
              : "bg-red-500/20 border border-red-500/30"
          }`}>
            {feedbackType === "correct" ? (
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className={`font-semibold ${
                feedbackType === "correct" ? "text-green-400" : "text-red-400"
              }`}>
                {feedbackType === "correct" ? "Good Form" : "Needs Adjustment"}
              </p>
              <p className="text-white mt-1">{currentFeedback}</p>
            </div>
          </div>
        )}

        {/* Quick Tips */}
        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
          <p className="text-sm text-gray-300">
            <span className="font-semibold text-white">Tip:</span> Keep your movements slow and controlled for best results
          </p>
        </div>
      </div>

      {/* Finish Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent px-6 py-6">
        <button
          onClick={handleFinish}
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Finish Exercise
        </button>
      </div>

      {/* Pause Overlay */}
      {isPaused && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30">
          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <Pause className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Exercise Paused</h3>
            <p className="text-gray-400 mb-6">Take your time, resume when ready</p>
            <button
              onClick={() => setIsPaused(false)}
              className="px-8 py-3 bg-green-500 rounded-xl font-semibold"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
