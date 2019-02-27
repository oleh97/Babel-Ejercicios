INSERT INTO categorias(tipo) VALUES
("Bebida"),("Entrantes"),("Plato Principal"),("Primer Plato"),("Segundo Plato"),("Postre");

INSERT INTO roles (tipo) VALUES
("Cliente"), ("Cliente Vip"), ("Camarero Barra"),
("Camarero Mesas"), ("Cocinero"), ("Jefe Cocina"), 
("Ayudante Cocina"), ("Gerente");

INSERT INTO estados (tipo) VALUES
("Pedido"), ("Cocinando"), ("Cocinado"), ("En Reparto"),
("En Preparacion"), ("Preparado");

INSERT INTO usuarios (rol, usuario, password) VALUES
(8,"Paco","pacogerente"), -- Gerente ID = 8
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
(1, "cliente1" "1234"), -- Cliente ID = 1
(1, "cliente2" "1234"), -- Cliente ID = 1
(1, "cliente3" "1234"), -- Cliente ID = 1
(1, "cliente4" "1234"), -- Cliente ID = 1
(1, "cliente5" "1234"), -- Cliente ID = 1
(1, "cliente6" "1234"), -- Cliente ID = 1
(1, "cliente7" "1234"), -- Cliente ID = 1
(1, "cliente8" "1234"), -- Cliente ID = 1
(2, "clienteV1" "1234"), -- Cliente VIP ID = 2
(2, "clienteV2" "1234"), -- Cliente VIP ID = 2
(2, "clienteV3" "1234"); -- Cliente VIP ID = 2


