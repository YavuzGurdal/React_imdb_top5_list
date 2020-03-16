import React from 'react'
import { Table } from 'react-bootstrap'

function Movie({ movieList, tabloGoster }) {

    const classAdi  = tabloGoster ? "my-5 text-center" : "d-none"
        // "d-none" bootsrap teki anlami; display : none demek

    return (
            <Table className={classAdi} striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Movie Name</th>
                        <th>IMDB Rating</th>
                        <th>Year</th>
                        <th>Comment</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {movieList.map(item => {
                        return (
                            <tr key={item[0]}>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
    )
}

export default Movie
