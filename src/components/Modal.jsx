import React, { useEffect, useState } from "react";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  /*  presupuesto,
  gastos, */
  gastoEditar,
  setGastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, []);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit 1", isBtnDisabled);
    setIsBtnDisabled(true);
    console.log("handleSubmit 2", isBtnDisabled);
    event.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    /* const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

     if (cantidad > totalDisponible || cantidad === 0) {
      setMensaje("No tiene dinero suficiente para la transaccion");

      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    } else { */
    guardarGasto({ nombre, cantidad, categoria, id, fecha });
    ocultarModal();

    console.log("handleSubmit 3", isBtnDisabled);
    //  }
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>

          <input
            type="text"
            placeholder="Agrega el nombre del gasto"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            type="number"
            placeholder="Agrega la cantidad del gasto: ej. 300"
            id="cantidad"
            value={cantidad}
            onChange={(event) => setCantidad(Number(event.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            id="categoria"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="AHORRO">Ahorro</option>
            <option value="COMIDA">Comida</option>
            <option value="CASA">Casa</option>
            <option value="GASTOS">Gastos Varios</option>
            <option value="OCIO">Ocio</option>
            <option value="SALUD">Salud</option>
            <option value="SUSCRIPCIONES">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          disabled={isBtnDisabled}
          value={gastoEditar.nombre ? "Guardar Cambios" : "Agregar Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
