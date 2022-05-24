import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DatabaseResult from './DatabaseResult';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} id="studentTable" sx={{ display: 'block' }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Curso</StyledTableCell>
            <StyledTableCell>Calificación</StyledTableCell>
            <StyledTableCell>Fecha Inicio</StyledTableCell>
            <StyledTableCell>Fecha Inicio</StyledTableCell>
          </TableRow>
        </TableHead>
        <DatabaseResult/>
      </Table>
    </TableContainer>
  );
}
