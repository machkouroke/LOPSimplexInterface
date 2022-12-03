
export const Error = (props: { message: string }) => {
    return (
        <div className={"alert alert-danger"} role="alert">
            {props.message}
        </div>
    );
};
