import { create } from "zustand";
import { DraftPatient, Patient } from "../types/types";
import { v4 as uuidv4 } from "uuid";

type PatienetState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
};

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

export const usePatientStore = create<PatienetState>((set) => ({
  patients: [],
  addPatient: (data) => {
    const newPatient = createPatient(data);
    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },
}));
