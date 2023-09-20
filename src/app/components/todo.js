"use client"

import React, {useState} from 'react';
import {Checkbox} from "@/components/ui/checkbox";

export default function Todo({title, id}) {
    const [isChecked, setCheck] = useState(false);
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={`todo${id}`} onCheckedChange={(e) => setCheck(e)}/>
            <label
                htmlFor={`todo${id}`}
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${isChecked ? 'line-through' : ''}`}
            >
                {title}
            </label>
        </div>
    );
}