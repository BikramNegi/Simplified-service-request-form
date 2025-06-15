
type ProgressIndicatorProps = {
  currentStep: number;
};

const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  const steps = [
    { id: 1, name: 'Child Details' },
    { id: 2, name: 'Service Needs' },
    { id: 3, name: 'Contact Info' },
  ];

  return (
    <div className="mb-8">
      <nav className="flex items-center justify-center" aria-label="Progress">
        <ol className="flex items-center space-x-5">
          {steps.map((step) => (
            <li key={step.name}>
              {step.id < currentStep ? (
                <div className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900">
                  <span className="sr-only">{step.name}</span>
                </div>
              ) : step.id === currentStep ? (
                <div className="relative flex items-center justify-center" aria-current="step">
                  <span className="absolute w-5 h-5 p-px flex" aria-hidden="true">
                    <span className="w-full h-full rounded-full bg-indigo-200" />
                  </span>
                  <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </div>
              ) : (
                <div className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400">
                  <span className="sr-only">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <p className="mt-2 text-center text-sm font-medium text-gray-600">
        Step {currentStep} of {steps.length}
      </p>
    </div>
  );
};

export default ProgressIndicator;