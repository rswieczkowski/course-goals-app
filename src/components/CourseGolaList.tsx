import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '../App';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

function CourseGolaList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <div>
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseGolaList;
