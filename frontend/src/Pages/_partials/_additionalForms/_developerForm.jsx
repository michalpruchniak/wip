const DeveloperForm = ({ register, errors }) => {
  return (
    <>
      <div className="form-group mt-3">
        <label htmlFor="ide">
          Środowiska ide<span class="text-danger">*</span>
        </label>
        <input
          id="ide"
          type="string"
          className="form-control"
          {...register("ide", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
        {errors.ide?.type === "required" && (
          <div className="alert alert-danger">
            Pole <i>środowiska ide</i> jest wymagane.
          </div>
        )}
        {errors.ide?.type === "minLength" && (
          <div className="alert alert-danger">
            Minimalna długość pola <i>środowiska ide</i> to 3 znaki.
          </div>
        )}

        {errors.ide?.type === "maxLength" && (
          <div className="alert alert-danger">
            Maksymalna długość pola <i>środowiska ide</i> to 100 znaków.
          </div>
        )}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="programming_languages">
          Języki programowania<span class="text-danger">*</span>
        </label>
        <input
          id="programming_languages"
          type="string"
          className="form-control"
          {...register("programming_languages", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
        {errors.programming_languages?.type === "required" && (
          <div className="alert alert-danger">
            Pole <i>języki programowania</i> jest wymagane.
          </div>
        )}
        {errors.programming_languages?.type === "minLength" && (
          <div className="alert alert-danger">
            Minimalna długość pola <i>języki programowania</i> to 3 znaki.
          </div>
        )}

        {errors.programming_languages?.type === "maxLength" && (
          <div className="alert alert-danger">
            Maksymalna długość pola <i>języki programowania</i> to 100 znaków.
          </div>
        )}
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="mysql"
          {...register("mysql")}
        />
        <label className="form-check-label" htmlFor="mysql">
          Zna MySQL?
        </label>
      </div>
    </>
  );
};

export default DeveloperForm;
