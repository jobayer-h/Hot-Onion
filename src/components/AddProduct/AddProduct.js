import React from "react";

const AddProduct = () => {
  return (
    <form class="row g-3">
      <div class="col-md-6">
        <label for="item-name" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control login-input"
          id="item-name"
          name="name"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="price" class="form-label">
          Price
        </label>
        <div className="input-group">
          <span class="input-group-text" id="basic-addon1">
            $
          </span>
          <input
            type="number"
            class="form-control login-input"
            id="price"
            name="price"
            required
          />
        </div>
      </div>

      <div class="col-12">
        <label for="short-drescription" class="form-label">
          Short Drescriptions
        </label>
        <input
          type="text"
          class="form-control login-input"
          id="short-drescription"
          name="info"
          required
        />
      </div>

      <div class="col-12">
        <label for="drescription" class="form-label">
          Drescription
        </label>
        <textarea
          class="form-control login-input"
          id="drescription"
          rows="3"
          name="drescription"
          required
        ></textarea>
      </div>

      <div class="col-md-3">
        <label for="cover-pic" class="form-label">
          Main Photo
        </label>
        <input
          type="file"
          class="form-control login-input"
          id="cover-pic"
          name="photo"
          required
        />
      </div>

      <div class="col-md-3">
        <label for="gallery-pic" class="form-label">
          Gallery Photo
        </label>
        <input
          type="file"
          class="form-control login-input"
          id="gallery-pic"
          name="gallery"
          multiple
        />
      </div>

      <div class="col-md-3">
        <label for="category" class="form-label">
          Category
        </label>
        <select id="category" class="form-select login-input">
          <option selected value="break-first">
            Break-First
          </option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      <div class="col-md-3">
        <label class="form-label">Submit Recquest</label>
        <input type="submit" class="btn btn-success d-block" />
      </div>
    </form>
  );
};

export default AddProduct;
