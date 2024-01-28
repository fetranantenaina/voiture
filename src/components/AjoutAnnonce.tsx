import './AjoutAnnonce.css';

interface ContainerProps {
    name: string;
}

const AjoutAnnonce: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <form action="">
                <p>
                    <input type="datetime" />
                </p>
                <p>
                    <input type="text" />
                </p>
                <p>
                    <input type="text" />
                </p>
                <p>
                    <input type="text" />
                </p>
                <p>
                    <input type="number" name="" id="" />
                </p>
                photos
                <p>
                    <input type="submit" name="" id="" />
                </p>
            </form>
        </div>
    );
};

export default AjoutAnnonce;
