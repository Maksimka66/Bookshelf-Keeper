export interface IBooksState {
    title: string;
    author: string;
    publishYear: number;
    pagesTotal: number;
    _id: string;
}

export interface IUserBooks {
    goingToRead: IBooksState[];
    currentlyReading: IBooksState[];
    finishedReading: IBooksState[];
}
