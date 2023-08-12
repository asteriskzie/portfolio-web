import { Button } from "../elements/Button";
export const Landing = () => {
    return (
        <div className="min-h-screen w-full grid place-content-center bg-gradient-radial from-federal_blue-400 via-raisin_black-200 to-raisin_black">
            <div className="flex flex-col text-center content-center space-y-6">
                <p className="">Hello, my name is</p>
                <h1 className="bg-gradient-to-r from-federal_blue-800 via-pink_lavender-400 to-dutch_white-500 from-federal_blue-800 via-pink_lavender-400 to-dutch_white-500 bg-clip-text text-transparent text-8xl font-bold">Ester Gracia</h1>
                <div className="flex flex-row space-x-8 place-content-center">
                    <Button href='#contacts'>Contact</Button>
                    <Button filled={false} href='/resume.pdf' target='blank'>Resume</Button>
                </div>
            </div>
        </div>
    )
}