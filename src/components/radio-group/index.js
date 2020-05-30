import Link from 'next/link'

import { useState, useCallback } from 'react';


export default function RadioGroup({ defaultValue, options = [], onChange }) {
    const [currentValue, setCurrentValue] = useState(() => {
        if (defaultValue) return defaultValue;
        return options[0].value
    })

    const handleChange = useCallback((value) => {
        setCurrentValue(value);
        onChange && onChange(value);
    }, [onChange])

    return (
        <div className="flex">
            {
                options.map(item => (
                    <div
                        key={item.value}
                        className={`transition-all duration-200  text-gray-700 cursor-pointer bg-white text-sm py-1 px-3 box-border mr-3 border border-white ${currentValue === item.value ? 'border-blue-300 text-blue-300' : ''}`}
                        onClick={() => { handleChange(item.value) }}
                    >{item.text}</div>
                ))
            }
        </div>
    )
}