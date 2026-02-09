import { IoCloseOutline } from "react-icons/io5";

interface SubmissionConfirmationProps {
  title: string;
  description: string;
  email: string;
  contactLink: string;
  onClose: () => void;
}

const SubmissionConfirmation: React.FC<SubmissionConfirmationProps> = ({
  title,
  description,
  email,
  contactLink,
  onClose,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-black text-white p-6 relative flex flex-col items-start">
        <IoCloseOutline
          onClick={onClose}
          className="absolute top-4 right-4 text-[#fff] hover:text-red-600 cursor-pointer h-8 w-8 z-50"
        />
        <div className="flex items-center">
          <img
            loading="lazy"
            src="/placeholder-image.png"
            alt="Datasheet"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold text-center">{title}</h2>
            <p className="text-sm text-gray-300">Download the datasheet</p>
          </div>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          Thank You for Your Submission!
        </h3>
        <p className="text-gray-700 mt-2">
          Your datasheet download for{" "}
          <span className="text-blue-600 font-semibold">{description}</span> was
          successful! A confirmation email with the download link has been sent
          to your inbox.
        </p>
        <p className="text-gray-600 mt-2">
          If you don't receive it, please check your spam folder or reach out to
          us at <span className="font-semibold">{email}</span>.
        </p>
        <p className="mt-2">
          For any further assistance, feel free to{" "}
          <a href={contactLink} className="text-blue-600 font-semibold">
            Contact Us
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SubmissionConfirmation;
