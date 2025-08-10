import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const MoodOutput = () => {
  return (
    <div className="space-y-6">
      <div>
        <label className="font-medium mb-2 block">Subject :</label>
        <Input/>
      </div>

      <div>
         <label className="font-medium mb-2 block">Footer Signature :</label>
         <Textarea/>
      </div>

      <div>
        <Button variant="destructive" className="w-full" >Reset</Button>
      </div>
    </div>
  )
}

export default MoodOutput
