document.addEventListener("DOMContentLoaded", function () {
  // Function to update the room booking summary table
  function updateRoomSummaryTable() {
    // Extract data from input fields
    let name = document.getElementById("input-nam").value;
    let mobile = document.getElementById("input-mob").value;
    let email = document.getElementById("input-mail").value;
    let checkin = document.getElementById("input-checkin").value;
    let checkout = document.getElementById("input-checkout").value;
    let adults = parseInt(document.getElementById("input-adults").value);
    let kids = parseInt(document.getElementById("input-nokid").value);
    let singleRooms = parseInt(document.getElementById("SingleRooms").value);
    let doubleRooms = parseInt(document.getElementById("DoubleRooms").value);
    let tripleRooms = parseInt(document.getElementById("TripleRooms").value);
    let extraBed = parseInt(document.getElementById("extrabed").value);
    let meals = parseInt(document.getElementById("Meals").value);
    let wifi = document.getElementById("Wifi").checked;
    let poolView = document.getElementById("pool-view").checked;
    let gardenView = document.getElementById("garden-view").checked;

    // Perform any additional calculations if needed

    // Update the room booking summary table
    document.getElementById("tableName").textContent = name;
    document.getElementById("tableMobile").textContent = mobile;
    document.getElementById("tableEmail").textContent = email;
    document.getElementById("tableDate").textContent = checkin + " to " + checkout;

    // Calculate the number of days
    let checkinDate = new Date(checkin);
    let checkoutDate = new Date(checkout);
    let days = Math.floor((checkoutDate - checkinDate) / (24 * 60 * 60 * 1000));
    document.getElementById("tableDays").textContent = days + " days";

    document.getElementById("tableSingleRooms").textContent = singleRooms;
    document.getElementById("tableDoubleRooms").textContent = doubleRooms;
    document.getElementById("tableTripleRooms").textContent = tripleRooms;
    document.getElementById("tableAdults").textContent = adults;
    document.getElementById("tableKids").textContent = kids;
    document.getElementById("tableExtraBed").textContent = extraBed;
    document.getElementById("tableMeals").textContent = meals;
    document.getElementById("tableWifi").textContent = wifi ? "Yes" : "No";
    document.getElementById("tablePool").textContent = poolView ? "Yes" : "No";
    document.getElementById("tableDardenView").textContent = gardenView ? "Yes" : "No";

    // Calculate and update the hotel booking cost
    let hotelCost = calculateHotelCost(singleRooms, doubleRooms, tripleRooms, adults, kids, extraBed, meals, checkin,checkout);
    document.getElementById("hotelCost").textContent = "Hotel Booking Cost: " + hotelCost + " LKR";

    // Calculate and update the overall booking cost
    updateOverallBookingCost();
  }

  // Function to calculate the hotel booking cost
  function calculateHotelCost(singleRooms, doubleRooms, tripleRooms, adults, kids, extraBed, meals,checkin,checkout) {
    // Customize this function based on your pricing logic
    let singleRoomCost = 25000;
    let doubleRoomCost = 35000;
    let tripleRoomCost = 40000;
    let extraBedCost = 8000;
    let mealsCost = 5000;


    let daysForTheStay = (new Date(checkout) - new Date(checkin)) / (24 * 60 * 60 * 1000);



    let totalCost =
      singleRooms * singleRoomCost * daysForTheStay +
      doubleRooms * doubleRoomCost * daysForTheStay +
      tripleRooms * tripleRoomCost * daysForTheStay +
      extraBed * extraBedCost +
      meals * mealsCost;


    return totalCost;
  }

  // Function to update the adventure booking summary table
  function updateAdventureSummaryTable() {
    // Extract data from adventure form fields
    let localAdults = parseInt(document.getElementById("numlocaladults").value);
    let localKids = parseInt(document.getElementById("numlocalkids").value);
    let foreignAdults = parseInt(document.getElementById("numforeignadults").value);
    let foreignKids = parseInt(document.getElementById("numforeignkids").value);
    let guideForAdult = document.getElementById("AdultguideAdventure").checked;
    let guideForKid = document.getElementById("KidsguideAdventure").checked;

    // Update the adventure booking summary table
    document.getElementById("tableLocalAdult").textContent = localAdults;
    document.getElementById("tableHoursLocalAdult").textContent = localAdults * 1; // Assuming 1 hour for local adults
    document.getElementById("tableLocalKid").textContent = localKids;
    document.getElementById("tableForeignAdult").textContent = foreignAdults;
    document.getElementById("tableForeignKid").textContent = foreignKids;
    document.getElementById("tableGuideAdult").textContent = guideForAdult ? "Yes" : "No";
    document.getElementById("tableGuideKid").textContent = guideForKid ? "Yes" : "No";

    // Calculate and update the adventure booking cost
    let adventureCost = calculateAdventureCost(localAdults, localKids, foreignAdults, foreignKids, guideForAdult, guideForKid);
    document.getElementById("adventureCost").textContent = "Adventure Booking Cost: " + adventureCost + " LKR";

    // Calculate and update the overall booking cost
    updateOverallBookingCost();
  }

  // Function to calculate the adventure booking cost
  function calculateAdventureCost(localAdults, localKids, foreignAdults, foreignKids, guideForAdult, guideForKid) {
    // Customize this function based on your adventure pricing logic
    let localAdultCost = 5000;
    let localKidCost = 2000;
    let foreignAdultCost = 10000;
    let foreignKidCost = 5000;
    let guideForAdultCost = 1000;
    let guideForKidCost = 500;

    let totalCost =
      localAdults * localAdultCost +
      localKids * localKidCost +
      foreignAdults * foreignAdultCost +
      foreignKids * foreignKidCost +
      (guideForAdult ? guideForAdultCost : 0) +
      (guideForKid ? guideForKidCost : 0);

    return totalCost;
  }

  // Function to update the overall booking summary table
  function updateOverallBookingCost() {
    // Get the hotel and adventure costs
    let hotelCost = parseInt(document.getElementById("hotelCost").textContent.split(":")[1].trim());
    let adventureCost = parseInt(document.getElementById("adventureCost").textContent.split(":")[1].trim());

    // Update the total costs
    document.getElementById("hotelTotalCost").textContent = "Hotel Booking Total Cost: " + hotelCost + " LKR";
    document.getElementById("adventureTotalCost").textContent = "Adventure Booking Total Cost: " + adventureCost + " LKR";

    // Calculate and update the overall booking cost
    let overallCost = hotelCost + adventureCost;
    document.getElementById("overAllCost").textContent = "Total Cost: " + overallCost + " LKR";
  }

  // Attach event listeners to relevant form fields
  document.getElementById("input-nam").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("input-mob").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("input-mail").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("input-checkin").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("input-checkout").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("input-adults").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("input-nokid").addEventListener("input", updateRoomSummaryTable);

  document.getElementById("SingleRooms").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("DoubleRooms").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("TripleRooms").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("extrabed").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("Meals").addEventListener("input", updateRoomSummaryTable);
  document.getElementById("Wifi").addEventListener("change", updateRoomSummaryTable);
  document.getElementById("pool-view").addEventListener("change", updateRoomSummaryTable);
  document.getElementById("garden-view").addEventListener("change", updateRoomSummaryTable);

  document.getElementById("numlocaladults").addEventListener("input", updateAdventureSummaryTable);
  document.getElementById("numlocalkids").addEventListener("input", updateAdventureSummaryTable);
  document.getElementById("numforeignadults").addEventListener("input", updateAdventureSummaryTable);
  document.getElementById("numforeignkids").addEventListener("input", updateAdventureSummaryTable);
  document.getElementById("AdultguideAdventure").addEventListener("change", updateAdventureSummaryTable);
  document.getElementById("KidsguideAdventure").addEventListener("change", updateAdventureSummaryTable);
});








document.addEventListener("DOMContentLoaded", function () {
  // ... (Your existing code)

  // Function to add the current booking to favorites
  function addToFavorite() {
    let favoriteBookings = JSON.parse(localStorage.getItem("favoriteBookings")) || [];

      // Extract data from the current booking
      let currentBooking = {
          name: document.getElementById("input-nam").value,
          mobile: document.getElementById("input-mob").value,
          email: document.getElementById("input-mail").value,
          checkin: document.getElementById("input-checkin").value,
          checkout: document.getElementById("input-checkout").value,
          adults: parseInt(document.getElementById("input-adults").value),
          kids: parseInt(document.getElementById("input-nokid").value),
          // ... (Add more details as needed)
      };

      // Add the current booking to the favorites
      favoriteBookings.push(currentBooking);

      // Store the updated favorites in localStorage
      localStorage.setItem("favoriteBookings", JSON.stringify(favoriteBookings));

      // Optionally, provide feedback to the user (e.g., alert or update the UI)
      alert("Booking added to favourites!");
  }

  // Attach the addToFavorite function to the button click event
  document.getElementById("addToFavoriteBtn").addEventListener("click", addToFavorite);
});






document.addEventListener("DOMContentLoaded", function () {
  // ... (Your existing code)


  // Function to apply promo code discount
  function applyPromoCode() {
    let promoCodeInput = document.getElementById("input-promo").value;

      // Check if the entered promo code is valid (e.g., "123")
      if (promoCodeInput === "123") {
          // Get the current hotel cost
          let hotelCost = parseInt(document.getElementById("hotelCost").textContent.split(":")[1].trim());

          // Calculate the discounted cost (5% discount)
          let discountedCost = 0.95 * hotelCost;

          // Update the hotel cost with the discounted amount
          document.getElementById("hotelCost").textContent = "Hotel Booking Cost: " + discountedCost.toFixed(2) + " LKR";

          // Optionally, provide feedback to the user (e.g., alert or update the UI)
          alert("Promo code applied. You get a 5% discount!");
      }

      // Recalculate and update the overall booking cost
      updateOverallBookingCost();
  }

  // Attach the applyPromoCode function to the promo code input change event
  document.getElementById("input-promo").addEventListener("input", applyPromoCode);
});
