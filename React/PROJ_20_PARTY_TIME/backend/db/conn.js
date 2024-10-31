const mongoose = require("mongoose")

async function main() {
  
  try {
    mongoose.set("strictQuery", true)

    await mongoose.connect(
      "mongodb+srv://mariaraquelroriz:MX6m44E1QNAaPzaq@cluster0.qqtki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )

    console.log("Conectado ao banco!")
  } catch (error) {
    console.log(`Erro: ${error}`)
  }
}

module.exports = main