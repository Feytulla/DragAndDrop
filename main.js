function dragAndDrop() {
    const card = document.querySelector('.js-card');
    const cells = document.querySelectorAll('.js-cell')

    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

    cells.forEach(cell => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    })

    function dragStart() {
        setTimeout(() => {
            this.classList.add('hide')
        }, 0)
    }
    function dragEnd() {
        this.classList.remove('hide')
    }

    function dragOver(event) {
        event.preventDefault()
    }
    function dragEnter(event) {
        event.preventDefault()
        this.classList.add('hovered')
    }
    function dragLeave() {
        this.classList.remove('hovered')
    }
    function dragDrop() {
        this.append(card)
        this.classList.remove('hovered')
    }

}

dragAndDrop()