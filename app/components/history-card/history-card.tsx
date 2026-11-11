import "./history-card.css";

type Event = {
    created_at: string;
    updated_at: string;
    year: String;
    title: String;
    description: String;
};

const API_URL = 'https://api.dayinhistry.dev/v1/today/events/';

export async function HistoryCard() {
    // const res = await fetch(API_URL, { next: { revalidate: 3600 } });
    // const { results } = await res.json();
    const results: Event[] = [];

    return (
        <div className="history-container">
            {/* { !res.ok && 
                <div className="error">Failed to load history events</div>
            } */}
            <h1>Today in History</h1>
            { results.map((event: Event, idx: number) =>
                <div key={idx} className="event-description">{ event.description }</div>
            )}
        </div>
    )
}
