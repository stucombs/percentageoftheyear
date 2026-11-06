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
    const results: Event[] = [
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:32.654608Z",
        "year": "1998",
        "title": "Another section of Great Wall of China discovered",
        "description": "Announced on this day in 1998 was the discovery in the Hui Autonomous Region of Ningxia of a previously unknown 15.5-mile (25-km) segment of the Great Wall of China, which runs a total of about 4,500 miles (7,300 km)"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:34.254122Z",
        "year": "2024",
        "title": "Quincy Jones, Legendary Music Producer, Dies at 91",
        "description": "American producer and composer Quincy Jones died at age 91; he worked with many of the biggest names in jazz, rock, R&B, pop, and hip-hop and was especially known for his work on Michael Jackson's blockbuster album Thriller (1982)"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:35.675661Z",
        "year": "2016",
        "title": "Chicago Cubs Win 108-Year-Old World Series Title",
        "description": "After trailing in the series 3–1, the Chicago Cubs defeated the Cleveland Indians to capture the franchise's first World Series title in 108 years; the extra-inning game seven—which was interrupted by a rain delay—had started November 2 but went into the early hours of November 3."
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:36.924328Z",
        "year": "2014",
        "title": "One World Trade Center Opens in New York",
        "description": "One World Trade Center opened in New York City on the site of the former World Trade Centercomplex, which had been largely destroyed in the September 11, 2001, attacks"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:38.280592Z",
        "year": "1998",
        "title": "Death of Batman Co-Creator Bob Kane",
        "description": "American cartoonist Bob Kane, who co-created the iconic comic-book characters Batman and Robin with writer Bill Finger, died at the age of 83 in Los Angeles."
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:39.457939Z",
        "year": "1992",
        "title": "Carol Moseley Braun Elected to U.S. Senate",
        "description": "Democratic politician Carol Moseley Braun became the first African American woman elected to the U.S. Senate"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:40.554136Z",
        "year": "1978",
        "title": "Dominica Independence with First PM Patrick Roland John",
        "description": "Dominica achieved full independence, with Patrick Roland John as its first prime minister"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:41.865933Z",
        "year": "1957",
        "title": "Sputnik 2 Launches Laika, First Living Creature in Space",
        "description": "The Soviet Union launched Sputnik 2, which carried the dog Laika, the first living creature to be shot into space and orbit Earth"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:43.230318Z",
        "year": "1956",
        "title": "The Wizard of Oz Debuts on TV to 45 Million Viewers",
        "description": "The classic film The Wizard of Oz (1939) aired on television for the first time in 1956, reaching an estimated 45 million viewers. This was a landmark event that helped solidify the movie's status as an enduring American classic through repeated TV airings over the years."
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:44.412616Z",
        "year": "1949",
        "title": "Anna Wintour Born, Future Vogue Editor",
        "description": "British editor Anna Wintour—who, as the longtime editor of American Vogue, became one of the most powerful figures infashion—was born"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:45.997336Z",
        "year": "1916",
        "title": "Eugene O'Neill's New York Debut with \"Bound East for Cardiff\"",
        "description": "In 1916, renowned American playwright Eugene O'Neill made his New York City debut with the one-act play \"Bound East for Cardiff\"."
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:47.204662Z",
        "year": "1903",
        "title": "Panamanian Independence from Colombia",
        "description": "Influenced by Philippe-Jean Bunau-Varilla and U.S. interests, a revolutionary junta proclaimed Panamanian independence from Colombia"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:48.391589Z",
        "year": "1903",
        "title": "Birth of American Photographer Walker Evans",
        "description": "American photographer Walker Evans, whose best-known images show quotidian American life during the second quarter of the 20th century, was born"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:49.944363Z",
        "year": "1793",
        "title": "Execution of French Feminist Olympe de Gouges",
        "description": "French social reformer and feminist Olympe de Gouges—who challenged conventional views on a number of matters, especially the role of women as citizens—was executed by guillotine.How much do you know about French history?ART Collection/Alamy"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:51.046097Z",
        "year": "1793",
        "title": "Birth of Stephen Austin, Founder of Texas Settlements",
        "description": "Stephen Austin, founder of the principal settlements of English-speaking people in Texas in the 1820s, when that territory was still part of Mexico, was born"
        },
        {
        "created_at": "2025-05-30T18:26:21.069779Z",
        "updated_at": "2025-11-29T12:53:52.591835Z",
        "year": "1295",
        "title": "Maḥmūd Ghāzān's Enthronement as Il-Khan of Iran",
        "description": "Maḥmūd Ghāzān, the most prominent of the Il-Khans (a Mongol dynasty) to rule Iran, was formally enthroned"
        }
    ];

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
