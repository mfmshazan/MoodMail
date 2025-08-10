import { Button } from './ui/button'
import { Input } from './ui/input'


type Props = {
    mood: string,
    setMood: (val:string) => void,
    onGenerate: () => void,
    disabled: boolean
}
const MoodInput = ({mood, setMood, onGenerate, disabled}:Props) => {
    return (
        <div className='space-y-4 '>
            <div>
                <Input
                    placeholder='How are you feeling today ? (Happy , Sad or Angry...)'
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    disabled={disabled}
                />
            </div>

            <Button className='w-full' onClick={() => onGenerate()} disabled={disabled}>
                Genarate Mail
            </Button>
        </div>
    )
}

export default MoodInput
