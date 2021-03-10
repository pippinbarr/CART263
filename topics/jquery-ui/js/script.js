$(`#escape-tunnel`).hide();

$(`#introduction-dialog`).dialog({
  modal: true,
  resizable: false,
  buttons: {
    "Imagination": function() {
      // Disable the walls!
      $(`#prisoner`).draggable(`option`, `containment`, `none`);
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      $(`#escape-tunnel`).show({
        effect: `blind`
      });
      $(this).dialog(`close`);
    }
  }
});

$(`#prisoner`).effect({
  effect: `shake`,
  duration: 2000,
  times: 15,
  distance: 7,
  complete: makePrisonerDraggable
});

$(`#escape-tunnel`).droppable({
  drop: function(event, ui) {
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});

function makePrisonerDraggable() {
  $(`#prisoner`).draggable({
    containment: `#prison`,
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 750);
    },
    stop: function(event, ui) {
      $(this).removeClass(`prisoner-dragging`, 750);
    }
  });
}