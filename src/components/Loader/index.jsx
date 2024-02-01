import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      width="120"
      height="160"
      color="var(--bg-btn)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        position: 'fixed',
        zIndex: theme => theme.zIndex.drawer + 1,
        top: '0',
        left: '0',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: `var(--bg-back-modal)`,
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
