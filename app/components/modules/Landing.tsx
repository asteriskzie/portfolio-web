import { Button } from "../elements/Button";
export const Landing = () => {
    return (
        <div className="min-h-screen flex place-items-center">
            <div className="flex flex-col text-center content-center space-y-6">
                <p className="">Hello, my name is</p>
                <h1 className="bg-gradient-to-r from-federal_blue-800 via-pink_lavender-400 to-dutch_white-500 bg-clip-text text-transparent text-8xl font-bold">Ester Gracia</h1>
                <div className="flex flex-row space-x-8 place-content-center">
                    <Button /> 
                    <Button />
                </div>
            </div>
        </div>
    )
}