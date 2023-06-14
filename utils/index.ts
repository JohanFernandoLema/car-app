export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'e99221c2a3mshd75e848da586bb4p10bcbfjsn51de7bc435f2',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
      headers: headers,
    }
  )
  const result = await response.json()
  return result
}
