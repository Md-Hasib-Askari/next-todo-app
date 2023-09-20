import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import * as React from "react";
import TableOperation from "@/app/components/tableOperation";
import Todo from "@/app/components/todo";

export default function TableComp({data}) {
    return (
        <Table>
            <TableCaption>A list of your recent todos.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Todo</TableHead>
                    <TableHead className="text-right">Operation</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map(value => (
                    <TableRow key={value.id}>
                        <TableCell className="font-medium">
                            <Todo title={value.title}/>
                        </TableCell>
                        <TableCell className="text-right">
                            <TableOperation />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}