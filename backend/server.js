var express = require("express");
var { Pool } = require("pg");
var cors = require("cors");

var app = express();
app.use(cors());

const pool = new Pool({
    user: 'author',
    host: 'db',
    database: 'blogs',
    password: 'password',
    port: 5432,
});

app.get("/", function(req, res, next) {
    res.send("Hello, world!");
});

app.get('/users', async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to PostgreSQL!');

        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error('Error connecting to PostgreSQL', err);
    }
});

app.get('/api/data', (req, res) => {
    const responseData = 'This is the data from the backend!';
    res.json(responseData);
});

app.get('/info', async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('Connected to PostgreSQL!');

        const result = await client.query('SELECT * FROM user_info');
        res.json(result.rows);
    } catch (err) {
        console.error('Error connecting PostgreSQL', err);
    }
});

app.get('/groups', async (req, res) => {
    try {
        const client = await pool.connect();
        console.log('connected to PostgreSQL!');

        const result = await client.query("SELECT uname, age, gender FROM user_info");

        const dataByAgeGroup = {
            'U10s': [],
            '10s': [],
            '20s': [],
            '30s': [],
            '40s': [],
            '50s': [],
            '60s': [],
            '70s': [],
            '80s': [],
            '90s': [],
            '100s': [],
            'O100s': [],
        };

        result.rows.forEach((user) => {
            const age = user.age;
            if (age < 10) {
                dataByAgeGroup['U10s'].push(user);
            } else if (10 <= age && age < 20) {
                dataByAgeGroup['10s'].push(user);
            } else if (20 <= age && age < 30) {
                dataByAgeGroup['20s'].push(user);
            } else if (30 <= age && age < 40) {
                dataByAgeGroup['30s'].push(user);
            } else if (40 <= age && age < 50) {
                dataByAgeGroup['40s'].push(user);
            } else if (50 <= age && age < 60) {
                dataByAgeGroup['50s'].push(user);
            } else if (60 <= age && age < 70) {
                dataByAgeGroup['60s'].push(user);
            } else if (70 <= age && age < 80) {
                dataByAgeGroup['70s'].push(user);
            } else if (80 <= age && age < 90) {
                dataByAgeGroup['80s'].push(user);
            } else if (90 <= age && age < 100) {
                dataByAgeGroup['100s'].push(user);
            } else {
                dataByAgeGroup['O100s'].push(user);
            }
        });

        res.json(dataByAgeGroup);
    } catch (err) {
        console.error('Error connecting PostgreSQL', err);
    }
});

const PORT = process.env.PORT || 8000;

var server = app.listen(PORT, function() {
    console.log("Node.js is listening to PORT: " + server.address().port);
});