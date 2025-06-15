export type ChildDetails = {
  age: number | null;
  diagnosis: string;
  schoolType: string;
};

export type ServiceNeeds = {
  supportTypes: string[];
  frequency: string;
  requirements: string;
};

export type ContactInfo = {
  parentName: string;
  email: string;
  phone: string;
};

export type FormData = {
  childDetails: ChildDetails;
  serviceNeeds: ServiceNeeds;
  contactInfo: ContactInfo;
};

export type FormSectionUpdates = {
  childDetails: Partial<ChildDetails>;
  serviceNeeds: Partial<ServiceNeeds>;
  contactInfo: Partial<ContactInfo>;
};

export type FormStepProps = {
  data: FormData;
  updateData: <K extends keyof FormData>(section: K, newData: FormSectionUpdates[K]) => void;
  errors: Record<string, string>;
  setErrors: (errors: Record<string, string>) => void;
};