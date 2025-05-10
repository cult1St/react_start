import React from "react";

const Table = () => {
    return (
        <div className="row">
            <div className="card col">
                <table className="table table-bordered table-primary">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>James</td>
                            <td>james@yahoo.com</td>
                            <td>+1345285773</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>James</td>
                            <td>james@yahoo.com</td>
                            <td>+1345285773</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>James</td>
                            <td>james@yahoo.com</td>
                            <td>+1345285773</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;