import './ListeAnnonce.css';

interface ContainerProps {
    name: string;
}

const ListeAnnonce: React.FC<ContainerProps> = ({ name }) => {
    const handleButtonClick = () => {
        console.log("Liste");
    };
    return (
        <div className="container">
            <p>
                Liste Annonce
                <button className="submit-button" onClick={handleButtonClick}>
                    Voir Traitement
                </button>
            </p>
        </div>
    );
};

export default ListeAnnonce;
