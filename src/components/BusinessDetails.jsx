import { FaFileUpload } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EnterDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    legalName: "",
    doingBusinessAs: "",
    registrationNumber: "",
    randomRegistrationNumber: "",
    websiteUrl: "",
    industryName: "",
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
    accountUsageIntent: "",
    randomCountPerMonth: "",
    expectedVisits: "",
    purpose: "",
    description: "",
    contactEmail: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState({
    incorporationCertificate: null,
    companyLogo: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [fileType]: file,
      }));
      console.log(`Selected ${fileType}:`, file);
    }
  };

  const handleFileDrop = (event, fileType) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [fileType]: file,
      }));
      console.log(`Dropped ${fileType}:`, file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const isFormValid = () => {
    return (
      Object.values(formData).every((field) => field !== "") &&
      uploadedFiles.incorporationCertificate &&
      uploadedFiles.companyLogo
    );
  };
  return (
    <div className="w-full px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">
        Tell us more about your business
      </h1>
      <p className="text-sm text-gray-600 mt-2">
        Your info is like the Wi-Fi password—totally crucial for keeping things
        running, impressing the money folks, and making sure you get top-notch
        service without any buffering!
      </p>

      <div className="my-4"></div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">
              Legal Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="legalName"
              value={formData.legalName}
              onChange={handleInputChange}
              required
              placeholder="Legal name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Doing business as <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="doingBusinessAs"
              value={formData.doingBusinessAs}
              onChange={handleInputChange}
              required
              placeholder="Doing business as"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Company Registration Number{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              required
              placeholder="Company Registration number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Random Registration Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              name="randomRegistrationNumber"
              onChange={handleInputChange}
              value={formData.randomRegistrationNumber}
              placeholder="Random registration number"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Website URL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              required
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleInputChange}
              placeholder="Website URL"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Industry Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              name="industryName"
              value={formData.industryName}
              onChange={handleInputChange}
              placeholder="Industry Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Drop Down 1 <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="dropdown1"
              value={formData.dropdown1}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Drop Down 2 <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="dropdown2"
              value={formData.dropdown2}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Drop Down 3 <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="dropdown3"
              value={formData.dropdown3}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Account Usage Intent <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="accountUsageIntent"
              value={formData.accountUsageIntent}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            >
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Random count per month <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              name="randomCountPerMonth"
              onChange={handleInputChange}
              value={formData.randomCountPerMonth.toString()}
              placeholder="Random count per month"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Expected total visits in this page{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              name="expectedVisits"
              value={formData.expectedVisits.toString()}
              onChange={handleInputChange}
              placeholder="Expected total visits"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Purpose of using fake form <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              placeholder="Purpose of using the form"
              className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Product description"
              className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Contact Email <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
              placeholder="Contact Email"
              className="w-full h-20 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white text-black"
            ></textarea>
          </div>
        </div>
        <div className="my-4"></div>
        <div>
          <label className="block text-gray-700 font-medium">
            Certification of Incorporation{" "}
            <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-600">
            Upload the incorporation certificate
          </p>
          <div
            className="w-full py-4 border border-gray-300 rounded-lg bg-white text-center focus:ring-2 focus:ring-indigo-500 flex flex-col items-center"
            onDrop={(event) =>
              handleFileDrop(event, "incorporationCertificate")
            }
            onDragOver={handleDragOver}
          >
            <FaFileUpload className="text-3xl text-gray-500 mb-2" />
            <div className="flex items-center justify-center space-x-1">
              <label
                htmlFor="incorporation-upload"
                className="underline cursor-pointer text-indigo-600"
              >
                Click to upload
              </label>
              <p className="text-sm text-gray-500">or drag and drop</p>
            </div>
            <input
              id="incorporation-upload"
              type="file"
              className="hidden"
              onChange={(event) =>
                handleFileChange(event, "incorporationCertificate")
              }
            />
            <p className="text-sm text-gray-500">Maximum file size 50MB</p>
          </div>
          {uploadedFiles.incorporationCertificate && (
            <p className="text-sm text-green-500 mt-2">
              Uploaded: {uploadedFiles.incorporationCertificate.name}
            </p>
          )}
        </div>
        asdasdas.com
        {/* Company Logo */}
        <div>
          <label className="block text-gray-700 font-medium">
            Company Logo <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-gray-600">Upload the company logo</p>
          <div
            className="w-full py-4 border border-gray-300 rounded-lg bg-white text-center focus:ring-2 focus:ring-indigo-500 flex flex-col items-center"
            onDrop={(event) => handleFileDrop(event, "companyLogo")}
            onDragOver={handleDragOver}
          >
            <FaFileUpload className="text-3xl text-gray-500 mb-2" />
            <div className="flex items-center justify-center space-x-1">
              <label
                htmlFor="logo-upload"
                className="underline cursor-pointer text-indigo-600"
              >
                Click to upload
              </label>
              <p className="text-sm text-gray-500">or drag and drop</p>
            </div>
            <input
              id="logo-upload"
              type="file"
              className="hidden"
              onChange={(event) => handleFileChange(event, "companyLogo")}
            />
            <p className="text-sm text-gray-500">Maximum file size 50MB</p>
          </div>
          {uploadedFiles.companyLogo && (
            <p className="text-sm text-green-500 mt-2">
              Uploaded: {uploadedFiles.companyLogo.name}
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => {
              navigate(-1); // Navigate to the previous page
            }}
            className="bg-white text-black font-bold border border-black rounded-lg px-4 py-2"
          >
            Previous
          </button>
          <button
            type="button"
            className={`font-bold rounded-lg px-4 py-2 text-white ${
              isFormValid()
                ? "bg-red-600"
                : "bg-red-600 opacity-50 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
