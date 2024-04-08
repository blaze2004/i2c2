"use client"
import { toast } from "sonner";
import { Button } from "./ui/button";
import { ClipboardIcon } from "@radix-ui/react-icons";

export default function ShareButton() {
    return (
        <Button variant={"outline"} className='group text-sm font-mono shadow-sm bg-secondary border border-gray-700'
            onClick={async () => {
                await navigator.clipboard.writeText(location.href);
                toast.success('Copied link to clipboard');
            }}>
            $ Share with friends
            <span className="flex justify-center items-center rounded-md size-7 bg-gray-700 text-gray-400 ml-2">
                <ClipboardIcon className="flex-shrink-0 size-4 group-hover:rotate-6 transition" />
            </span>
        </Button>
    )
}