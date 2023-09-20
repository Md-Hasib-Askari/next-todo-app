"use client"

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import TableComp from "./components/table";
import {useState} from "react";


export default function Home() {
    const [data, setData] = useState([
        {
            id: 1,
            title: "Spring"
        },
        {
            id: 2,
            title: "MERN"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }
    const handleInputData = (e) => {
        setInputValue(e.target.value);
    }
    const addTodo = (e) => {
        e.preventDefault();
        let newData = {
            id: data.length + 1,
            title: inputValue
        }
        setInputValue('');
        setData([...data, newData]);
    }

    return (
        <main className="bg-green-200 flex min-h-screen flex-col items-center justify-between p-24">
            <Card className="sm:w-full lg:w-[60%]">
            <CardHeader>
                <CardTitle>Todo List</CardTitle>
                <CardDescription>All your todo list in one place</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-row gap-1">
                            <Input id="name" placeholder="eg. portfolio project" value={inputValue} onChange={handleInputData} onKeyPress={handleInput}/>
                            <Button onClick={addTodo}>+Add</Button>
                        </div>
                    </div>
                </form>
                <TableComp data={data}/>
            </CardContent>
            <CardFooter className="flex justify-between">
            </CardFooter>
        </Card>
        </main>
    )
}
