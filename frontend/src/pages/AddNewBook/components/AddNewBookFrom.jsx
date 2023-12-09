import axios from "axios"
import { useState, useRef, useEffect } from "react"


function AddNewBookFrom() {

    const [bookInput, setBookInput] = useState({

        "title": "",
        "author": "",
        "subtitle": "",
        "description": "",
        "cover-image": "",
        "publicationDate": ""
    })

    const [file, setFile] = useState("")

    const fileRef = useRef()
    const dateInputRef = useRef()

    const url = "http://localhost:8800/api/books"

    function inputHandler(e) {
        const bookInputValue = e.target.value
        const bookInputFieldName = e.target.name
        // console.log(fileInputValue);

        // console.log(bookInputValue)
        // console.log(bookInputFieldName)

        setBookInput((prevState) => ({ ...prevState, [bookInputFieldName]: bookInputValue }))

        console.log(bookInput)
    }

    // useEffect(() => {

    //     // const inputDateField = document.querySelector("#publication-date")

    //     // inputDateField.addEventListener("blur", validateDateInput)
    //     const refDateValue = dateInputRef.current
    //     function validateDateInput(e) {
    //         const input = e.target

    //         if (isNaN(input.value)) {
    //             input.setCustomValidity("Please eneter a valid number [0-9]")
    //         } else {
    //             input.setCustomValidity("")
    //         }
    //     }
    //     dateInputRef.current.addEventListener("blur", validateDateInput)

    //     return () => {
    //         refDateValue.removeEventListener("blur", validateDateInput)
    //     }
    // }, [])

    function fileInputHandler(e) {
        const bookInputFieldName = e.target.name
        const fileInputValue = e.target.files[0]
        console.log(fileInputValue)
        setBookInput((prevState) => ({ ...prevState, [bookInputFieldName]: fileInputValue }))
        console.log(bookInput);

    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            await axios.post(
                url,
                bookInput,
                { headers: { "Content-Type": "multipart/form-data" } }
            )
            console.log(bookInput)

            setBookInput("")
            fileRef.current.value = ""

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="pb-4">
                <span>

                    <a className="inline-block cursor-pointer text-base font-bold py-3 px-5 border border-solid border-transparent bg-black rounded-lg"
                        href="/">
                        <p>Back to home</p>
                    </a>

                </span>
            </div>
            <section>
                <div>
                    <form action="">

                        <label className="block pb-4"
                            htmlFor="title">
                            Title
                            <input className="block w-full"
                                onChange={inputHandler}
                                name="title"
                                value={bookInput.title}
                                id="title"
                                type="text" />
                        </label>

                        <label className="block pb-4"
                            htmlFor="author">author
                            <input className="block w-full"
                                onChange={inputHandler}
                                name="author"
                                value={bookInput.author}
                                id="author"
                                type="text" />
                        </label>

                        <label className="block pb-4"
                            htmlFor="subtitle">subtitle
                            <input className="block w-full"
                                onChange={inputHandler}
                                name="subtitle"
                                value={bookInput.subtitle}
                                id="subtitle"
                                type="text" />
                        </label>

                        <label className="block pb-4"
                            htmlFor="description">description
                            <textarea
                                className="block w-full"
                                rows={3}
                                onChange={inputHandler}
                                name="description"
                                value={bookInput.description}
                                id="description"
                                type="text" />
                        </label>

                        <label className="block pb-4"
                            htmlFor="cover-image">cover-image
                            <input className="block w-full border-2 border-indigo-600"
                                ref={fileRef}
                                onChange={fileInputHandler}
                                // onInput="this.value = this.value.replace(/[^0-9]/g, '')"
                                name="cover-image"
                                value={file}
                                id="cover-image"
                                type="file"
                                accept="image/png, image/jpeg" />
                        </label>

                        <label className="block pb-4"
                            htmlFor="publication-date">publication-date
                            <input className="block w-full"
                                onChange={inputHandler}
                                ref={dateInputRef}
                                name="publication-date"
                                // value={bookInput.publicationDate}
                                placeholder="Enter a year, for exmaple 1918"
                                id="publication-date"
                                type="number"
                                inputMode="numeric"
                                pattern="[0-9]+"
                                min={1}
                                max="4" />

                        </label>

                        <button className="bg-indigo-600 px-3 py-2 "
                            type="submit"
                            onClick={handleSubmit}>
                            <p>Add Book 📖</p>
                        </button>
                    </form>
                </div>
            </section>
        </>)
}

export default AddNewBookFrom