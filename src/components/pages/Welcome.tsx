import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { ChooseFigure } from '../welcome';

interface WelcomeProps {
    update(player: string, figure: string): void
    setUser(nick: string, pass: string): void
}

const Welcome:React.FC <WelcomeProps> = ({update, setUser}) => {

    const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [chooseModalVisible, setChooseLoginModalVisible] = useState(false);
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [figure, setFigure] = useState<string>('');

    const history = useHistory();

    const nicknameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const setFigureHandler = (figure:string) => {
        setFigure(figure);
    }

    const startGame = () => {
        update(nickname, figure);
        history.push("./game");
    }

    const setUserHandler = () => {
        setLoginModalVisible(false); 
        setChooseLoginModalVisible(true);
        setUser(nickname, password); 
    }

    const welcomeClasses = ["welcome-modal"];
    const loginClasses = ["welcome-modal"];
    const chooseClasses = ["welcome-modal", "choose-modal"];

    if (!welcomeModalVisible) {
        welcomeClasses.push("visible");
    }

    if (!chooseModalVisible) {
        chooseClasses.push("visible");
    }

    if (!loginModalVisible) {
        loginClasses.push("visible");
    }

    return (
        <div className="welcome-main">
            <div className={welcomeClasses.join(' ')}>
                <h1 className="welcome-header">Welcome to the FIGURES BATTLE World! Let's play?</h1>
                <button className="welcome-start-button" onClick={() => {setWelcomeModalVisible(false); setLoginModalVisible(true)}}>PlAY!</button>
            </div>
            <div className={loginClasses.join(' ')}>
                <h1 className="welcome-header">Please, enter your nickname and password</h1>
                <form className="form-inputs">
                    <label className="inputs">
                        <input 
                            value={nickname} 
                            onChange={nicknameHandler}
                            className="inputs-style" 
                            placeholder="nickname" 
                            type="text" 
                            name="title" 
                            />
                    </label>
                    <label className="inputs">
                        <input 
                            value={password} 
                            onChange={passwordHandler}
                            className="inputs-style" 
                            placeholder="password" 
                            type="password" 
                            name="pass" />
                    </label>
                </form>
                <button className="welcome-start-button" onClick={setUserHandler}>NEXT</button>
            </div>
            <div className={chooseClasses.join(' ')}>
                <ChooseFigure start={startGame} figure={figure} choose={setFigureHandler} nickname={nickname} />
            </div>
        </div>
    );
};

export default Welcome;