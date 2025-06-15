import type { FormStepProps } from '../types/formTypes';

const Step3ContactInfo = ({ data, updateData, errors }: FormStepProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
      
      <div className="mb-4">
        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
          Parent/Guardian Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="parentName"
          value={data.contactInfo.parentName}
          onChange={(e) => updateData('contactInfo', { parentName: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.parentName ? 'border-red-500' : 'border'}`}
        />
        {errors.parentName && <p className="mt-1 text-sm text-red-600">{errors.parentName}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={data.contactInfo.email}
          onChange={(e) => updateData('contactInfo', { email: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.email ? 'border-red-500' : 'border'}`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          value={data.contactInfo.phone}
          onChange={(e) => updateData('contactInfo', { phone: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${errors.phone ? 'border-red-500' : 'border'}`}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Step3ContactInfo;