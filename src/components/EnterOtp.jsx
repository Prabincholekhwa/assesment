import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function EnterOtp({ email }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(99); // Timer in seconds
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Allows only numbers
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move focus to the next input box if it exists and is an HTMLInputElement
    if (
      element.nextElementSibling &&
      element.nextElementSibling instanceof HTMLElement
    ) {
      element.nextElementSibling.focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      event.target.previousSibling.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.some((digit) => digit === "")) {
      setErrorMessage("Please enter all 6 digits.");
    } else {
      toast.success("Verified");
      setTimeout(() => {
        navigate(`/details`);
      }, 700);
    }
  };

  const handleResendCode = () => {
    if (timer === 0) {
      alert("A new OTP has been sent to your email!");
      setTimer(99); // Reset timer
    }
  };

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      {/* Top Section: Logo */}
      <header className="text-center mt-8 ml-4">
        <h1 className="text-4xl font-bold text-red-600">Logoisum</h1>
      </header>

      {/* Middle Section: OTP Form */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Verify Your Email
        </h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Please enter the 6-digit code we just sent to{" "}
          <span className="font-bold">
            {email.replace(/(.{1}).*?@/, "$1*********@")}
          </span>
        </p>
        <div className="flex gap-2 justify-center mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white text-black"
            />
          ))}
          <ToastContainer />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full max-w-md bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none mb-4"
        >
          Verify
        </button>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
        )}

        <p className="text-sm text-gray-600 mb-4">
          {timer > 0 ? (
            <>
              Wait{" "}
              <span className="font-bold">{`${Math.floor(timer / 60)}:${
                timer % 60 < 10 ? "0" : ""
              }${timer % 60}`}</span>{" "}
              seconds before requesting a new code.
            </>
          ) : (
            <>
              <span className="text-gray-600">Didn't receive a code? </span>
              <button
                onClick={handleResendCode}
                className="text-indigo-600 hover:underline focus:outline-none"
              >
                Resend Code
              </button>
            </>
          )}
        </p>
      </main>

      {/* Bottom Section: Privacy Message */}
      <footer className="text-center text-xs text-gray-500 mt-6 px-4 mb-4">
        By continuing, you're agreeing to Nobody's{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          Terms of Service
        </a>
        ,{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          Cookie Policy
        </a>
        .
      </footer>
      <ToastContainer />
    </div>
  );
}
