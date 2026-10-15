exports.handler = async (event) => {
  const pnr = (event.queryStringParameters?.pnr || '').replace(/\D/g, '')
  if (pnr.length !== 4) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid postal code' }) }
  }
  try {
    const res = await fetch(
      `https://api.bring.com/shippingguide/api/postalCode.json?pnr=${pnr}&clientUrl=fasaderen.no`
    )
    const data = await res.json()
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        city: data.isValidPostalCode ? data.city : null,
        valid: data.isValidPostalCode ?? false,
      }),
    }
  } catch {
    return { statusCode: 502, body: JSON.stringify({ error: 'Lookup failed' }) }
  }
}
