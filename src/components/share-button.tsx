"use client"
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function ShareButton() {
    return (
        <Button variant={"outline"} className='group text-sm font-mono shadow-sm bg-secondary border border-gray-700'
            onClick={async () => {
                await navigator.clipboard.writeText(location.href);
                toast.success('Copied link to clipboard');
            }}>
            $ Share with friends
            <span className="flex justify-center items-center rounded-md size-7 bg-gray-700 text-gray-400 ml-2">
                <svg className="flex-shrink-0 size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>
            </span>
        </Button>
    )
}