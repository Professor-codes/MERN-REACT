import React, { useState } from 'react';
import { Container, Slider, Box, List, ListItem, ListItemText } from '@mui/material';

const employees = [
    { id: 1, name: 'Max', salary: 3000, department: 'Engineering' },
    { id: 2, name: 'Smith', salary: 5000, department: 'Marketing' },
    { id: 3, name: 'Elini', salary: 9000, department: 'Finance' },
    { id: 4, name: 'Rosi', salary: 10000, department: 'Human Resources' },
];

const SecondSlider = () => {
    const [minSalary, setMinSalary] = useState();

    const handleSlider = (event, newValue) => {
        setMinSalary(newValue);
    };

    const filteredEmployees = employees.filter(
        (employee) => employee.salary >= minSalary
    );

    return (
        <Container>
            <h1 className='header'>ONE WAY</h1>

            <Box sx={{ width: 300, margin: 'auto' }}>
                <Slider
                    value={minSalary}
                    onChange={handleSlider}
                    valueLabelDisplay="auto"
                    min={1000}
                    max={10000}
                    step={500}
                />
            </Box>

            <List className='list-data'>
                {filteredEmployees.map((employee) => (
                    <ListItem key={employee.id}>
                        <ListItemText
                            primary={employee.name}
                            secondary={`ID: ${employee.id}, Salary: ${employee.salary}, Department: ${employee.department}`}
                        />
                    </ListItem>
                ))}
            </List>

        </Container>
    );
};

export default SecondSlider;
