import './Connexion.css';

interface ContainerProps {
    name: string;
}

const Connexion: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <form action="">
                <p>
                    <input type="text" />
                </p>
                <p>
                    <input type="password" />
                </p>
                <p>
                    <input type="submit" value="connexion" name="" id="" />
                </p>
            </form>
        </div>
    );
};

export default Connexion;
