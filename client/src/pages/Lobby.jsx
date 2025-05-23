import { useState , useCallback } from "react"

const Lobby = () => {
    const [email , setEmail] = useState("");
    const [room , setRoom] = useState("");
    const handleSubmit = useCallback(e => {
        e.preventDefault();
        console.log({ email , room });
    }, [email, room]);
return (
    <div>
        <h2>Lobby</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email">Email : </label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="room">Room ID : </label>
                <input type="text" id="room" value={room} onChange={e => setRoom(e.target.value)}/>
            </div>
            <button
                type="submit"
                onClick={handleSubmit}
                style={{ width: '150px', height: '50px', fontSize: '20px', marginTop: '16px' }}
            >
                Join
            </button>
        </form>
    </div>
)
}

export default Lobby