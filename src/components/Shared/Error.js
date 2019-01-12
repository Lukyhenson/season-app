import React from 'react';

const Error = props => {
  const { error } = props;

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <div style={{textAlign: 'center'}}>
        <i className="massive exclamation triangle icon" style={{color: 'orange'}} />
        <h1>{`Error: ${error}`}</h1>
      </div>
    </div>
  )
};

Error.defaultProps = {
  error: 'Something is wrong!'
}

export default Error;
