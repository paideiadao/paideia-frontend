import React, { FC, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  useMediaQuery,
} from '@mui/material';
import { IObj } from '@lib/utilities'

interface HeadingData {
  id: string
  name: string,
  align?: "center" | "inherit" | "justify" | "left" | "right"
}

interface TableProps {
  heading: HeadingData[],
  rows: IObj<number | string>[],
}

const CustomTable: FC<TableProps> = ({ rows, heading }): JSX.Element => {
const [thisNavigator, setThisNavigator] = useState('en-US')

useEffect(() => {
  setThisNavigator(navigator.language)
}, [])

  const checkSmall = useMediaQuery('(min-width:740px)');
  return (
    <TableContainer sx={{
      border: '2px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '8px'
    }}>
      {checkSmall ? (
        <Table aria-label="customized table">
          <TableHead>
            <TableRow sx={{
              background: 'rgba(255, 255, 255, 0.09)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}>
              {heading.map((heading) => {
                return (
                  <TableCell
                    key={heading.id}
                    align={heading.align ? heading.align : 'left'}
                    sx={{ border: 'none', fontWeight: '700', letterSpacing: '1px' }}
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  '&:nth-of-type(odd)': {
                    background: 'rgba(255, 255, 255, 0.02)',
                  },
                  // hide last border
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }}>
                  {Object.keys(row).map((key, i) => {
                    return (
                      <TableCell
                        key={key}
                        sx={{ border: 'none' }}
                      >
                        {row[key].toLocaleString(thisNavigator, {
                          maximumFractionDigits: 0,
                        })}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      ) : (
        <Table sx={{ p: 0 }}>
          <TableBody>
            {rows.map((row, i) => {
              return (
                Object.keys(row).map((key, i) => {
                  if (row[key]) {
                    return (
                      <TableRow
                        key={i + key}
                        sx={
                          (i > Object.keys(row).length) ? { border: '1px solid rgba(255, 255, 255, 0.12)', } : {}
                        }
                      >
                        <TableCell>
                          {heading[i].name}
                        </TableCell>
                        <TableCell>
                          {row[key].toLocaleString(thisNavigator, {
                            maximumFractionDigits: 0,
                          })}
                        </TableCell>
                      </TableRow>
                    )
                  }
                  else return null
                })
              )
            })}
          </TableBody>
        </Table >
      )}
    </TableContainer>
  )
}

export default CustomTable


