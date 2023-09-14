import React, { useContext } from 'react'
import MyDropdown from './Dropdown';
import MyCheckbox from './Checkbox';
import RangeSlider from './RangeSlider';
import FormContext from './FormContext'

function Form() {
  const {
    gpa, setGpa,
    mcat, setMcat,
    researchExp, setResearchExp,
    clinicalExp, setClinicalExp,
    shadowing, setShadowing,
    volunteering, setVolunteering,
    leadershipTeaching, setLeadershipTeaching,
    undergradSchool, setUndergradSchool,
    misc, setMisc,
    underrepresented, setUnderrepresented,
    upwardGpaTrend, setUpwardGpaTrend
  } = useContext(FormContext);

  return (
    <>
      <RangeSlider
        min={0}
        max={4}
        name="gpa"
        labelPrefix="GPA"
        toFixed={2}
        step={0.01}
        value={gpa}
        onChange={setGpa}
      />
      <RangeSlider
        min={472}
        max={528}
        name="mcat"
        labelPrefix="MCAT"
        value={mcat}
        onChange={setMcat}
      />
      <MyDropdown
        label="Research Experience"
        value={researchExp}
        onChange={(newValue) => setResearchExp(Number(newValue))}
        options={[
          {
            level: 5,
            description: 'Significant, sustained research activity. Generally, applicants in this category will have a first author publication, publication in a high-impact journal, and/or solo presentation of their own, original work at a major conference. These are the research superstars who are performing work well beyond the level of an undergraduate. PhDs will generally fall into this category, too.'
          },
          {
            level: 4,
            description: 'Significant, sustained research activity, generally for at least 2 years. Applicants in this category may have a poster presentation, a middle author publication in a medium- or low-impact journal, an abstract, or a thesis. These applicants have a strong research focus and perform research above the level of the average undergraduate.'
          },
          {
            level: 3,
            description: "Moderate research activity, generally for a year or more. These applicants generally don't have publications or presentations, but may have completed a project."
          },
          {
            level: 2,
            description: 'Slight research activity, generally for less than a year.'
          },
          {
            level: 1,
            description: 'No research activity.'
          },
        ]}
      />
      <MyDropdown
        label="Clinical Experience"
        value={clinicalExp}
        onChange={(newValue) => setClinicalExp(Number(newValue))}
        options={[
          {
            level: 3,
            description: 'Significant, sustained clinical experience, generally for well over a year. These applicants have demonstrated a strong commitment to clinical endeavors and have exposure in a clinical setting well beyond the average applicant.'
          },
          {
            level: 2,
            description: 'Moderate clinical experience, generally for well under a year. These applicants have adequate/sufficient exposure to clinical activity.'
          },
          {
            level: 1,
            description: 'Slight or no clinical experience.'
          },
        ]}
      />
      <MyDropdown
        label="Shadowing"
        value={shadowing}
        onChange={(newValue) => setShadowing(Number(newValue))}
        options={[
          {
            level: 2,
            description: 'Adequate shadowing or greater.'
          },
          {
            level: 1,
            description: 'Slight or no shadowing experience.'
          },
        ]}
      />
      <MyDropdown
        label="Volunteering"
        value={volunteering}
        onChange={(newValue) => setVolunteering(Number(newValue))}
        options={[
          {
            level: 3,
            description: 'Significant, sustained volunteering activity, generally over a long period of time, in one or multiple organizations. May also be working with marginalized or disadvantaged groups or in uncomfortable settings.'
          },
          {
            level: 2,
            description: 'Some volunteering activity, generally with low-to-moderate levels of commitment or sustained activity.'
          },
          {
            level: 1,
            description: 'Slight or no volunteering experience.'
          },
        ]}
      />
      <MyDropdown
        label="Leadership and Teaching"
        value={leadershipTeaching}
        onChange={(newValue) => setLeadershipTeaching(Number(newValue))}
        options={[
          {
            level: 3,
            description: "Sustained, significant teaching and/or leadership experience. This category includes applicants who teach grade school students, go on a teaching fellowship, have TA'd or tutored for long periods of time, are the head of a major organization, or have other equally demanding responsibilities."
          },
          {
            level: 2,
            description: 'Some teaching and/or leadership experience, often with low-to-moderate levels of commitment or sustained activity.'
          },
          {
            level: 1,
            description: 'Slight or no leadership or teaching experience.'
          },
        ]}
      />
      <MyDropdown
        label="Undergraduate School"
        value={undergradSchool}
        onChange={(newValue) => setUndergradSchool(Number(newValue))}
        options={[
          {
            level: 3,
            description: 'Harvard, Yale, Princeton, Stanford, MIT'
          },
          {
            level: 2,
            description: 'All other "prestigious" or highly selective schools including other Ivies, WashU, Duke, Hopkins, UChicago, etc.'
          },
          {
            level: 1,
            description: 'All other schools'
          },
        ]}
      />
      <MyDropdown
        label="Miscellaneous"
        value={misc}
        onChange={(newValue) => setMisc(Number(newValue))}
        options={[
          {
            level: 4,
            description: 'Highly significant life experiences or achievements that are seen as outstanding and contribute maximally to personal and professional development. This may include Rhodes scholarships, world class musicianship, professional or Olympic athletics, significant or sustained meaningful or unique work experiences, or anything else outlandishly impressive.'
          },
          {
            level: 3,
            description: 'Moderately-to-highly significant life experiences or achievements. This includes other terminal graduate degrees such as PhDs or JDs, military or Peace Corp service, as well as intense involvement with a unique or meaningful non-medical activity.'
          },
          {
            level: 2,
            description: 'Minimal-to-moderate involvement in personal activity or work experience. This may include major personal hobbies or athletics, musicianship, or other experiences.'
          },
          {
            level: 1,
            description: 'Nothing else to add.'
          },
        ]}
      />
      <MyCheckbox
        label="Underrepresented in Medicine?"
        checked={underrepresented}
        onChange={() => setUnderrepresented(prev => !prev)}
      />
      <MyCheckbox
        label="Upward GPA Trend?"
        checked={upwardGpaTrend}
        onChange={() => setUpwardGpaTrend(prev => !prev)}
      />
    </>
  )
}

export default Form;