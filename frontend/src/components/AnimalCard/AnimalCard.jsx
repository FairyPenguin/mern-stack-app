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