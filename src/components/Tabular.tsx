import React from 'react';
import { useQuery } from 'react-query'
import { getFoodDetails } from '../Services/API/api'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const Tabular = (props: any) => {

  const foodDetailsQuery = useQuery(['foodDetails'], async () => {
    try {
      const res = await getFoodDetails();
      console.log("res.data", res.data)
      return res.data
    }
    catch (e) {
      throw e;
    }
  }, { retry: 1 })

  const details = foodDetailsQuery.data;

  return (
    <TableContainer component={Paper} className="px-[5vw]">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'><p className='font-bold text-xl'>Category</p></TableCell>
            <TableCell align="center"><p className='font-bold text-xl'>Product Name</p></TableCell>
            <TableCell align="center"><p className='font-bold text-xl'>Calories</p></TableCell>
            <TableCell align="center"><p className='font-bold text-xl'>Protein</p></TableCell>
            <TableCell align="center"><p className='font-bold text-xl'>Carbs</p></TableCell>
            <TableCell align="center"><p className='font-bold text-xl'>Fat</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details && details.map((item: any, index: number) => (
            <>
              <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row" align='center'>
                  {item.food_details.category}
                </TableCell>
                <TableCell align="center">{item.food_details.product_name}</TableCell>
                <TableCell align="center">{item.food_details.nutritions_details.Calories}</TableCell>
                <TableCell align="center">{item.food_details.nutritions_details.Protein}</TableCell>
                <TableCell align="center">{item.food_details.nutritions_details["Total Carbs"]}</TableCell>
                <TableCell align="center">{item.food_details.nutritions_details["Total Fat"]}</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
