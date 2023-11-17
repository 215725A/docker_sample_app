-- init.sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_info (
    uname VARCHAR(50) NOT NULL,
    uhname VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    birth VARCHAR(50) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    postnum VARCHAR(10) NOT NULL,
    uaddress VARCHAR(200) NOT NULL
);

DO $$
BEGIN
    IF (SELECT COUNT(*) FROM user_info) = 0 THEN
        COPY user_info FROM '/csv/dummy.csv' DELIMITER ',' CSV HEADER;
    END IF;
END $$;

INSERT INTO users VALUES (
    1,
    'hoge',
    'hoge@example.com'
),
(
    2,
    'fuga',
    'fuga@example.com'
);