import axios from "axios";
import { useState, useEffect } from 'react';
import styles from "./AnimalCard.module.css"


function AnimalCard() {
    const [books, setBooks] = useState([])

    const url = "http://localhost:8800/api/books"

    useEffect(() => {

        async function fetchBooksHandler() {
            try {
                const response = await axios.get(url)
                const booksData = await response.data
                console.log(response.data[0].publicationDate)

                setBooks(booksData)
            }

            catch (error) {
                console.log(error)
            }
        }


        fetchBooksHandler()
    }, [])


    return (
        <>
            <div className="pb-4">
                <span>
                    <a className="inline-block cursor-pointer bg-black text-base font-medium
                 py-3 px-5 rounded-lg border border-solid border-transparent "

                        href="/add-new-book/">
                        Add new book
                    </a>
                </span>
            </div>
            <div>AnimalCard</div>

            <section className={styles.books}>
                {
                    books.map((book) => {
                        return (
                            <div
                                key={book._id}>
                                <ul >
                                    <li>
                                        <h3>{book.title}</h3>
                                        <h4>{book.author}</h4>
                                        <p>{book.subtitle}</p>
                                        <p>{book.description}</p>
                                        <span>{book.publicationDate}</span>
                                    </li>
                                </ul>
                            </div>

                        )
                    })
                }
            </section>
        </>
    )
}

export default AnimalCard