import React, { useContext, useState } from 'react';
import FormContext from './FormContext';
import MyBarChart from './MyBarChart';
import ModeToggle from './ModeToggle';

const clinicalMultiplier = {
  1: -10,
  2: 5,
  3: 9,
}

const shadowingMultiplier = {
  1: -5,
  2: 6,
}

const scoreChart = [
  [10, 9, 8, 6, 5, 5, 4],
  [9, 8, 7, 6, 5, 4, 2],
  [8, 7, 6, 5, 4, 3, 1],
  [7, 6, 5, 4, 3, 2, 1],
  [6, 5, 4, 3, 2, 1, 0],
  [5, 3, 3, 2, 1, 1, 0],
  [3, 2, 2, 1, 1, 0, -1]
];

function getScoreIndex(gpa, mcat) {
  let gpaIndex;
  if (gpa >= 3.85) gpaIndex = 0;
  else if (gpa >= 3.7) gpaIndex = 1;
  else if (gpa >= 3.55) gpaIndex = 2;
  else if (gpa >= 3.4) gpaIndex = 3;
  else if (gpa >= 3.25) gpaIndex = 4;
  else if (gpa >= 3) gpaIndex = 5;
  else gpaIndex = 6;

  let mcatIndex;
  if (mcat >= 521) mcatIndex = 0;
  else if (mcat >= 518) mcatIndex = 1;
  else if (mcat >= 515) mcatIndex = 2;
  else if (mcat >= 511) mcatIndex = 3;
  else if (mcat >= 507) mcatIndex = 4;
  else if (mcat >= 504) mcatIndex = 5;
  else mcatIndex = 6;

  return scoreChart[gpaIndex][mcatIndex];
}

const warsBuckets = {
  "85+": {percentages: [45, 35, 15, 5], total: 22},
  "80-84": {percentages: [30, 30, 25, 15], total: 25},
  "75-79": {percentages: [10, 20, 35, 35], total: 27},
  "68-74": {percentages: [5, 15, 25, 55], total: 27},
  "60-67": {percentages: [0, 5, 15, 80], total: 30},
  "<60": {percentages: [0, 0, 0, 100], total: 20},
};

function getBarHeights(score) {
  if (score >= 85) return warsBuckets["85+"];
  else if (score >= 80) return warsBuckets["80-84"];
  else if (score >= 75) return warsBuckets["75-79"];
  else if (score >= 68) return warsBuckets["68-74"];
  else if (score >= 60) return warsBuckets["60-67"];
  else return warsBuckets["<60"];
}

function Visualizer() {
  const {
    gpa,
    mcat,
    researchExp,
    clinicalExp,
    shadowing,
    volunteering,
    leadershipTeaching,
    undergradSchool,
    misc,
    underrepresented,
    upwardGpaTrend
  } = useContext(FormContext);

  const [mode, setMode] = useState('percentage');

  let warsScore = getScoreIndex(gpa, mcat) * 5 + researchExp * 3 + clinicalMultiplier[clinicalExp] + shadowingMultiplier[shadowing] + volunteering * 2 + leadershipTeaching * 2 + (undergradSchool - 1) * 3 + misc * 3 + underrepresented * 7 + upwardGpaTrend * 4;

  const { percentages, total } = getBarHeights(warsScore);

  return (
    <>
      <div className="text-center mb-4">
        <p className="my-0">Your WARS Score Is</p>
        <h1 className="display-1">{warsScore}</h1>
      </div>
      <MyBarChart scores={percentages} totalSchools={total} mode={mode} />
      <ModeToggle mode={mode} setMode={setMode} />
    </>
  );
}

export default Visualizer;
