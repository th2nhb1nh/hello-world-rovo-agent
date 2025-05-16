export function messageLogger(payload) {
  console.log(`Message: ${payload.message}`);
  console.log(`Payload: ${JSON.stringify(payload)}`);
  return `Successfully logged payload: ${payload.message}`
}
