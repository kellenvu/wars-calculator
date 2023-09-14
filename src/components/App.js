import React from 'react';
import '../style.scss'
import Header from './Header';
import RangeSlider from './RangeSlider';
import Graph from './Graph';
import MyDropdown from './Dropdown';

function App() {
  return (
    <div className="app-container container">
      <Header />
      <div className="row">
        <div className="col-md-4">
          <RangeSlider min={0} max={4} name="gpa" labelPrefix="GPA" toFixed={2} step={0.01} />
          <RangeSlider min={472} max={528} name="mcat" labelPrefix="MCAT Score" />
          <MyDropdown
            label="Research Experience"
            options={[
              {
                level: 'Level 5',
                description: 'Significant, sustained research activity. Generally, applicants in this category will have a first author publication, publication in a high-impact journal, and/or solo presentation of their own, original work at a major conference. These are the research superstars who are performing work well beyond the level of an undergraduate. PhDs will generally fall into this category, too.'
              },
              {
                level: 'Level 4',
                description: 'Significant, sustained research activity, generally for at least 2 years. Applicants in this category may have a poster presentation, a middle author publication in a medium- or low-impact journal, an abstract, or a thesis. These applicants have a strong research focus and perform research above the level of the average undergraduate.'
              },
              {
                level: 'Level 3',
                description: "Moderate research activity, generally for a year or more. These applicants generally don't have publications or presentations, but may have completed a project."
              },
              {
                level: 'Level 2',
                description: 'Slight research activity, generally for less than a year.'
              },
              {
                level: 'Level 1',
                description: 'No research activity.'
              },
            ]}
          />
          <MyDropdown
            label="Clinical Experience"
            options={[
              {
                level: 'Level 3',
                description: 'Significant, sustained clinical experience, generally for well over a year. These applicants have demonstrated a strong commitment to clinical endeavors and have exposure in a clinical setting well beyond the average applicant.'
              },
              {
                level: 'Level 2',
                description: 'Moderate clinical experience, generally for well under a year. These applicants have adequate/sufficient exposure to clinical activity.'
              },
              {
                level: 'Level 1',
                description: 'Slight or no clinical experience.'
              },
            ]}
          />
          <MyDropdown
            label="Shadowing"
            options={[
              {
                level: 'Level 2',
                description: 'Adequate shadowing or greater.'
              },
              {
                level: 'Level 1',
                description: 'Slight or no shadowing experience.'
              },
            ]}
          />
          <MyDropdown
            label="Volunteering"
            options={[
              {
                level: 'Level 3',
                description: 'Significant, sustained volunteering activity, generally over a long period of time, in one or multiple organizations. May also be working with marginalized or disadvantaged groups or in uncomfortable settings.'
              },
              {
                level: 'Level 2',
                description: 'Some volunteering activity, generally with low-to-moderate levels of commitment or sustained activity.'
              },
              {
                level: 'Level 1',
                description: 'Slight or no volunteering experience.'
              },
            ]}
          />
          <MyDropdown
            label="Leadership and Teaching"
            options={[
              {
                level: 'Level 3',
                description: "Sustained, significant teaching and/or leadership experience. This category includes applicants who teach grade school students, go on a teaching fellowship, have TA'd or tutored for long periods of time, are the head of a major organization, or have other equally demanding responsibilities."
              },
              {
                level: 'Level 2',
                description: 'Some teaching and/or leadership experience, often with low-to-moderate levels of commitment or sustained activity.'
              },
              {
                level: 'Level 1',
                description: 'Slight or no leadership or teaching experience.'
              },
            ]}
          />
          <MyDropdown
            label="Undergraduate School"
            options={[
              {
                level: 'Level 3',
                description: 'Harvard, Yale, Princeton, Stanford, MIT'
              },
              {
                level: 'Level 2',
                description: 'All other "prestigious" or highly selective schools including other Ivies, WashU, Duke, Hopkins, UChicago, etc.'
              },
              {
                level: 'Level 1',
                description: 'All other schools'
              },
            ]}
          />
          <MyDropdown
            label="GPA Trend"
            options={[
              {
                level: 'Level 2',
                description: 'Upward trend'
              },
              {
                level: 'Level 1',
                description: 'No upward trend'
              },
            ]}
          />
          <MyDropdown
            label="Underrepresented in Medicine"
            options={[
              {
                level: 'Yes',
                description: 'Yes'
              },
              {
                level: 'No',
                description: 'No'
              },
            ]}
          />
        </div>
        <div className="col-md-8">
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
