class MemoryManager {
    constructor(numFrames) {
        this.numFrames = numFrames;
        this.frames = [];
        this.pageFaults = 0;
    }

    addPage(page) {
        // Verifica se a página já está na memória
        if (this.frames.includes(page)) {
            alert(`Página ${page} já está na memória.`);
            return;
        }

        // Se houver espaço na memória, adicione a página
        if (this.frames.length < this.numFrames) {
            this.frames.push(page);
            this.pageFaults++;
            alert(`Página ${page} adicionada. Falha de página!`);
        } else {
            // Substituir a página mais antiga (FIFO)
            const removedPage = this.frames.shift();
            this.frames.push(page);
            this.pageFaults++;
            alert(`Página ${removedPage} removida. Página ${page} adicionada. Falha de página!`);
        }

        this.updateDisplay();
    }

    updateDisplay() {
        const framesList = document.getElementById('frames');
        framesList.innerHTML = '';
        this.frames.forEach(frame => {
            const li = document.createElement('li');
            li.textContent = `Página ${frame}`;
            framesList.appendChild(li);
        });

        document.getElementById('page-faults').textContent = `Total de Falhas de Página: ${this.pageFaults}`;
    }
}

const memoryManager = new MemoryManager(3); // Definindo o número de quadros

function addPage() {
    const pageInput = document.getElementById('page-input').value;
    if (pageInput) {
        memoryManager.addPage(parseInt(pageInput));
        document.getElementById('page-input').value = '';
    } else {
        alert('Por favor, insira um número de página válido.');
    }
}