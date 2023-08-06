const TesterForm = ({ register, errors }) => {
  return (
    <>
      <div className="form-group mt-3">
        <label htmlFor="testing_systems">
          Systemy testujące <span class="text-danger">*</span>
        </label>
        <input
          id="testing_systems"
          type="string"
          className="form-control"
          {...register("testing_systems", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
        {errors.testing_systems?.type === "required" && (
          <div className="alert alert-danger">
            Pole <i>systemy testujące</i> jest wymagane.
          </div>
        )}
        {errors.testing_systems?.type === "minLength" && (
          <div className="alert alert-danger">
            Minimalna długość pola <i>systemy testujące</i> to 3 znaki.
          </div>
        )}

        {errors.testing_systems?.type === "maxLength" && (
          <div className="alert alert-danger">
            Maksymalna długość pola <i>systemy testujące</i> to 100 znaków.
          </div>
        )}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="raporting_systems">
          Systemy raportowe <span class="text-danger">*</span>
        </label>
        <input
          id="raporting_systems"
          type="string"
          className="form-control"
          {...register("raporting_systems", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
        {errors.raporting_systems?.type === "required" && (
          <div className="alert alert-danger">
            Pole <i>systemy raportujące</i> jest wymagane.
          </div>
        )}
        {errors.raporting_systems?.type === "minLength" && (
          <div className="alert alert-danger">
            Minimalna długość pola <i>systemy raportujące</i> to 3 znaki.
          </div>
        )}

        {errors.raporting_systems?.type === "maxLength" && (
          <div className="alert alert-danger">
            Maksymalna długość pola <i>systemy raportujące</i> to 100 znaków.
          </div>
        )}
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="selenium"
          {...register("selenium")}
        />
        <label className="form-check-label" htmlFor="selenium">
          Zna Selenium?
        </label>
      </div>
    </>
  );
};

export default TesterForm;
