import  { useState } from 'react'
import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput'

const Home = () => {

    const [mood, setMood] = useState("");
    const [subject, setSubject] = useState("");
    const [footer, setFooter] = useState("");
    const [generated, setGenerated] = useState(false)

  return (
    <div className=' max-w-xl mx-auto border p-6 mt-20 space-y-6 rounded-xl shadow-sm'>
       <div className='text-2xl font-bold'>
            MoodMail Generetor
       </div>

       <div>
            <MoodInput mood={mood} setMood={setMood}
            onGenerate={() => console.log("Hii")}
            disabled={generated}/>
       </div>

       <div>
            <MoodOutput/>
       </div>
    </div>
  )
}

export default Home
