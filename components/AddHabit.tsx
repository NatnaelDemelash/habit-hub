'use client';
import { useState } from 'react';
import { useHabitStore } from '@/store/useHabitStore';
import { v4 as uuidv4 } from 'uuid';

const AddHabit = () => {
  const [name, setName] = useState('');
  const addHabit = useHabitStore((state) => state.addHabit);

  const handleAdd = () => {
    if (!name.trim()) return;
    const newHabit = {
      id: uuidv4(),
      name,
      created_at: new Date().toISOString(),
    };
    addHabit(newHabit);
    setName('');
  };

  return (
    <div className="flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        placeholder="Add a new habit"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddHabit;
