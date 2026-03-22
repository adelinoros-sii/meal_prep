import {
  carbNotes,
  dailyTotals,
  meals,
  profile,
  shoppingLidl,
  wheyNote,
} from "@/lib/plan";

export default function Home() {
  return (
    <div className="wrap">
      <header>
        <h1>Meal prep — plan zilnic</h1>
        <p>
          {profile.weightKg} kg, {profile.age} ani, sală {profile.trainingPerWeek}×/săptămână. Obiectiv:
          ~{profile.goalKgLoss} kg pierdere grăsime, păstrare masă musculară (deficit moderat, proteine
          sus). {profile.trainingTime}
        </p>
      </header>

      <div className="stats">
        <div className="stat">
          <strong>{dailyTotals.kcal}</strong>
          <span>kcal / zi (estimativ)</span>
        </div>
        <div className="stat">
          <strong>{dailyTotals.proteinG}</strong>
          <span>proteine / zi</span>
        </div>
      </div>

      <p className="note" style={{ marginBottom: "1.5rem" }}>
        <strong>Structură actuală:</strong> fără toast; omletă dimineață; prânz cu cartofi; paste cu pui
        înainte de sală (în locul celei de-a doua mese cu cartofi); ovăz + ½ scoop ISO Whey după
        antrenament. {dailyTotals.note}
      </p>

      <section>
        <h2>Mese</h2>
        {meals.map((m) => (
          <article key={m.id} className="meal">
            <h3>{m.title}</h3>
            <ul>
              {m.items.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="meta">
              ≈ {m.kcal} kcal · {m.protein} proteine
            </div>
          </article>
        ))}
      </section>

      <section>
        <h2>Proteine în ovăz</h2>
        <p className="note">{wheyNote}</p>
        <p className="note" style={{ marginTop: "0.75rem" }}>
          <strong>Cartofi & paste:</strong> {carbNotes}
        </p>
      </section>

      <section>
        <h2>Ajustări</h2>
        <p className="note">{profile.note}</p>
      </section>

      <section className="shop">
        <h2>Listă cumpărături (Lidl + extra)</h2>
        {shoppingLidl.map((g) => (
          <div key={g.category} className="group">
            <h3>{g.category}</h3>
            <ul>
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <footer>
        Deploy pe Vercel — pagină statică, poți salva pe telefon (Add to Home Screen).
      </footer>
    </div>
  );
}
