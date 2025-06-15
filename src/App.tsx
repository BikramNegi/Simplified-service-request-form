import { useState } from 'react';
import type { FormData, FormSectionUpdates } from './types/formTypes';
import Step1ChildDetails from './components/Step1ChildDetails';
import Step2ServiceNeeds from './components/Step2ServiceNeeds';
import Step3ContactInfo from './components/Step3ContactInfo';
import FormNavigation from './components/FormNavigation';
import ProgressIndicator from './components/ProgressIndicator';
import './App.css'

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<FormData>({
    childDetails: {
      age: null,
      diagnosis: '',
      schoolType: '',
    },
    serviceNeeds: {
      supportTypes: [],
      frequency: '',
      requirements: '',
    },
    contactInfo: {
      parentName: '',
      email: '',
      phone: '',
    },
  });

const updateData = <K extends keyof FormData>(section: K, newData: FormSectionUpdates[K]) => {
  setFormData(prev => ({
    ...prev,
    [section]: {
      ...prev[section],
      ...newData,
    },
  }));
};

  const validateCurrentStep = () => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.childDetails.age || formData.childDetails.age < 0) {
        newErrors.age = 'Please enter a valid age';
      }
      if (!formData.childDetails.diagnosis.trim()) {
        newErrors.diagnosis = 'Diagnosis is required';
      }
      if (!formData.childDetails.schoolType) {
        newErrors.schoolType = 'Please select a school type';
      }
    } else if (currentStep === 2) {
      if (formData.serviceNeeds.supportTypes.length === 0) {
        newErrors.supportTypes = 'Please select at least one support type';
      }
      if (!formData.serviceNeeds.frequency) {
        newErrors.frequency = 'Please select a frequency';
      }
    } else if (currentStep === 3) {
      if (!formData.contactInfo.parentName.trim()) {
        newErrors.parentName = 'Parent name is required';
      }
      if (!formData.contactInfo.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(formData.contactInfo.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.contactInfo.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateCurrentStep()) {
      console.log('Form submitted:', formData);
      alert('Thank you for your submission! We will contact you soon.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1ChildDetails
            data={formData}
            updateData={updateData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <Step2ServiceNeeds
            data={formData}
            updateData={updateData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <Step3ContactInfo
            data={formData}
            updateData={updateData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Learning Support Request Form
          </h1>
          
          <ProgressIndicator currentStep={currentStep} />
          
          <div className="mt-6">
            {renderStep()}
          </div>
          
          <FormNavigation
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;