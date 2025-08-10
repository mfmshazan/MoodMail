import { useState } from 'react'
import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput'

const Home = () => {

    const [mood, setMood] = useState("");
    const [subject, setSubject] = useState("");
    const [footer, setFooter] = useState("");
    const [generated, setGenerated] = useState(false)

    const handleInput = () => {
        const lowerMood = mood.toLowerCase();

        if (lowerMood.includes('happy')) {
            setSubject("Feeling happy");
            setFooter("Have a nice day");
        } else if (lowerMood.includes("sad")) {
            setSubject("Feeling sad");
            setFooter("Having another bad day");
        } else if (lowerMood.includes('angry')) {
            setSubject("Feeling angry");
            setFooter("You have to cooldown");
        } else {
            setSubject("Mood update");
            setFooter("Catch you later");
        }

        setGenerated(true)
    }

    const handleReset = () => {
        setMood("")
        setSubject("");
        setFooter("");
        setGenerated(false)
    }

    return (
        <div className=' max-w-xl mx-auto border p-6 mt-20 space-y-6 rounded-xl shadow-sm'>
            <div className='text-2xl font-bold'>
                MoodMail Generetor
            </div>

            {!generated ? (
            <MoodInput mood={mood} setMood={setMood}
                onGenerate={handleInput}
                disabled={generated} />
            ) : (
                 <MoodOutput subject={subject} footer={footer}
                    onReset={handleReset} />
            )
        }
        </div>
    )
}

export default Home
