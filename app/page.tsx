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
    <div className="app">
      <header className="hero">
        <span className="badge">Plan personal</span>
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

      <p className="note intro-note">
        <strong>Structură actuală:</strong> fără toast; omletă dimineață; prânz cu cartofi; paste cu pui
        înainte de sală (în locul celei de-a doua mese cu cartofi); ovăz + ½ scoop ISO Whey după
        antrenament. {dailyTotals.note}
      </p>

      <section aria-labelledby="meals-heading">
        <div className="section-head">
          <h2 id="meals-heading">Mese</h2>
        </div>
        <div className="meals">
          {meals.map((m) => (
            <article key={m.id} className="meal">
              <h3>{m.title}</h3>
              <ul>
                {m.items.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="meta">
                <span>
                  ≈ {m.kcal} kcal · {m.protein} proteine
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="notes-heading">
        <div className="section-head">
          <h2 id="notes-heading">Proteine & carbohidrați</h2>
        </div>
        <div className="notes-stack">
          <p className="note">{wheyNote}</p>
          <p className="note">
            <strong>Cartofi & paste:</strong> {carbNotes}
          </p>
        </div>
      </section>

      <section aria-labelledby="adjust-heading">
        <div className="section-head">
          <h2 id="adjust-heading">Ajustări</h2>
        </div>
        <p className="note">{profile.note}</p>
      </section>

      <section className="shop" aria-labelledby="shop-heading">
        <div className="section-head">
          <h2 id="shop-heading">Listă cumpărături (Lidl + extra)</h2>
        </div>
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
        Deploy pe Vercel — pagină statică. Pe telefon: Adaugă la ecranul principal pentru acces rapid.
      </footer>
    </div>
  );
}
