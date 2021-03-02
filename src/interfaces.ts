export interface IGameInfo {
    isRunning: boolean
    gameId: number
    player: string
    figure: string
}

export interface IUser {
    nickname: string
    password: string
}

export interface IMove {
    hand: string
    card: string
    healed: number
    damage: number
}