import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Register = () => {
    const [email, setEmail] = useState<string>("admina@straytor.com")
    const [password, setPassword] = useState<string>("straytor")
    const [firstName, setFirstName] = useState<string>("Admina")
    const [lastName, setLastName] = useState<string>("Straytor")
    const existDialog = useRef<HTMLDialogElement>(null)
    const navigate = useNavigate()

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(`http://localhost:8000/register`, {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
                first_name: firstName,
                last_name: lastName
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((authInfo) => {
                if (authInfo && authInfo.token) {
                    localStorage.setItem(
                        "gamer_token",
                        JSON.stringify(authInfo)
                    )
                    navigate("/")
                } else {
                    existDialog.current?.showModal()
                }
            })
    }

    return (
        <main className="flex justify-center flex-col items-center p-[10rem]">
            <dialog className="" ref={existDialog}>
                <div>User does not exist</div>
                <button
                    className=""
                    onClick={() => existDialog.current?.close()}
                >
                    Close
                </button>
            </dialog>

            <section>
                <form className="flex flex-col" onSubmit={handleRegister}>
                    <h1 className="text-4xl text-center mt-7 mb-3">
                        Rock of Ages
                    </h1>
                    <h2 className="text-xl text-center mb-10">
                        Register new account
                    </h2>
                    <fieldset className="mb-4 flex justify-between gap-2">
                        <label htmlFor="firstName"> First name </label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(evt) => setFirstName(evt.target.value)}
                            className="border rounded pl-2"
                            placeholder=""
                            required
                            autoFocus
                        />
                    </fieldset>
                    <fieldset className="mb-4 flex justify-between gap-2">
                        <label htmlFor="lastName"> Last name </label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(evt) => setLastName(evt.target.value)}
                            className="border rounded pl-2"
                            placeholder=""
                            required
                            autoFocus
                        />
                    </fieldset>
                    <fieldset className="mb-4 flex justify-between gap-2">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input
                            type="email"
                            id="inputEmail"
                            value={email}
                            onChange={(evt) => setEmail(evt.target.value)}
                            className="border rounded pl-2"
                            placeholder="Email address"
                            required
                            autoFocus
                        />
                    </fieldset>
                    <fieldset className="mb-4 flex justify-between gap-2">
                        <label htmlFor="inputPassword"> Password </label>
                        <input
                            type="password"
                            id="inputPassword"
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                            className="border rounded pl-2"
                            placeholder="Password"
                        />
                    </fieldset>
                    <fieldset className="flex justify-center align-center">
                        <button
                            type="submit"
                            className="button p-3 rounded-md self-center bg-blue-800 text-blue-100 cursor-pointer"
                        >
                            Register
                        </button>
                    </fieldset>
                </form>
            </section>
            <div className="mt-3">
                <section className="">
                    <Link
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        to="/login"
                    >
                        Already have an account?
                    </Link>
                </section>
            </div>
        </main>
    )
}
