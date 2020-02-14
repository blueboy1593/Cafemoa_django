import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

function ccyFormat(num) {
  return `${num}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('아메리카노', 1500, 3),
  createRow('카페라떼', 3000, 1),
  createRow('레몬허브티', 3500, 2),
];

const invoiceSubtotal = subtotal(rows);

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <div style={{padding:100}}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              장바구니 목록
            </TableCell>
            <TableCell align="right">가격</TableCell>
          </TableRow>
          <TableRow>
            <Checkbox></Checkbox>
            <TableCell>음료</TableCell>
            <TableCell align="right">단위가격</TableCell>
            <TableCell align="right">수량</TableCell>
            <TableCell align="right">가격</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.desc}>
              <Checkbox></Checkbox>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty} 원</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)} 원</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>합계 가격</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)} 원</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    <div style={{float:"right"}}>
      <Button variant="contained" color="success" >
        선택 상품 삭제
      </Button>
      <span> </span>
      <Button variant="contained" color="secondary" >
        주문하기
      </Button>
    </div>
    </div>
  );
}
