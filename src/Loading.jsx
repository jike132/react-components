import React from 'react';
import Loading from 'components/Loading';

const LoadingPage = ({ isLoading, error, retry }) => {
  if (isLoading) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          background: 'var(--bg)',
          zIndex: '999',
          color: 'var(--primary)',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loading />
      </div>
    );
  }
  if (error) {
    retry();
  }
  return null;
};

export default LoadingPage;
