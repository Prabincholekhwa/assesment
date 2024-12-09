import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [touched, setTouched] = useState({}); // Tracks touched fields
  const navigate = useNavigate();

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Please fill all fields and make sure passwords match!");
    } else {
      toast.success("Form submitted successfully!");
      setTimeout(() => {
        navigate(`/verify?email=${formData.email}`);
      }, 900);

      // Reset forms
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setTouched({});
    }
  };

  const renderError = (field) => {
    if (touched[field] && !formData[field]) {
      return (
        <p className="text-sm text-red-600 mt-1">This field is required.</p>
      );
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="James Paul"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                touched.name && !formData.name
                  ? "border-red-500"
                  : "border-gray-300"
              } bg-white text-black`}
              required
            />
            {renderError("name")}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                touched.email && !formData.email
                  ? "border-red-500"
                  : "border-gray-300"
              } bg-white text-black`}
              required
            />
            {renderError("email")}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => handleBlur("password")}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                touched.password && !formData.password
                  ? "border-red-500"
                  : "border-gray-300"
              } bg-white text-black`}
              required
            />
            {renderError("password")}
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={() => handleBlur("confirmPassword")}
              className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${
                touched.confirmPassword && !formData.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } bg-white text-black`}
              required
            />
            {touched.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <p className="text-sm text-red-600 mt-1">
                  Passwords do not match.
                </p>
              )}
          </div>
          <div>
            <button
              type="submit"
              className={`w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isFormValid
                  ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Log in
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
