import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Login = () => {
    const [email, setEmail] = useState<string>("steve@brownlee.com")
    const [password, setPassword] = useState<string>("brownlee")
    const existDialog = useRef<HTMLDialogElement>(null)
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(`http://localhost:8000/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((authInfo) => {
                if (authInfo.valid) {
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
                    onClick={() =>
                        existDialog.current !== null &&
                        existDialog.current.close()
                    }
                >
                    Close
                </button>
            </dialog>

            <section>
                <form className="flex flex-col" onSubmit={handleLogin}>
                    <h1 className="text-4xl text-center mt-7 mb-3">
                        Gamer Rater
                    </h1>
                    <h2 className="text-xl text-center mb-10">
                        Please sign in
                    </h2>
                    <fieldset className="mb-4 flex justify-between gap-2">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input
                            type="email"
                            id="inputEmail"
                            value={email}
                            onChange={(evt) => setEmail(evt.target.value)}
                            className="border rounded pl-2 "
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
                            className="border rounded pl-2 "
                            placeholder="Password"
                        />
                    </fieldset>
                    <fieldset className="flex justify-center align-center">
                        <button
                            type="submit"
                            className="button p-3 rounded-md self-center bg-blue-800 text-blue-100 cursor-pointer"
                        >
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <div className="mt-3">
                <section className="">
                    <Link
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        to="/register"
                    >
                        Not a member yet?
                    </Link>
                </section>
            </div>
        </main>
    )
}
