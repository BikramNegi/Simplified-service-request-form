import type { FormStepProps } from '../types/formTypes';

const Step1ChildDetails = ({ data, updateData, errors }: FormStepProps) => {
  const schoolTypes = [
    { id: 'public', label: 'Public School' },
    { id: 'private', label: 'Private School' },
    { id: 'homeschool', label: 'Homeschool' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Child Details</h2>
      
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Child's Age <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="age"
          min="0"
          max="18"
          value={data.childDetails.age || ''}
          onChange={(e) => updateData('childDetails', { age: parseInt(e.target.value) || null })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.age ? 'border-red-500' : 'border'}`}
        />
        {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-700">
          Diagnosis (if any) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="diagnosis"
          value={data.childDetails.diagnosis}
          onChange={(e) => updateData('childDetails', { diagnosis: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.diagnosis ? 'border-red-500' : 'border'}`}
        />
        {errors.diagnosis && <p className="mt-1 text-sm text-red-600">{errors.diagnosis}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Current School Type <span className="text-red-500">*</span>
        </label>
        <div className="mt-2 space-y-2">
          {schoolTypes.map((type) => (
            <div key={type.id} className="flex items-center">
              <input
                id={type.id}
                name="schoolType"
                type="radio"
                checked={data.childDetails.schoolType === type.id}
                onChange={() => updateData('childDetails', { schoolType: type.id })}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor={type.id} className="ml-3 block text-sm font-medium text-gray-700">
                {type.label}
              </label>
            </div>
          ))}
        </div>
        {errors.schoolType && <p className="mt-1 text-sm text-red-600">{errors.schoolType}</p>}
      </div>
    </div>
  );
};

export default Step1ChildDetails;