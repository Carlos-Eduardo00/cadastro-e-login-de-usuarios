import { Link } from "react-router-dom"
import { useRef } from "react";
import api from "../../services/api"


function Cadastro(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passordRef = useRef();


async function handleSubmit(event) {
    event.preventDefault();

    try{
    await api.post('/cadastro', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passordRef.current.value
    })
    alert("Usuário cadastrado com sucesso!");
    }catch (err) {
        alert("Erro ao cadastrar usuário");
    }

    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passordRef.current.value);
}

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>  
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}> 
                <input ref={nameRef} placeholder="Nome" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                <input ref={emailRef} placeholder="Email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                <input ref={passordRef} placeholder="Senha" type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
                <button className="w-full bg-blue-500 text-white py-2 px-4 rouded-md hover:bg-blue-400">Cadastrar</button>
            </form>
            <Link to="/login" className="text-blue-700 hover:underline mt-4 block ">Já tem outra conta? Faça login</Link>
        </div>
    )
}

export default Cadastro