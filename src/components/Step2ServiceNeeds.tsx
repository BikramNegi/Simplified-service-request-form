import type { FormStepProps } from '../types/formTypes';

const Step2ServiceNeeds = ({ data, updateData, errors }: FormStepProps) => {
  const supportTypes = [
    { id: 'academic', label: 'Academic Support' },
    { id: 'behavioral', label: 'Behavioral Therapy' },
    { id: 'speech', label: 'Speech Therapy' },
    { id: 'occupational', label: 'Occupational Therapy' },
    { id: 'social', label: 'Social Skills Training' },
  ];

  const frequencies = [
    { value: '', label: 'Select frequency' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'as_needed', label: 'As needed' },
  ];

  const handleSupportTypeChange = (typeId: string) => {
    const updatedTypes = data.serviceNeeds.supportTypes.includes(typeId)
      ? data.serviceNeeds.supportTypes.filter((id) => id !== typeId)
      : [...data.serviceNeeds.supportTypes, typeId];
    
    updateData('serviceNeeds', { supportTypes: updatedTypes });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Service Needs</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Type of Support Needed <span className="text-red-500">*</span>
        </label>
        <div className="mt-2 space-y-2">
          {supportTypes.map((type) => (
            <div key={type.id} className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={type.id}
                  name="supportTypes"
                  type="checkbox"
                  checked={data.serviceNeeds.supportTypes.includes(type.id)}
                  onChange={() => handleSupportTypeChange(type.id)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </div>
              <label htmlFor={type.id} className="ml-3 block text-sm font-medium text-gray-700">
                {type.label}
              </label>
            </div>
          ))}
        </div>
        {errors.supportTypes && <p className="mt-1 text-sm text-red-600">{errors.supportTypes}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
          Preferred Frequency <span className="text-red-500">*</span>
        </label>
        <select
          id="frequency"
          value={data.serviceNeeds.frequency}
          onChange={(e) => updateData('serviceNeeds', { frequency: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.frequency ? 'border-red-500' : 'border'}`}
        >
          {frequencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.frequency && <p className="mt-1 text-sm text-red-600">{errors.frequency}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
          Specific Requirements (if any)
        </label>
        <textarea
          id="requirements"
          rows={3}
          value={data.serviceNeeds.requirements}
          onChange={(e) => updateData('serviceNeeds', { requirements: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Step2ServiceNeeds;