CREATE TABLE IF NOT EXISTS guitars
(
    id             SERIAL PRIMARY KEY,
    name           VARCHAR(255)   NOT NULL,
    brand          VARCHAR(100),
    model          VARCHAR(100),
    description    TEXT,
    price          NUMERIC(10, 2) NOT NULL,
    stock_quantity INT            NOT NULL,
    category       VARCHAR(50),
    image_url      VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users
(
    id         BIGSERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name  VARCHAR(255) NOT NULL,
    phone      VARCHAR(255) NOT NULL,
    username   VARCHAR(255),
    email      VARCHAR(255),
    password   VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS roles
(
    id   BIGSERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS user_roles
(
    user_id BIGINT,
    role_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (role_id) REFERENCES roles (id),
    PRIMARY KEY (user_id, role_id)
);

CREATE TABLE IF NOT EXISTS Strings
(
    id             SERIAL PRIMARY KEY,
    name           VARCHAR(255),
    category       VARCHAR(50),
    price          NUMERIC(10, 2),
    country        VARCHAR(100),
    stockQuantity  INTEGER,
    sizeNumber     VARCHAR(20),
    numberOfString Integer,
    coverage       VARCHAR(50),
    typeOfBraid    VARCHAR(50),
    caliberString  Integer[]
);


INSERT INTO roles(id, name)
VALUES (1, 'ROLE_USER')
ON CONFLICT (id) DO NOTHING;

INSERT INTO roles(id, name)
VALUES (2, 'ROLE_MODERATOR')
ON CONFLICT (id) DO NOTHING;

INSERT INTO roles(id, name)
VALUES (3, 'ROLE_ADMIN')
ON CONFLICT (id) DO NOTHING;

