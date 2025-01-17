
export const getFeatures = (camper) => [
    { icon: "icon-diagram", text: camper.transmission },
    { icon: "icon-petrol", text: camper.engine },
    { icon: "icon-cup", key: "kitchen", text: "Kitchen", active: camper.kitchen },
    { icon: "icon-wind", key: "AC", text: "AC", active: camper.AC },
    { icon: "icon-shower", key: "bathroom", text: "Bathroom", active: camper.bathroom },
    { icon: "icon-tv", key: "TV", text: "TV", active: camper.TV },
    { icon: "icon-radios", key: "radio", text: "Radio", active: camper.radio },
    { icon: "icon-microwave", key: "microwave", text: "Microwave", active: camper.microwave },
    { icon: "icon-fridge", key: "refrigerator", text: "Refrigerator", active: camper.microwave },
    { icon: "icon-water", key: "water", text: "Water", active: camper.water },
    { icon: "icon-gas", key: "gas", text: "Gas", active: camper.gas },
  ];