"use strict";

$(`.mover`).one(`mouseenter`, function(event) {
  $(this).addClass(`move`);
});

$(`.spinner`).one(`mouseenter`, function(event) {
  $(this).addClass(`spin`);
});

$(`.skewer`).one(`mouseenter`, function(event) {
  $(this).addClass(`skew`);
});