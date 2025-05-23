export class StopWatch implements IStopWatch {
    private started = new Date().getTime();
    public get elapsedTime() {
        return new Date().getTime() - this.started;
    }
    public reset() {
        this.started = new Date().getTime();
    }
}

export interface IStopWatch {
    elapsedTime: number;
}
