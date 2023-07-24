import { AxiosError } from 'axios';

type ErrorAlertProps = {
  error: AxiosError;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ error }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">
        <p> Error {error.status}! </p>
      </strong>
      <span className="block sm:inline">
        {" "}
        Message: {error?.message}.{" "}
      </span>
    </div>
  );
};

export default ErrorAlert;
