export default function Input({ label, id, isNotValid, invalidMsg, ...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
            {isNotValid && <div className="control-error">{invalidMsg}</div>}
        </div>
    );
}
