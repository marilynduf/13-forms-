export default function Input({ label, id, isNotValid, invalidMsg, ...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
            <div className="control-error">
                {isNotValid && <p>{invalidMsg}</p>}
            </div>
        </div>
    );
}
