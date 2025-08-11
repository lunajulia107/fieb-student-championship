const express = require("express");
let router = express.Router();

// Dados simulados no mesmo arquivo
const mockStudents = [
  { id: 1, nome: "Ana", media: 8.5, rm: "2023001" },
  { id: 2, nome: "Bruno", media: 7.8, rm: "2023002" },
  { id: 3, nome: "Carlos", media: 9.2, rm: "2023003" },
  { id: 4, nome: "Daniela", media: 6.4, rm: "2023004" },
  { id: 5, nome: "Eduardo", media: 8.0, rm: "2023005" },
  { id: 6, nome: "Fernanda", media: 9.5, rm: "2023006" },
  { id: 7, nome: "Gustavo", media: 7.2, rm: "2023007" },
  { id: 8, nome: "Helena", media: 8.9, rm: "2023008" },
];

// Rota - Home do campeonato
router.get("/", (req, res) => {
  // fetch("https://fiebdigital.fieb.edu.br/TesteTecnicoApi/Aluno")
  //   .then((response) => response.json())
  //   .then((student) => {
  //     student.sort((x, y) => x.nome.localeCompare(y.nome));
  //     res.render("pages/index", {
  //       students: student,
  //     });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.status(500).json({ error: "Erro ao obter dados da API" });
  //   });

  // Usando mock
  let students = [...mockStudents];
  students.sort((x, y) => x.nome.localeCompare(y.nome));
  res.render("pages/index", { students });
});

// Rota - Participantes do campeonato
router.post("/participantes-do-campeonato", (req, res) => {
  // fetch("https://fiebdigital.fieb.edu.br/TesteTecnicoApi/Aluno")
  //   .then((response) => response.json())
  //   .then((student) => {
  //     const selectedIds = req.body.selectedIds;
  //     const selectedStudents = student.filter((student) =>
  //       selectedIds.includes(student.id.toString())
  //     );
  //     selectedStudents.sort((x, y) => x.nome.localeCompare(y.nome));
  //     res.render("pages/championship", { selectedStudents });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.status(500).json({ error: "Erro ao obter dados da API" });
  //   });

  // Usando mock
  const selectedIds = req.body.selectedIds || [];
  const selectedStudents = mockStudents.filter((student) =>
    selectedIds.includes(student.id.toString())
  );
  selectedStudents.sort((x, y) => x.nome.localeCompare(y.nome));
  res.render("pages/championship", { selectedStudents });
});

// Rota - Vencedores do campeonato
router.post("/vencedores-do-campeonato", (req, res) => {
  // fetch("https://fiebdigital.fieb.edu.br/TesteTecnicoApi/Aluno")
  //   .then((response) => response.json())
  //   .then((student) => {
  //     const selectedIds = req.body.selectedIds;
  //     const selectedStudents = student.filter((student) =>
  //       selectedIds.includes(student.id.toString())
  //     );
  //     selectedStudents.sort((a, b) => a.nome.localeCompare(b.nome));

  //     // lógica do campeonato...
  //     // ...
  //     res.render("pages/champions", { top4, top2 });
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     res.status(500).json({ error: "Erro ao obter dados da API" });
  //   });

  // Usando mock
  const selectedIds = req.body.selectedIds || [];
  const selectedStudents = mockStudents.filter((student) =>
    selectedIds.includes(student.id.toString())
  );
  selectedStudents.sort((a, b) => a.nome.localeCompare(b.nome));

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
      winner = studentA.nome > studentB.nome ? studentA : studentB;
    }
    winners.push(winner);
  }

  let top4 = winners.slice(0, 4);
  top4.sort((a, b) => b.media - a.media);

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
      winner = studentA.nome > studentB.nome ? studentA : studentB;
    }
    top4Dispute.push(winner);
  }

  let top2 = top4Dispute.slice(0, 3);

  res.render("pages/champions", { top4, top2 });
});

module.exports = router;
