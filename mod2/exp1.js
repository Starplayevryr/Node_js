const express = require('express');
const app = express();

// Sample JSON data (replace this with your actual JSON data)
const employees = require('./employees.json'); // Assuming you have employee data in employees.json
const projects = require('./projects.json'); // Assuming you have project data in projects.json

// API to fetch employee data by ID
app.get('/employee/:id', (req, res) => {
    const employeeId = req.params.id;
    const employee = employees.find(emp => emp['Employee Details']['id'] == employeeId);

    if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
});

// API to fetch project data by ID
app.get('/project/:id', (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(proj => proj['Project ID'] == projectId);

    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }

    res.json(project);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
