import React from 'react';

const category = (props) => {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((a) => {
                            return (
                                <tr>
                                    <td>{a}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default category;