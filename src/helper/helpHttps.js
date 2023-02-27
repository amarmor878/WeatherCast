export const helpHttps = () => {
  const customFetch = async (endpoint, options) => {
    const cabeceraDefault = {
      accept: "application/json",
    };

    const controlador = new AbortController();
    options.signal = controlador.signal;

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...cabeceraDefault, ...options.headers }
      : cabeceraDefault;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => controlador.abort(), 3000);

    try {
      const res = await fetch(endpoint, options);
      return await (
        res.ok
          ? res.json()
          : Promise.reject({
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          }));
    } catch (err) {
      return err;
    }
  };
  const get = (url, options = {}) => customFetch(url, options);
  return {
    get,
  };
};

export default helpHttps;
