import CourseGolaList from './components/CourseGolaList.tsx';
import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';
import { useState } from 'react';
import NewGoal from './components/NewGoal.tsx';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGolaList onDeleteGoal={handleDeleteGoal} goals={goals} />
    </main>
  );
}

export default App;
