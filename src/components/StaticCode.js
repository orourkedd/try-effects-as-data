import React from 'react';

function StaticCode () {
  return (
    <div>
      <pre className='CodeMirror-line static-imports' role='presentation'><span role='presentation' style={{paddingRight: '0.1px'}}><span className='cm-keyword'>import</span> <span>{'{'}</span> <span className='cm-def'>isFailure</span> <span>{'}'}</span> <span className='cm-keyword'>from</span> <span className='cm-string'>'effects-as-data'</span>;</span></pre>
    </div>
  );
}

export default StaticCode;
