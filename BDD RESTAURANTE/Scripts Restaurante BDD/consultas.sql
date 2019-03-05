-- Ver pedidos de cada cliente y sus estados

SELECT tabla.id, tabla.usuario, tabla.nombre, tabla.tipo, u2.usuario, tabla.nota FROM 
(SELECT pe.id, u.usuario, p.nombre, e.tipo, a.empleado, pp.nota FROM usuarios u, platos p, estados e, asignaciones a, pedidos_platos pp, pedidos pe
WHERE u.id = pe.cliente AND pe.id = pp.pedido_id AND pp.plato_id = p.id AND pp.id = a.pedido_plato_id AND a.estado = e.id ORDER BY pe.id
) AS tabla LEFT JOIN usuarios u2 ON tabla.empleado = u2.id ORDER BY tabla.id;

-- SELECT * FROM usuarios ue LEFT JOIN (SELECT pe.id, u.usuario, p.nombre, e.tipo, a.empleado FROM usuarios u, platos p, estados e, asignaciones a, pedidos_platos pp, pedidos pe
-- WHERE u.id = pe.cliente AND pe.id = pp.pedido_id AND pp.plato_id = p.id AND pp.id = a.pedido_plato_id AND a.estado = e.id ORDER BY pe.id)
-- AS tabla_pedidos_clientes ON ue.id = tabla_pedidos_clientes.empleado;

-- (SELECT pe.id, u.usuario, p.nombre, e.tipo, a.empleado FROM usuarios u, platos p, estados e, asignaciones a, pedidos_platos pp, pedidos pe
-- WHERE u.id = pe.cliente AND pe.id = pp.pedido_id AND pp.plato_id = p.id AND pp.id = a.pedido_plato_id AND a.estado = e.id ORDER BY u.usuario)
-- AS tabla_pedidos_clientes LEFT JOIN usuarios u ON tabla_pedidos_clientes.empleado = u.id;