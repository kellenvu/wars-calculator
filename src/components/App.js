import React, { useState } from 'react';
import '../style.scss';
import Header from './Header';
import Graph from './Graph';
import Form from './Form';
import FormContext from './FormContext';

function App() {
  const [gpa, setGpa] = useState(2.0);
  const [mcat, setMcat] = useState(500);
  const [researchExp, setResearchExp] = useState(1);
  const [clinicalExp, setClinicalExp] = useState(1);
  const [shadowing, setShadowing] = useState(1);
  const [volunteering, setVolunteering] = useState(1);
  const [leadershipTeaching, setLeadershipTeaching] = useState(1);
  const [undergradSchool, setUndergradSchool] = useState(1);
  const [misc, setMisc] = useState(1);
  const [underrepresented, setUnderrepresented] = useState(false);
  const [upwardGpaTrend, setUpwardGpaTrend] = useState(false);

  return (
    <FormContext.Provider value={{
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
    }}>
      <div className="app-container container">
        <Header />
        <div className="row">
          <div className="col-md-4">
            <Form />
          </div>
          <div className="col-md-8">
            <Graph />
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
}

export default App;
