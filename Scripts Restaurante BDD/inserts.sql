DELETE FROM categorias;
ALTER TABLE categorias AUTO_INCREMENT = 1;
INSERT INTO categorias (tipo) VALUES
("Bebida"),("Entrantes"),("Plato Principal"),("Primer Plato"),("Segundo Plato"),("Postre");

DELETE FROM roles;
ALTER TABLE roles AUTO_INCREMENT = 1;
INSERT INTO roles (tipo) VALUES
("Cliente"), ("Cliente Vip"), ("Camarero Barra"),
("Camarero Mesas"), ("Cocinero"), ("Jefe Cocina"), 
("Ayudante Cocina"), ("Gerente");

DELETE FROM estados;
ALTER TABLE estados AUTO_INCREMENT = 1;
INSERT INTO estados (tipo) VALUES
("Pedido"), ("Cocinando"), ("Cocinado"), ("En Reparto"),
("En Preparacion"), ("Preparado");


DELETE FROM usuarios;
ALTER TABLE usuarios AUTO_INCREMENT = 1;
INSERT INTO usuarios (rol, usuario, pass) VALUES
(8, "Paco", "pacogerente"), -- Gerente ID = 8
(6, "Ramon", "ramonJefeCocina"), -- Jefe de Cocina ID = 6
(7, "Julian", "julianBecario"), -- Ayudante de Cocina ID = 7
(7, "David", "davidBecario"), -- Ayudante de Cocina ID = 7
(7, "Sara", "saraBecario"), -- Ayudante de Cocina ID = 7
(7, "Bea", "beaBecario"), -- Ayudante de Cocina ID = 7
(7, "Miguel", "miguelBecario"), -- Ayudante de Cocina ID = 7
(5, "Paquito", "paquitoCocinero"), -- Cocinero ID = 5
(5, "Antonio", "antonioCocinero"), -- Cocinero ID = 5
(4, "Cris", "crisCamarero"), -- Camarero Mesas ID = 4
(4, "Jose Antonio", "joseAntonioCamarero"), -- Camarero Mesas ID = 4
(4, "Maria", "mariaCamarero"), -- Camarero Mesas ID = 4
(3, "Laura", "lauraBarra"), -- Camarero Barra ID = 3
(3, "Monica", "monicaBarra"), -- Camarero Barra ID = 3
(3, "Ignacio", "ignacioBarra"), -- Camarero Barra ID = 3
(1, "cliente1", "1234"), -- Cliente ID = 1
(1, "cliente2", "1234"), -- Cliente ID = 1
(1, "cliente3", "1234"), -- Cliente ID = 1
(1, "cliente4", "1234"), -- Cliente ID = 1
(1, "cliente5", "1234"), -- Cliente ID = 1
(1, "cliente6", "1234"), -- Cliente ID = 1
(1, "cliente7", "1234"), -- Cliente ID = 1
(1, "cliente8", "1234"), -- Cliente ID = 1
(2, "clienteV1", "1234"), -- Cliente VIP ID = 2
(2, "clienteV2", "1234"), -- Cliente VIP ID = 2
(2, "clienteV3", "1234"); -- Cliente VIP ID = 2

DELETE FROM platos;
ALTER TABLE platos AUTO_INCREMENT = 1;
INSERT INTO platos (categoria, nombre) VALUES
(1, "Coca-Cola"),
(2, "Fingers Pollo"),
(3, "Haburguesa de Pollo"),
(4, "Tarta de Chocolate"),
(5, "Ensalada"),
(6, "Hamburguesa Queso"),
(1, "Cerveza"),
(2, "Patatas Bravas"),
(3, "Haburguesa de la Casa"),
(4, "Bola de Helado"),
(5, "Espaguetis Boloñesa"),
(6, "Lomo con Patatas"),
(1, "Tinto Verano"),
(2, "Palomitas de Queso"),
(3, "Costillar 1/2"),
(4, "Tiramisu"),
(5, "Sopa"),
(6, "Sandwich Especial");

DELETE FROM pedidos;
ALTER TABLE pedidos AUTO_INCREMENT = 1;
INSERT INTO pedidos (cliente) VALUES
(16), (17), (18), (20), (23),(25);

DELETE FROM pedidos_platos;
ALTER TABLE pedidos_platos AUTO_INCREMENT = 1;
INSERT INTO pedidos_platos (pedido_id, plato_id, nota) VALUES
(1,1, "Sin Hielo"),
(1,6, "Muy hecha"),
(1,5, null),
(2,7, null),
(3,2, null),
(3,13, null),
(4,7, null),
(4,11, null),
(4,15, "Con Salsa BBQ"),
(5,12, null),
(5,17, null),
(6,1, null),
(6,18, "Sin Tomate"),
(6,10, null);

DELETE FROM asignaciones;
ALTER TABLE asignaciones AUTO_INCREMENT = 1;
INSERT INTO asignaciones (estado, empleado, pedido_plato_id) VALUES
(1, null, 1),
(1, null, 2),
(1, null, 3),
(4 , 10, 4),
(2 , 5, 5),
( 5, 13, 6),
( 5, 13, 7),
(3, 2, 8),
(2 ,8 , 9),
( 2, 6, 10),
( 4, 12, 11),
( 5, 14, 12),
( 2, 4, 13),
( 1, null, 14);



