import { create } from "zustand";

interface State {
  activeId: string;
  setActiveId: (activeId: string) => void;
}

export const useCategoryStore = create<State>((set) => ({
  activeId: "categoryId-1",
  setActiveId: (activeId) => set({ activeId }),
}));
