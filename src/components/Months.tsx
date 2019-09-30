import React from 'react';
import { format, addMonths } from 'date-fns';

interface MonthsProps {
    startDate: string;
}
const Months: React.FC<MonthsProps> = ({ startDate }) => {
    return (
        <ul className="months">
            {
                Array.from({ length: 12 }).map((_, i) => (
                    <li key={i}>
                        {format(addMonths(new Date(startDate), i), 'MMM')}
                    </li>
                ))
            }
        </ul>
    )
}

export default Months;