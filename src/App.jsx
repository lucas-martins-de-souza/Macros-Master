import { useState } from "react";

// ==== PROTEÍNAS ====
const alimentosProteicos = [
  {
    categoria: "Pescados e Frutos do Mar",
    alimentos: [
      { nome: "Atum fresco, cru", gramas: 85, calorias: 125, tipo: "excelente" },
      { nome: "Bacalhau salgado, cru", gramas: 76, calorias: 125, tipo: "excelente" },
      { nome: "Corimba, crua", gramas: 130, calorias: 125, tipo: "excelente" },
      { nome: "Corvina de água doce, crua", gramas: 116, calorias: 125, tipo: "excelente" },
      { nome: "Corvina do mar, crua", gramas: 116, calorias: 125, tipo: "excelente" },
      { nome: "Filé de merluza, cru", gramas: 130, calorias: 125, tipo: "excelente" },
      { nome: "Filé de pescado, cru", gramas: 130, calorias: 125, tipo: "excelente" },
      { nome: "Pintado, cru", gramas: 116, calorias: 125, tipo: "excelente" },
      { nome: "Sardinha em lata", gramas: 135, calorias: 125, tipo: "aceitavel" },
      { nome: "Camarão, cru", gramas: 170, calorias: 125, tipo: "excelente" },
      { nome: "Filé de tilápia, cru", gramas: 125, calorias: 125, tipo: "excelente" },
      { nome: "Salmão, cru", gramas: 110, calorias: 125, tipo: "aceitavel" },
      { nome: "Bacalhau grelhado", gramas: 92, calorias: 125, tipo: "aceitavel" },
      { nome: "Camarão grelhado", gramas: 105, calorias: 125, tipo: "aceitavel" },
      { nome: "Atum grelhado", gramas: 61, calorias: 125, tipo: "aceitavel" },
    ]
  },
  {
    categoria: "Carnes Bovinas",
    alimentos: [
      { nome: "Acém bovino moído", gramas: 82, calorias: 125, tipo: "aceitavel" },
      { nome: "Capa de contra-filé bovina grelhada", gramas: 71, calorias: 125, tipo: "aceitavel" },
      { nome: "Contra-filé de costela grelhada", gramas: 74, calorias: 125, tipo: "aceitavel" },
      { nome: "Contra-filé grelhado", gramas: 69, calorias: 125, tipo: "aceitavel" },
      { nome: "Costela de boi assada", gramas: 76, calorias: 125, tipo: "aceitavel" },
      { nome: "Coxão-duro cozido", gramas: 69, calorias: 125, tipo: "aceitavel" },
      { nome: "Coxão-mole cozido", gramas: 69, calorias: 125, tipo: "aceitavel" },
      { nome: "Fígado grelhado", gramas: 74, calorias: 125, tipo: "aceitavel" },
      { nome: "Filé mignon grelhado", gramas: 67, calorias: 125, tipo: "aceitavel" },
      { nome: "Flanco bovino", gramas: 76, calorias: 125, tipo: "aceitavel" },
      { nome: "Fraldinha bovina cozida", gramas: 92, calorias: 125, tipo: "aceitavel" },
      { nome: "Lagarto bovino cozido", gramas: 67, calorias: 125, tipo: "aceitavel" },
      { nome: "Lingua bovina cozida", gramas: 105, calorias: 125, tipo: "eventual" },
      { nome: "Maminha bovina grelhada", gramas: 105, calorias: 125, tipo: "aceitavel" },
      { nome: "Miolo de alcatra grelhado", gramas: 69, calorias: 125, tipo: "aceitavel" },
      { nome: "Músculo bovino cozido", gramas: 71, calorias: 125, tipo: "aceitavel" },
      { nome: "Paleta bovina cozida", gramas: 105, calorias: 125, tipo: "aceitavel" },
      { nome: "Patinho bovino grelhado", gramas: 62, calorias: 125, tipo: "aceitavel" },
      { nome: "Peito bovino cozido", gramas: 100, calorias: 125, tipo: "aceitavel" },
      { nome: "Picanha grelhada", gramas: 69, calorias: 125, tipo: "eventual" },
      { nome: "Patinho cozido", gramas: 61, calorias: 125, tipo: "aceitavel" },
    ]
  },
  {
    categoria: "Aves",
    alimentos: [
      { nome: "Asa de frango, crua", gramas: 123, calorias: 125, tipo: "aceitavel" },
      { nome: "Coração de frango, cru", gramas: 170, calorias: 125, tipo: "eventual" },
      { nome: "Coxa de frango sem pele e sem osso, crua", gramas: 123, calorias: 125, tipo: "aceitavel" },
      { nome: "Fígado de frango, cru", gramas: 123, calorias: 125, tipo: "aceitavel" },
      { nome: "Peito de frango grelhado", gramas: 85, calorias: 125, tipo: "excelente" },
      { nome: "Sobrecoxa crua", gramas: 123, calorias: 125, tipo: "aceitavel" },
      { nome: "Ovo inteiro", gramas: 5, calorias: 125, tipo: "aceitavel" },
      { nome: "Clara de ovo", gramas: 9, calorias: 125, tipo: "excelente" },
      { nome: "Asa de frango, assada", gramas: 85, calorias: 125, tipo: "aceitavel" },
      { nome: "Coração de frango, assado", gramas: 80, calorias: 125, tipo: "eventual" },
      { nome: "Fígado de frango, frito", gramas: 84, calorias: 125, tipo: "aceitavel" },
    ]
  },
  {
    categoria: "Carnes Suínas",
    alimentos: [
      { nome: "Bisteca grelhada", gramas: 76, calorias: 125, tipo: "aceitavel" },
      { nome: "Pernil assado", gramas: 88, calorias: 125, tipo: "aceitavel" },
      { nome: "Costela grelhada", gramas: 76, calorias: 125, tipo: "aceitavel" },
      { nome: "Lombo grelhado", gramas: 88, calorias: 125, tipo: "excelente" },
      { nome: "Toucinho", gramas: 60, calorias: 125, tipo: "eventual" },
      { nome: "Filé grelhado", gramas: 88, calorias: 125, tipo: "excelente" },
    ]
  },
  {
    categoria: "Industrializados",
    alimentos: [
      { nome: "Clara de ovo pasteurizada (ml)", gramas: 320, calorias: 125, tipo: "excelente" },
      { nome: "Whey 80%", gramas: 45, calorias: 125, tipo: "excelente" },
    ]
  }
];

// ==== CARBOIDRATOS ====
const alimentosCarboidratos = [
  {
    categoria: "Substituições Arroz Branco",
    alimentos: [
      { nome: "Aveia em flocos", gramas: 42, calorias: 128, tipo: "excelente" },
      { nome: "Macarrão (Nissin)", gramas: 46, calorias: 128, tipo: "aceitavel" },
      { nome: "Macarrão", gramas: 36, calorias: 128, tipo: "aceitavel" },
      { nome: "Macarrão com ovos", gramas: 37, calorias: 128, tipo: "aceitavel" },
      { nome: "Maisena", gramas: 33, calorias: 128, tipo: "eventual" },
      { nome: "Milho verde enlatado", gramas: 165, calorias: 128, tipo: "aceitavel" },
      { nome: "Pão, trigo, francês", gramas: 48, calorias: 128, tipo: "aceitavel" },
      { nome: "Trigo, farinha", gramas: 38, calorias: 128, tipo: "aceitavel" },
      { nome: "Tapioca de goma", gramas: 35, calorias: 128, tipo: "aceitavel" },
      { nome: "Cuscuz", gramas: 108, calorias: 128, tipo: "aceitavel" },
      { nome: "Pão de hambúrguer", gramas: 58, calorias: 128, tipo: "eventual" },
      { nome: "Pão de forma", gramas: 56, calorias: 128, tipo: "aceitavel" },
      { nome: "Pão de queijo", gramas: 83, calorias: 128, tipo: "eventual" },
      { nome: "Pão integral", gramas: 69, calorias: 128, tipo: "excelente" },
      { nome: "Batata doce, crua", gramas: 102, calorias: 128, tipo: "excelente" },
      { nome: "Batata inglesa, crua", gramas: 187, calorias: 128, tipo: "excelente" },
      { nome: "Inhame, cru", gramas: 122, calorias: 128, tipo: "aceitavel" },
      { nome: "Mandioca, crua", gramas: 78, calorias: 128, tipo: "aceitavel" },
      { nome: "Farinha de mandioca", gramas: 32, calorias: 128, tipo: "eventual" },
      { nome: "Ervilha enlatada", gramas: 200, calorias: 128, tipo: "excelente" },
      { nome: "Feijão carioca, cru", gramas: 45, calorias: 128, tipo: "excelente" },
      { nome: "Feijão preto, cru", gramas: 47, calorias: 128, tipo: "excelente" },
      { nome: "Lentilha crua", gramas: 44, calorias: 128, tipo: "excelente" },
      { nome: "Polvilho doce", gramas: 33, calorias: 128, tipo: "eventual" },
      { nome: "Granola", gramas: 39, calorias: 128, tipo: "eventual" },
      { nome: "Açaí", gramas: 50, calorias: 128, tipo: "eventual" },
      { nome: "Achocolatado em pó", gramas: 31, calorias: 128, tipo: "eventual" },
      { nome: "Açúcar cristal", gramas: 28, calorias: 128, tipo: "eventual" },
      { nome: "Açúcar refinado", gramas: 28, calorias: 128, tipo: "eventual" },
      { nome: "Chocolate ao leite", gramas: 46, calorias: 128, tipo: "eventual" },
      { nome: "Café em pó", gramas: 43, calorias: 128, tipo: "eventual" },
      { nome: "Bolo de milho", gramas: 63, calorias: 128, tipo: "eventual" },
      { nome: "Bolo de chocolate", gramas: 50, calorias: 128, tipo: "eventual" },
      { nome: "Biscoito doce, maisena", gramas: 38, calorias: 128, tipo: "eventual" },
      { nome: "Biscoito recheado com chocolate", gramas: 40, calorias: 128, tipo: "eventual" },
      { nome: "Biscoito recheado com morango", gramas: 40, calorias: 128, tipo: "eventual" },
      { nome: "Biscoito wafer, chocolate", gramas: 42, calorias: 128, tipo: "eventual" },
      { nome: "Biscoito wafer, morango", gramas: 42, calorias: 128, tipo: "eventual" },
      { nome: "Biscoito salgado, cream cracker", gramas: 41, calorias: 128, tipo: "eventual" },
      { nome: "Doce de leite, light", gramas: 55, calorias: 128, tipo: "eventual" },
      { nome: "Geleia de frutas", gramas: 41, calorias: 128, tipo: "eventual" },
      { nome: "Geleia de frutas light", gramas: 61, calorias: 128, tipo: "eventual" },
      { nome: "Bolo comum", gramas: 33, calorias: 128, tipo: "eventual" },
      { nome: "Cereal matinal, milho", gramas: 34, calorias: 128, tipo: "aceitavel" },
      { nome: "Cereal matinal, milho, açúcar", gramas: 32, calorias: 128, tipo: "eventual" },
      { nome: "Farinha láctea", gramas: 36, calorias: 128, tipo: "eventual" },
      { nome: "Arroz, integral", gramas: 121, calorias: 128, tipo: "excelente" },
      { nome: "Leite condensado", gramas: 50, calorias: 128, tipo: "eventual" },
      { nome: "Leite desnatado em pó", gramas: 53, calorias: 128, tipo: "eventual" },
      { nome: "Leite integral em pó", gramas: 72, calorias: 128, tipo: "eventual" },
      { nome: "Nescal cereal", gramas: 37, calorias: 128, tipo: "eventual" },
      { nome: "Pipoca", gramas: 38, calorias: 128, tipo: "aceitavel" },
    ]
  },
  {
    categoria: "Substituições Banana (Frutas)",
    alimentos: [
      { nome: "Banana da terra", gramas: 100, calorias: 128, tipo: "aceitavel" },
      { nome: "Banana maçã", gramas: 155, calorias: 128, tipo: "excelente" },
      { nome: "Banana nanica", gramas: 142, calorias: 128, tipo: "excelente" },
      { nome: "Banana ouro", gramas: 118, calorias: 128, tipo: "excelente" },
      { nome: "Banana prata", gramas: 131, calorias: 128, tipo: "excelente" },
      { nome: "Abacaxi", gramas: 284, calorias: 128, tipo: "excelente" },
      { nome: "Ameixa", gramas: 243, calorias: 128, tipo: "excelente" },
      { nome: "Caju", gramas: 340, calorias: 128, tipo: "excelente" },
      { nome: "Figo", gramas: 340, calorias: 128, tipo: "excelente" },
      { nome: "Figo enlatado em calda", gramas: 68, calorias: 128, tipo: "eventual" },
      { nome: "Goiabada", gramas: 284, calorias: 128, tipo: "eventual" },
      { nome: "Kiwi", gramas: 310, calorias: 128, tipo: "excelente" },
      { nome: "Laranja", gramas: 310, calorias: 128, tipo: "excelente" },
      { nome: "Maçã", gramas: 227, calorias: 128, tipo: "excelente" },
      { nome: "Maracujá", gramas: 284, calorias: 128, tipo: "excelente" },
      { nome: "Melancia", gramas: 425, calorias: 128, tipo: "excelente" },
      { nome: "Tangerina", gramas: 340, calorias: 128, tipo: "excelente" },
      { nome: "Uva", gramas: 243, calorias: 128, tipo: "excelente" },
      { nome: "Açaí", gramas: 60, calorias: 128, tipo: "eventual" },
    ]
  },
  {
    categoria: "Sucos e Polpas",
    alimentos: [
      { nome: "Laranja (suco)", gramas: 378, calorias: 128, tipo: "excelente" },
      { nome: "Limão (suco)", gramas: 486, calorias: 128, tipo: "excelente" },
      { nome: "Tangerina (suco)", gramas: 378, calorias: 128, tipo: "excelente" },
      { nome: "Polpa de morango", gramas: 500, calorias: 128, tipo: "excelente" },
      { nome: "Polpa de acerola", gramas: 680, calorias: 128, tipo: "excelente" },
      { nome: "Polpa de cajá", gramas: 473, calorias: 128, tipo: "excelente" },
      { nome: "Polpa de graviola", gramas: 347, calorias: 128, tipo: "excelente" },
      { nome: "Polpa de mangá", gramas: 227, calorias: 128, tipo: "excelente" },
    ]
  },
  {
    categoria: "Pão Branco Plusvita / Itens Low Fat",
    alimentos: [
      { nome: "Bolo de chocolate", gramas: 45, calorias: 128, tipo: "eventual" },
      { nome: "Bolo comum", gramas: 30, calorias: 128, tipo: "eventual" },
      { nome: "Leite condensado", gramas: 44, calorias: 128, tipo: "eventual" },
      { nome: "Doce de leite light", gramas: 50, calorias: 128, tipo: "eventual" },
      { nome: "Geleia de frutas vermelhas", gramas: 37, calorias: 128, tipo: "eventual" },
      { nome: "Geleias de frutas light", gramas: 55, calorias: 128, tipo: "eventual" },
      { nome: "Cereal matinal milho", gramas: 30, calorias: 128, tipo: "aceitavel" },
      { nome: "Cereal matinal com açúcar", gramas: 29, calorias: 128, tipo: "eventual" },
      { nome: "Farinha láctea", gramas: 33, calorias: 128, tipo: "eventual" },
      { nome: "Iogurte Molico", gramas: 250, calorias: 128, tipo: "excelente" },
      { nome: "Iogurte Activia", gramas: 167, calorias: 128, tipo: "excelente" },
      { nome: "Iogurte Nesfit", gramas: 26, calorias: 128, tipo: "eventual" },
      { nome: "Iogurt Grego", gramas: 48, calorias: 128, tipo: "excelente" },
      { nome: "Iogurte Danio", gramas: 42, calorias: 128, tipo: "excelente" },
      { nome: "Chips de batata doce", gramas: 91, calorias: 128, tipo: "eventual" },
      { nome: "Requeijão zero gordura Danubio", gramas: 91, calorias: 128, tipo: "excelente" },
      { nome: "Iogurt Yopro", gramas: 17, calorias: 128, tipo: "eventual" },
      { nome: "Iogurte Verde Campo", gramas: 44, calorias: 128, tipo: "excelente" },
      { nome: "Queijo cottage", gramas: 16, calorias: 128, tipo: "excelente" },
    ]
  }
];

// ==== GORDURAS ====
const alimentosGorduras = [
  {
    categoria: "Laticínios",
    alimentos: [
      { nome: "Leite integral", gramas: 250, calorias: 150, tipo: "aceitavel" },
      { nome: "Queijo mussarela", gramas: 53, calorias: 150, tipo: "aceitavel" },
      { nome: "Queijo coalho", gramas: 42, calorias: 150, tipo: "aceitavel" },
      { nome: "Queijo de ricota", gramas: 105, calorias: 150, tipo: "excelente" },
      { nome: "Requeijão", gramas: 70, calorias: 150, tipo: "aceitavel" },
    ]
  },
  {
    categoria: "Oleaginosas, Sementes e Derivados",
    alimentos: [
      { nome: "Coco", gramas: 30, calorias: 150, tipo: "excelente" },
      { nome: "Pasta de amendoim sabor chocolate branco", gramas: 15, calorias: 150, tipo: "eventual" },
      { nome: "Semente de linhaça", gramas: 30, calorias: 150, tipo: "excelente" },
      { nome: "Amêndoas", gramas: 20, calorias: 150, tipo: "excelente" },
      { nome: "Azeite", gramas: 10, calorias: 150, tipo: "excelente" },
      { nome: "Castanha-do-pará", gramas: 20, calorias: 150, tipo: "excelente" },
      { nome: "Castanha de caju", gramas: 25, calorias: 150, tipo: "excelente" },
      { nome: "Amendoim", gramas: 26, calorias: 150, tipo: "excelente" },
      { nome: "Abacate", gramas: 157, calorias: 150, tipo: "excelente" },
    ]
  },
  {
    categoria: "Outros",
    alimentos: [
      { nome: "Manteiga Betania", gramas: 17, calorias: 150, tipo: "eventual" },
      { nome: "Margarina Qualy", gramas: 16, calorias: 150, tipo: "eventual" },
      { nome: "Pão de queijo", gramas: 50, calorias: 150, tipo: "aceitavel" },
    ]
  }
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

          {/* PROTEÍNAS */}
          <div>
            <h3 className="text-lg font-semibold mt-4">Equivalentes em proteína por refeição:</h3>
            {alimentosProteicos.map((grupo, idx) => (
              <div key={idx} className="mb-2">
                <h4 className="font-bold mt-3 mb-1 text-blue-700">{grupo.categoria}</h4>
                <div className="space-y-1">
                  {grupo.alimentos.map((item, i) => {
                    const kcalProtPorRefeicao = (result.protein * 4) / result.meals;
                    const numPorcoes = kcalProtPorRefeicao / item.calorias;
                    const totalQuantidade = numPorcoes * item.gramas;
                    const unidade = item.nome.toLowerCase().includes('ovo') ? 'unidades' : 'g';
                    return (
                      <div key={i} className={`border p-2 rounded ${corClasse[item.tipo]}`}>
                        <strong>{item.nome}</strong>: {totalQuantidade.toFixed(0)} {unidade}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CARBOIDRATOS */}
          <div>
            <h3 className="text-lg font-semibold mt-4">Equivalentes em carboidrato por refeição:</h3>
            {alimentosCarboidratos.map((grupo, idx) => (
              <div key={idx} className="mb-2">
                <h4 className="font-bold mt-3 mb-1 text-blue-700">{grupo.categoria}</h4>
                <div className="space-y-1">
                  {grupo.alimentos.map((item, i) => {
                    const kcalCarbPorRefeicao = (result.carbs * 4) / result.meals;
                    const numPorcoes = kcalCarbPorRefeicao / item.calorias;
                    const totalQuantidade = numPorcoes * item.gramas;
                    return (
                      <div key={i} className={`border p-2 rounded ${corClasse[item.tipo]}`}>
                        <strong>{item.nome}</strong>: {totalQuantidade.toFixed(0)} g
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* GORDURAS */}
          <div>
            <h3 className="text-lg font-semibold mt-4">Equivalentes em gordura por refeição:</h3>
            {alimentosGorduras.map((grupo, idx) => (
              <div key={idx} className="mb-2">
                <h4 className="font-bold mt-3 mb-1 text-blue-700">{grupo.categoria}</h4>
                <div className="space-y-1">
                  {grupo.alimentos.map((item, i) => {
                    const kcalFatPorRefeicao = (result.fat * 9) / result.meals;
                    const numPorcoes = kcalFatPorRefeicao / item.calorias;
                    const totalQuantidade = numPorcoes * item.gramas;
                    return (
                      <div key={i} className={`border p-2 rounded ${corClasse[item.tipo]}`}>
                        <strong>{item.nome}</strong>: {totalQuantidade.toFixed(0)} g
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
