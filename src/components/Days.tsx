import React from 'react';
import { format, addDays } from 'date-fns';

interface DaysProps {
    startDate: string;
}
const Days: React.FC<DaysProps> = ({ startDate }) => {
    return (
        <ul className="days">
            {
                Array.from({ length: 7 }).map((_, i) => (
                    <li key={i}>
                        {
                            format(addDays(new Date(startDate), i), 'E')
                        }
                    </li>
                ))
            }
      </ul>
    )
}

export default Days;