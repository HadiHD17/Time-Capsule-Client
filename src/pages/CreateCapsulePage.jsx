import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/CreateCapsulePage.css"

const CreateCapsulePage = () => {
    const navigate = useNavigate();
    const [Title, setTitle] = useState("");
    const [RevealDate, setRevealDate] = useState("");
    const [Message, setMessage] = useState("");
    const [Mood, setMood] = useState("");
    const [Tag, setTag] = useState("");
    const [Attachement, setAttachement] = useState(null);
    const [Privacy, setPrivacy] = useState("private");
    const [Mode, setMode] = useState(false);

    const cancel = (e)=>{
        e.preventDefault();
        navigate("/Dashboard");
    }
    const submit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("Title", Title);
        formData.append("RevealDate", RevealDate);
        formData.append("Message", Message);
        formData.append("Mood", Mood);
        formData.append("Tag", Tag);
        formData.append("Attachement", Attachement);
        formData.append("Privacy", Privacy);
        formData.append("Mode", Mode);

        //for(let pair of formData.entries()){
          //  console.log(pair[0] + ": " + pair[1]);
        //}

        navigate("/Dashboard");
    }

  return (
    <div className='CreateForm'>
        <form>
            <div className='form-top'>
                <input type="text" id="Title" className='Title' placeholder='enter your title' onChange={(e) => setTitle(e.target.value)} required/>
                <input type="date" id="RevealDate" className='RevealDate' onChange={(e) => setRevealDate(e.target.value)} required/>
            </div>
            <div className='form-message'>
                <input type="text" id="Message" className='Message' placeholder='enter your message' onChange={(e) => setMessage(e.target.value)} required/>
            </div>
            <div className='form-mood'>
                <label className='Mood'>Select Your Mood:</label>
                <select id="Mood" className='Mood' name='Mood' onChange={(e) => setMood(e.target.value)}>
                    <option value="">-- Choose a mood --</option>
                    <option value="happy">😊 Happy</option>
                    <option value="sad">😢 Sad</option>
                    <option value="angry">😠 Angry</option>
                    <option value="excited">🤩 Excited</option>
                    <option value="relaxed">😌 Relaxed</option>
                    <option value="bored">😐 Bored</option>
                    <option value="anxious">😰 Anxious</option>
                </select>
            </div>
            <div className='form-tag'>
                <input type="text" id="Tag" className='Tag' placeholder='Enter your tags' onChange={(e) => setTag(e.target.value)}/>
            </div>
            <div className="form-attachement">
                <label className='Attachement'>Attach Media</label>
                <input type="file" id="Attachement" className='Attachement' accept="image/*,audio/*,video/*,.txt" onChange={(e) => setAttachement(e.target.files[0])}/>
            </div>
            <div className="form-privacy">
                <label className='Privacy'>Select Your Privacy</label>
                <label>
                    <input type="radio" className="Privacy" value="public" checked={Privacy === 'public'} onChange={(e) => {setPrivacy(e.target.value)}}/>
                    🌍 Public - Everyone can see it on the wall
                </label>
                <label>
                    <input type="radio" className="Privacy" value="private" checked={Privacy === 'private'} onChange={(e) => {setPrivacy(e.target.value)}}/>
                    🔒 Private - Only I can see it
                </label>
                <label>
                    <input type="radio" className="Privacy" value="unlisted" checked={Privacy === 'unlisted'} onChange={(e) => {setPrivacy(e.target.value)}}/>
                    🔗 Unlisted - Shareable via private link
                </label>
            </div>
            <div className="form-mode">
                <label>
                    <input type="checkbox" className="Mode" checked={Mode} onChange={(e) => {setMode(e.target.checked)}}/>
                    🎁 Surprise Mode - Hide content until reveal date (even from me!)
                </label>
            </div>
            <div className='form-buttons'>
                <button className='cancelbtn' onClick={cancel}>Cancel</button>
                <button className='submitbtn' onClick={submit}>Create Capsule</button>
            </div>
        </form>
    </div>
  )
}

export default CreateCapsulePage