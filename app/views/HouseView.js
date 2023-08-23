export const HouseView = /*html*/ `
<div class="container-fluid">
  <div class="container-fluid">
    <form onsubmit="app.HousesController.createHouse()">
      <h1>List Your Home</h1>
      <div class="form-floating mb-3">
        <input type="number" required class="form-control" name="price" id="price" placeholder="price">
        <label for="price">Price</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" required class="form-control" name="year" id="year" placeholder="year">
        <label for="year">year</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" required class="form-control" name="bedrooms" id="bedrooms" placeholder="bedrooms">
        <label for="bedrooms">bedrooms</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" required class="form-control" name="bathrooms" id="bathrooms" placeholder="bathrooms">
        <label for="bathrooms">bathrooms</label>
      </div>

      <div class="form-floating mb-3">
        <input type="text" required class="form-control" name="imgUrl" id="imgUrl" placeholder="imgUrl">
        <label for="imgUrl">Image URL</label>
      </div>

      <div class="form-floating mb-3">
        <input type="number" required class="form-control" name="sqft" id="sqft" placeholder="sqft">
        <label for="sqft">Square Footage</label>
      </div>

      <div class="form-floating">
          <textarea  required maxLength="144" class="form-control" placeholder="Please Describe Your House" name="description" id="houseDescription"
            style="height: 100px"></textarea>
          <label for="houseDescription">House Description</label>
        </div>

      <button class="btn elevated-3 btn-success m-3" type="submit">List Your Home</button>
    </form>
  </div>
<section class="row" id="houses">
  
</section>
<div>`