import { FiX } from "react-icons/fi";
import { LoginModalProps } from "../types";

export default function LoginModal({setShowLoginModal}: LoginModalProps) {
  const closeLoginModal = () => {
    setShowLoginModal(false)
  }
  return (
    <section className="p-5 absolute text-white bg-[rgba(0,0,0,.6)] w-1/2 left-1/4 flex flex-col justify-center items-center rounded-xl">
      <div className="flex justify-between w-full relative mb-5">
        <h3 className="text-2xl font-bold">Bem vindo de volta!!</h3>
        <span onClick={closeLoginModal} className="cursor-pointer">
          <FiX />
        </span>
      </div>
      <form
        action=""
        className="w-full flex flex-col items-center justify-center"
      >
        <div className="w-full flex gap-5 mb-5">
          <label htmlFor="email" className="w-24 self-start">
            Email:
          </label>
          <input
            type="text"
            placeholder="Seu melhor email"
            className="w-64 ml-5 p-1 rounded"
          />
        </div>
        <div className="w-full flex gap-5 mb-5">
          <label htmlFor="password" className="w-24 self-start">
            Senha:
          </label>
          <input
            type="password"
            placeholder="********"
            className="w-64 ml-5 p-1 rounded"
          />
        </div>

        <button type="submit" className="p-3 bg-ligthBlue rounded w-36 mt-5 capitalize font-bold">
          entrar
        </button>
      </form>
    </section>
  );
}
