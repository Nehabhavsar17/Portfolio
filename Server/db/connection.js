const mongoose=require("mongoose");

//mongoose.connect("mongodb+srv://nehabhavsar117:lOeTG6oywIgZgrEl@cluster0.mxxnv.mongodb.net/portfolio")


mongoose
  .connect("mongodb+srv://nehabhavsar117:lOeTG6oywIgZgrEl@cluster0.mxxnv.mongodb.net/portfolio", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
