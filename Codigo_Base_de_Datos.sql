-- Crear la base de datos
CREATE DATABASE miniCoreBD;

-- Usar la base de datos
USE miniCoreBD;

-- Crear la tabla de Vendedores
CREATE TABLE Vendedores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255)
);

-- Crear la tabla de Ventas
CREATE TABLE Ventas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE,
  vendedorId INT,
  producto VARCHAR(255),
  monto DECIMAL(10, 2),
  FOREIGN KEY (vendedorId) REFERENCES Vendedores(id)
);


-- Insertar datos de ejemplo en la tabla de Vendedores
INSERT INTO Vendedores (nombre) VALUES
  ('Erick Paredes'),
  ('Lissette Alulema'),
  ('Fernando Cantos');
  
-- Insertar datos en la tabla de Ventas
INSERT INTO Ventas (fecha, vendedorId, producto, monto) VALUES
  ('2023-01-01', 1, 'Producto A', 100.00),
  ('2023-02-03', 2, 'Producto B', 150.00),
  ('2023-03-15', 3, 'Producto C', 200.00),
  ('2023-04-21', 1, 'Producto D', 120.00),
  ('2023-05-10', 2, 'Producto E', 80.00),
  ('2023-06-08', 3, 'Producto F', 300.00),
  ('2023-07-12', 1, 'Producto G', 250.00),
  ('2023-08-17', 2, 'Producto H', 180.00),
  ('2023-09-22', 3, 'Producto I', 210.00),
  ('2023-10-30', 1, 'Producto J', 150.00);
  
