import React from 'react'
import styled from 'styled-components'

const TableStyles = styled.div`

`

const RowStyles = styled.div`
display: flex;
align-items: center; 
padding: 4px 24px;

&:nth-child(odd) { background: #fbfbfb; }
& .row-label { width: 27%; }
& .row-content { width: 73%; }
`

const Table = ({data}) => {
    return (
        <TableStyles>
            {data.map((row) => <RowStyles key={row.key}>
                <div className="row-label">{row.label}</div>
                <div className="row-content">{row.content}</div>
            </RowStyles>)}
        </TableStyles>
    )
}
export default Table