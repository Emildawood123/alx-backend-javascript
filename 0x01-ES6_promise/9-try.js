export default function guardrail(mathFunction) {
  try {
    const queue = [mathFunction(), 'Guardrail was processed'];
    return queue;
  } catch (error) {
    return [error, 'Guardrail was processed'];
  }
}
