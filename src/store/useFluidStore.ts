import { create } from 'zustand';

interface FluidState {
  viscosity: number;
  particleColor: string;
  setViscosity: (val: number) => void;
}

export const useFluidStore = create<FluidState>((set) => ({
  viscosity: 0.98,
  particleColor: '#00ffcc',
  setViscosity: (val) => set({ viscosity: val }),
}));