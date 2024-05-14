
import axios from 'axios'; // Terminal -> npm i axios
import { useState } from 'react'; 

export default function Register() {
    // Nustatom slapyvardzio Variable
    const [username, setUsername] = useState('');

    // Nustatom email Variable
    const [email, setEmail] = useState('');

    // Nustatom slaptazodzio
    const [password, setPassword] = useState('');

    // Funkcija, paimti/isiusti informacija serveriui
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/book', { username, email, password }); // (Istestuota, serveris gauna informacija)
            console.log('user registered'); 
        } catch (error) {
            console.error('Registration error:', error);
        }
    };
    //Praktiskai komponentas
    return (
        // className = class, naudokime tailwindCSS klases
    <div className="flex justify-center items-center h-screen">
        <section className=' border-2  bg-[#D9D9D9] w-1/5 '>
                    <div className='text-center  pb-4 '>
                        <h3 className=''>Username</h3>  
                                <div className=' justify-center flex'>
                                    <div className='place-content: center;  '>        
                                        <img className='w-7 absolute' src="./src/img/ciuvas.png" alt="ciuvas" />
                                        <input className='text-align: right border-2  ' type="text" onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>

                    </div>

                    <div className='text-center pb-4'>
                        <h3>Email</h3>
                        <input className='border-2' type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div  className='text-center pb-6 '>
                        <h3>Password</h3>
                        <input className='border-2' type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='text-center pb-4 '>
                        <button className='border-2 bg-white w-2/4' onClick={handleSubmit}>Submit</button>
                    </div>    
        </section>
    </div>
        )
}