const FDA_API_KEY = 'qeFgqbUXRY76Yk0nCKC60ur1J3bEuLUyPKp2remB';

async function getFDA(drug) {
  const url = `https://api.fda.gov/drug/label.json?api_key=${FDA_API_KEY}&limit=1&search=(openfda.generic_name:"${drug}"+openfda.brand_name:"${drug}")`;
  return fetch(url).then(res => res.json());
}

export { getFDA };
