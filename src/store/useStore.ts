import { create } from 'zustand';

// Transition Store
interface TransitionState {
  transitioning: boolean;
  setTransitioning: (state: boolean) => void;
}

export const useTransitionStore = create<TransitionState>((set) => ({
  transitioning: false,
  setTransitioning: (state) => set({ transitioning: state }),
}));

// Contact Store
interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

interface ContactState {
  isAuthenticated: boolean;
  formData: ContactFormData;
  authenticate: () => void;
  setFormData: (key: keyof ContactFormData, value: string) => void;
  saveFormData: () => void;
  resetForm: () => void;
}

export const useContactStore = create<ContactState>((set, get) => ({
  isAuthenticated: false,
  formData: {
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  },

  // Mock authentication method
  authenticate: () => set({ isAuthenticated: true }),

  // Update specific form field
  setFormData: (key, value) => {
    const updatedFormData = { ...get().formData, [key]: value };
    set({ formData: updatedFormData });
  },

  // Save form data to localStorage
  saveFormData: () => {
    const { formData } = get();

    // Perform basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.subject ||
      !formData.message
    ) {
      alert("All fields are required!");
      return;
    }

    // Save data to localStorage
    const existingData = JSON.parse(localStorage.getItem("contactFormData") || "[]");
    const updatedData = [...existingData, formData];
    localStorage.setItem("contactFormData", JSON.stringify(updatedData));

    // Reset form data after saving
    get().resetForm();
    alert("Your message has been saved successfully!");
  },

  // Reset the form fields
  resetForm: () =>
    set({
      formData: {
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      },
    }),
}));
