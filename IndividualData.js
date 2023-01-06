import React from "react";

export const IndividualData = ({individualExcelData}) => {
    return(
        <>

        <th> {individualExcelData.Device} </th>
        <th> {individualExcelData.t} </th>
        <th> {individualExcelData.w} </th>
        <th> {individualExcelData.h} </th>
        <th> {individualExcelData.p1} </th>
        <th> {individualExcelData.p25} </th>
        <th> {individualExcelData.p10} </th>
        </>
    )
}