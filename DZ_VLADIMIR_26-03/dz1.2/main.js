function moveBlock(position) {
        const block = document.getElementById("block");
        block.style.left = position + "px";

        if (position < 450) {
            setTimeout(function () {
                moveBlock(position + 5);
            }, 100);
        }
    }

    moveBlock(0);