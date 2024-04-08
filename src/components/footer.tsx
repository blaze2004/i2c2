import { DiscordLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { XIcon } from "./ui/icons";

export default function Footer() {
    return (
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t">

            <div className="text-center">
                <div>
                    <a className="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">i2C2</a>
                </div>

                <div className="mt-3">
                    <p className="text-gray-500">We&apos;re <a className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400" href="">I2C2</a> family.</p>
                    <p className="text-gray-500">© I2C2. 2024. All rights reserved.</p>
                </div>

                <div className="mt-3 space-x-2">
                    <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700" href="#">
                        <DiscordLogoIcon />
                    </a>
                    <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700" href="#">
                        <XIcon className="flex-shrink-0 size-3.5" />
                    </a>
                    <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700" href="#">
                        <InstagramLogoIcon />
                    </a>
                </div>
            </div>
        </footer>
    )
}