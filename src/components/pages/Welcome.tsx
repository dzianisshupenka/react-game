import React, {useState, useEffect} from 'react';
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
    const [passwordError, setPasswordError] = useState<string>();
    const [nickError, setNickError] = useState<string>();

    const history = useHistory();

    useEffect(() => {
        const userString = localStorage.getItem("user");
        if (typeof userString === 'string') {
          const user = JSON.parse(userString);
          setNickname(user.nickname);
          setPassword(user.password);
        }
    }, [])

    const playHandler = () => {
        setWelcomeModalVisible(false);
        if (nickname !== "") {
            setChooseLoginModalVisible(true);
        } else {
            setLoginModalVisible(true);
        }
    }

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
        if (figure !== '') {
            update(nickname, figure);
            history.push("./game");
        }
    }

    const setUserHandler = () => {
        if (nickname.length >= 4 && password.length >= 6) {
            setLoginModalVisible(false); 
            setChooseLoginModalVisible(true);
            setUser(nickname, password);
            setNickError('');
            setPasswordError('');
            localStorage.setItem("user", JSON.stringify({nickname, password}));
        }
        if (nickname.length < 4) {
            setNickError("4 characters min")
        } else {
            setNickError('');
        }
        if (password.length < 6) {
            setPasswordError("6 characters min")
        } else {
            setPasswordError('');
        }

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
                <button className="welcome-start-button" onClick={playHandler}>PlAY!</button>
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
                        <span className="input-error">{nickError}</span>
                    </label>
                    <label className="inputs">
                        <input 
                            value={password} 
                            onChange={passwordHandler}
                            className="inputs-style" 
                            placeholder="password" 
                            type="password" 
                            name="pass" />
                        <span className="input-error">{passwordError}</span>
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