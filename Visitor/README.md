# EXplicando Double Dispatch

## Descripción

El Double Dispatch (envío doble) es un patrón de diseño que maneja situaciones donde el comportamiento de una función en diferentes métodos depende tanto del objeto receptor, como de los parámetros enviados. Involucra dos niveles de despacho: uno para determinar el objeto manejador y otro para el método específico. El patrón visitor se basa en este principio [1].

## Ejemplo: Patrón Visitor

Una clase abstracta `Visitor` define métodos para visitar distintos objetos. Cada objeto concreto tiene un método que acepta un `Visitor` y delega la operación al método correspondiente. Así, Visitor utiliza Double Dispatch para ejecutar el método adecuado sobre un objeto sin abusar de los condicionales.

## Ventajas

- **Flexibilidad**: Define comportamientos complejos.
- **Desacoplamiento**: Encapsula la lógica de negocio.
- **Claridad**: Facilita la comprensión del código.

## Desventajas

- **Complejidad**: Mayor dificultad de implementación.
- **Rendimiento**: Posible impacto por despacho dinámico.

## Casos de uso:
- **Ordenar un conjunto mixto de objetos:** los algoritmos requieren que una lista de objetos se ordene en algún orden canónico. Decidir si un elemento aparece antes que otro requiere conocimiento de ambos tipos y posiblemente de algún subconjunto de los campos.
- **Los sistemas de gestión de personal** pueden asignar diferentes tipos de trabajos a diferente personal.
- **Sistemas de manejo de eventos** que utilizan tanto el tipo de evento como el tipo de objeto receptor para llamar a la rutina de manejo de eventos correcta.
- **Sistemas de cerraduras y llaves** donde hay muchos tipos de cerraduras y de llaves, y cada tipo de llave abre múltiples tipos de cerraduras. No sólo es necesario conocer los tipos de objetos involucrados, sino que el subconjunto de "información sobre una clave en particular que es relevante para ver si una llave en particular abre una cerradura en particular" es diferente entre los diferentes tipos de cerraduras. [2]

## Fuentes
[1]: https://refactoring.guru/es/design-patterns/visitor-double-dispatch
[2]: https://en.wikipedia.org/wiki/Double_dispatch