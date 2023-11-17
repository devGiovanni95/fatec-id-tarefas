import { Stack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface IFormUser {
    email: string
    password: string
}
export default function UserCreate(){

    const {reset, register, handleSubmit, formState:{errors}} = useForm<IFormUser>()
    const onSubmit = (data:IFormUser) => {
        //mutateCreateUser(data)
        //axios.post
        console.log(data)
    }

    return(
        <>
            <h1>Cadastrar</h1>
            <hr />
            <Stack>
                <form 
                    action=""
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                    // onSubmit={(e)=> {
                    //     e.preventDefault()
                    //     handleSubmit(onSubmit)}}                    
                    >
                    <FormControl>
                        <FormLabel>E-mail</FormLabel>
                        <Input 
                        style={(errors.email?.type == "required")? {
                            border: "1px solid red"
                        } : {
                            border: "1px solid red"
                        }}
                        // borderColor={(errors.email?.type == "required") ? 'red' : 'green'}
                        // type="email" {...register('email',{required: true})}
                        />
                    </FormControl>
                    <FormControl>
                        {
                            errors.email?.type == "required" && (
                                <p>E-mail obrigatório!</p>
                                )
                            }
                        <FormLabel>Senha</FormLabel>
                        <Input 
                            style={(errors.email?.type == "required")? {
                                border: "1px solid red"
                            } : {
                                border: "1px solid red"
                            }}
                        type="password" {...register('password',{required: true})}/>
                        {
                            errors.email?.type == "required" && (
                                <p>Password obrigatório!</p>
                            )
                        }
                    </FormControl>
                    {/* <Button colorScheme="blue" type="submit">Cadastrar</Button> */}
                    <Button colorScheme="blue" type="submit">Cadastrar</Button>
                    <Button onClick={() => reset()} colorScheme="red" type="button">Limpar</Button>
                </form>
            </Stack>
        </>
    )
}