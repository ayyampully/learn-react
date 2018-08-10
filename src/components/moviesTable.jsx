import React from "react";
import Like from "./common/like";

const MoviesTable = ({ movies, onLike, onDelete }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Stoke</th>
                    <th>Rate</th>
                    <th />
                    <th />
                </tr>
            </thead>
            <tbody>
                {movies.map(m => (
                    <tr key={m._id}>
                        <td>{m.title}</td>
                        <td>{m.genre.name}</td>
                        <td>{m.numberInStock}</td>
                        <td>{m.dailyRentalRate}</td>
                        <td>
                            <Like
                                onClick={() => {
                                    onLike(m);
                                }}
                                liked={m.liked}
                            />
                        </td>
                        <td>
                            <button
                                onClick={() => {
                                    onDelete(m);
                                }}
                                className="btn-sm btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MoviesTable;
