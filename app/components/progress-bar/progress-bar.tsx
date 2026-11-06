'use client'

import { DateTime } from 'luxon';
import './progress-bar.css';
import { useEffect, useState } from 'react';

export function ProgressBar() {
    const [now, setNow] = useState<string | null >(null);
    const totalDays = DateTime.now().daysInYear;
    const ordinal = DateTime.now().ordinal;

    useEffect(() => {
        setNow(DateTime.now().toLocaleString(DateTime.DATETIME_FULL));

        const id = setInterval(() => setNow(DateTime.now().toLocaleString(DateTime.DATETIME_FULL)), 1000);
        return () => clearInterval(id);
    }, []);

    const completed = (( ordinal / totalDays ) * 100).toFixed(2);
    return (
        <div className="center-gap">
            <div>{ now ? now : "Loading..." }</div>
            <progress className="progress progress-primary w-120 progress-full" value={completed}  max="100"></progress>
            <div className="flex-col center">
                <div><span className="ordinal">{ ordinal }</span> out of <span className="total">{ totalDays }</span> days </div>
                <div><i>{completed}% Completed</i></div>
            </div>
        </div>
    );
}
