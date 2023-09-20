import React from 'react';
import {Button} from "@/components/ui/button";
import {PenSquare, XCircle} from "lucide-react";

export default function TableOperation(props) {
    return (
        <>
            <Button className="bg-blue-500 hover:bg-blue-600 mr-1 p-0 h-7 w-7">
                <PenSquare className="h-5 w-5" />
            </Button>
            <Button className="bg-red-500 hover:bg-red-600 p-0 h-7 w-7">
                <XCircle className="h-5 w-5"/>
            </Button>
        </>
    );
}