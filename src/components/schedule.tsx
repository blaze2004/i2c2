import Timeline, { TimelineProps } from "./ui/timeline";

export default function Schedule() {
    const schedule: TimelineProps["items"]=[
        {
            date: "12 May, 2024",
            events: [
                {
                    title: "Opening Ceremony",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
                {
                    title: "Keynote Speaker",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
                {
                    title: "Workshop",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
            ]
        },
        {
            date: "14 May, 2024",
            events: [
                {
                    title: "Hackathon Begins",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
                {
                    title: "Workshop",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
            ]
        },
        {
            date: "18 May, 2024",
            events: [
                {
                    title: "Speaker Session",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
                {
                    title: "Idea Submission",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                }
            ]
        },
        {
            date: "20 May, 2024",
            events: [
                {
                    title: "Hackathon Ends",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
                {
                    title: "Closing Ceremony",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nisl sit amet turpis viverra tincidunt. Nullam nec mi nec ligula tincidunt tincidunt.",
                },
            ]
        },
    ];

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-8 p-8">
            <h1 className="uppercase scroll-m-20 md:sticky md:top-[40%] text-center sm:text-left font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl">Schedule</h1>
            <Timeline items={schedule} className="my-8 max-w-lg" />
        </div>
    )
}