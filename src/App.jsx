import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import EnterOtp from "./components/EnterOtp";
import EnterDetails from "./components/BusinessDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route to SignUp */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for OTP verification */}
        <Route
          path="/verify"
          element={<EnterOtp email={"abcss@gmail.com"} />}
        />

        {/* Route for Business Details */}
        <Route path="/details" element={<EnterDetails />} />

        {/* Redirect or Default to /signup */}
        <Route path="*" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
