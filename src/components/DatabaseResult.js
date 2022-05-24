import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

//Comienza
import { queryData } from "./startDatabase"
import { buildFilteredTable } from "./searchResults"

//Variable que captura los estudiantes y sus datos de la base de datos
let studentsArray = [];
queryData.forEach((student) =>  studentsArray.push(student.data()));

let searchValue = document.getElementById("searchBox");
let optionValue = document.getElementById("searchOptions");
let searchButton = document.getElementById("searchButton");
let searchMain = document.getElementById("searchMain");


//Obtiene los datos de la base de datos
const results = () => {

  let table = document.getElementById('databaseTable');
  table.innerHTML = '';

  const studentsFiltered = studentsArray.filter(elem => {

    //Se crea una expresion regular en base a Searchbox
    let searchboxER = new RegExp (searchValue.value, 'i')

    return (
      //elem[`${optionValue.value}`] === searchValue.value
      //Por cada elemento de la base de datos, busca el dato segun la opcion de busqueda elegida
      //Si coincide con la expresion regular los agrega a la tabla filtrada
      searchboxER.test(elem[`${optionValue.value}`]) === true
    )
  })
  buildFilteredTable(studentsFiltered);
}

//Compara y filtra los datos ingresados segun el parámetro de busqueda elegido
searchButton.addEventListener("click", results);
searchMain.addEventListener("submit", (e) => {
  e.preventDefault();
  results();
});
//Termina

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
  
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function DatabaseResult() {
    return (
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="middle">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.calories}</StyledTableCell>
              <StyledTableCell>{row.fat}</StyledTableCell>
              <StyledTableCell>{row.carbs}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell>
              <StyledTableCell>{row.protein}</StyledTableCell> 
            </StyledTableRow>
          ))}
        </TableBody>
    )
}