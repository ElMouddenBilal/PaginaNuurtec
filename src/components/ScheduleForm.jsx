import { PhoneCall } from "lucide-react";

const ScheduleForm = () => {
  return (
    <div className="p-8 text-center space-y-4">
      <div className="flex justify-center">
        <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
          <PhoneCall className="w-7 h-7 text-white" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
      <p className="text-gray-600">
        Scheduling a call will be available soon.  
        Please check back later!
      </p>
    </div>
  );
};

export default ScheduleForm;
