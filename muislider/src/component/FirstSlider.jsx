import React, { useState } from 'react';
import './Slider.css'
import { Container, Typography, Slider, Box, List, ListItem, ListItemText } from '@mui/material';

const employees = [
    { id: 1, name: 'Max', salary: 3000, department: 'Engineering' },
    { id: 2, name: 'Smith', salary: 5000, department: 'Marketing' },
    { id: 3, name: 'Elini', salary: 9000, department: 'Finance' },
    { id: 4, name: 'Rosi', salary: 10000, department: 'Human Resources' },
];

const FirstSlider = () => {

    const [salary, setSalary] = useState();

    const handleSlider = (event, newValue) => {
        setSalary(newValue);
    };

    const employeeData = employees.filter(
        (employee) => employee.salary === salary
    );

    return (
        <Container>
            <h1 className='header'>ONE WAY + EXACT VALUE</h1>

            <Box sx={{ width: 300, margin: '120px auto auto auto' }}>
                <Slider
                    value={salary}
                    onChange={handleSlider}
                    valueLabelDisplay="auto"
                    min={1000}
                    max={10000}
                    step={500}
                />
            </Box>

            <List className='list-data'>
                {employeeData.map((employee) => (
                    <ListItem key={employee.id}>
                        <ListItemText
                            primary={employee.name}
                            secondary={`ID: ${employee.id}, Salary: ${employee.salary}, Department: ${employee.department}`}
                        />
                    </ListItem>
                ))}
            </List>

            {employeeData.length === 0 && (
                <Typography style={{ color: "red", position: "relative", top: "10rem", left: "1rem" }} variant="body1" gutterBottom>
                    No employees found with a salary of {salary}.
                </Typography>
            )}

        </Container>
    );
};

export default FirstSlider;
