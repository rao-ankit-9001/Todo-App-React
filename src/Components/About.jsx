

function About() {

    return (
        <>
            <h1 className="text-xl font-bold">
                This is a basic Todo application built using React and Tailwind CSS, currently optimized for desktop view only. The app uses React Router for navigation, although routing is minimal at this stage.
            </h1>

            <ul>
                <h1 className="text-xl font-bold">
                    ⚙️ Current Limitations
                </h1>

                <li>❌ Not responsive yet (works only on desktop screens)</li>
                <li>🔄 Routing is implemented but limited to basic structure</li>

            </ul>


            <ul>
                <h1 className="text-xl font-bold"> 🧭 Future Improvements</h1>

                <li>
                    📱 Make the app fully responsive for mobile and tablet devices
                </li>
                <li>
                    🧩 Add more features like:
                </li>
                <li>
                    Edit todo
                </li>
                <li>
                    Mark as completed
                </li>
                <li>
                    Filter by status (All, Active, Completed)
                </li>
                <li>
                    Persistent storage using localStorage or backend
                </li>


            </ul>
                <h2 className="text-xl font-bold">
                    This project is part of my learning journey to master React, state management, and production-level architecture.
                </h2>
        </>
    )
}

export default About;