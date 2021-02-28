import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import { Game, Help, Settings, Welcome } from './components/pages';
import { IGameInfo, IUser } from './interfaces';

const App:React.FC = () => {

  const initialGameInfo = {
    isRunning: false,
    gameId: 0,
    player: '',
    figure: ''
  }

  const initialUser ={
    nickname: '',
    password: ''
  }

  const [gameInfo, setGameInfo] = useState<IGameInfo>(initialGameInfo);
  const [user, setUser] = useState<IUser>(initialUser);

  const updateGameInfo = (player:string, figure:string) => {
    setGameInfo({...gameInfo,
        isRunning: true,
        gameId: Date.now(),
        player,
        figure
    })
  }

  const updateUserInfo = (nickname: string, password: string) => {
    setUser({
      ...user,
      nickname,
      password
    })
  }

  return (
    <Router>
      <Header />
      <Route path="/" exact render={() => <Welcome 
                                              setUser={(nick, pass) => updateUserInfo(nick, pass)} 
                                              update={(player, figure) => updateGameInfo(player, figure)} />}
                                              />
      <Route path="/game" render={() => <Game info={gameInfo} />} />
      <Route path="/settings" component={Settings} />
      <Route path="/help" component={Help} />
    </Router>
  );
};

export default App;
