const express = require("express");
let router = express.Router();

// Rota - Home do campeonato
router.get("/", (req, res) => {
  fetch("https://fiebdigital.fieb.edu.br/TesteTecnicoApi/Aluno")
    .then((response) => response.json())
    .then((student) => {
      // Organizando em ordem alfabética
      student.sort((x, y) => {
        return x.nome < y.nome ? -1 : x.nome > y.nome ? 1 : 0;
      });

      res.render("pages/index", {
        students: student,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter dados da API" });
    });
});

// Rota - Participantes do campeonato
router.post("/participantes-do-campeonato", (req, res) => {
  fetch("https://fiebdigital.fieb.edu.br/TesteTecnicoApi/Aluno")
    .then((response) => response.json())
    .then((student) => {
      // Retornando alunos selecionados
      const selectedIds = req.body.selectedIds;

      const selectedStudents = student.filter((student) =>
        selectedIds.includes(student.id.toString())
      );

      selectedStudents.sort((x, y) => {
        return x.nome < y.nome ? -1 : x.nome > y.nome ? 1 : 0;
      });

      res.render("pages/championship", {
        selectedStudents,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter dados da API" });
    });
});

// Rota - Vencedores do campeonato
router.post("/vencedores-do-campeonato", (req, res) => {
  fetch("https://fiebdigital.fieb.edu.br/TesteTecnicoApi/Aluno")
    .then((response) => response.json())
    .then((student) => {
      // Retornando alunos selecionados
      const selectedIds = req.body.selectedIds;

      const selectedStudents = student.filter((student) =>
        selectedIds.includes(student.id.toString())
      );

      selectedStudents.sort((a, b) => a.nome.localeCompare(b.nome));
      console.log(selectedStudents);

      // 1º  Disputa
      let winners = [];

      for (let i = 0, j = selectedStudents.length - 1; i < j; i++, j--) {
        let studentA = selectedStudents[i];
        let studentB = selectedStudents[j];
        let winner;

        if (studentA.media > studentB.media) {
          winner = studentA;
        } else if (studentA.media < studentB.media) {
          winner = studentB;
        } else {
          if (studentA.nome > studentB.nome) {
            winner = studentA;
          } else {
            winner = studentB;
          }
        }

        winners.push(winner);
      }

      let top4 = winners.slice(0, 4);
      top4.sort((a, b) => b.media - a.media);
      console.log(top4);

      let top4Dispute = [];

      for (let i = 0, j = top4.length - 1; i < j; i++, j--) {
        let studentA = top4[i];
        let studentB = top4[j];
        let winner;

        if (studentA.media > studentB.media) {
          winner = studentA;
        } else if (studentA.media < studentB.media) {
          winner = studentB;
        } else {
          if (studentA.nome > studentB.nome) {
            winner = studentA;
          } else {
            winner = studentB;
          }
        }

        top4Dispute.push(winner);
      }

      let top2 = top4Dispute.slice(0, 3);
      console.log(top2);

      res.render("pages/champions", {
        top4,
        top2,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Erro ao obter dados da API" });
    });
});

module.exports = router;
