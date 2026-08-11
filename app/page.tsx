import { DateTime } from 'luxon';

export default function Home() {
    const dt = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

    return (
        <div>
            <main className="main">
                <div>
                    <h1>Percentage of the Year</h1>
                    <div>{ dt }</div>
                </div>
                <div>
                    <progress className="progress progress-neutral w-100 progress-full" value="10" max="100"></progress>
                </div>
            </main>
        </div>
    );
}
