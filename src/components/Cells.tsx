import React from 'react';
import { format, addDays } from 'date-fns';

import { getTransactionLevel } from '../utils/getTransactionLevel';
import { DailyNetTransaction } from '../utils/formatByDailyNetTransaction'

interface CellsProp {
    startDate: string;
    endDate: string;
    dailyNetTransactions: DailyNetTransaction;
}

interface ColourLevels {
    [key: number]: string;
}

interface Colours {
    red: ColourLevels;
    green: ColourLevels;
}
  
const colors: Colours = {
    red: {
        1: '#FF2200',
        2: '#C21A00',
        3: '#801100'
    }, 
    green: {
        1: '#c6e48b',
        2: '#7bc96f',
        3: '#196127',
    }
};
const Cells: React.FC<CellsProp> = ({ startDate, endDate, dailyNetTransactions }) => {
    let day = new Date(startDate);
    const lastDay = new Date(endDate);

    const values = Object.values(dailyNetTransactions)
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    const cells = [];

    while (day <= lastDay) {
        const dayInString = format(day, 'yyyy-MM-dd');
        const val = dailyNetTransactions[dayInString];
        
        const color: 'red' | 'green' = val < 0 ? 'red' : 'green';
        
        const level = getTransactionLevel(val,  val < 0 ? minValue : maxValue);

        cells.push(
            <li 
                key={dayInString} 
                style={{
                    backgroundColor: colors[color][level],
                }}
            />
        );

        day = addDays(day, 1);
    }

    return (
        <ul className="cells">
            { cells }
        </ul>
    );
}

export default Cells;