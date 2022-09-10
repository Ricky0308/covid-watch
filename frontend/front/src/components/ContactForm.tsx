import { Textarea, Button, Box } from '@chakra-ui/react' 
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { mailingUrl } from '../urls';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const ContactForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange",
        defaultValues:{
            message:"",
        }
    })
    const sendMessage:SubmitHandler<{message:string}> = async(value) => {
        axios.post(mailingUrl, value)
            .then(res => navigate("/message_success", {replace:true}))
    }
    return(
        <Box 
            p="5%"
            textAlign="right"
        >
            <form onSubmit={handleSubmit(sendMessage)}>
                <Textarea 
                    placeholder='Request anything' 
                    {...register("message", {
                        required:"*required!"
                    })}
                    />
                <Button
                    bg="yellow"
                    _hover={{bg:"#f7ea52"}}
                    _active={{bg:"#f7ea52"}}
                    type="submit"
                    value="submit"
                    border="gray 1px solid"
                    my="3%"
                >
                    Send
                </Button >
            </form>
        </Box>
    )
}