export default function guardrail(mathFunction) {
  try {
    const fun = mathFunction();
    const queue = [fun, 'Guardrail was processed'];
    return queue;
  } catch (error) {
    return [`Error: ${error.message}`, 'Guardrail was processed'];
  }
}
