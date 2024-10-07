# Roteiro de Uso - Simulador de Escalonamento Round Robin

Este simulador foi desenvolvido para demonstrar o algoritmo de escalonamento de processos Round Robin, amplamente utilizado em sistemas operacionais para garantir uma distribuição justa de tempo de CPU entre processos.

## Requisitos

- Navegador com suporte a JavaScript e ao Bootstrap (v5.3.3 ou superior).

## Instruções de Uso

**Acesse o Simulador**  
- Acesse o site através do GitHub Pages ou abra o arquivo `index.html` no navegador. No site, você poderá selecionar qual das entregas do trabalho gostaria de visualizar (primeira, segunda ou terceira). Atualmente, apenas a primeira entrega está acessível.

### Primeira entrega

1. **Inserir o Número de Processos**  
   - Na seção "Número de processos", insira o número total de processos a serem simulados.
   - Pressione o botão **"Gerar Processos"**.
   - Se o valor inserido for inválido (0 ou negativo), uma mensagem de erro será exibida abaixo do campo.

2. **Definir o Quantum**  
   - No campo "Quantum", insira o valor do quantum de tempo (em unidades arbitrárias).
   - Certifique-se de que o valor seja maior que 0; caso contrário, uma mensagem de erro será exibida.

3. **Definir o Tempo de Surto para Cada Processo**  
   - Após gerar os processos, novos campos aparecerão para cada processo (`P1`, `P2`, etc.).
   - Insira o tempo de surto (tempo necessário para a execução) de cada processo. Esse valor também deve ser maior que 0. 
   - Erros de valor inválido serão exibidos individualmente ao lado de cada processo.

4. **Calcular o Escalonamento**  
   - Após definir todos os valores, clique no botão **"Calcular"**.
   - A aplicação exibirá o ciclo de execução dos processos, com o tempo total acumulado até que todos os processos tenham sido executados.

5. **Interpretar os Resultados**  
   - Na seção de resultados, você verá uma lista de processos com o tempo total até o momento em que cada processo foi executado.
   - O tempo total final será exibido ao final do ciclo de execução de todos os processos.
