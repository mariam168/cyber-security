
import { useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import expert from "../assets/solution3.jfif";
import expert2 from "../assets/expert.jpg";
import SchedulingStep from '../components/SchedulingStep'; 

export default function TalkToExpert() {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDisplayMonth, setCurrentDisplayMonth] = useState(dayjs());

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    existingCustomer: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [actionConfirmed, setActionConfirmed] = useState(false);
  const [message, setMessage] = useState('');
 

  const handleAction = (type) => {
    if (type === "confirm") {
      console.log("Confirmed Data:", {
        ...formData,
        date: getFormattedSelectedDate(),
        time: selectedTime,
      });
      setMessage("🎉 Booking Confirmed!");
    } else {
      setMessage("❌ Booking Cancelled");
    }

    setActionConfirmed(true);

    setTimeout(() => {
      setActionConfirmed(false);
      setMessage('');
      closeModal();
      navigate('/');
    }, 2000);
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const availableTimes = [
    "11:30 am", "11:45 am", "12:00 pm", "12:15 pm", "12:30 pm", "12:45 pm"
  ];

  const handleDateSelect = (day) => {
      if (!day) return;
      setSelectedDate(day);
      setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
      setSelectedTime(time);
  };

  const handleNextMonth = () => {
    setCurrentDisplayMonth(prev => prev.add(1, 'month'));
    
  };

  const handlePrevMonth = () => {
  
    if (currentDisplayMonth.isSame(dayjs(), 'month')) {
        return; 
    }
    setCurrentDisplayMonth(prev => prev.subtract(1, 'month'));
 
  };
  const isPrevMonthDisabled = currentDisplayMonth.isSame(dayjs(), 'month');

  const year = currentDisplayMonth.year();
  const month = currentDisplayMonth.month();
  const daysInMonth = currentDisplayMonth.daysInMonth();
  const firstDayOfMonth = currentDisplayMonth.startOf('month').day();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

 
  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const closeModal = () => {
    setShowConfirmation(false);
    setStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      existingCustomer: "",
    });
    setSelectedDate(null);
    setSelectedTime(null);
    setCurrentDisplayMonth(dayjs());
  };

   
   const nextStep = () => setStep(s => s + 1);
   const prevStep = () => setStep(s => s - 1);

  
  const getFormattedSelectedDate = () => {
      if (!selectedDate) return "";
      const dateObj = currentDisplayMonth.date(selectedDate);
      return dateObj.format("MMMM DD, YYYY");
  }


  return (
    <div>
      <Header />
   
      <div
        className="relative h-[60vh] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${expert})`, backgroundPosition: "center center" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <div className="flex items-center space-4 mb-6">
            <div className="bg-[#0F318E] w-8 h-8 rounded mx-2"></div>
            <div className="bg-[#0F318E] w-8 h-8 rounded mx-2"></div>
            <div className="bg-[#0F318E] w-8 h-8 rounded mx-2"></div>
          </div>
          <h1 className="text-4xl font-bold mb-4">
  Discover Tailored IT Solutions for Your<br></br> Business
</h1>
        </div>
      </div>

  
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg mt-8 rounded-lg">

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-center">Let's Chat!</h2>
            <p className="text-center text-gray-600 mb-6">
              We’re here to help you unlock your business’s IT potential. Fill in the form
              below and a member of our team will be in touch within 24 hours.
            </p>
            <form className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
           
               <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border border-[#0F318E] rounded-lg focus:ring-2 focus:ring-[#0F318E] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-3 w-full border border-[#0F318E] rounded-lg focus:ring-2 focus:ring-[#0F318E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-[#0F318E] rounded-lg focus:ring-2 focus:ring-[#0F318E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Phone Number </label>
                <div className="flex border border-[#0F318E] rounded-lg overflow-hidden">
                  <select className="bg-gray-200 p-3 border-r outline-none">
                    <option>🇬🇧 GB</option>
                    <option>🇸🇦 SA</option>
                    <option>🇺🇸 US</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="p-3 w-full focus:ring-2 focus:ring-[#0F318E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Are you an existing customer?</label>
                <select
                  name="existingCustomer"
                  value={formData.existingCustomer}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border border-[#0F318E] rounded-lg focus:ring-2 focus:ring-[#0F318E] focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-semibold">Step 1 of 3</span>
                <div className="w-1/3 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-[#0F318E] rounded-full transition-all"></div>
                </div>
              </div>
              <button
                 type="button"
                 onClick={nextStep}
                 className="w-full bg-[#0F318E] text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#092768]"
              >
                Next
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold">How can we help?</h2>
            <div className="mt-6 border p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Prefer to meet?</h3>
              <p className="text-gray-600">We’d love digital to help facilitate a face-to-face chat.</p>
           
              
              <img src={expert2} alt="ITC Service" className="mx-auto mb-4" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-black p-6 rounded-lg">
            
               <div className="p-4 border border-gray-700 rounded-lg text-center text-gray-300 shadow-md">
                <h4 className="font-semibold text-sm text-white">Sales</h4>
                <p className="text-xs mt-1">📞 028 825 2028</p>
                <p className="text-xs">✉️ hello@itcservice.co.uk</p>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg text-center text-gray-300 shadow-md">
                <h4 className="font-semibold text-sm text-white">Customer Support</h4>
                <p className="text-xs mt-1">📞 028 825 2028</p>
                <p className="text-xs">✉️ support@service.co.uk</p>
              </div>
              <div className="p-4 border border-gray-700 rounded-lg text-center text-gray-300 shadow-md">
                <h4 className="font-semibold text-sm text-white">Our Office</h4>
                <p className="text-xs mt-1">Marlborough Court, Houston</p>
                <p className="text-xs">Dunston Park South, Hebburn, NE3 2X</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-600 font-semibold">Step 2 of 3</span>
                <div className="w-1/3 h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-[#0F318E] rounded-full transition-all"></div>
                </div>
              </div>
            <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
                <button type="button" onClick={nextStep} className="bg-[#0F318E] text-white py-2 px-4 rounded">Next</button>
            </div>
          </div>
        )}

       
        {step === 3 && (
          <SchedulingStep
            availableTimes={availableTimes}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            currentDisplayMonth={currentDisplayMonth}
            calendarDays={calendarDays}
            onDateSelect={handleDateSelect}
            onTimeSelect={handleTimeSelect}
            onPrevStep={prevStep}
            onSubmit={handleSubmit}
            onNextMonth={handleNextMonth}
            onPrevMonth={handlePrevMonth}
            isPrevMonthDisabled={isPrevMonthDisabled}
          />
        )}
      </div> 

    
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md animate-fadeIn text-center">
            {!actionConfirmed ? (
              <>
                <h2 className="text-2xl font-bold mb-4 text-[#0F318E]">
                  Please Confirm Your Info
                </h2>
                <div className="text-gray-700 space-y-2 text-sm text-left">
                  <p>
                    <strong>First Name:</strong> {formData.firstName}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {formData.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {formData.email}
                  </p>
                  {formData.phoneNumber && (
                    <p>
                      <strong>Phone Number:</strong> {formData.phoneNumber}
                    </p>
                  )}
                  {formData.existingCustomer && (
                    <p>
                      <strong>Existing Customer:</strong>{" "}
                      {formData.existingCustomer}
                    </p>
                  )}
                  {selectedDate && (
                    <p>
                      <strong>Preferred Date:</strong>{" "}
                      {getFormattedSelectedDate()}
                    </p>
                  )}
                  {selectedTime && (
                    <p>
                      <strong>Preferred Time:</strong> {selectedTime}
                    </p>
                  )}
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => handleAction("cancel")}
                    className="bg-gray-500 text-white py-2 px-5 rounded-lg hover:bg-gray-600 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleAction("confirm")}
                    className="bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-40 animate-slideUp">
                <div className="text-2xl font-bold text-green-600">{message}</div>
                <div className="text-sm text-gray-500 mt-2">Redirecting...</div>
              </div>
            )}
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }

          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-slideUp {
            animation: slideUp 0.5s ease-out;
          }
        `}
      </style>

    </div>
  );
}