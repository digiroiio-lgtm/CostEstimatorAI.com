/**
 * HTML/CSS diagram of how an estimate is structured.
 * It shows structure only: no figures, because cost values depend on
 * the project, location and date.
 */
export function EstimateAnatomy() {
  return (
    <figure className="anatomy" aria-label="Structure of a cost estimate">
      <p className="anatomy__title">Anatomy of a cost estimate</p>
      <div className="anatomy__block anatomy__block--direct">
        <p className="anatomy__h">Direct costs</p>
        <ul className="tags">
          <li>Labor</li>
          <li>Materials</li>
          <li>Equipment</li>
          <li>Subcontractors</li>
        </ul>
      </div>
      <div className="anatomy__block anatomy__block--indirect">
        <p className="anatomy__h">Indirect costs</p>
        <ul className="tags">
          <li>Overhead</li>
          <li>Supervision</li>
          <li>Administration</li>
        </ul>
      </div>
      <div className="anatomy__block anatomy__block--risk">
        <p className="anatomy__h">Risk allowance</p>
        <ul className="tags">
          <li>Contingency</li>
          <li>Assumptions</li>
        </ul>
      </div>
      <div className="anatomy__block anatomy__block--total">
        <p>Estimate → budget or decision, after human review</p>
      </div>
      <figcaption className="anatomy__note">
        Structure only. No figures are shown because costs depend on the project, location and date.
      </figcaption>
    </figure>
  );
}
