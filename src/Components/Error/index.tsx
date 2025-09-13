interface IProps {
    msg: string;
}

const Error = ({ msg }: IProps) => {
    return (
        <>
            <div className="text-rose-600">{msg}</div>
        </>
    );
};

export default Error;