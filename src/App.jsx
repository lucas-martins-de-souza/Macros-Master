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
];

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
];

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
];

export default function MacroCalculator() {
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    sex: "male",
    activity: "1.55",
    goal: "maintain",
    meals: "4"
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const { age, weight, height, sex, activity, goal, meals } = form;
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);
    const m = parseInt(meals);

    if (!w || !h || !a || !m) return;

    let tmb =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161;

    let tdee = tmb * act;

    if (goal === "cut") tdee -= 500;
    if (goal === "bulk") tdee += 300;

    const protein = w * 2.6;
    const fat = w * 1.2;
    const proteinKcal = protein * 4;
    const fatKcal = fat * 9;
    const carbKcal = tdee - proteinKcal - fatKcal;
    const carbs = carbKcal / 4;

    setResult({ tdee, protein, fat, carbs, meals: m });
  };

  const calcularEquivalente = (gramasBase, macroPorRefeicao, macroBase) => {
    return ((macroPorRefeicao / macroBase) * gramasBase).toFixed(0)
  };

  const corClasse = {
    excelente: "bg-green-100 border-green-400",
    aceitavel: "bg-yellow-100 border-yellow-400",
    eventual: "bg-purple-100 border-purple-400"
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Calculadora de Macros</h1>
      <div className="space-y-4">
        <input placeholder="Idade" name="age" value={form.age} onChange={handleChange} className="border rounded p-2 w-full" />
        <input placeholder="Peso (kg)" name="weight" value={form.weight} onChange={handleChange} className="border rounded p-2 w-full" />
        <input placeholder="Altura (cm)" name="height" value={form.height} onChange={handleChange} className="border rounded p-2 w-full" />
        <select name="sex" value={form.sex} onChange={handleChange} className="border rounded p-2 w-full">
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
        </select>
        <select name="activity" value={form.activity} onChange={handleChange} className="border rounded p-2 w-full">
          <option value="1.2">Sedentário</option>
          <option value="1.375">Leve (1-3x/sem)</option>
          <option value="1.55">Moderado (3-5x/sem)</option>
          <option value="1.725">Intenso (6x/sem)</option>
          <option value="1.9">Muito intenso (2x/dia)</option>
        </select>
        <select name="goal" value={form.goal} onChange={handleChange} className="border rounded p-2 w-full">
          <option value="maintain">Manutenção</option>
          <option value="cut">Cutting</option>
          <option value="bulk">Bulking</option>
        </select>
        <input placeholder="Refeições por dia" name="meals" value={form.meals} onChange={handleChange} className="border rounded p-2 w-full" />
        <button onClick={calculate} className="bg-blue-500 text-white p-2 rounded w-full">Calcular</button>
      </div>

      {result && (
        <div className="space-y-4 mt-6">
          <div>
            <p><strong>TDEE:</strong> {result.tdee.toFixed(0)} kcal</p>
            <p><strong>Proteína:</strong> {result.protein.toFixed(0)} g</p>
            <p><strong>Gordura:</strong> {result.fat.toFixed(0)} g</p>
            <p><strong>Carboidrato:</strong> {result.carbs.toFixed(0)} g</p>
            <p><strong>Dividido em {result.meals} refeições</strong></p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">Equivalentes em proteína por refeição (~{(result.protein / result.meals).toFixed(0)}g):</h3>
            <div className="space-y-2">
              {alimentosProteicos.map((item, i) => (
                <div key={i} className={`border p-2 rounded ${corClasse[item.tipo]}`}>
                  <strong>{item.nome}</strong>: {calcularEquivalente(item.gramas, result.protein / result.meals, 48)}g
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">Equivalentes em carboidrato por refeição (~{(result.carbs / result.meals).toFixed(0)}g):</h3>
            <div className="space-y-2">
              {alimentosCarboidratos.map((item, i) => (
                <div key={i} className={`border p-2 rounded ${corClasse[item.tipo]}`}>
                  <strong>{item.nome}</strong>: {calcularEquivalente(item.gramas, result.carbs / result.meals, 55)}g
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-4">Equivalentes em gordura por refeição (~{(result.fat / result.meals).toFixed(0)}g):</h3>
            <div className="space-y-2">
              {alimentosGorduras.map((item, i) => (
                <div key={i} className={`border p-2 rounded ${corClasse[item.tipo]}`}>
                  <strong>{item.nome}</strong>: {calcularEquivalente(item.gramas, result.fat / result.meals, 25)}g
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
