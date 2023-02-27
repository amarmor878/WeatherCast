// Esta función define una utilidad para hacer peticiones HTTP utilizando la API Fetch
export const helpHttps = () => {
  // Definimos una función interna que usaremos para realizar la petición
  const customFetch = async (endpoint, options) => {
    // Definimos la cabecera por defecto de la petición
    const cabeceraDefault = {
      accept: "application/json",
    };

    // Creamos un controlador de aborto para la petición
    const controlador = new AbortController();
    options.signal = controlador.signal;

    // Definimos el método HTTP por defecto de la petición
    options.method = options.method || "GET";

    // Añadimos la cabecera por defecto y las cabeceras personalizadas a la petición
    options.headers = options.headers ? { ...cabeceraDefault, ...options.headers } : cabeceraDefault;

    // Si existe un cuerpo para la petición, lo convertimos a JSON y lo añadimos
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // Definimos un temporizador para abortar la petición en caso de que tarde demasiado
    setTimeout(() => controlador.abort(), 3000);

    try {
      // Realizamos la petición a la API Fetch
      const res = await fetch(endpoint, options);

      // Si la petición es exitosa, devolvemos el resultado parseado como JSON
      // Si no es exitosa, devolvemos un error con el status y mensaje de error correspondientes
      return await (
        res.ok ? res.json() : Promise.reject({
          err: true,
          status: res.status,
          statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
        }));
    } catch (err) {
      // En caso de error, devolvemos el error capturado
      return err;
    }
  };
  // Definimos una función de conveniencia para realizar peticiones GET
  const get = (url, options = {}) => customFetch(url, options);
  // Devolvemos un objeto con la función get
  return { get, };
};

export default helpHttps;
