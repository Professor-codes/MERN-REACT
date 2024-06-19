import React, { useState } from 'react';
import { Container, Slider, Box, List, ListItem, ListItemText } from '@mui/material';

const employees = [
    { id: 1, name: 'Max', salary: 3000, department: 'Engineering' },
    { id: 2, name: 'Smith', salary: 5000, department: 'Marketing' },
    { id: 3, name: 'Elini', salary: 9000, department: 'Finance' },
    { id: 4, name: 'Rosi', salary: 10000, department: 'Human Resources' },
];

const ThirdSlider = () => {
    const [salaryRange, setSalaryRange] = useState([50000, 80000]);

    const handleSlider = (event, newValue) => {
        setSalaryRange(newValue);
    };

    const filteredEmployees = employees.filter(
        (employee) => employee.salary >= salaryRange[0] && employee.salary <= salaryRange[1]
    );

    return (
        <Container>
            <h1 className='header'>TWO WAY</h1>
            <Box sx={{ width: 300, margin: 'auto', paddingTop: 4 }}>
                <Slider
                    value={salaryRange}
                    onChange={handleSlider}
                    valueLabelDisplay="auto"
                    min={1000}
                    max={10000}
                    step={500}
                    marks={[
                        { value: 1000, label: '1k' },
                        { value: 4000, label: '4k' },
                        { value: 7000, label: '7k' },
                        { value: 10000, label: '10k' },
                    ]}
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

export default ThirdSlider;
