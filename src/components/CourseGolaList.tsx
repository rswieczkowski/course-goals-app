import CourseGoal from './CourseGoal';
import { type CourseGoal as CourseGoalType } from '../App';
import InfoBox from './InfoBox';
import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

function CourseGolaList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='medium'>
        You are collecting a lot of goals. Don't put too much on your plate.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CourseGolaList;
