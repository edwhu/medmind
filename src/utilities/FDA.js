const FDA_API_KEY = 'your key here';

async function getFDA(drug) {
  const url = `https://api.fda.gov/drug/label.json?api_key=${FDA_API_KEY}&limit=1&search=(openfda.generic_name:"${drug}"+openfda.brand_name:"${drug}")`;
  return fetch(url).then((res) => {
    return res.json();
  });
}

export { getFDA };
