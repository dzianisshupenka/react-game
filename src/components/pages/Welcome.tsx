import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Welcome:React.FC = () => {

    const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
    const [loginModalVisible, setLoginModalVisible] = useState(false);

    const history = useHistory()

    const welcomeClasses = ["welcome-modal"];
    const loginClasses = ["welcome-modal"];

    if (!welcomeModalVisible) {
        welcomeClasses.push("visible");
    }

    if (!loginModalVisible) {
        loginClasses.push("visible");
    }

    return (
        <div className="welcome-main">
            <div className={welcomeClasses.join(' ')}>
                <h1 className="welcome-header">Welcome to the FIGURES BATTLE World! Let's play?</h1>
                <button className="welcome-start-button" onClick={() => {setWelcomeModalVisible(false); setLoginModalVisible(true)}}>START</button>
            </div>
            <div className={loginClasses.join(' ')}>
                <h1 className="welcome-header">Please, Sign up to play with stats!</h1>
                <button className="welcome-start-button" onClick={() => {setWelcomeModalVisible(false); setLoginModalVisible(true)}}>Sign Up</button>
                <button className="welcome-start-button" onClick={() => {setLoginModalVisible(false); history.push('./game')}}>PlAY!</button>
            </div>
        </div>
    );
};

export default Welcome;