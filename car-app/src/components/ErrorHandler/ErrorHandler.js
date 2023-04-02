import './ErrorHandler.css';

export const ErrorHandler = (error) => {
    const { errorMessege } = error;
    error = '';
    return(
        <div className="validation-error">{errorMessege}</div>
    );
}