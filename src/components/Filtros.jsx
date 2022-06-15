import React, { useEffect, useState } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>

          <select
            value={filtro}
            onChange={(event) => setFiltro(event.target.value)}
          >
            <option value="">-- Todas las Categorias --</option>
            <option value="AHORRO">Ahorro</option>
            <option value="COMIDA">Comida</option>
            <option value="CASA">Casa</option>
            <option value="GASTOS">Gastos Varios</option>
            <option value="OCIO">Ocio</option>
            <option value="SALUD">Salud</option>
            <option value="SUSCRIPCIONES">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
