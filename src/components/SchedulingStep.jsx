import React, { useState } from 'react';
import dayjs from "dayjs";

export default function SchedulingStep({
  selectedDate,
  selectedTime,
  currentDisplayMonth,
  calendarDays,
  onDateSelect,
  onTimeSelect,
  onPrevStep,
  onSubmit,
  onNextMonth,
  onPrevMonth,
  isPrevMonthDisabled 
}) {

  const [fridayClicked, setFridayClicked] = useState(false);

  const year = currentDisplayMonth.year();
  const today = dayjs();
  const isSubmitDisabled = !selectedDate || !selectedTime;

  // Dynamic available times based on the selected date
  const getAvailableTimes = (date, month) => {
    if (!date) return [];

    const fullDate = dayjs(`${month.format("YYYY-MM")}-${String(date).padStart(2, '0')}`);
    const dayOfWeek = fullDate.day(); // Sunday = 0, Friday = 5

    if (dayOfWeek === 5) return []; // Friday is off

    switch (dayOfWeek) {
      case 0: // Sunday
        return ["10:00 AM", "11:00 AM", "12:00 PM"];
      case 6: // Saturday
        return ["1:00 PM", "2:00 PM", "3:00 PM"];
      case 1:
        return ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];
      case 2:
        return ["6:00 AM"];
      case 3: 
        return [ "11:00 AM", "2:00 PM", "4:00 PM"];
      case 4: 
        return ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];
      default:
        return [];
    }
  };

  const timesForSelectedDate = getAvailableTimes(selectedDate, currentDisplayMonth);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Date Picker */}
        <div className="bg-white rounded-lg p-4 shadow-md border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Choose a Date
          </h3>
          <div className="flex justify-between items-center mb-3 px-2">
            <button
              onClick={onPrevMonth}
              disabled={isPrevMonthDisabled} 
              className={`p-1 rounded-full ${isPrevMonthDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
              aria-label="Previous month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <span className="text-sm text-center font-semibold text-gray-700">
              {currentDisplayMonth.format("MMMM YYYY")} 
            </span>
            <button
              onClick={onNextMonth}
              className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
              aria-label="Next month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-2 font-medium">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 justify-items-center">
            {calendarDays.map((day, i) => {
              const fullDate = currentDisplayMonth.date(day);
              const isPast = day && fullDate.isBefore(today, 'day');
              const isFriday = fullDate.day() === 5;
              const isDisabled = !day || isPast;

              const handleClick = () => {
                if (isFriday) {
                  setFridayClicked(true);
                } else {
                  setFridayClicked(false);
                  onDateSelect(day);
                }
              };

              return (
                <button
                  key={i}
                  disabled={isDisabled} 
                  onClick={handleClick} 
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition border
                    ${!day ? "bg-transparent border-transparent cursor-default" : ""}
                    ${isDisabled && day ? "text-gray-400 bg-gray-100 cursor-not-allowed border-gray-100" : ""}
                    ${selectedDate === day ? "bg-[#0F318E] text-white border-[#0F318E]" : ""}
                    ${!isDisabled && selectedDate !== day && !isFriday ? "text-gray-700 border-gray-200 hover:bg-blue-100 hover:border-blue-300" : ""}
                    ${isFriday ? "bg-red-100 text-red-500 border-red-200 cursor-not-allowed" : ""}
                  `}
                >
                  {day || ""}
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Picker */}
        <div className="bg-white rounded-lg p-4 shadow-md border">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Select a Time
          </h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            {selectedDate
              ? `Available on ${currentDisplayMonth.format("MMMM")} ${selectedDate}, ${year}`
              : "Please choose a date first."}
          </p>

          {fridayClicked && (
            <div className="text-center text-red-500 text-sm mt-6 font-medium">
              Friday is off — please select another day.
            </div>
          )}

          {!fridayClicked && selectedDate && timesForSelectedDate.length > 0 && (
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2"> 
              {timesForSelectedDate.map((time) => (
                <li
                  key={time}
                  onClick={() => onTimeSelect(time)}
                  className={`p-2 text-center border rounded-lg cursor-pointer transition-all font-medium text-xs sm:text-sm
                    ${selectedTime === time
                      ? "bg-[#0F318E] text-white border-[#0F318E] shadow-md"
                      : "bg-gray-50 text-gray-700 hover:bg-blue-100 hover:text-blue-700 border-gray-300"
                    }`}
                >
                  {time}
                </li>
              ))}
            </ul>
          )}

          {!fridayClicked && selectedDate && timesForSelectedDate.length === 0 && (
            <div className="text-center text-sm text-red-500 mt-4">
              No available times for this day.
            </div>
          )}

          {!selectedDate && !fridayClicked && (
            <div className="text-center text-sm text-gray-400 mt-6">
              Select a date to see times.
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center mb-4">
        <span className="text-sm text-gray-600 font-semibold">Step 3 of 3</span>
      </div>

      <div className="flex justify-between mt-6">
        <button onClick={onPrevStep} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Previous</button>
        <button
          onClick={onSubmit}
          disabled={isSubmitDisabled}
          className={`text-white py-2 px-4 rounded font-semibold transition duration-300 ${isSubmitDisabled ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}`}
        >
          Submit
        </button>
      </div>
    </>
  );
}
