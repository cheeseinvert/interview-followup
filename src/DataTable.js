
export function DataTable({startingRowNum, data}) {
    function getRows() {
        let rows = [];
        for (let i=0; i < data.length; i++) {
            let row = data[i];
            rows.push(
                <tr key={i}>
                    <td>{startingRowNum + i + 1}</td>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    <td>{row.company}</td>
                    <td>{row.state}</td>
                </tr>
            )
        }
        if (rows.length === 0) {
            return [<tr>
                <td>empty</td>
                <td>empty</td>
                <td>empty</td>
                <td>empty</td>
                <td>empty</td>
            </tr>];
        } else {
            return rows;
        }
    }

    return (
            <table style={{'width': '100%', 'border': '1px solid black'}}>
                <tbody>
                <tr>
                    <th>Row Num</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>State</th>
                </tr>
                {getRows()}
                </tbody>
            </table>
    )
}
