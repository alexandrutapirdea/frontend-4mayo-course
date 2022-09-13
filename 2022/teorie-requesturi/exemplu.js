const BASE_URL = "https://exemplu-api-fmi.herokuapp.com";

const getBombData = () => {
  fetch(`${BASE_URL}/bomb`) // Call the fetch function passing the url of the API as a parameter
    .then(function (promiseResponse) {
      // fetch API ne intoarce o promisiune
      // fara sa intram in detalii tehnice, metoda response.json() converte promisiunea la un obiect de tip JSON care contine datele noastre
      // dar trebuie sa folosim "then" ca sa asteptam pana are loc conversia (pt ca response.json() este async)
      promiseResponse.json().then(function (jsonResponse) {
        console.log("response din Fetch API", jsonResponse);
        return jsonResponse;
      });
    })
    .catch(function (error) {
      // Daca am avut o eroare
      console.log("Eroarea este", error);
    });
};

// getBombData();

const getBombDataES6 = async () => {
  try {
    const promiseResponse = await fetch(`${BASE_URL}/bomb`);
    const jsonResponse = await promiseResponse.json();
    console.log("Datele despre bomba", jsonResponse);

    return jsonResponse;
  } catch (error) {
    console.log("eroarea este", error);
  }
};

// getBombDataES6();

const checkWireExists = async () => {
  try {
    const promiseResponse = await fetch(
      `${BASE_URL}/bomb/check?year=2022&model=ROBOMB&wire=white`
    );
    const jsonResponse = await promiseResponse.json();
    console.log("Am primit datele despre firul cerut", jsonResponse);

    return jsonResponse;
  } catch (error) {
    console.log("eroarea este", error);
  }
};

// checkWireExists();

const createWire = async () => {
  try {
    const requestData = {
      wire: "pink2",
      how: "tape",
    };

    const requestOptions = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData), // body data type must match "Content-Type" header
    };

    const promiseResponse = await fetch(
      `${BASE_URL}/bomb/create`,
      requestOptions
    );
    const jsonResponse = await promiseResponse.json();

    if (promiseResponse.status >= 400) {
      throw new Error(`Ceva nu a mers bine: ${JSON.stringify(jsonResponse)}`);
    }

    console.log("Firul a fost adaugat", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.log("eroarea este", error);
  }
};

// createWire();

const deleteWire = async () => {
  try {
    const requestData = {
      wire: "pink",
    };

    const requestOptions = {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData), // body data type must match "Content-Type" header
    };

    const promiseResponse = await fetch(`${BASE_URL}/bomb`, requestOptions);
    const jsonResponse = await promiseResponse.json();

    if (promiseResponse.status >= 400) {
      throw new Error(`Ceva nu a mers bine: ${JSON.stringify(jsonResponse)}`);
    }

    console.log("Firul a fost STERS", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.log("eroarea este", error);
  }
};

// deleteWire();

const updateSymbol = async () => {
  try {
    const requestData = {
      symbol: "dog",
    };

    const requestOptions = {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData), // body data type must match "Content-Type" header
    };

    const promiseResponse = await fetch(`${BASE_URL}/bomb`, requestOptions);
    const jsonResponse = await promiseResponse.json();

    if (promiseResponse.status >= 400) {
      throw new Error(`Ceva nu a mers bine: ${JSON.stringify(jsonResponse)}`);
    }

    console.log("Simbolul a fost modificat", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.log("eroarea este", error);
  }
};

// updateSymbol();
