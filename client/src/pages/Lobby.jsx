import { useState , useCallback , useEffect, use } from "react"
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
    const [email , setEmail] = useState("");
    const [room , setRoom] = useState("");
    const socket = useSocket();
    const navigate = useNavigate()



    const handleSubmit = useCallback(e => {
        e.preventDefault();
        socket.emit("room:join",{email , room})
    }, [email, room,socket]);




    const handleRoomJoin = useCallback((data)=>{
        const {email , room} = data;
        navigate(`/room/${room}`)
    },[navigate])




    useEffect(() => {
        socket.on("room:join",handleRoomJoin);
        return () => {
            socket.off("room:join",handleRoomJoin)
        }

    },[socket,handleRoomJoin]);


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