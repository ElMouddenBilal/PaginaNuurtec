const JoinForm = () => {
  return (
    <div className="p-8 text-center space-y-4">
      <div className="flex justify-center">
        <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-3xl">🚧</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
      <p className="text-gray-600">
        This form is currently under preparation and will be available soon.
      </p>
    </div>
  );
};

export default JoinForm;
