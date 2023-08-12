import { Card } from "../elements/Card"

export const Projects = () => {
    const wording = "Currently wandering further in the sea of computer science. Here are my top picks ;)"
    return (
        <div className="min-h-screen w-full p-48 flex-col space-y-24">
            <p className="text-center"> {wording} </p>
            {/* <img src="educare.png" alt="educare" /> */}
            <div className="grid grid-cols-2 gap-6 place-content-evenly">
                <Card 
                    imageName="giphy.png" 
                    title="Recreate GIPHY Website" 
                    href="https://bright-elf-d07e66.netlify.app/"
                    target="blank"
                    description="Mimic GIPHY website using GIPHY's API and Tailwind CSS for styling"
                />
                <Card 
                    imageName="personal-web.png" 
                    title="Personal Website" 
                    href="https://esters-asdfghjkl.netlify.app/"
                    target="blank"
                    description="A past personal website project :D Ada fitur admin tapi ga pake backend gg ga"
                />
            </div>
        </div>
    )
}