
import './ErrorHandler.css';

export const ErrorHandler = ({ error }) => {

    return(
        <div className="validation-error">
            <div className="error-message">{error}</div>
        </div>
    );
    
}