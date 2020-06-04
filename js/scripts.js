$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    const Q1 = parseInt($("input:radio[name=question1]:checked").val());
    const Q2 = parseInt($("input:radio[name=question2]:checked").val());
    const Q3 = parseInt($("input:radio[name=question3]:checked").val());
    
    if (!Q1 || !Q2 || !Q3) {
      alert("Answer all the questions!");
    } else {
      let gryff = 0;
      let huff = 0;
      let slyth = 0;
      let raven = 0;
      if (Q1 === 1) {
        raven += 1;
      } else if (Q1 === 2) {
        gryff += 1;
      } else if (Q1 === 3) {
        huff += 1;
      } else if (Q1 === 4) {
        slyth += 1;
      }
      if (Q2 === 1) {
        huff += 1;
      } else if (Q2 === 2) {
        gryff += 1;
      } else if (Q2 === 3) {
        raven += 1;
      } else if (Q2 === 4) {
        slyth += 1;
      }
      if (Q3 === 1) {
        raven += 1;
      } else if (Q3 === 2) {
        slyth += 1;
      } else if (Q3 === 3) {
        huff += 1;
      } else if (Q3 === 4) {
        gryff += 1;
      }
      if (gryff >= huff && gryff >= slyth && gryff >= raven) {
        $("#gryffindor").show();
      } else if (raven >= huff && raven >= slyth) {
        $("#ravenclaw").show();
      } else if (slyth >= huff) {
        $("#slytherin").show();
      } else {
        $("#hufflepuff").show();
      };
    }
  });

  $("button#reset").click(function() {
    $("#gryffindor").hide();
    $("#ravenclaw").hide();
    $("#slytherin").hide();
    $("#hufflepuff").hide();
  });
});