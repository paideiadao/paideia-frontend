import React, { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface HeadingData {
  id: string
  name: string,
  align?: "center" | "inherit" | "justify" | "left" | "right"
}

interface TableProps {
  heading: HeadingData[],
  rows: any[],
}

const CustomTable: FC<TableProps> = ({ rows, heading }): JSX.Element => {
  return (
    <Table aria-label="customized table">
      <TableBody>
        <TableRow>
          <TableCell>hello</TableCell>
        </TableRow>
      </TableBody>
                  {/* 
      <TableHead>
        <TableRow sx={{ background: '#19202b' }}>
          {heading.map((heading) => {
            return (
            <TableCell
              key={heading.id}
              align={heading.align ? heading.align : 'left'}
            >
              {heading.name}
            </TableCell>
            )
          })}
        </TableRow>
      </TableHead>
      <TableBody>

        {rows.map((row, i) => {
          return (
            <TableRow key={i} sx={{
              background: '#0c1321',
              '&:nth-of-type(odd)': {
                background: '#071020',
              },
              // hide last border
              '&:last-child td, &:last-child th': {
                border: 0,
              },
            }}>
              {Object.keys(row).map((key, i) => {
                return (
                  <TableCell
                    // align={
                    // internalColumnData[index].align ?
                    //   internalColumnData[index].align :
                    //   "inherit"}
                    key={key}
                  >
                    {key}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
 */}
    </Table>


  )
}

export default CustomTable


