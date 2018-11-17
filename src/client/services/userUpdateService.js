import Config from "src/client/config/envapi";

const _getURL = () => {
  return Config["DEV"].resource_url;
};

export const updateUser = (data) => {
  const url = `${_getURL()}/updateUser`;
  const payload = JSON.stringify({
    id: data.userId,
    name: data.name,
    email: data.email
  });
  return fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload
    })
    .then(response => {
      console.log(response);
      return true;
    })
    .then(json => {
      return json;
    });
};
