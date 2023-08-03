const PMForm = ({ register, errors }) => {
  return (
    <>
      <div className="form-group mt-3">
        <label htmlFor="methodology">Metodologie prowadzenia projektów</label>
        <input
          id="methodology"
          type="string"
          className="form-control"
          name="methodology"
          {...register("methodology", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
        {errors.methodology?.type === "required" && (
          <div className="alert alert-danger">
            Pole <i>metodologie prowadzenia projektów</i> jest wymagane.
          </div>
        )}
        {errors.methodology?.type === "minLength" && (
          <div className="alert alert-danger">
            Minimalna długość pola <i>metodologie prowadzenia projektów</i> to 3
            znaki.
          </div>
        )}

        {errors.methodology?.type === "maxLength" && (
          <div className="alert alert-danger">
            Maksymalna długość pola <i>metodologie prowadzenia projektów</i> to
            100 znaków.
          </div>
        )}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="pm_raporting_systems">Systemy raportowe</label>
        <input
          id="pm_raporting_systems"
          type="string"
          className="form-control"
          name="pm_raporting_systems"
          {...register("pm_raporting_systems", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
        {errors.pm_raporting_systems?.type === "required" && (
          <div className="alert alert-danger">
            Pole <i>systemy raportujące</i> jest wymagane.
          </div>
        )}
        {errors.pm_raporting_systems?.type === "minLength" && (
          <div className="alert alert-danger">
            Minimalna długość pola <i>systemy raportujące</i> to 3 znaki.
          </div>
        )}

        {errors.pm_raporting_systems?.type === "maxLength" && (
          <div className="alert alert-danger">
            Maksymalna długość pola <i>systemy raportujące</i> to 100 znaków.
          </div>
        )}
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="scrum"
          {...register("scrum")}
        />
        <label className="form-check-label" htmlFor="scrum">
          Zna scrum?
        </label>
      </div>
    </>
  );
};

export default PMForm;
