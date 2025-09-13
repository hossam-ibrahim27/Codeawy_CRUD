interface IProps {
    imagURL: string;
    imagTitle: string;
    styles: string
}

const Image = ({ styles, imagTitle, imagURL }: IProps) => {
    return (
        <>
            <img src={imagURL} alt={imagTitle} className={styles} draggable={false} />
        </>
    );
};

export default Image;