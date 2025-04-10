import { create } from 'zustand';

interface Habit {
  id: string;
  name: string;
  created_at: string;
}

interface HabitStore {
  habits: Habit[];
  addHabit: (habit: Habit) => void;
  setHabits: (habits: Habit[]) => void;
}

export const useHabitStore = create<HabitStore>((set) => ({
  habits: [],
  addHabit: (habit) => set((state) => ({ habits: [...state.habits, habit] })),
  setHabits: (habits) => set({ habits }),
}));
