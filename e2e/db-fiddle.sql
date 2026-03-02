CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Clients (
    client_id INT PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(100) NOT NULL,
    address VARCHAR(200),
    phone VARCHAR(20),
    password VARCHAR(100)
);

INSERT INTO Users (username, password)
VALUES 
('admin', 'Admin123'),
('victor', 'Password123!');

INSERT INTO Clients (client_name, address, phone, password)
VALUES
('John Doe', 'Nairobi, Kenya', '0712345678', 'Client123'),
('Jane Smith', 'Mombasa, Kenya', '0723456789', 'SecurePass');