import { useState } from "react"

const alimentosProteicos = [
  { nome: "Peito de frango", gramas: 100, calorias: 125, tipo: "excelente" },
  { nome: "Atum fresco, cru", gramas: 85, calorias: 125, tipo: "excelente" },
  { nome: "Bacalhau salgado, cru", gramas: 76, calorias: 125, tipo: "excelente" },
  { nome: "Corvina do mar, crua", gramas: 116, calorias: 125, tipo: "excelente" },
  { nome: "Salmão, cru", gramas: 110, calorias: 125, tipo: "aceitavel" },
  { nome: "Picanha grelhada", gramas: 69, calorias: 125, tipo: "eventual" },
  { nome: "Lingua bovina cozida", gramas: 105, calorias: 125, tipo: "eventual" },
  { nome: "Ovo inteiro", gramas: 5, calorias: 125, tipo: "aceitavel" },
  { nome: "Clara de ovo", gramas: 9, calorias: 125, tipo: "excelente" },
  { nome: "Whey 80%", gramas: 45, calorias: 125, tipo: "excelente" }
]

const alimentosCarboidratos = [
  { nome: "Arroz branco", gramas: 100, calorias: 128, tipo: "excelente" },
  { nome: "Aveia em flocos", gramas: 42, calorias: 128, tipo: "excelente" },
  { nome: "Macarrão", gramas: 36, calorias: 128, tipo: "aceitavel" },
  { nome: "Pão francês", gramas: 48, calorias: 128, tipo: "aceitavel" },
  { nome: "Batata doce, crua", gramas: 102, calorias: 128, tipo: "excelente" },
  { nome: "Tapioca de goma", gramas: 35, calorias: 128, tipo: "aceitavel" },
  { nome: "Lentilha crua", gramas: 44, calorias: 128, tipo: "excelente" },
  { nome: "Açúcar refinado", gramas: 28, calorias: 128, tipo: "eventual" },
  { nome: "Chocolate ao leite", gramas: 46, calorias: 128, tipo: "eventual" },
  { nome: "Biscoito recheado com chocolate", gramas: 40, calorias: 128, tipo: "eventual" }
]

const alimentosGorduras = [
  { nome: "Pasta de amendoim", gramas: 25, calorias: 150, tipo: "excelente" },
  { nome: "Azeite", gramas: 10, calorias: 150, tipo: "excelente" },
  { nome: "Castanha-do-pará", gramas: 20, calorias: 150, tipo: "excelente" },
  { nome: "Abacate", gramas: 157, calorias: 150, tipo: "excelente" },
  { nome: "Amendoim", gramas: 26, calorias: 150, tipo: "excelente" },
  { nome: "Margarina Qualy", gramas: 16, calorias: 150, tipo: "eventual" },
  { nome: "Manteiga Betânia", gramas: 17, calorias: 150, tipo: "eventual" },
  { nome: "Pão de queijo", gramas: 50, calorias: 150, tipo: "aceitavel" },
  { nome: "Requeijão", gramas: 70, calorias: 150, tipo: "aceitavel" },
  { nome: "Queijo mussarela", gramas: 53, calorias: 150, tipo: "aceitavel" }
]

// o restante do código permanece igual
