'use client';
import { useHabitStore } from '@/store/useHabitStore';

const HabitList = () => {
  const habits = useHabitStore((state) => state.habits);

  return (
    <ul className="mt-4 space-y-2 bg-transparent">
      {habits.map((habit) => (
        <li key={habit.id} className="border p-2 rounded  shadow-sm">
          {habit.name}
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
