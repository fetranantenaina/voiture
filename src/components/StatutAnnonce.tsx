import './StatutAnnonce.css';

interface ContainerProps {
    name: string;
}

const StatutAnnonce: React.FC<ContainerProps> = ({ name }) => {
    const handleButtonClick = () => {
        console.log("Statut");
    };
    return (
        <div className="container">
            <p>
                <button className="submit-button" onClick={handleButtonClick}>
                    Voir Traitement
                </button>
            </p>
        </div>
    );
};

export default StatutAnnonce;
