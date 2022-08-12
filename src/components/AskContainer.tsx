import { FiUser } from "react-icons/fi";
import { AskContainerProps } from "../types";


export default function AskContainer({showLoginModal, setShowLoginModal}: AskContainerProps) {
  const token: string  = localStorage.getItem('@ask-app:token') || ""

  const onSubmitFunction = (e: any) => {
    e.preventDefault()
    if(!token) {
      setShowLoginModal(!showLoginModal)
    }

  }

  return (
    <section className='w-full h-full flex justify-center'>
      <section className='w-4/5'>
        <p className="text-sm p-3">Pergunte para o instrutor</p>
        <form onSubmit={(e) => onSubmitFunction(e)} className='flex p-5 items-center gap-4 border border-ligthBlue rounded-xl'>
          <FiUser className="text-3xl" />
          <input className="w-full p-5 outline-none" placeholder="Digite sua pergunta"/>
          <button type="submit" className="border-blue border bg-blue text-white font-bold p-5 rounded-full capitalize">enviar</button>
        </form>
      </section>
    </section>
  )
}
