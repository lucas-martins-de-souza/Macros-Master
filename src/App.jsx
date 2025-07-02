import { useState } from "react"

// ... listas de alimentos mantidas (não exibidas aqui por brevidade)

export default function MacroCalculator() {
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    sex: "male",
    activity: "1.55",
    goal: "maintain",
    meals: "4"
  })
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const calculate = () => {
    const { age, weight, height, sex, activity, goal, meals } = form
    const w = parseFloat(weight)
    const h = parseFloat(height)
    const a = parseFloat(age)
    const act = parseFloat(activity)
    const m = parseInt(meals)

    if (!w || !h || !a || !m) return

    let tmb =
      sex === "male"
        ? 10 * w + 6.25 * h - 5 * a + 5
        : 10 * w + 6.25 * h - 5 * a - 161

    let tdee = tmb * act

    if (goal === "cut") tdee -= 500
    if (goal === "bulk") tdee += 300

    const protein = w * 2.6
    const fat = w * 1.2
    const proteinKcal = protein * 4
    const fatKcal = fat * 9
    const carbKcal = tdee - proteinKcal - fatKcal
    const carbs = carbKcal / 4

    setResult({ tdee, protein, fat, carbs, meals: m })
  }

  const calcularEquivalente = (gramasBase, macroPorRefeicao, macroBase) => {
    return ((macroPorRefeicao / macroBase) * gramasBase).toFixed(0)
  }

  const corClasse = {
    excelente: "bg-green-100 border-green-400",
    aceitavel: "bg-yellow-100 border-yellow-400",
    eventual: "bg-purple-100 border-purple-400"
  }

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
