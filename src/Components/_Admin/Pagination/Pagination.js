import React from 'react'
import TablePagination from '@material-ui/core/TablePagination';

function Pagination({rows, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage}) {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    )
}

export default Pagination
