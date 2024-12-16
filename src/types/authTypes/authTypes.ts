export interface IAuthState {
    user: {
        name: string;
        email: string;
        currentlyReading: string[];
        finishedReading: string[];
        goingToRead: IBooksGoingToRead[];
    };
    token: string;
    isLoggedIn: boolean;
}

export interface IRegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface IRegisterResponse {
    name: string;
    email: string;
    id: string;
}

interface IBooksGoingToRead {
    title: string;
    author: string;
    publishYear: number;
    totalPages: number;
    pagesFinished: number;
    _id: string;
    __v: number;
}
