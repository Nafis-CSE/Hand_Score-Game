import Alert from 'react-bootstrap/Alert';
type AlertProps = {
  type: string;
  msg: string;
};
const renderAlert = ({type,msg}:AlertProps) => {
  return (
      <Alert variant={type} className='d-flex justify-content-center position-absolute w-100 fs-1'>
        <strong>{msg}</strong>
      </Alert>
  );
};

export default renderAlert;
