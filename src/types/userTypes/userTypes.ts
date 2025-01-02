import { IBooksState } from '../booksTypes/booksTypes';

export interface IUserState {
    name: string;
    email: string;
    goingToRead: IBooksState[];
    currentlyReading: IBooksState[];
    finishedReading: IBooksState[];
}
