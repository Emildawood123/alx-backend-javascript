export default function guardrail(mathFunction) {
  const queue = [mathFunction(), 'Guardrail was processed'];
  return queue;
}
