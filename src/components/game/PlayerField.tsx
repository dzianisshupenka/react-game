import React from 'react';

interface PlayerFieldProps {
    avatar: string
}

let avatarStyle = [''];

const PlayerField:React.FC<PlayerFieldProps> = ({avatar}) => {
    switch (avatar) {
        case 'quad':
            avatarStyle = ['player-avatar-quad'];
            break;
        case 'circl':
            avatarStyle = ['player-avatar-circl'];
            break;
        case 'trian':
            avatarStyle = ['player-avatar-trian'];
            break;
        case 'diam':
            avatarStyle = ['player-avatar-diam'];
            break;
    };

    return (
        <div className="player-card">
            <span className="player-name">PLAYER [{avatar}]</span>
            <div className="player-health">
                <div className="player-health-bar"  style={{width: '95%'}}></div>
            </div>
            <div className={avatarStyle.join(' ')}></div>
        </div>
    );
};

export default PlayerField;
