import { mailingUrl } from "../../urls"
import axios from "axios"
import { ContactForm } from "../ContactForm"
import { Link } from 'react-router-dom';

export const Home = () => {
    const config = {params:{api:'world'}}
    
    return (
        <>
            <div>
            Wanna know covid situations around the world?
            You are in the right place!!
            Hurry up to the <Link to="/statistics">statistics page</Link> for what you are looking for.
            </div>
            <ContactForm/>
        </>
    )
}