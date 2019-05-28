import { app } from 'electron';
import * as log from 'electron-log';
import { JSONStorage } from 'node-localstorage';
import { Visitor, VisitorOptions } from 'universal-analytics';
import uuid from 'uuid';

export class Analytics {
    private user: Visitor;

    constructor() {
        const nodeStorage = new JSONStorage(app.getPath('userData'));
        const userId = nodeStorage.getItem('userid') || uuid();
        nodeStorage.setItem('userid', userId);
        const trackingID = process.env.GOOGLE_ANALYTICS;
        const options: VisitorOptions = {
            tid: trackingID,
            cid: userId,
            uid: userId,
        };

        this.user = new Visitor(options);
        this.user.set('ds', 'app');
        this.user.screenview('Before Show', 'Newt').send();
    }

    public timing = (category: string, action: string, duration: number) => {
        this.user.timing(category, action, parseInt(duration.toString()), (err: Error, count: number) => {
            if (err) {
                log.error('timing error', err, count);
            }
        });
    };

    public reportEvent = (category: string, action: string) => {
        this.user.event(category, action, (err: Error, count: number) => {
            if (err) {
                log.error('reportEvent Error', err, count);
            }
        });
    };

    public reportEventWithValue = (category: string, action: string, label: string, value: number) => {
        this.user.event(category, action, label, parseInt(value.toString()), (err: Error, count: number) => {
            if (err) {
                log.error('reportEventWithValue Error', err, count);
            }
        });
    };
}
