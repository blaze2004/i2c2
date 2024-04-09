import Link from "next/link";
import { Fragment, ReactNode } from "react";

export interface TimelineProps {
    items: {
        date: string;
        events: {
            title: string;
            titleIcon?: ReactNode;
            description?: string;
            action?: ReactNode;
            href?: string;
        }[];
    }[];
    className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
    return (
        <div className={className}>
            {
                items.map(({ date, events }, index) => (
                    <Fragment key={index}>

                        <div className="ps-2 my-2 first:mt-0">
                            <h3 className="text-xs font-medium uppercase text-muted-foreground">
                                {date}
                            </h3>
                        </div>

                        {
                            events.map(({ title, titleIcon, description, action, href }, index) => (
                                <div key={index} className="flex gap-x-3 relative group rounded-lg hover:bg-gray-700">
                                    <Link className="absolute inset-0 z-[1]" href={href||""}></Link>

                                    <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                                        <div className="relative z-10 size-7 flex justify-center items-center">
                                            <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
                                        </div>
                                    </div>

                                    <div className="grow p-2 pb-8">
                                        <h3 className="flex gap-x-1.5 font-semibold">
                                            {titleIcon}
                                            {title}
                                        </h3>
                                        {description&&(
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                {description}
                                            </p>
                                        )}
                                        {action}
                                    </div>
                                </div>
                            ))
                        }
                    </Fragment>
                ))
            }

        </div>
    )
}