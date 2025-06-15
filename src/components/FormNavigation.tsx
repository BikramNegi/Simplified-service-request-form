
type FormNavigationProps = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  handleSubmit: () => void;
};

const FormNavigation = ({ currentStep, nextStep, prevStep, handleSubmit }: FormNavigationProps) => {
  return (
    <div className="mt-8 flex justify-between">
      {currentStep > 1 ? (
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Previous
        </button>
      ) : (
        <div></div>
      )}
      
      {currentStep < 3 ? (
        <button
          type="button"
          onClick={nextStep}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default FormNavigation;