import React from "react";

const author = (props) => {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.author.map((a) => {
                            return (
                                <tr>
                                    <td>{a.name}</td>
                                    <td>{a.surname}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default author;