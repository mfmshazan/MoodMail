import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

type Props = {
  subject:string,
  footer:string,
  onReset:() => void
}

const MoodOutput = ({subject, footer, onReset}:Props) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium mb-2 block">Subject :</label>
        <Input value={subject} readOnly/>
      </div>

      <div>
         <label className="font-medium mb-2 block">Footer Signature :</label>
         <Textarea value={footer} readOnly/>
      </div>

      <div>
        <Button variant="destructive" className="w-full" onClick={onReset} >Reset</Button>
      </div>
    </div>
  )
}

export default MoodOutput
