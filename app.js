const Joi = require('joi');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());

// const corsOptions = {
//     origin: ['http://localhost:4200'],
//     credentials: true,
//     optionSuccessStatus: 200
// }
// app.use(cors(corsOptions));

const courses = [
    {id: 1, name: 'pippa'}
];

app.get('/', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});
