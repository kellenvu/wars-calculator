import React, { useContext } from 'react';
import FormContext from './FormContext';

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

function Graph() {
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

  let warsScore = getScoreIndex(gpa, mcat)*5 + researchExp * 3 + clinicalMultiplier[clinicalExp] + shadowingMultiplier[shadowing] + volunteering * 2 + leadershipTeaching * 2 + (undergradSchool - 1) * 3 + misc * 3 + underrepresented * 7 + upwardGpaTrend * 4;

  return (
    <div className="graph">
      <h2>Graph</h2>
      <p><strong>GPA:</strong> {gpa}</p>
      <p><strong>MCAT Score:</strong> {mcat}</p>
      <p><strong>Research Experience:</strong> {researchExp}</p>
      <p><strong>Clinical Experience:</strong> {clinicalExp}</p>
      <p><strong>Shadowing:</strong> {shadowing}</p>
      <p><strong>Volunteering:</strong> {volunteering}</p>
      <p><strong>Leadership & Teaching:</strong> {leadershipTeaching}</p>
      <p><strong>Undergraduate School:</strong> {undergradSchool}</p>
      <p><strong>Misc:</strong> {misc}</p>
      <p><strong>Underrepresented in Medicine:</strong> {underrepresented ? "Yes" : "No"}</p>
      <p><strong>Upward GPA Trend:</strong> {upwardGpaTrend ? "Yes" : "No"}</p>
      <p><strong>WARS Score:</strong> {warsScore}</p>
    </div>
  );
}

export default Graph;
